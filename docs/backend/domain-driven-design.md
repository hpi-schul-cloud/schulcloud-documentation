# Domain Driven Design (DDD)

## What is DDD?

- https://martinfowler.com/bliki/DomainDrivenDesign.html

## Why we want to use it in our project

The SVS is a long runing software product. The developers, the contributed teams and also the goals change over the years.
For us it is very important to create expressive code that is self explaining.
That every developer to every time can fast understand part of the code and can easy refactor the code.

This include a lot more then only DDD, but DDD support us that the DDD layer, the core of our application, ridge this goal.

## DDD Types

[1] https://martinfowler.com/bliki/EvansClassification.html

### Entity (Domain Object)

"Objects that have a distinct identity that runs through time and different representations. You also hear these called 'reference objects'."[1]

#### How to Use Domain Objects in our code

**Encapsulate Domain Logic**

- Place all business logic and rules that relate to the entity inside the Domain Object.
- Example: In FileRecord, methods like markForDelete, setName, isBlocked, etc., belong here because they represent business operations on a file record.

**Immutability of Props**

- The props object should only be mutated through methods that enforce business rules.
  Avoid direct mutation from outside the Domain Object.

**Identity and Equality**

- Use the id property for identity comparison.
- Two Domain Objects with the same id represent the same conceptual entity, even if other properties differ.

**Interaction with Persistence**

- Use mappers (like FileRecordEntityMapper) to convert between persistence models (e.g., database entities) and Domain Objects.
- Never expose ORM entities directly to your business logic or API layers—always use Domain Objects.

**Aggregates and Value Objects**

- Domain Objects can aggregate Value Objects (like FileRecordSecurityCheck), which encapsulate value-based concepts and validation.
- Use Value Objects for things like email addresses, money, or security checks, and Domain Objects for things with identity (like a file record).

#### Note

In our backend code we use microORM as ORM for our database.
The datarecords from the microORM are marked as Entities from the framework it self. Therefore we had a decorator name and name conflict with the real DDD entity. We solve it by calling the DDD entities in our project "domain object".

### Value Object

"Objects that matter only as the combination of their attributes. Two value objects with the same values for all their attributes are considered equal. I also describe value objects in P of EAA." [1]

- https://martinfowler.com/bliki/ValueObject.html

#### How to Use Value Objects in our code

A Value Object is a small object that represents a descriptive aspect of the domain with no conceptual identity. It is defined only by its attributes (values), not by a unique ID. In our project, `FileRecordSecurityCheck` is a good example.

**Immutability**

- Value Objects should be immutable. Once created, their properties should not change.
- Use `readonly` for all properties.
- If you need a new value, create a new instance (e.g., `scanned()` returns a new `FileRecordSecurityCheck`).

**Validation**

- Use class-validator decorators (e.g., `@IsEnum`, `@IsString`, `@IsDate`) to ensure the Value Object is always valid.
- The `@ValueObject()` decorator in your project automatically validates on construction and throws if invalid.

**Equality**

- Two Value Objects with the same values are considered equal, regardless of instance.
- You can implement an `equals()` method if you need to compare Value Objects.

**Encapsulation of Logic**

- Put all logic that belongs to the value inside the Value Object (e.g., `isBlocked()`, `isPending()`, `copy()`).

**Usage in Domain Objects**

- Use Value Objects as properties in your Domain Objects (e.g., `FileRecord` has a `FileRecordSecurityCheck`).
- Pass Value Objects around instead of primitive types for richer domain modeling and validation.

---

### **Example Usage**

**Creating a Value Object:**

```typescript
const securityCheck = new FileRecordSecurityCheck({
  status: ScanStatus.PENDING,
  reason: "not yet scanned",
  updatedAt: new Date(),
  requestToken: "some-uuid",
});
```

**Using Value Object Methods:**

```typescript
if (securityCheck.isBlocked()) {
  // handle blocked file
}

const newCheck = securityCheck.scanned(ScanStatus.VERIFIED, "checked and safe");
```

**Using in Domain Object:**

```typescript
const fileRecord = new FileRecord(fileRecordProps, securityCheck);
```

---

#### **Best Practices**

- **Never expose setters or allow mutation after construction.**
- **Always validate on construction** (your `@ValueObject()` decorator does this).
- **Use Value Objects for all domain concepts that are defined by their value, not identity** (e.g., Email, Money, SecurityCheck).
- **Write unit tests for Value Objects** to ensure validation and logic work as expected.

---

#### **Summary Table**

| Use Case               | Example                                      |
| ---------------------- | -------------------------------------------- |
| Representing a status  | `FileRecordSecurityCheck`                    |
| Validation             | `@IsEnum`, `@IsString`, `@IsDate`            |
| Immutability           | All properties are `readonly`                |
| Domain Object property | `FileRecord` has a `FileRecordSecurityCheck` |

---

**In short:**  
Use Value Objects to model concepts that are defined by their data, not by identity. Make them immutable, always valid, and encapsulate all related logic. Use them as building blocks inside your Domain Objects for a robust, expressive, and safe domain model.

### Aggregrate

- https://martinfowler.com/bliki/DDD_Aggregate.html

### Domain Event

- https://martinfowler.com/eaaDev/DomainEvent.html
- https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-events-design-implementation
- https://devblogs.microsoft.com/cesardelatorre/domain-events-vs-integration-events-in-domain-driven-design-and-microservices-architectures/
- https://www.refactory-project.com/application-events-and-domain-events/
