# Repositories

The repository is responsible to provide domain objects for the domain layer. Typically, it does so by accessing a database.

Since the domain layer should be isolated (not have knowledge of the outer layers), the domain layer should have an interface definition for each repository it wants to access. This naturally means that the interface can only mention domain objects, without any knowledge about database entities.

```Typescript
// somewhere in the domain layer...
export interface SchoolRepo {
    getSchoolById(schoolId: EntityId): Promise<School>;
}
```

The repository itself can now implement this interface, in this example using MikroOrm to get data from a database

```Typescript
@Injectable()
export class SchoolMikroOrmRepo implements SchoolRepo {
    constructor(private readonly em: EntityManager) {}

    public async getSchoolById(schoolId: EntityId): Promise<School> {
        const entity = await this.em.findOneOrFail(
            SchoolEntity,
            { id: schoolId },
       );

        const school = SchoolEntityMapper.mapToDo(entity);

        return school;
    }
}
```

Note that the internal entity manager uses a different datatype, the SchoolEntity, to represent schooldata. This type includes information that is specific to mikroorm, and should not be mixed into the domain object definition. A mapper is used to explicitly map the entity to the domain object, and vice versa.
