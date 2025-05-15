---
sidebar_position: 3
---

# Code Conventions

This guide provides coding conventions and best practices for writing feature files, naming folders, files, methods, and step definitions. Following these conventions will ensure consistency and maintainability across the test framework.

---

## 1. Writing Feature Files

### Template Structure

Use the following template when creating a feature file:

```gherkin
Feature: <Description of the user story or functionality>

  <As a --user--, I want to ---perform an action--- so that ---I can achieve a certain goal--->

  Scenario: <Short description of the scenario>

    Given <precondition>
    When  <action or interaction with the application>
    Then  <expected outcome>
```

### Guidelines

- **"When"** statements describe actions or interactions with the application.
- **"Then"** statements describe the expected results of those actions.
- Multiple **"When"** statements can precede a single **"Then"** statement:

  ```gherkin
  When <action 1>
  When <action 2>
  Then <result>
  ```

- It is acceptable to have multiple **"Then"** statements:

  ```gherkin
  When <action>
  Then <result 1>
  Then <result 2>
  ```

- Avoid using **"And"** statements. Use only **"When"** and **"Then"** for clarity.

---

## 2. Using Parameters in Feature Files

**Leveraging Example Tables with `Scenario Outline`**

When you need to run the same scenario with different sets of test data, use `Scenario Outline` along with Example Tables. This approach makes your test cases more efficient and maintainable.

`Scenario Outline` allows you to define steps with placeholders (`<parameter>`) that are substituted with values from the `Examples` table.

- **Example Usage**

  ```gherkin
  Feature: Create and delete a class

  As a teacher, I want to create and delete classes
  so that I can manage my courses effectively.

  Scenario Outline: Teacher creates and deletes a class
      Given a user with the role "<role>"
      When the user creates a class named "<className>"
      Then the class "<className>" should be visible in the list
      When the user deletes the class "<className>"
      Then the class "<className>" should no longer exist

  Examples:
      | role     | className  |
      | teacher  | Math101    |
      | teacher  | Science202 |
      | admin    | History300 |

  ```

**_Explanation_**

- The `Scenario Outline` defines the test steps using parameters like `<role>` and `<className>`.
- The `Examples` table provides multiple sets of data for each parameter.
- Each row in the`Examples` table will generate a separate test case with the specified values.

**_Benefits of Using Scenario Outlines_**

- **Reusability:** Allows you to reuse the same test steps for multiple sets of test data.
- **Maintainability:** Reduces code duplication and makes it easier to update test data.
- **Clarity:** Keeps the .feature file organized and easy to read.

---

## 3. Using Parameters for Special Test Data

In addition to `Scenario Outlines`, you can directly use parameters within feature files to specify dynamic values, such as task titles, or other context-specific data.

**Example:**

```gherkin
Feature: User login

  Scenario: Valid user login
    Given a user with the username "testUser" and password "Password123"
    When the user logs in
    Then the user should be redirected to the dashboard
```

In this case, parameters are directly embedded within the scenario steps without an `Examples` table.

---

## 4. Writing Step Definitions for Scenario Outlines

**_Step Definitions Example_**

Ensure that your step definitions are designed to handle the dynamic parameters from your feature files:

```js
Given('a user with the role {string}', role => {
  cy.loginAsRole(role)
})

When('the user creates a class named {string}', className => {
  cy.createClass(className)
})

Then('the class {string} should be visible in the list', className => {
  cy.verifyClassExists(className)
})

Then('the class {string} should no longer exist', className => {
  cy.deleteClass(className)
  cy.verifyClassDeleted(className)
})
```

**_Explanation_**

- The `{string}` syntax captures the parameter from the feature file.
- Each step is linked to the corresponding scenario, making your tests highly modular and reusable.

---

## 5. Naming Conventions

**_Folder Names_**

- Use `snake_case` for longer folder names.
  - Example: `common_logins`

**_Feature File Names_**

- Syntax: `verb + noun`
  - Example: `createCourse.feature`

**_Page Object File Names_**

- Syntax: `page + noun`
  - Example: `pageCourse.js`, `pageCommonCourse.js`

**_Class Names Inside Page Objects_**

- Syntax: `FirstWord_SecondWord`
  - Example: `Course`, `Course_Common`

**_Method Names Inside Classes_**

- Syntax: `verb + noun (CamelCase)`
  - Example: `fillCourseCreationForm()`

**_Variable Names_**

- Syntax: `verb + noun or noun + verb (CamelCase)`
  - Example: `userEmail`, `loginButton`

**_Data-testid Naming Convention_**

Test IDs are used to select elements on the web page, including buttons, input fields, and sections.

- Syntax: `firstword-secondword-thirdword`
  - Example: `content-card-task-menu-edit-icon`
- Usage: Assign test IDs to elements using:

  ```html
  <button data-testid="add-course-button">Add Course</button>
  ```

---

## 6. Writing Classes and Methods

**_Guidelines_**

- Assign test data IDs to a `static` variable with a `#` prefix so it indicate as a private variable within the class.
- Break down complex interactions into smaller methods within the class for better modularity.
- Refer to examples in the current end to end repository for guidance.

---

## 7. Writing Step Definitions

**_Step Definition Folder Structure_**

- Create a step definition file within `cypress/support/step_definitions/` based on the module name (e.g., rooms, courses, teams).
- The naming convention for step definition files is based on the module name, followed by `.spec.js`.
- Example:
  - `editCourseSteps.spec.js`
  - `commonCourseSteps.spec.js` (for shared steps across multiple scenarios)

**_Guidelines_**

- Follow the same sequence as the feature file for consistency.
- Create one common step definition file that can be reused across tests within the same module or across modules.
- For module-specific step definitions, comment out any common steps and include a reference to their location.

**_Example 1: Dedicated Module Step Definitions_**

```js
// editCourseSteps.spec.js
Given('a user is logged in', () => { /* ... */ });

When('the user edits the course details', () => { /* ... */ });

Then('the course should be updated', () => { /* ... */ });
```

**_Example 2: Referencing Common Step Definitions_**

```js
// commonCourseSteps.spec.js
Given('a user is logged in', () => { /* ... */ });

// editCourseSteps.js
// Commented out common steps with reference
// Refer to: commonCourseSteps.spec.js
When('the user edits the course details', () => { /* ... */ });

Then('the course should be updated', () => { /* ... */ });
```

---

## 8. Additional Best Practices

- Use consistent folder and file names as per the naming conventions above.
- Keep the user journey sequence the same in both .feature files and step definition files to enhance readability.
