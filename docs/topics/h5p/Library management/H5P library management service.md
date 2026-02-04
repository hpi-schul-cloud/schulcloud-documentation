# H5P library management service

## Overview

`H5PLibraryManagementService` is a NestJS service responsible for managing H5P libraries in the schulcloud-server application. It automates the installation, synchronization, and removal of H5P libraries based on a configurable wish list, ensuring that only the desired libraries and their latest versions are available in the system.

## Responsibilities
- **Install libraries** from a configured wish list, always fetching the latest version from H5P Hub.
- **Uninstall libraries** not in the wish list and not required by other libraries.
- **Synchronize metadata** between the database and S3 storage.
- **Check and remove broken libraries** that fail consistency checks.
- **Log all operations** for monitoring and debugging.

## Configuration
- The wish list of libraries is defined in a YAML file, whose path is set via the `H5P_EDITOR__LIBRARY_LIST_PATH` configuration property.
- The service reads this file at startup and uses it to determine which libraries should be installed or removed.

## Main Methods

### `run()`
Executes the full library management workflow:
1. Logs start.
2. Gets available libraries.
3. Uninstalls unwanted libraries.
4. Installs desired libraries.
5. Synchronizes metadata.
6. Removes broken libraries.
7. Logs finish and metrics.

### `uninstallUnwantedLibrariesAsBulk()`
Removes libraries not in the wish list and not needed by others, iteratively.

### `installLibrariesAsBulk(availableLibraries)`
Installs all libraries from the wish list, ensuring the latest versions are present.

### `synchronizeDbEntryAndLibraryJson()`
Ensures metadata in the database matches the library.json in S3, updating or adding as needed.

### `checkAndRemoveBrokenLibraries()`
Checks all libraries for consistency and removes any that fail.

## Helper Methods
- **Consistency Checks**: `checkConsistency`, `jsIsMissing`, `cssIsMissing`
- **Metadata Filtering**: `filterLibraryMetadata`, `filterInstalledLibrary`
- **Logging**: Methods for logging start, finish, errors, and removals.
- **Error Handling**: Handles timeouts, consistency errors, and missing files.

## Configuration
Uses values from `IH5PLibraryManagementConfig` for settings like lock times and library list paths.

## Library Versioning
- Library versions are tracked using the format: `machineName-major.minor.patch`.
- The service ensures only the latest versions are installed and synchronizes metadata of older versions, which were build and uploaded to the S3/Cloud storage using :
  - the [`update-h5p-map` script](./scripts/update-h5p-map.md) to create a mapping between the machine name of all H5P libraries (e.g. `H5P.InteractiveVideo`) and the name of the respective GitHub repository (e.g. ` h5p/h5p-interactive-video`)
  - the [`package-h5p-libraries` script](./scripts/package-h5p-libraries.md) to download, build and package all latest patch versions of all available major-minor releases, and 
  - the [`upload-h5p-libraries` script](./scripts/upload-h5p-libraries.md) to upload all the built libraries/packages to the respective S3/Cloud storage.

## Error Handling & Logging
- All major operations are logged using a custom logger.
- Errors during installation, update, or removal are caught and logged, with failed operations retried or skipped as appropriate.

## Extensibility
- The service is designed to be extensible, allowing for additional storage backends, permission systems, or library sources to be integrated with minimal changes.

## Usage Example

```typescript
// Inject and use the service in a NestJS module
@Injectable()
export class SomeModule {
  constructor(private readonly h5pLibraryManagementService: H5PLibraryManagementService) {}

  async manageLibraries() {
    await this.h5pLibraryManagementService.run();
  }
}
```

## Related Files
- `h5p-library-management.service.ts`: Main service implementation
- `h5p-library-management.config.ts`: Configuration interface
- `h5p-library-management.service.spec.ts`: Unit tests

## References
- [H5P Hub Documentation](https://h5p.org/documentation)
- [NestJS Documentation](https://docs.nestjs.com/)

---
For further details, see inline comments in the service source code.
