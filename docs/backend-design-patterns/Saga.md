# Saga Module Usage Guide

The **Saga Module** provides a pattern for executing cross-module workflows (scripts) in a coordinated and type-safe manner. It allows modules to register steps that can be orchestrated by sagas to perform complex operations that span multiple domain boundaries.

## Overview

The Saga pattern is used when you need to:

- Execute operations across multiple modules in a specific order
- Maintain type safety for parameters and results across module boundaries
- Coordinate complex workflows like user deletion or room copying

## Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         SagaService                                 │
│  (Public API: registerStep(), executeSaga())                        │
└─────────────────┬───────────────────────────────────┬───────────────┘
                  │                                   │
                  ▼                                   ▼
┌─────────────────────────────┐     ┌─────────────────────────────────┐
│   SagaStepRegistryService   │     │      SagaRegistryService        │
│   (stores module steps)     │     │      (stores saga instances)    │
└─────────────────────────────┘     └─────────────────────────────────┘
                  ▲                                   ▲
                  │                                   │
    ┌─────────────┴─────────────┐       ┌────────────┴────────────┐
    │    Module SagaSteps       │       │         Sagas           │
    │  (DeleteUserAccountData,  │       │  (UserDeletionSaga,     │
    │   CopyRoomStep, etc.)     │       │   RoomCopySaga, etc.)   │
    └───────────────────────────┘       └─────────────────────────┘
```

## Core Concepts

### 1. SagaStep

A `SagaStep` is a unit of work that a module provides. It extends the abstract `SagaStep<T>` class and implements the `execute` method.

```typescript
export abstract class SagaStep<T extends keyof StepType> {
  constructor(public readonly name: T) {}
  public abstract execute(params: StepType[T]['params']): Promise<StepType[T]['result']>;
}
```

### 2. Saga

A `Saga` orchestrates multiple steps across modules. It extends the abstract `Saga<T>` class and implements the `execute` method.

```typescript
export abstract class Saga<T extends keyof SagaType> {
  constructor(public readonly name: T) {}
  public abstract execute(params: SagaType[T]['params']): Promise<SagaType[T]['result']>;
}
```

### 3. Type Definitions

All step and saga types are defined in centralized type files for type safety:

**StepType** (`type/saga-step-type.ts`) - Defines all available step signatures:

```typescript
export interface StepType {
  deleteUserData: { params: { userId: EntityId }; result: StepReport };
  copyRoom: { params: { userId: EntityId; roomId: EntityId; newName?: string }; result: { id: EntityId; name: string } };
  copyRoomBoards: { params: { userId: EntityId; sourceRoomId: EntityId; targetRoomId: EntityId }; result: {...}[] };
  copyRoomContent: { params: { sourceRoomId: EntityId; targetRoomId: EntityId; boardMappings: Map<EntityId, EntityId> }; result: void };
}
```

**SagaType** (`type/saga-type.ts`) - Defines all available saga signatures:

```typescript
export interface SagaType {
  userDeletion: { params: { userId: EntityId }; result: StepReport[] };
  roomCopy: { params: { userId: EntityId; roomId: EntityId; newName?: string }; result: { roomCopied: {...}; boardsCopied: {...}[] } };
}
```

**ModuleName** (`type/module-name.ts`) - Defines all module identifiers:

```typescript
export const ModuleName = {
  ACCOUNT: 'account',
  BOARD: 'board',
  ROOM: 'room',
  // ... more modules
} as const;
```

---

## Usage

### Step 1: Define Step Type (if new)

Add your step type to `type/saga-step-type.ts`:

```typescript
export interface StepType {
  // existing steps...
  
  myNewStep: {
    params: { someId: EntityId; option?: string };
    result: { success: boolean; data: SomeData };
  };
}
```

### Step 2: Create a SagaStep in Your Module

Create a step class in your module's `saga/` folder:

```typescript
// apps/server/src/modules/your-module/saga/my-step.step.ts

import { Injectable } from '@nestjs/common';
import { ModuleName, SagaService, SagaStep } from '@modules/saga';
import { YourService } from '../domain';

@Injectable()
export class MyStep extends SagaStep<'myNewStep'> {
  private readonly moduleName = ModuleName.YOUR_MODULE;

