# Event Mechanism

This document describes the event-based communication mechanism used in the schulcloud-server to decouple modules and handle cross-cutting concerns.

## Overview

We use the NestJS CQRS module (`@nestjs/cqrs`) to implement a publish-subscribe pattern for events. This allows modules to communicate without direct dependencies, which is essential for:

- **Cross-module operations**: When a change in one module needs to trigger actions in other modules (e.g., user changes school → update classes, courses, teams)
- **Database lifecycle hooks**: Reacting to entity changes via MikroORM EventSubscribers
- **Decoupled architecture**: Modules can react to events without knowing about each other

## Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              Event Flow                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────────────┐         ┌──────────────┐         ┌──────────────────┐ │
│  │  Event Source    │         │   EventBus   │         │  Event Handler   │ │
│  │                  │         │              │         │                  │ │
│  │ - MikroORM       │ publish │  @nestjs/    │ handle  │ @EventsHandler() │ │
│  │   EventSubscriber├────────►│    cqrs      ├────────►│                  │ │
│  │ - Service        │         │              │         │ IEventHandler    │ │
│  │ - UseCase        │         │              │         │                  │ │
│  └──────────────────┘         └──────────────┘         └──────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Components

### 1. Event Class

A simple class that carries the event data. Events are defined in the `domain/events/` folder of the module that owns the event.

**Naming Convention**: `<Subject><Action>Event` (e.g., `UserChangedSchoolEvent`, `GroupDeletedEvent`)

**Example** (`user/domain/events/user-changed-school.event.ts`):

```typescript
import { EntityId } from '@shared/domain/types';

export class UserChangedSchoolEvent {
  constructor(
    public readonly userId: EntityId,
    public readonly oldSchoolId: EntityId
  ) {}
}
```

**Alternative pattern** with constructor props object:

```typescript
export class SystemDeletedEvent {
  schoolId: EntityId;
  system: System;

  constructor(props: SystemDeletedEvent) {
    this.schoolId = props.schoolId;
    this.system = props.system;
  }
}
```

### 2. Event Publisher

Events are published via the `EventBus` from `@nestjs/cqrs`. There are two common patterns:

#### Pattern A: Publishing from Services/UseCases

Use this when you want explicit control over when events are published.

**Example** (`group/service/group.service.ts`):

```typescript
import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { GroupDeletedEvent } from '../domain/event/group-deleted.event';

@Injectable()
export class GroupService {
  constructor(
    private readonly groupRepo: GroupRepo,
    private readonly eventBus: EventBus
  ) {}

  public async delete(group: Group): Promise<void> {
    await this.groupRepo.delete(group);
    await this.eventBus.publish(new GroupDeletedEvent(group));
  }
}
```

#### Pattern B: Publishing from MikroORM EventSubscriber

Use this when you want to automatically publish events based on entity lifecycle changes (create, update, delete). This is useful for detecting changes that happen through the ORM without explicit service calls.

**Example** (`user/repo/user-event-subscriber.ts`):

```typescript
import { Injectable } from '@nestjs/common';
import { EntityManager, EntityName, EventArgs, EventSubscriber } from '@mikro-orm/core';
import { EventBus } from '@nestjs/cqrs';
import { User } from './user.entity';
import { UserChangedSchoolEvent } from '../domain/events/user-changed-school.event';

@Injectable()
export class UserEventSubscriber implements EventSubscriber<User> {
  constructor(
    private readonly em: EntityManager,
    private readonly eventBus: EventBus
  ) {
    // Register this subscriber with MikroORM
    em.getEventManager().registerSubscriber(this);
  }

  public getSubscribedEntities(): EntityName<User>[] {
    return [User];
  }

  public afterUpdate(args: EventArgs<User>): void {
    const { changeSet } = args;
    if (changeSet) {
      const oldSchool = changeSet.originalEntity?.school;
      const newSchool = changeSet.payload.school;
      if (oldSchool instanceof ObjectId && newSchool instanceof ObjectId && !oldSchool.equals(newSchool)) {
        this.eventBus.publish(new UserChangedSchoolEvent(args.entity.id, oldSchool.toHexString()));
      }
    }
  }
}
```

**Key points**:
- Use `@Injectable()` decorator
- Implement `EventSubscriber<T>` interface from `@mikro-orm/core`
- Register the subscriber in the constructor via `em.getEventManager().registerSubscriber(this)`
- Use MikroORM lifecycle hooks: `afterCreate`, `afterUpdate`, `afterDelete`, etc.
- Access the `changeSet` to detect what changed

### 3. Event Handler

Event handlers react to published events. They are defined in consuming modules.

**Naming Convention**: `<Subject><Action>HandlerService` or `<Subject><Action>Handler`

**Example** (`class/service/user-changed-school-handler.service.ts`):

