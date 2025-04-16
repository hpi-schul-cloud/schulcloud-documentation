# How it works

## Configuration

- FEATURE_TSP_SYNC_ENABLED - Activates the sync strategy inside the sync console

- WITH_TSP_SYNC - Activates the cronjob in Kubernetes

- TSP_API_CLIENT_BASE_URL - Base URL for the TSP API

- TSP_API_TOKEN_LIFETIME_MS - Lifetime of the access token for the TSP API in milliseconds

- TSP_SYNC_SCHOOL_LIMIT - The amount of schools the sync handles at once

- TSP_SYNC_SCHOOL_DAYS_TO_FETCH - The amount of days for which the sync fetches schools from the TSP API

- TSP_SYNC_DATA_LIMIT - The amount of school data updates the sync handles at once

- TSP_SYNC_DATA_DAYS_TO_FETCH - The amount of days for which the sync fetches school data from the TSP API

## Sync console

This is a console application that allows you to start the synchronization process for different sources.

### Usage

To start the synchronization process, run the following command:

```bash
npm run nest:start:console sync run <target>
```

Where `<target>` is the name of the system you want to start the synchronization for. The currently available systems are:

- `tsp` - Synchronize Thüringer Schulportal.

If the target is not provided, the synchronization will not start and the available targets will be displayed in an error message.

```bash
{
    message: 'Either synchronization is not activated or the target entered is invalid',
    data: { enteredTarget: 'tsp', availableTargets: { TSP: 'tsp' }}
}
```

### TSP synchronization

The TSP synchronization is controlled with the feature flag  `FEATURE_TSP_SYNC_ENABLED`.
