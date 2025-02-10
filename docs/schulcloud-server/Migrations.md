## Migrations for server database

Executing a migration means to change the database structure by updating a model and/or updating user data to the target model.

The documentation about the migration concept and tool on npm can be found at [MikroORM documentation](https://mikro-orm.io/docs/migrations). Please be aware of current mikro-orm version.

### Create a new migration

`npm run migration:create` will create a new migration file in `./apps/server/src/migrations/mikro-orm` folder.

- Please log all database changes (before and after state of documents or at least all modified document id's)

### Apply migrations

To run migrations you can use the command below:

- `npm run migration:up` will run the compiled js file. This command is safer, and used in production.
- You can also apply any specific migration. Look at the documentation for more details.

### Undo migration

`npm run migration:down` will undo the last migration that has been applied.

### Notes about setup

- Migrations are stored in the database `migrations` collection.
- There is no status for a migration. Once the migration has been applied, a record is added in the database.
- The command will compare migration files and database records to know which migrations to apply.
- Migration configuration is locates in `./apps/server/src/mikro-orm.config.ts` file. MikroORM uses the config file to connect to the database and to find the migrations folder.

## Test migration

- Use the following command to check for pending migrations:
- `npm run migration:pending` to run the compiled js file. The second command is safer, and used in CI and should be used in K8 clusters.
- The CI job `./.github/workflows/migrations.yml` will check that the migrations are already included in the seed data. If not, it will fail. This is to ensure that the seed data is always up to date with the migrations.

## Committing a migration

- `npm run setup:db:seed` - to update the whole database
  or use `npm run nest:start:console -- database --help` to see how to import/export single collection
- `npm run migration:up` - to apply the migration update to the migrations collection
- `migration:persisted` (copies the collections to folder backup/DATE, move the changed files of this folder to backup/setup and commit the updated files)
  or use `npm run nest:start:console -- database export --collection <collection> --override` to override seed data directly.
  The updated collections that where modified by your migration are added to backup/setup folder.

Commit the changes:

- `git add .`
- `git commit -m "migration: <migration name>"`
- `git push`
- Test that the migration was applied `npm run migration:pending` should return nothing

## Best Practices

### General

- Consider if a migration is the right tool for this job
- Recurring tasks are better placed in a script/console
- Test the migration well
- If a migration should be deleted, do not delete the migration file itself, but remove the content of the up and down method and log a skip message
- Consider if the migration can be written to be idempotent (can be executed multiple times without problems)

### Performance

- Think about the size of the collection. On production, large collections with a lot of data, might take a long time to migrate or can lead to time-out errors.
- Use methods already provided by mongo for bulk operations (e.g. updateMany, deleteMany etc.). But think about handle items separately with extra logging and separate error handling in that case.
- Load the data chunkwise and process them asynchronously
- Query the data with `skip` and `limit` (example migration) or use async iterators with mongoose queries (blog post, example migration).
- Migrations should in general not be executed in parallel (on multiple pods).
- Use for loops with synchronous execution and logging. Avoid subtasks awaiting Promise.all().
- As long as data is loaded in chunks or cursors, performance should not be an issue.

### Error Handling/Logging

- If a migration throws an error, the subsequent migrations are not executed.
- Catch errors if the errors can be handled by the next release, so it will not become a release blocker.
- Log start and end of a migration (so that we know which migration currently is running).
- Log intermediate results for long-running migration (so that we know if it is still running).
- Use log level `alert` or above, so the output can be seen on production.
- Logging might be difficult to fix, instead it might be helpful to keep before-states in a separate collection

### Debugging

- Use env `MIKRO_ORM_CLI_VERBOSE=1`
- Mikro-orm debug info can be added in config file
  - `debug: true` will log all queries
  - `logger: console.log` will log all queries
- Debug breakpoints can be added in migration files
- Run with typical debug options for your IDE (e.g. in [Webstorm create a Run/Debug](https://blog.jetbrains.com/webstorm/2018/01/how-to-debug-with-webstorm/#prepare_for_debugging_create_a_run_debug_configuration) npm command and run it with debug options)

### Caveats

#### using entity manager

- According to documentation, the entity manager should not be used in migrations. Instead, the migration must use the `mongoClient` to access the database.

#### Outdated Migrations

- By their nature, migrations become outdated as the database model changes. You are never expected to update migrations due to any changes in the code that are made.
- If needed, for example because the migration shows errors due to a code (model) changes, migrations can be deleted, since they will still be accessible in the git history.
