# Defining Entities

When defining entities with MikroORM (Version 5), the following should be considered:
The property decorator requires explicit assignment of the type to the property and may not work correctly when working with type inference or assigning union types to a property. In these cases, the metadata may not be set correctly, which can lead to exceptions, for example, when using the `em.assign()` or `em.aggregate()` functions.

Therefore, the following is **not** sufficient:

```TypeScript
  @Property()
  termsAccepted = false;

 @Property()
 createdAt = new Date();

```

The following works:

```TypeScript
 @Property()
 termsAccepted: boolean = false;

 @Property()
 createdAt: Date = new Date();

```

The better way is to provide the type through the decorator:

```TypeScript
 @Property({ type: 'boolean' })
 termsAccepted = false;

 @Property({ type: Date })
 createdAt = new Date();

```

Errors can also occur when specifying multiple types (union types):

```TypeScript
 @Poperty({ nullable: true })
 dueDate: Date | null;

```

To set the metadata correctly, do the following:

```TypeScript
 @Property({ type: Date, nullable: true })
 dueDate: Date | null;

```

If type inference is not used, specifying the type through the property decorator is not necessary:

```TypeScript
 @Property()
 name: string;

```
