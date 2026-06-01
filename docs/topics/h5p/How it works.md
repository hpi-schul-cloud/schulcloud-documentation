# How it works

## Configuration

### Ansible Deployment Switches (h5p-server)

- `WITH_H5P_CRONJOB` - Enables the cronjob for H5P library management to update libraries on a regular basis
- `WITH_H5P_SERVER` - Enables the deployment of the H5P server (editor and consumer)

### Feature Flags (schulcloud-server)

- `FEATURE_COLUMN_BOARD_H5P_ENABLED` - Enables H5P content type in boards

## H5P Editor Microservice

The `h5p-editor` module in the [h5p-server](https://github.com/hpi-schul-cloud/h5p-server) repository contains all the code which the microservice uses. This [documentation](https://docs.lumi.education/usage/integrating)
from lumi specifies what is to be implemented in the microservice for the H5P editor to work.

## Library Management

The `h5p-library-management` module contains services used by the H5P library management cronjob to perform regular
updates and installs the H5P libraries offered by the editor (see [H5P library management service](./Library%20management/H5P%20library%20management%20service.md) for more information).

The cronjob is defined in the [ansible folder](https://github.com/hpi-schul-cloud/h5p-server/tree/main/ansible) of the `h5p-server` repository.
The schedule is configurable via the `SERVER_H5P_LIBRARY_MANAGEMENT_CRONJOB` ansible variable and defaults to `"0 2 * * *"` (daily at 2:00 AM).

The list of libraries to be installed and updated is configured via the `H5P_EDITOR__LIBRARY_LIST` environment variable. 
The default list can be found in [h5p-editor.config.ts](https://github.com/hpi-schul-cloud/h5p-server/blob/main/src/modules/h5p-content-management/h5p-editor.config.ts) and can be overwritten via ansible variables, `.env` files, or direct environment variables.
