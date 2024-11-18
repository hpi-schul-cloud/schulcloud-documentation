---
sidebar_position: 4
---

# Tags

This section explains the tagging system used for Cypress and Cucumber tests. Tags help categorize and selectively run tests based on environments, test stability, or purpose.

---

## Tag Descriptions

- **@stable_test:** Tests that are stable and expected to pass in all environments.
- **@regression_test:** Tests run before a release to ensure core functionality.
- **@school_api_test:** Tests interacting with the school API.
- **@staging_test:** Tests specific to the staging environment.
- **@pr:** Tests run during the CI process for Pull Requests.
- **@unstable_test:** Tests that may fail intermittently due to environmental factors.
- **@group-A / @group-B:** Tags for grouping tests in parallel execution.
- **@schedule_run:** Tests tagged for scheduled runs in CI.

---

## Tag Hierarchy

- **Feature-level tags** apply to all scenarios within that feature, unless overridden at the scenario level.

**Examples:**

- **`@regression_test & @stable_test`**

  ```gherkin
  @regression_test
  Feature: Account Management

  @stable_test
  Scenario: Edit email as an internal user
      Given I am logged in as an internal user
      When I navigate to the account settings
      Then I should see that my email is editable
  ```

- **`@unstable_test`**

  ```gherkin
  @unstable_test
  Feature: Add-ons Management

  Scenario Outline: Access Add-ons page
      Given I am logged in as '<user_role>'
      When I navigate to the Add-ons page
      Then I should see the Add-ons interface

  Examples:
    | user_role |
    | admin     |
    | teacher   |
  ```

- **`@school_api_test & @staging_test`**

  ```gherkin
  @regression_test
  @stable_test
  Feature: User Management

  Scenario: Admin manages users
      Given I am logged in as an admin
      When I add a new user
      Then the user should appear in the list

  @school_api_test
  Examples: School API
      | user_role | user_email            |
      | admin     | admin@school.com      |

  @staging_test
  Examples: Staging
      | user_role | user_email            |
      | teacher   | teacher@staging.com   |
  ```

- **`@pr`**

  ```gherkin
  @pr
  Feature: Critical Paths

  Scenario: Verify homepage loads
      Given the application is deployed
      When I navigate to the homepage
      Then the homepage should load correctly
  ```

For detailed information on the full usage of tags, please refer to the [full documentation](https://github.com/hpi-schul-cloud/e2e-system-tests/blob/main/docs/tags.md) in README.