  constructor(
    private readonly sagaService: SagaService,
    private readonly yourService: YourService
  ) {
    super('myNewStep'); // Must match the key in StepType
    this.sagaService.registerStep(this.moduleName, this);
  }

  public async execute(params: { someId: EntityId; option?: string }): Promise<{ success: boolean; data: SomeData }> {
    const result = await this.yourService.doSomething(params.someId, params.option);
    return { success: true, data: result };
  }
}
```

### Step 3: Register Step as Provider

Add your step to your module's providers:

```typescript
// your-module.module.ts

@Module({
  imports: [SagaModule],
  providers: [MyStep, YourService],
})
export class YourModule {}
```

### Step 4: Define Saga Type (if new)

Add your saga type to `type/saga-type.ts`:

```typescript
export interface SagaType {
  // existing sagas...
  
  mySaga: {
    params: { userId: EntityId; targetId: EntityId };
    result: { completed: boolean; reports: SomeReport[] };
  };
}
```

### Step 5: Create a Saga

Create a saga class in `modules/saga/impl/`:

```typescript
// apps/server/src/modules/saga/impl/my.saga.ts

import { Injectable } from '@nestjs/common';
import { SagaRegistryService, SagaStepRegistryService } from '../service';
import { ModuleName, Saga } from '../type';

@Injectable()
export class MySaga extends Saga<'mySaga'> {
  constructor(
    private readonly stepRegistry: SagaStepRegistryService,
    private readonly sagaRegistry: SagaRegistryService
  ) {
    super('mySaga');
    this.sagaRegistry.registerSaga(this);
  }

  public async execute(params: { userId: EntityId; targetId: EntityId }): Promise<{ completed: boolean; reports: SomeReport[] }> {
    // Check all required steps are registered
    this.stepRegistry.checkStep(ModuleName.MODULE_A, 'stepA');
    this.stepRegistry.checkStep(ModuleName.MODULE_B, 'stepB');

    // Execute steps in order
    const resultA = await this.stepRegistry.executeStep(ModuleName.MODULE_A, 'stepA', { userId: params.userId });
    const resultB = await this.stepRegistry.executeStep(ModuleName.MODULE_B, 'stepB', { targetId: params.targetId });

    return { completed: true, reports: [resultA, resultB] };
  }
}
```

### Step 6: Register Saga in SagaModule

Add your saga to the SagaModule providers:

```typescript
// saga.module.ts

@Module({
  providers: [SagaStepRegistryService, SagaRegistryService, SagaService, UserDeletionSaga, RoomCopySaga, MySaga],
  exports: [SagaService],
})
export class SagaModule {}
```

### Step 7: Execute the Saga

From any module that imports `SagaModule`:

```typescript
@Injectable()
export class SomeUseCase {
  constructor(private readonly sagaService: SagaService) {}

  public async doWork(userId: EntityId, targetId: EntityId): Promise<void> {
    const result = await this.sagaService.executeSaga('mySaga', { userId, targetId });
    // Handle result...
  }
}
```

---

## Examples

### Example 1: UserDeletionSaga

The `UserDeletionSaga` orchestrates the deletion of user data across all modules that store user-related data.

**Saga Definition** ([user-deletion.saga.ts](impl/user-deletion.saga.ts)):

```typescript
export const UserDeletionSagaExecutionOrder: ModuleName[] = [
  ModuleName.ACCOUNT,
  ModuleName.MEDIA_BOARD,
  ModuleName.CLASS,
  ModuleName.COURSE,
  // ... more modules
  ModuleName.ROOM,
];

@Injectable()
export class UserDeletionSaga extends Saga<'userDeletion'> {
  public async execute(params: { userId: EntityId }): Promise<StepReport[]> {
    const moduleNames = UserDeletionSagaExecutionOrder;
    
    // Check all steps are registered
    this.checkAllStepsRegistered([...moduleNames, ModuleName.USER]);

    // Execute steps in parallel (except USER which runs last)
    const results = await Promise.allSettled(
      moduleNames.map((moduleName) =>
        this.stepRegistry.executeStep(moduleName, 'deleteUserData', { userId: params.userId })
      )
    );

    // Handle failures...
    
    // Execute USER step last
    const userStepResult = await this.stepRegistry.executeStep(ModuleName.USER, 'deleteUserData', {
      userId: params.userId,
    });

    return successReports;
  }
}
```

**Step Implementation** (in Account module):

```typescript
// apps/server/src/modules/account/saga/delete-user-account-data.step.ts

