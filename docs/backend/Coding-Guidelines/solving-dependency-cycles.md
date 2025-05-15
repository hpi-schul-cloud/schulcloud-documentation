# Solving Dependency Cycles

A dependency Cycle occurs, whenever two modules or files have mutual dependencies on each other.

NestJS employs a mechanism to automatically solve some dependency cycles, but breaks down at a certain number. This often leads to errors that are very hard to debug and find the cause for. Therefore, its important to eliminate all potential dependency cycles before they can cause issues during development.

**No matter the circumstance, between any two files or modules, only one may depend on (know about, import) the other.**

In the following, we will look at a simplified example, and discuss common strategies on how to resolve the cycle.

```typescript
// A.ts
import { B } from './b';

export class A {
	constructor(private readonly b: B) {}

	public someFunctionOnA(): void {
		console.log('Hello from A');
	}

	public someFunctionCallingB(): void {
		this.b.someFunctionOnB();
	}
}
```

```typescript
// B.ts
import { A } from './a';

export class B {
	constructor(private readonly a: A) {}

	public someFunctionOnB(): void {
		console.log('Hello from B');
	}

	public someFunctionCallingA(): void {
		this.a.someFunctionOnA();
	}
}
```

Note that at the top of each file, the other file is being imported. This is a very simple dependency cycle.

## Extracting a module

One of the easiest ways to resolve a cycle, is to recognise a part in one of the modules that is needed by both, but can be logically seperated into its own file or module. In this case, lets assume that `someFunctionOnA` contains logic that both `A` and `B` need, but at closer inspection shows to not be dependent on any other part of `A`. When this is the case, we can extract it from `A`, creating a new Module `C`, that both `A` and `B` will import.

```typescript
// A.ts
import { B } from './b';
import { C } from './c';

export class A {
	constructor(private readonly b: B, private readonly c: C) {}

	public someFunctionOnA(): void {
		this.c.someFunctionOnC();
	}

	public someFunctionCallingB(): void {
		this.b.someFunctionOnB();
	}
}
```

```typescript
// B.ts
import { C } from './c';

export class B {
	constructor(private readonly c: C) {}

	public someFunctionOnB(): void {
		console.log('Hello from B');
	}

	public someFunctionCallingA(): void {
		this.c.someFunctionOnC();
	}
}
```

```typescript
// C.ts
export class C {
	public someFunctionOnC(): void {
		console.log('Hello from A');
	}
}
```

However, often times we dont get so lucky as to find the offending part of A to be independent of the rest. In that case, we have to invert one of the dependencies.

## Dependency Inversion

Dependency Inversion, also knows as inversion of control is a technique that allows the called module to depend on the calling module, instead of the other way around.

This allows developers and architects to freely choose the direction of a dependency, by inverting any dependencies that are pointing the wrong way. This is useful both to avoid cycles, as well as to ensure changes in volatile modules do not force stable modules to change, by ensuring that volatile modules depend on stable modules, and not the other way around. It is also commonly used in architecture patterns like the onion architecture, which stipulate that all dependencies shall point from the outer layers of the architecture, to the inner layers.

For our example, lets assume that `A` shall be allowed to depend on (know about) `B`, but `B` shall not be allowed to know `A`.

The easiest and most common way to invert a dependency is by introducing an interface. In this case, `B` would define an interface describing what requirements it has for its would-be-requirement. Then it no longer needs to import `A`, but simply expect to be passed any object that satisfies the defined interface.
`A` On the other hand, being allowed to know about `B`, also knows about the interface, and can implement it.

Note that at runtime, `B` will be given `A` and call its functions directly. However, it will not *know* that the thing its operating on is `A`. This is an important distinction. We assume that the system has some kind of "main function", or in our case the dependency injection system, wich is responsible to correctly assemble all parts of the system, and will ensure during startup that all modules have all their dependencies satisfied.

