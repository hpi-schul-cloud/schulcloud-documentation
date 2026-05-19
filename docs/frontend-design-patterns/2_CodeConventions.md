# Code Conventions

## Accessing Elements

### Template Refs
Use [Vue template refs](https://vuejs.org/guide/essentials/template-refs.html) to
access elements within component code.

### Integration and Unit Tests
Use `data-testid` attributes for integration or unit tests.

- the attribute must be written as `data-testid` (no double dashes, no underscores)
- do not use uppercase characters
- use kebab-case for the value (e.g. `data-testid="submit-button"`)

## ts-ignore-comments

Try to avoid `// @ts-ignore` and try to define the types of variables everytime.

## Composables

Composables are a great way to make the code shareable among components or other composables. If you want to write a composable, consider using one of these well documented and well tested ones:
[VueUse - Collection of Vue Composition Utilities](https://vueuse.org/)

If you write a composable:

- its file name follows the pattern `<name>.composable.ts`, e.g. `foo-bar.composable.ts`
- place it in a feature or data building block
- place it in `/src/composables` only if it is used across multiple building blocks
