## Migrations for server database

Migration mean to change the database structure by updating a model and/or updating user data to the target model.

The documentation about migration concept and tool on npm can be found at [MikroORM documentation](https://mikro-orm.io/docs/5.9/migrations). Please be aware of current mikro-orm version.

Here, we explain only how we create migrations currently.

We use the [cli commands](https://mikro-orm.io/docs/5.9/migrations#using-via-cli) provided by MikroORM.


### Create a new migration
`npx run migration:create` will create a new migration file in `./apps/server/src/migrations/mikro-orm` folder.
* please note that argument `--name=SOME_MIGRATION_NAME` is supported in 5.9 only
* do log all database changes (before and after state of documents or at least all modified document id's)

### Apply migrations
To run migraitons you can use one of the commands below:
* `npx mikro-orm migration:up` will apply all migrations that are not applied yet
* `npm run migration:up` will run the compiled js file. This command is safer, and used in production.
* you can also apply any specific migration. Look at the documentation for more details.

### Undo migration
`npx mikro-orm migration:down` will undo the last migration that has been applied.

### Notes about setup
* migrations are stored in database `migrations` collection
* there is no status for a migration. Once the migration has been applied, a record is added in the database.
* the command will compare migrations files to database records to know which migrations to apply 
* migration configuration is in `./apps/server/src/mikro-orm.config.ts` file. MikroORM uses the config file to connect to the database and to find the migrations folder. 


## Test migration 
* to check migrations to be executed:
  *  in local development you can use `npx mikro-orm migration:pending` command 
  *  `npm run migration:pending` to run the compiled js file. The second command is safer, and used in CI and should be used in K8 clusters.
* The CI job `./.github/workflows/migrations.yml` will check that the migrations are already included in the seed data. If not, it will fail.  This is to ensure that the seed data is always up to date with the migrations.

## Committing a migration
* `npm run setup:db:seed` - to update the whole database
or use `npm run nest:start:console -- database --help` to see how to import/export single collection
* `npx mikro-orm migration:up` - to apply the migration update the migrations collection
* `npm run backup` (copies the collections to folder backup/DATE, move the changed files of this folder to backup/setup and commit the updated files)
or use `npm run nest:start:console -- database export --collection <collection> --override` to override seed data directly. 
The updated collections, modified by your migration added in backup/setup folder

Commit the changes:
* `git add .` 
* `git commit -m "migration: <migration name>"`
* `git push`
* test that the migration was applied `npx mikro-orm migrations:pending` (or better use `npm run migration:pending`) should return nothing


## Best Practices
### General

* consider if a migration is the right tool for this job
* recurring tasks are better placed in a script/console
* test the migration well
* if a migration should be deleted, do not delete the migration file itself, but remove the content of the up and down method and log a skip message
* consider if the migration can be written to be idempotent (can be executed multiple times without problems)

### Performance
* think about the size of the collection. On production, it can be that the collection has a lot of data, and your migration might take a long time or can lead to time-out errors.
* use methods already provided by mongo for bulk operations (e.g. updateMany, deleteMany etc.)
* but think about handle items separately with extra logging and separate error handling
* load the data chunkwise and process them asynchronously
* query the data with `skip` and `limit` (example migration)
* or use async iterators with mongoose queries (blog post, example migration)
* migrations should in general not be executed in parallel (on multiple pods)
* Use for loops with synchronous execution and logging. Avoid subtasks awaiting Promise.all()
* Beside loading data in chunks or cursors, performance must not be an issue.

### Error Handling/Logging
* if a migration throws an error, the subsequent migrations are not executed as well
* catch errors if the errors are acceptable for the next release, so it will not become a release blocker
* log start and end of a migration (so that we know which migration currently is running)
* log intermediate results for long-running migrations (so that we know if it is still running)
* use log level `alert` or above, so the output can be seen on production
* logging might be difficult to fix, instead it might be helpful to keep before-states in a separate collection

### Debugging
* use env `MIKRO_ORM_CLI_VERBOSE=1` 
* can add mikro-orm debug info in config file
  * `debug: true` will log all queries
  * `logger: console.log` will log all queries
* can add debug breakpoints in migration files
* run with typical debug options for your IDE (e.g. in [Webstorm create a Run/Debug](https://blog.jetbrains.com/webstorm/2018/01/how-to-debug-with-webstorm/#prepare_for_debugging_create_a_run_debug_configuration) npm command and run it with debug options)  


### Caveats
#### using entity manager
* According to documentation, the entity manager should not be used in migrations. Instead, the migration should use the `mongoClient` to access the database.
#### Outdated Migrations
* By their nature, migrations become outdated as the database model changes. You are never expected to update migrations due to any changes in the code that are made.
* If needed, for example because the migration shows errors due to a code (model) change, migrations can be deleted, since they will still be accessible in the git history.