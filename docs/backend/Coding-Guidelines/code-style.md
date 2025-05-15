# Code Style

## Function

### Naming functions

The name of a function should clearly communicate what it does. There should be no need to read the implementation of a function to understand what it does.

There are a few keywords that we use with specific meaning:

#### "is..."

`isTask()`, `isPublished()`, `isAuthenticated()`, `isValid()`

A function with the prefix "is..." is checking wether the input belongs to a certain (sub)class, or fulfils a specific criteria.

The function should return a boolean, and have no sideeffects.

#### "check..."

`checkPermission()`, `checkInputIsValid()`

A function with the prefix "check..." is checking the condition described in its name, throwing an error if it does not apply.

#### "has..."

`hasPermission()`,

similar to "is...", the prefix "has..." means that the function is checking a condition, and returns a boolean. It does NOT throw an error.

### Avoid direct returns of computations

avoid directly returning the result of some computation. Instead, use a variable to give the result of the computation a name.

Exceptions can be made when the result of the computation is already clear from the function name, and the function is sufficiently simple to not occlude its meaning.

```typescript
class SomeClass {
    public doSomething(): FileRecordParams[] {
        // ... more logic here
        const fileRecordParams = fileRecords.map((fileRecord) => Mapper.toParams(fileRecord));
        // hint: this empty line can be increase the readability
        return fileRecordParams;
    }

    public getName(): string {
        return this.name;
    }

    public getInfo(): FileInfo {
        // ... more logic here
        return { name, parentId, parentType }; // but if the return include many keys, please put it first to a const
    }
}
```

### avoid directly passing function results as parameters

```typescript
const badExample = (): void => {
    doSomething(this.extractFromParams(params), this.createNewConfiguration());
}

const goodExample = (): void => {
    const neededParams = this.extractFromParams(params);
    const configuration = this.createNewConfiguration();
    doSomething(neededParams, configuration);
}
```

### explicit return type

```typescript
class SomeClass {
    public doSomething(): FileRecord[] {
        // ...
        // const fileRecords = ...
        return fileRecords;
    }
}
```

## Interfaces

### Avoid the "I" for interfaces

In most cases, it should not matter to the reader/external code wether something is an interface or an implementation. Only prefix the "I" when necessary, or when its specifically important to the external code to know that its an interface, for example when external code is required to implement the interface.

```Typescript
interface CourseRepo {
    getById(id): Course
    // ...
}

class InMemoryCourseRepo implements CourseRepo {
    getById(id): Course {
        return new Course()
    }
}
```

## Classes

### Order of declarations

Classes are declared in the following order:

1. properties
2. constructor
3. methods

Example:

```Typescript
export class Course {
  // 1. properties
  name: string;

  // more properties...

  // 2. constructor
  constructor(props: { name: string }) {
    // ...
  }

  // 3. methods
  public getShortTitle(): string {
    // ...
  }

  // more methods...
}
```

### Naming classes

Classes should be named in CamelCase. They should have a Suffix with the kind of Object they represent, and from the beginning to the end go from specific to general.

- CourseController
- CourseCreateBodyParam
- CourseCreateQueryParam
- CourseCreateResponse
- CourseDtoMapper
- CourseUc
- CourseAuthorisationDto
- CourseDo
- CourseService
- CourseRepo
- CourseEntity
- CourseEntityMapper

## Do NOT use JsDoc

You should always try to write code in a way that does not require further explanation to understand. Use proper names for functions and variables, and extract code and partial results into functions or variables in order to name them. If you feel like a function needs a JsDoc, treat that as a codesmell, and try to rewrite the code in a way that is more self-explanatory.

## Do use empty lines

empty lines help to structure code. Use them wherever you want to seperate parts of a function from each other (and think about further extracting functions). Common uses include:

- before return statement
- before and after an if/else statement
- between test sections (arrange, act, assert)
- between "it()" statements in tests
