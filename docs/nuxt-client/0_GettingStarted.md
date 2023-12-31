---
sidebar_position: 1
---

# Getting Started

## Development Setup

> **Note:** Please **_don't use yarn_** !!! We decided to use npm across all of our repositories.

In order to run this client, you need to have the [legacy-client](https://github.com/hpi-schul-cloud/schulcloud-client) and [schulcloud-server](https://github.com/hpi-schul-cloud/schulcloud-server) set up and running. See for documentation on how to do that in the respective repositories.

### Start the Server

0. Clone the repository

    ```sh
    git clone git@github.com:hpi-schul-cloud/nuxt-client.git
    ```

1. Install the required dependencies:

   ```sh
   npm ci
   ```

2. Start the development server:

   ```sh
   npm run serve
   ```

   By default the server will listen on the URL [http://localhost:4000](http://localhost:4000)

### Unit Tests

```bash
# Run all (unit) tests
npm run test
```

### Lint

```bash
npm run lint
```

## Editor Setup

We are using Visual Studio Code as our default deveopment-IDE. In /.vscode you can find two templates to setup your IDE:

- `launch.default.json` (copy its content and us it in `launch.json`)
- `settings.default.json` (copy its content and us it in `settings.json`)

For a list of recommended Visual Studio Code extensions please refer to `extensions.json`.
