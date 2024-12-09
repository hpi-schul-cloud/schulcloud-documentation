---
sidebar_position: 2
---

# Project Structure

Understanding the project directory layout will help you navigate and manage the Cypress-Cucumber E2E test framework effectively. This section provides a detailed breakdown of the folder structure and the purpose of each component.

---

## Project Directory Layout

```sh
(root)
|
|---- .github/
|     |____ automatic-trigger.yml          # GitHub Actions workflow for automatic triggers
|     |____ manual-trigger.yml             # GitHub Actions workflow for manual runs
|     |____ scheduled-trigger.yml          # GitHub Actions workflow for scheduled runs
|     |____ main.yml                       # GitHub Actions workflow for reusable jobs
|
|---- .vscode/                             # Settings for recommended VS Code extensions
|
|---- env_variables/
|     |____ template.env.json              # Template for credentials & environment variables (rename as `local.env.json`)
|
|---- cypress/
|     |___ downloads/                      # Downloaded files during tests
|     |___ fixtures/                       # Test data files
|     |___ e2e/                            # Gherkin feature files
|     |___ screenshots/                    # Screenshots taken on test failures
|     |___ support/
|         |___ custom_commands/            # Custom Cypress commands used in tests
|         |___ pages/                      # Page Object methods for better test modularity
|         |___ step_definitions/           # Step definitions for feature files
|         |___ commands.js                 # Custom Cypress commands configuration
|         |___ e2e.js                      # Global hooks and configurations
|     |___ videos/                         # Recorded test run videos
|
|---- docs/
|      |___ branch_activation.md
|      |___ folder_structure.md
|      |___ executing_tests.md
|      |___ setup.md
|      |___ tags.md
|
|---- env_variables/
|      |___ devTemplate.env.json
|      |___ stagingTemplate.env.json
|
|---- reports/                             # HTML reports and related assets
|
|---- logs/                                # Logs generated during test runs
|
|---- node_modules/                        # Project dependencies
|
|---- scripts/
|     |____ aggregate-json-files.sh        # Script to aggregate JSON files in CI
|     |____ runSchoolApi.js                # Script to interact with the School API
|
|---- .editorconfig                        # Editor configuration for consistent formatting
|---- .gitattributes                       # Git attributes for line endings and diff
|---- .prettierignore                      # Files and folders ignored by Prettier
|---- .prettierrc                          # Prettier configuration for code formatting
|---- .gitignore                           # Git ignore rules
|---- reporter.js                          # Custom reporter for generating HTML reports
|---- cypress.config.json                  # Cypress configuration settings
|---- LICENSE                              # License file
|---- package-lock.json                    # npm package lock file
|---- package.json                         # Project dependencies and scripts
|---- README.md                            # Project documentation and setup guide

```

### Explanation of Key Directories and Files

- **.github/:** Contains CI/CD workflows for automated, manual, and scheduled test executions.
- **.vscode/:** Recommended settings for VS Code extensions to maintain consistent coding standards.
- **env_variables/:** Holds environment configuration files. Duplicate `template.env.json` and rename it to `local.env.json` for local testing.
- **cypress/:** The main directory for Cypress tests.
- **fixtures/:** Stores reusable test data.
- **e2e/:** Contains all Gherkin .feature files.
- **support/:** Includes custom commands, page objects, and step definitions.
- **videos/ & screenshots/:** Captures test artifacts.
- **docs/:** Additional documentation for tags, configurations, and best practices.
- **reports/:** Contains HTML reports generated after test runs.
- **scripts/:** Helpful scripts for CI/CD and API interactions.
- **.prettierrc & .editorconfig:** Configuration files to enforce consistent coding styles.
- **cypress.config.json:** Central configuration file for Cypress test settings.
- **reporter.js:** Custom script to generate detailed HTML reports.