@Injectable()
export class DeleteUserAccountDataStep extends SagaStep<'deleteUserData'> {
  private readonly moduleName = ModuleName.ACCOUNT;

  constructor(
    private readonly sagaService: SagaService,
    private readonly accountService: AccountService,
    private readonly logger: Logger
  ) {
    super('deleteUserData');
    this.sagaService.registerStep(this.moduleName, this);
  }

  public async execute(params: { userId: EntityId }): Promise<StepReport> {
    const deletedAccounts = await this.accountService.deleteByUserId(params.userId);
    
    return StepReportBuilder.build(this.moduleName, [
      StepOperationReportBuilder.build(StepOperationType.DELETE, deletedAccounts.length, deletedAccounts)
    ]);
  }
}
```

**Usage** (in Deletion module):

```typescript
// apps/server/src/modules/deletion/domain/service/deletion-execution.service.ts

const reports = await this.sagaService.executeSaga('userDeletion', {
  userId: deletionRequest.targetRefId,
});
```

---

### Example 2: RoomCopySaga

The `RoomCopySaga` orchestrates copying a room and its associated boards.

**Saga Definition** ([room-copy.saga.ts](impl/room-copy.saga.ts)):

```typescript
@Injectable()
export class RoomCopySaga extends Saga<'roomCopy'> {
  public async execute(params: {
    userId: EntityId;
    roomId: EntityId;
    newName?: string;
  }): Promise<{ roomCopied: { id: EntityId; name: string }; boardsCopied: { id: EntityId; title: string }[] }> {
    
    // Check required steps exist
    this.stepRegistry.checkStep(ModuleName.ROOM, 'copyRoom');
    this.stepRegistry.checkStep(ModuleName.BOARD, 'copyRoomBoards');

    // Step 1: Copy the room
    const copyRoomResult = await this.stepRegistry.executeStep(ModuleName.ROOM, 'copyRoom', {
      userId,
      roomId,
      newName,
    });

    // Step 2: Copy boards (depends on step 1 result)
    const copyRoomBoardsResult = await this.stepRegistry.executeStep(ModuleName.BOARD, 'copyRoomBoards', {
      userId,
      sourceRoomId: roomId,
      targetRoomId: copyRoomResult.id,
    });

    // Step 3: Copy room content with board mappings
    const boardMappings = new Map<EntityId, EntityId>();
    for (const board of copyRoomBoardsResult) {
      boardMappings.set(board.originalId, board.copyId);
    }

    await this.stepRegistry.executeStep(ModuleName.ROOM, 'copyRoomContent', {
      sourceRoomId: roomId,
      targetRoomId: copyRoomResult.id,
      boardMappings,
    });

    return { roomCopied: copyRoomResult, boardsCopied: copyRoomBoardsResult };
  }
}
```

**Step Implementations** (in Room module):

```typescript
// apps/server/src/modules/room/api/saga/copy-room.step.ts

@Injectable()
export class CopyRoomStep extends SagaStep<'copyRoom'> {
  constructor(
    private readonly sagaService: SagaService,
    private readonly roomService: RoomService,
    // ... other dependencies
  ) {
    super('copyRoom');
    this.sagaService.registerStep(ModuleName.ROOM, this);
  }

  public async execute(params: { userId: EntityId; roomId: EntityId; newName?: string }): Promise<{ id: EntityId; name: string }> {
    const roomCopied = await this.copyRoom(params.userId, params.roomId, params.newName);
    return roomCopied;
  }
}
```

```typescript
// apps/server/src/modules/room/api/saga/copy-room-content.step.ts

@Injectable()
export class CopyRoomContentStep extends SagaStep<'copyRoomContent'> {
  constructor(
    private readonly sagaService: SagaService,
    private readonly roomBoardService: RoomBoardService,
  ) {
    super('copyRoomContent');
    this.sagaService.registerStep(ModuleName.ROOM, this);
  }

