# Domain Driven Design (DDD)

## What is DDD?

- https://martinfowler.com/bliki/DomainDrivenDesign.html

## Why we want to use it in our project

The SVS is a long runing software product. The developers, the contributed teams and also the goals change over the years.
For us it is very important to create expressive code that is self explaining. 
That every developer to every time can fast understand part of the code and can easy refactor the code. 

This include a lot more then only DDD, but DDD  support us that the DDD layer, the core of our application, ridge this goal.

## DDD Types
- https://martinfowler.com/bliki/EvansClassification.html [1]

### Entity (Domain Object)
"Objects that have a distinct identity that runs through time and different representations. You also hear these called 'reference objects'."[1]

#### Note
In our backend code we use microORM as ORM for our database.
The datarecords from the microORM are marked as Entities from the framework it self. Therefore we had a decorator name and name conflict with the real DDD entity. We solve it by calling the DDD entities in our project "domain object".

### Value Object
"Objects that matter only as the combination of their attributes. Two value objects with the same values for all their attributes are considered equal. I also describe value objects in P of EAA." [1]

- https://martinfowler.com/bliki/ValueObject.html

### Aggregrate

- https://martinfowler.com/bliki/DDD_Aggregate.html

### Domain Event

- https://martinfowler.com/eaaDev/DomainEvent.html
- https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-events-design-implementation
- https://devblogs.microsoft.com/cesardelatorre/domain-events-vs-integration-events-in-domain-driven-design-and-microservices-architectures/
- https://www.refactory-project.com/application-events-and-domain-events/