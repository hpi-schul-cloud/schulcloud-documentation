---
sidebar_position: 1
---

# Getting Started

This section provides instructions for setting up the Cypress-Cucumber test environment to ensure a smooth onboarding process.

---

## 1. Pre-requisites

Before getting started, ensure the following tools are installed:

- Node.js: Download Node v18
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

## 3. Setting Up Environment Configuration

1. Duplicate the `template.env.json` file located in the `env_variables` directory:

   - Rename the duplicated file to `local.env.json`.
   - Update `local.env.json` with your credentials and environment-specific variables from 1Password.
     - Ensure that the credentials match the correct namespace vault (staging, dev, etc.) in 1Password.

2. This configuration is required for accessing APIs, authentication, and other environment-specific services.

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

For more details on additional configurations and test options, refer to the [`Running Tests Guide`](https://github.com/hpi-schul-cloud/e2e-system-tests/blob/main/docs/running_tests_guide.md) section in README.