  public async execute(params: {
    sourceRoomId: EntityId;
    targetRoomId: EntityId;
    boardMappings: Map<EntityId, EntityId>;
  }): Promise<void> {
    await this.roomBoardService.copyRoomContent(params.sourceRoomId, params.targetRoomId, params.boardMappings);
  }
}
```

**Usage** (in Room module):

```typescript
// apps/server/src/modules/room/api/room-copy.uc.ts

const { roomCopied, boardsCopied } = await this.sagaService.executeSaga('roomCopy', { userId, roomId });
```

---

## Key Differences Between Examples

| Aspect | UserDeletionSaga | RoomCopySaga |
|--------|------------------|--------------|
| **Execution Pattern** | Parallel (most steps) | Sequential (step dependencies) |
| **Step Type** | Single type (`deleteUserData`) | Multiple types (`copyRoom`, `copyRoomBoards`, `copyRoomContent`) |
| **Result** | Aggregated reports | Composed result object |
| **Error Handling** | Collect all failures, throw aggregated error | Fail fast on first error |
| **Data Flow** | Independent (only userId) | Chained (each step uses previous results) |

---

## API Reference

### SagaService

The main entry point for working with sagas.

```typescript
class SagaService {
  // Register a step from a module
  registerStep<T extends keyof StepType>(moduleName: ModuleName, step: SagaStep<T>): void;
  
  // Execute a saga by name
  executeSaga<T extends keyof SagaType>(name: T, params: SagaType[T]['params']): Promise<SagaType[T]['result']>;
}
```

### SagaStepRegistryService

Internal service for managing step registration and execution.

```typescript
class SagaStepRegistryService {
  registerStep<T extends keyof StepType>(moduleName: ModuleName, step: SagaStep<T>): void;
  hasStep(moduleName: ModuleName, name: keyof StepType): boolean;
  checkStep(moduleName: ModuleName, name: keyof StepType): void; // throws if not registered
  executeStep<T extends keyof StepType>(moduleName: ModuleName, name: T, params: StepType[T]['params']): Promise<StepType[T]['result']>;
}
```

---

## Best Practices

1. **Type Safety First**: Always define types in `StepType` and `SagaType` before implementing steps and sagas.

2. **Self-Registration**: Steps register themselves in the constructor, ensuring they are available when the module is loaded.

3. **Check Before Execute**: Use `checkStep()` at the beginning of saga execution to fail fast if required steps are missing.

4. **Single Responsibility**: Each step should handle one specific operation within its module.

5. **Error Handling**: Consider whether your saga should fail fast or collect all errors depending on the use case.

6. **Reporting**: For deletion operations, use `StepReport` and `StepOperationReport` to provide detailed feedback.

7. **Module Isolation**: Steps should only use services from their own module. Cross-module communication happens through the saga orchestration.

---

## File Structure

```
apps/server/src/modules/saga/
├── impl/                           # Saga implementations
│   ├── index.ts
│   ├── room-copy.saga.ts
│   └── user-deletion.saga.ts
├── loggable/                       # Logging utilities
├── service/                        # Core services
│   ├── index.ts
│   ├── saga-registry.service.ts
│   ├── saga-step-registry.service.ts
│   └── saga.service.ts
├── type/                           # Type definitions
│   ├── index.ts
│   ├── module-name.ts
│   ├── report.ts
│   ├── saga-step-type.ts
│   ├── saga-step.ts
│   ├── saga-type.ts
│   └── saga.ts
├── index.ts                        # Public exports
├── saga.module.ts
```

---

## Troubleshooting

### "Step X in module Y is not registered"

This error occurs when a saga tries to execute a step that hasn't been registered. Ensure:

1. The step class is properly decorated with `@Injectable()`
2. The step is added to the module's providers
3. The module is imported by the application
4. The step calls `this.sagaService.registerStep()` in its constructor

### "Saga X is not registered"

This error occurs when trying to execute an unregistered saga. Ensure:

1. The saga class is properly decorated with `@Injectable()`
2. The saga is added to `SagaModule` providers
3. The saga calls `this.sagaRegistry.registerSaga(this)` in its constructor