```typescript
// A.ts
import { B, WhatBNeeds } from './b';

export class A implements WhatBNeeds {
	constructor(private readonly b: B) {}

	public someFunctionOnA(): void {
		console.log('Hello from A');
	}

	public someFunctionCallingB(): void {
		this.b.someFunctionOnB();
	}
}
```

```typescript
// B.ts
export interface WhatBNeeds {
	someFunctionOnA(): void;
}

export class B {
	constructor(private readonly a: WhatBNeeds) {}

	public someFunctionOnB(): void {
		console.log('Hello from B');
	}

	public someFunctionCallingA(): void {
		this.a.someFunctionOnA();
	}
}
```

## Registry

Sometimes the Dependency you want to invert is not just on a single service or file, but actually an arbitrary number of similar services with a common interface (for example strategies). If you need to invert these dependencies, you might introduce a registry (and you might want to do it anyway just to reduce complexity).

All Services that implement the common interface and may be used by a Caller will "register" themselves on a central service (the "registry"). A caller then only needs to know about the registry, and can use it to either fetch the correct service, or to redirect his request to the correct recipient.

In the upcoming example, `A` represents one of an arbitrary amount of services that need to be registered.

```typescript
// registry.ts
export interface ThingThatIsRegistered {
	someFunctionOnA(): void;
}

export class Registry {
	private registry: Record<string, ThingThatIsRegistered> = {};

	public register(name: string, thing: ThingThatIsRegistered): void {
		this.registry[name] = thing;
	}

	public get(name: string): ThingThatIsRegistered {
		return this.registry[name];
	}
}
```

```typescript
// A.ts
import { B } from './b';
import { Registry, ThingThatIsRegistered } from './registry';

export class A implements ThingThatIsRegistered {
	constructor(private readonly b: B, registry: Registry) {
		registry.register('a', this);
	}

	public someFunctionOnA(): void {
		console.log('Hello from A');
	}

	public someFunctionCallingB(): void {
		this.b.someFunctionOnB();
	}
}
```

```typescript
// B.ts
import { Registry } from './registry';

export class B {
	constructor(private readonly registry: Registry) {}

	public someFunctionOnB(): void {
		console.log('Hello from B');
	}

	public someFunctionCallingA(): void {
		this.registry.get('a').someFunctionOnA();
	}
}
```

Note that in this example, we give every registered service an identifier to fetch it by. In real code, this might be an enum of some kind.
However its also possible to build a registry without such an identifier, if the registry is able to figure out from the parameters of a call who the recipient should be. One way of accomplishing this is to ask each service in turn if he is able to process a particular request until it finds the correct one (or throw an error if it cant find one). You might even allow the same request to be processed by multiple services.

## Event Handling

Sometimes you dont want to call a single service from among an arbitrary number, but all of them. In this case, we want an event handler.

An Event is something that allows its clients to register a handler function. When the event is triggered, all registered functions are called.

The pattern itself is widely used and already implemented in browser-based Javascript, and in our NestJS applications we use a powerful eventbus based on the nestjs-cqrs library. For more information see [event handling](./event-handling.md). *Whenever you need events in our backend applications, refer to that page*.

However for the completeness and simplicity of this explanation, we will show an example of a very primitive, self implemented eventhandling.

The idea is very simple: the module that will trigger the event allows other services to register a function as eventhandler, and keeps those functions in an array. When the event is triggered, it calls those functions.

```typescript
// A.ts
import { B } from './b';

export class A {
	constructor(private readonly b: B) {
		// .bind is important so that the function will have the context of this class when it is called
		b.registerEventHandler(this.someFunctionOnA.bind(this));
	}

	public someFunctionOnA(): void {
		console.log('Hello from A');
	}

	public someFunctionCallingB(): void {
		this.b.someFunctionOnB();
	}
}
```

```typescript
// B.ts
export class B {
	private handlers = Array<() => void>();

	public registerEventHandler(handler: () => void): void {
		this.handlers.push(handler);
	}

	public someFunctionOnB(): void {
		console.log('Hello from B');
	}

	public someFunctionCallingA(): void {
		this.handlers.forEach((handler) => {
			handler();
		});
	}
}
```
