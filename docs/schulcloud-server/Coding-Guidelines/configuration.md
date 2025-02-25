# Configuration

The Configuration Management consists of three layers working together.

- Application Layer: Defines the Variables the application needs as well es their type, and validates their values on application start.
- Configmap: Provides the Configuration as environment variables, making them available to the application.
- dof-configuration: defines configuration values for various instances and deployment stages.

Each of those layers is described in more detail below.

## Application Configuration

**WORK IN PROGRESS** we are still working to refine how the configuration should work within the application. Specifically, we still want to:

- remove the hpi-common library which currently takes care of defining a configuration schema and validating the values
- streamline each modules definition of necessary configuration values in NestJs
- consider how to implement runtime configuration and configuration changes
- improve the workflow of introducing (and removing!) feature flags

TODO: document how config files in nest work
TODO: document how the config schema works

## Config Maps

Each of our code repositories contains the ansible files necessary for deploying the application(s) within.

The configmap can be found under `ansible/roles/:application-name:/templates/:application-name-configmap.yml.j2`.

```yml
apiVersion: v1
kind: ConfigMap
metadata:
  name: application-name-configmap
  namespace: {{ NAMESPACE }}
  labels:
    app: application-label
data:
  SOME_CONFIGURATION_KEY: "{{ SOME_CONFIGURATION_KEY }}"
  SOME_RENAMED_CONFIGURATION_KEY: "{{ SOME_ORIGINAL_CONFIGURATION_KEY }}"
  HARDCODED_VALUE: "value"
  COMPOSED_VALUE: "https://{{ DOMAIN }}/some/thing"
```

under `ansible/roles/:application-name:/defaults` we define default values to be used when no values are provided from the environment.

## dof Configuration

The actual configuration values used for our deployments can be found in the `dof_app_deploy` repository under `ansible/group_vars`.

Here, you will find various yml files containing configuration values.

Kubernetes will apply each of these files in a defined order, beginning with the folder `all`, then applying the files in the folder corresponding to the deployment stage (eg. `development`, `reference`, `production`), and finally the files in the folder corresponding to the instance (eg. `brb`, `dbc`, `thr`, `nbc`.)

Values in files that are applied later will overwrite earlier values.

All of these values are gathered as kubernetes facts, and can theoretically be used by all config maps, ensuring the configurations of different applications are consistent with each other. Do note that a value must be mapped in a config map to be available to a given application.
