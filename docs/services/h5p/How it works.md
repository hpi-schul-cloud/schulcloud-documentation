# How it works

## Configuration
- WITH_H5P_LIBRARY_MANAGEMENT - Enables the cronjob to update for H5P libraries on a regular basis

- WITH_H5P_EDITOR - Enables the deployment of H5P editor microservice

- FEATURE_COLUMN_BOARD_H5P_ENABLED - Enables the H5P in boards

- FEATURE_LESSON_H5P_ENABLED - Enables the H5P in topics (FAR decided that this feature must be disabled)

## H5P Editor Microservice
The `h5p-editor` module contains all the code which the microservice uses. This [documentation](https://docs.lumi.education/usage/integrating)
from lumi specifies what is to be implemented in the microservice for the H5P editor to work.

## Library Management
The `h5p-library-management` module contains services used by the H5P library management cronjob to perform regular
updates and installs the H5P libraries offered by the editor.

The cronjob is defined in the ansible folder of the `schulcloud-server` repo.

The list of libraries to be installed and updated is defined in the `dof-app-deploy` repo (in the `misc.yml` file).

## Additional Documents
- [Handover Documentation](https://docs.dbildungscloud.de/display/N21P/H5P+integration+within+boards)