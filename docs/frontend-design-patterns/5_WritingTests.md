---
sidebar_position: 6
---

# Writing Tests

How to write valuable, reliable tests, that are easy to maintain.

## Basics

Writing good tests that cover all aspects of your code, leads to:

- **confidence**: to refactor your code
- **higher code quality**: as you review your code and identify problems when writing tests
- **well documented code**: as your tests describe how your code works

and by that to:

- **developer happiness** :-)

### Test Filename Conventions

Test files follow the same name as the file under test, with `.unit.ts` as an additional extension:

```
HelloWorld.vue          →       HelloWorld.unit.ts
foo-bar.composable.ts   →       foo-bar.composable.unit.ts
```

### Unit-Tests vs. Component-Tests

#### Unit-Tests

Unit-Tests are suited for testing isolated logic like **composables**, **stores** and **utils**.
Test only input and output — do not rely on internal implementation details.

#### Component-Tests

Component-Tests ensure the stability of the **public interface** of a component
(props, events, slots, exposed methods). Test only input and output — do not rely
on internal implementation details.

This allows refactoring the internals of a component without breaking tests.

### Positive & negative Tests

- **positive tests** test the default cases of your code = **how it should work**
- **negative tests** test **error-cases** or **exception**-behaviour
- you need to write both to ensure your component works correctly
- think of edge-cases that might break your component e.g. when providing input to the component:
  - **numbers**: high numbers, negative numbers, float\<->integer, at the edge of a range that is expected...
  - **dates**: none existing dates e.g. 30th February 2023, far away future,...
  - **strings**: umlauts, url-special-characters (?, &, =, \/\/: ), very long strings for names, long strings without linebreaks
  - **totally incorrect data**: e.g. giving a string instead of a number

### Use Vue-Test-Utils

For testing Vue-Components [**Vue Test Utils**](https://github.com/vuejs/test-utils) is in use and is recommended to be used.
Have a look at their [**Getting Started Guide**](https://test-utils.vuejs.org/guide).

### Structure tests using (multiple) "describe"-blocks

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
Refer to code conventions at: [Integration and Unit Tests](./2_CodeConventions.md#integration-and-unit-tests) 
and test only input and output of your component, not internal implementation details. Use data-testids to check for the presence of certain elements or their content, but do not check for internal variables or methods of the component.

```TypeScript
expect(
  wrapper.find('[data-testid="copy-result-notifications"]').text())
        .toContain(  "components.molecules.copyResult.fileCopy.error");
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
    expect(wrapper.find('[data-testid="label"]').text()).toBe("custom label");
});

it('should not render the button', () => {
    const { wrapper } = setup();
    expect(wrapper.find('[data-testid="button"]').exists()).toBe(false);
});
```

## Testing

### Events

Use `trigger()` to simulate DOM events:

```typescript
// Mouse click
await wrapper.find('[data-testid="submit-button"]').trigger("click");

// Keyboard input
await wrapper.find('[data-testid="input"]').trigger("keydown.enter");

// Drag & Drop — trigger the events and assert on emitted events
await wrapper.find('[data-testid="card"]').trigger("dragstart");
await wrapper.find('[data-testid="target"]').trigger("drop");
expect(wrapper.emitted("item-dropped")).toBeTruthy();

// Event from a child component
await wrapper.findComponent(ChildComponent).vm.$emit("my-event", payload);
```

### Testing Asynchronous Behavior

Always `await` triggered events — VueTestUtils handles DOM updates automatically:

```typescript
await wrapper.find('[data-testid="dialog-next"]').trigger("click");
expect(wrapper.find('[data-testid="result"]').text()).toBe("expected");
```

If you need to wait for the next DOM update cycle explicitly:

```typescript
await nextTick();
```

Further reading: [VueTestUtils - Asynchronous Behavior](https://test-utils.vuejs.org/guide/advanced/async-suspense.html)

### Exceptions

```TypeScript
await expect(() => copyMock(payload)).rejects.toThrow(
    `CopyProcess unknown type: ${payload.type}`
);
```

## Mocking

Replace external dependencies (stores, services, composables) with controlled
implementations to simulate specific scenarios like failing requests or defined
return values — without involving the real implementation.

```typescript
// simple return value
const mock = vi.fn().mockReturnValue(expectedTranslation);

// async return value
copyModuleMock.copyByShareToken = vi.fn().mockResolvedValue(copyResults);

// assert it was called
expect(copyModuleMock.copyByShareToken).toHaveBeenCalled();

// assert it was called with specific arguments
expect(addFileMetaDataSpy).toHaveBeenCalledWith(
        expect.objectContaining<FileMetaListResponse>({ size: 2 } as FileMetaListResponse)
);
```

### Mocking composables

[vitest-mock-extended](https://github.com/eratio08/vitest-mock-extended) is used for
type-safe mocks. For mocking composables, a `mockComposable` helper is available:

```typescript
// mocking a composable with default mock values
const mockUseMyComposable = mockComposable(useMyComposable);

// mocking a composable with specific return values
const mockUseMyComposable = mockComposable(useMyComposable, {
    myValue: ref("some-value"),
    myMethod: vi.fn().mockResolvedValue(result),
});
```

### Mocking injections

- [VueTestUtils - provide / inject](https://test-utils.vuejs.org/guide/advanced/reusability-composition.html#Provide-inject)

### Mocking Pinia Stores

Set up Pinia in `beforeEach` using `createTestingPinia`:

```typescript
beforeEach(() => {
    setActivePinia(createTestingPinia({ stubActions: true })); // set stubActions as needed
    createTestEnvStore({ SC_THEME: SchulcloudTheme.DEFAULT });
});
```

`createTestEnvStore` is a test setup utility that initializes the env store with a
defined configuration. Similar utilities should be provided for other stores that
require a defined initial state.

To get a typed mock instance of a store, use `mockedPiniaStoreTyping`. All store
actions are replaced by `vi.fn()` mock functions:

```typescript
import { mockedPiniaStoreTyping } from "@@/tests/test-utils";

it("should call createBoard with correct params", () => {

  beforeEach(() => {
    setActivePinia(createTestingPinia({ stubActions: true })); // set stubActions as needed
  });

  const setup = () => {
    const { envStore } = createTestEnvStore({ SC_THEME: SchulcloudTheme.DEFAULT });
    return { envStore };
  };
    

    it("should call createBoard with correct params", () => {
      const { envStore } = setup();
  
      expect(envStore.doFooBar).toHaveBeenCalled();
    });
});
```
