---
sidebar_position: 1
---

# Getting Started

This section provides instructions for setting up the Cypress-Cucumber test environment to ensure a smooth onboarding process.

---

## 1. Pre-requisites

Before getting started, ensure the following tools are installed:

- Go to [nodejs.org](https://nodejs.org/) and click the green "LTS" button to download the recommended and stable version of Node.js.
- Git: Download Git
- Browser: (Recommended: Microsoft Edge) Download Edge Browser
- IDE: Choose any IDE (Recommended: VS Code)
- Optional Tools: GitHub Desktop App
- Recommended VS Code Extensions:
  - Cucumber (Gherkin) Full Support
  - EditorConfig
  - Prettier

---

## 2. Cloning the Repository

- To get the project files locally, follow these steps:

  ```bash
  git clone <repository-url>
  cd <repository-folder>
  ```

Make sure you have access to the repository using your organization's credentials.

---

## 3. Setting Up Environment Variables for the Testing User Credentials and URLs

1. Setting Up Environment Variables for Dev Environment/Cluster:

   - Duplicate the file [devTemplate.env.json](https://github.com/hpi-schul-cloud/e2e-system-tests/blob/main/env_variables/devTemplate.env.json) and rename the duplicated file to `local.env.json` inside the `env_variables` folder.
   - Include the required development namespace URLs for BRB/DBC/NBC.
   - Test user data on development clusters are created using the school API.
   - To retrieve the API keys for all three namespaces, navigate to 1Password (1PW).
   - Contact QA team for the necessary 1Password links.

2. Setting Up Environment Variables for Staging Environment/Cluster:

    - Duplicate the file [stagingTemplate.env.json](https://github.com/hpi-schul-cloud/e2e-system-tests/blob/main/env_variables/stagingTemplate.env.json) and rename the duplicated file to `staging.env.json` in the `env_variables` folder.
   - Include the required staging namespace URLs for BRB/DBC/NBC.
   - Test data on the staging environment are fetched from the seed data on the server.
   - Add the environment-specific credentials to `staging.env.json` from 1Password (1PW).
   - Ensure all instances are included, as 1Password contains different vaults for each namespace with testing credentials.
   - Contact QA team for the necessary 1Password links.

---

## 4. Installing Dependencies

- Use the following command to install all necessary project dependencies:

  ```bash
  npm ci
  ```

---

## 5. Running Cypress Tests

Once the setup is complete, you can run the tests:

- To run all tests in headless mode:

  ```bash
  npm run cy:headless:stable:local
  ```

- To run tests interactively in the Cypress UI:

  ```bash
  npm run cy:gui:stable:regression:staging:local
  ```

For more details on additional configurations and test options, refer to the [`Executing Tests Guide`](https://github.com/hpi-schul-cloud/e2e-system-tests/blob/main/docs/executing_tests_guide.md) section in README.
