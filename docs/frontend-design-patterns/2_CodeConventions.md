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

## Test Conventions

### Test Filename Conventions

Test files follow the same name as the file under test, with `.unit.ts` as an additional extension:

```
HelloWorld.vue          →       HelloWorld.unit.ts
foo-bar.composable.ts   →       foo-bar.composable.unit.ts
```


### Setup Methods

Separate test setup from actual tests by writing a `setup` function. Keep it
reusable and configurable to avoid redundant code across test groups:

```typescript
const setup = (props?: Partial<MyComponent['$props']>) => {
    const wrapper = mount(MyComponent, {
        props: {
            label: "default label",
            ...props,
        },
    });
    return { wrapper };
};

it('should display the label', () => {
    const { wrapper } = setup({ label: "custom label" });
    // ...
});

it('should not render the button', () => {
    const { wrapper } = setup();
    // ...
});
```

### Structure tests using "describe"-blocks

Especially in large test-files it is very helpful for the reader to have a tree-like structure grouping the tests. Use describe blocks to group tests that are related to the same aspect of your code/the functionality.

1. describe block that contains the filename in the root-level of the test-file
2. sub-describe-blocks for groups of tests focussing the same aspects of your code

*Example:*

```TypeScript
describe('ImportModal', () => {
    describe('when action button is clicked', () => {
        // ...
    });

    describe("when backend returns an error", () => {
        // ...
    });
});
```

### Test Naming

Use `it` instead of `test` and phrase each test as a natural sentence starting with "should":

```typescript
// Bad
it('name changes on button click', ...);

// Good
it('should display the info text', ...);
it('should not render migration start button', ...);
it('should return the translation', ...);
```

### data-testids

Refer to [Integration and Unit Tests](#integration-and-unit-tests) for the naming convention.
Test only input and output of your component, not internal implementation details. Use data-testids to check for the presence of certain elements or their content, but do not check for internal variables or methods of the component.

```TypeScript
it('should display the label', () => {
    const { wrapper } = setup({ label: "custom label" });
    expect(wrapper.find('[data-testid="label"]').text()).toBe("custom label");
});
```