```typescript
import { MikroORM, EnsureRequestContext } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserChangedSchoolEvent } from '../../user/domain/events/user-changed-school.event';
import { ClassesRepo } from '../repo';

@Injectable()
@EventsHandler(UserChangedSchoolEvent)
export class UserChangedSchoolHandlerService implements IEventHandler<UserChangedSchoolEvent> {
  constructor(
    private readonly classesRepo: ClassesRepo,
    private readonly orm: MikroORM
  ) {}

  @EnsureRequestContext()
  public async handle(event: UserChangedSchoolEvent): Promise<void> {
    const classes = await this.classesRepo.findAllByUserId(event.userId);
    await this.classesRepo.removeUserReference(
      event.userId,
      classes.map((c) => c.id)
    );
  }
}
```

**Key points**:
- Use both `@Injectable()` and `@EventsHandler(EventClass)` decorators
- Implement `IEventHandler<EventClass>` interface
- Use `@EnsureRequestContext()` decorator when doing database operations to ensure MikroORM context is available and isolated
- Register the handler as a provider in the module

## Module Setup

### Publishing Module

The module that publishes events must:
1. Import `CqrsModule`
2. Register the EventSubscriber (if using MikroORM hooks) as a provider

```typescript
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserEventSubscriber } from './repo/user-event-subscriber';

@Module({
  imports: [CqrsModule],
  providers: [UserEventSubscriber],
})
export class UserModule {}
```

### Consuming Module

The module that handles events must:
1. Register the handler service as a provider (CqrsModule import is NOT required for handlers)

```typescript
import { Module } from '@nestjs/common';
import { UserChangedSchoolHandlerService } from './service/user-changed-school-handler.service';

@Module({
  providers: [UserChangedSchoolHandlerService],
})
export class ClassModule {}
```

## Current Events in the System

| Event | Published By | Handlers |
|-------|--------------|----------|
| `UserChangedSchoolEvent` | `UserEventSubscriber` (afterUpdate) | `ClassModule`, `CourseModule`, `TaskModule`, `TeamModule`, `GroupModule` |
| `GroupDeletedEvent` | `GroupService.delete()` | `CourseModule` (GroupDeletedHandlerService) |
| `SystemDeletedEvent` | `SystemUc` | `SchoolModule` (SystemDeletedHandler) |
| `RoomBoardCreatedEvent` | `BoardNodeEventSubscriber` (afterCreate) | `RoomModule` (RoomBoardCreatedHandler) |
| `RoomBoardDeletedEvent` | `BoardNodeEventSubscriber` (afterDelete) | `RoomModule` (RoomBoardDeletedHandler) |
| `RoomDeletedEvent` | `RoomService.deleteRoom()` | `RoomModule` (RoomInvitationLinkService) |
| `ContextExternalToolDeletedEvent` | `CommonToolDeleteService` | `BoardModule` (ContextExternalToolDeletedEventHandlerService) |

## Guidelines

### When to Use Events

**Use events when**:
- Multiple modules need to react to a change in one module
- You want to decouple the source of change from its effects
- The action should happen automatically when data changes (MikroORM hooks)

**Don't use events when**:
- The operation is within a single module (use direct service calls)
- You need synchronous, transactional behavior
- The dependency is simple and unidirectional

### Event Ownership

- **Event class**: Owned by the module where the action originates (e.g., `UserChangedSchoolEvent` is in `user` module)
- **Event handlers**: Owned by the modules that need to react (e.g., `ClassModule` has its own handler)

### Testing

**Testing EventSubscribers**:

```typescript
describe(UserEventSubscriber.name, () => {
  let em: EntityManager;
  let eventBus: DeepMocked<EventBus>;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [MongoMemoryDatabaseModule.forRoot({ entities: [User] })],
      providers: [
        UserEventSubscriber,
        { provide: EventBus, useValue: createMock<EventBus>() },
      ],
    }).compile();
    
    em = module.get(EntityManager);
    eventBus = module.get(EventBus);
  });

  it('should publish event when user school changes', async () => {
    const user = userFactory.build();
    user.school = newSchool;
    await em.flush();
    
    expect(eventBus.publish).toHaveBeenCalledWith(
      expect.objectContaining({ userId: user.id })
    );
  });
});
```

**Testing Event Handlers**:

```typescript
describe(UserChangedSchoolHandlerService.name, () => {
  it('should remove user from classes', async () => {
    const event = new UserChangedSchoolEvent(userId, 'oldSchoolId');
    
    await handler.handle(event);
    
    expect(classesRepo.removeUserReference).toHaveBeenCalledWith(userId, classIds);
  });
});
```

## File Structure (Example)

```
modules/
  user/
    domain/
      events/
        user-changed-school.event.ts    # Event definition
        index.ts                        # Export events
    repo/
      user-event-subscriber.ts          # MikroORM hook → publishes event
      user-event-subscriber.spec.ts
  class/
    service/
      user-changed-school-handler.service.ts     # Event handler
      user-changed-school-handler.service.spec.ts
```

## Related Documentation

- [NestJS CQRS Module](https://docs.nestjs.com/recipes/cqrs)
- [MikroORM Event Subscribers](https://mikro-orm.io/docs/events)
