# Implementation and usage of modules, submodule and barrel files in our project

In this guide, we'll cover how to use modules, submodules and barrel files in our project. These concepts help you organize your code into separate files and directories, making it easier to manage and maintain.

## Modules and Submodules

In our project, modules are a way to create separate scopes. This means that interfaces, use cases, services, etc., declared in a module are not visible outside the module unless they are explicitly exported using the `export` keyword. To import a module, you use the `import` keyword followed by the module name. Here's an example:

```typescript
import { ModuleName } from '@modules/module-name';
```

Submodules are modules that are part of a larger module. They should be used within the main module. If it is necessary to use parts of the submodule outside the main module, the main module should export this via its barrel file(index.ts):


```typescript
// @modules/module-name/index.ts
export { SubmoduleServiceName } from './submodule-name/service.ts';
```

## Barrel Files

Barrel files are a way to rollup exports from several modules into a single convenient module. The barrel itself is a module file that re-exports selected exports of other modules.

If you have several related modules in a directory, you can create a barrel to re-export all of their exports. This allows other modules to import everything from the barrel instead of having to import things individually from each module.

Here's an example of a barrel file:

```typescript
// @modules/module-name/index.ts
export { PublicService } from './services/public-service.ts';
export * from './interfaces';
export * from './submodule-name/interfaces';
```

And here's how you can import from the barrel:

```typescript
// @modules/other-module-name/service.ts
import { PublicService, InterfaceOfModule, InterfaceOfSubmodule } from '@modules/module-name';
```

## Handling Circular Dependencies

Circular dependencies occur when Module A depends on Module B, and Module B also depends on Module A. This can lead to unexpected behavior and hard-to-diagnose bugs.

Here are some strategies to handle circular dependencies:

1. **Refactor Your Code**: The best way to handle circular dependencies is to refactor your code to remove them. This might involve moving some code to a new module to break the dependency cycle.

```typescript
// @modules/moduleC/service.ts
import { PublicService, InterfaceOfModule, InterfaceOfSubmodule } from '@modules/moduleA';
import { PublicService, InterfaceOfModule, InterfaceOfSubmodule } from '@modules/moduleB';
```

2. **Use Interfaces**: If the circular dependency is due to types, you can use interfaces and type-only imports to break the cycle.

```typescript
// @modules/moduleC/service.ts
import { type PublicService } from '@modules/moduleA';
import { type PublicService } from '@modules/moduleB';
```

Remember, circular dependencies are usually a sign of tightly coupled code and can lead to maintenance issues down the line. It's best to refactor your code to avoid them if possible.

