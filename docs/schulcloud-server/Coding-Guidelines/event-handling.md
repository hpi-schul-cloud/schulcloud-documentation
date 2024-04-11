# Event Handling

Internal Events are used as a mechanism for Dependency Inversion.

If you are implementing an operation in a module that needs to trigger an operation in another module, that is simple if you can simply import a service. However, if that other module already has a dependency on your module, that would lead to a dependency cycle. In this case, you need to inverse one of the dependencies via events.

The main thing you need to think about, is which module should know about which module(s). This is the dependency, and it only ever can point into one direction. As a general rule of thumb, the module that is more specific, or is changing more frequently, or is less central to the functionality of the system, should have the dependency on the other.

In the following example, the course module has a dependency on the user module, but NOT vice versa.

## How to implement Event Handling

consider the following folder structure

``` txt
- users
  - api
  - domain
    - services
    - events
      - user-deleted.event.ts
  - repo
- courses
  - api
  - domain
    - services
    - handlers
      - user-deleted.handler.ts
  - repo
```

each of the modules needs to import the CqrsModule

``` ts
// users.module.ts
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
    imports: [CqrsModule],
    providers: [/* some things here */],
    exports: [/* some things here */],
})
export class GroupModule {}
```

### Defining an Event

the event is in the end simply a class, containing any data required to handle the event

``` ts
// users/domain/events/user-deleted.event.ts
export class UserDeletedEvent {
    id: EntityId

    constructor(id: EntityId) {
        this.id = id
    }
}
```

Make sure to make your event public in the index file of your module

### Sending an Event

``` ts
// users/domain/services/service.ts
import { EventBus } from '@nestjs/cqrs';
import { UserDeletedEvent } from '../events';

@Injectable()
export class Service {
    constructor(private readonly eventBus: EventBus) {}

    public async delete(userId: EntityId): Promise<void> {
        doStuffForDeletion()

        await this.eventBus.publish(new UserDeletedEvent(userId));
    }
}
```

### Recieving an Event

``` ts
// courses/domain/handler/user-deleted.handler.ts
import { UserDeletedEvent } from '@modules/users';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { SomeService } from '../services'

@Injectable()
@EventsHandler(UserDeletedEvent)
export class GroupDeletedHandlerService implements IEventHandler<UserDeletedEvent> {
    constructor(private readonly someService: SomeService) {}

    public async handle(event: GroupDeletedEvent): Promise<void> {
        await someService.doSomeStuff()
    }
}
```
