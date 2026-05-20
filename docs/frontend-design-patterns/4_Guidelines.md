# Coding Guidelines

This page covers patterns and guides for common development tasks in the Vue-Frontend.

## Using generated API and its types

A generator script is used to create typescript code to access the Schulcloud-Backend-API V3
(Legacy-Backend endpoints aka V1 are not covered). These generated methods
internally use axios to request data, as well as generated types for both input and
return values.

### Regenerating the clients

Regenerate the clients only if one of the backend APIs has changed. The available
npm-scripts follow this pattern:

```shell
npm run generate-client:<api-key>
```

> **Hint**
>
> Regenerating the clients requires an up-to-date running backend-server in your environment.

### Using the generated API

The generated APIs are accessible via tsconfig path aliases:

| Alias | API |
|---|---|
| `@api-server` | Schulcloud-Backend V3 |
| `@api-file-storage` | File Storage Backend |
| `@api-fwu` | FWU |
| `@api-h5p` | H5P Editor |
| `@api-common-cartridge` | Common Cartridge |

Import directly from the alias and instantiate the factory with `$axios`:

```typescript
import { RoomApiFactory } from "@api-server";
import { $axios } from "@/utils/api";

const useRooms = () => {
  const { t } = useI18nGlobal();
  const roomApi = RoomApiFactory(undefined, "/v3", $axios);
  const { execute } = useSafeAxiosTask();

  const fetchRooms = async () => {
    const { result } = await execute(
            () => roomApi.roomControllerGetRooms(),
            t("common.notifications.errors.notLoaded", { type: t("common.labels.room") })
    );
    return result;
  };

  return { fetchRooms };
};
```

## User-Permissions on Pages

Page access is controlled by the `createPermissionGuard` middleware, which is applied
via `beforeEnter` in `src/router/routes.ts`. It receives two parameters:

- an array of required `Permission` values — the user must have all of them to access the page
- an optional fallback route — if omitted, the user is redirected to a `401` error page

```typescript
// routes.ts

export const routes: Readonly<RouteRecordRaw>[] = [
    // with a fallback route
    {
        path: "/your/route",
        component: () => import("@/pages/your.page.vue"),
        name: "your-route-name",
        beforeEnter: createPermissionGuard([Permission.ADMIN_VIEW], "/your-fallback-route"),
    },
    // without a fallback — shows a 401 page if the user lacks permissions
    {
        path: "/your/other-route",
        component: () => import("@/pages/your-other.page.vue"),
        name: "your-other-route-name",
        beforeEnter: createPermissionGuard([Permission.ADMIN_VIEW, Permission.SCHOOL_EDIT]),
    },
];
```

## Feature Flags

If new functionality should only be available on certain systems, introduce a new
feature flag in the SchulCloud-Backend and in the dof-repository, which contains the
configuration for all instances.

The Vue-Frontend requests all feature flags and provides global access to them
(example):

```typescript
import { useEnvConfig } from "@data-env";
if (useEnvConfig().value.FEATURE_COPY_SERVICE_ENABLED) {
  // ...
}
```

## Exception Handling

Errors should be communicated to the user via `notifyError` or at least using `notifyWarning`, using a translation key:

```typescript
notifyError("your.error.translation.key");
notifyWarning("your.warning.translation.key");
```

If it is necessary to redirect the user away from the current page to an error page, raise an application error instead:

```typescript
useAppStore().handleApplicationError(HttpStatusCode.Unauthorized, "components.board.error.401");
```

## Component Categories

### Svs-Components (`Svs` prefix)
Cross-feature components that ensure consistent look and feel across the application.
They wrap Vuetify or are standalone and define the application-wide defaults.
Use them as the foundation wherever possible.

> **Note:** The `Svs` prefix convention is relatively new and not yet consistently
> applied across the codebase. Components of this kind may therefore exist without
> the prefix. All components of this category — with or without prefix — should be
> located in a `ui` building-block under the module structure. The prefix primarily
> serves to distinguish library-like components from feature components in markup.

```html
<SvsDialog></SvsDialog>
```

### Feature Components
The majority of components fall into this category. They implement specific
functionality within a feature and do not need to follow strict composition patterns.

```html
<RoomBoardCard />
```

---

### When to split a component

Splitting a component is not primarily about reuse — it is about keeping code
readable, testable and maintainable. Consider splitting when:

- **The template becomes hard to read** — if you need to scroll or mentally parse
  a lot of nesting to understand what a template does, it is too large
- **A part of the template has a clear, isolated responsibility** — if a section
  of a template clearly "does one thing", it deserves its own component
- **Testing becomes difficult** — if setting up a test requires a lot of unrelated
  context, the component is likely doing too much
- **A piece of state only belongs to part of the template** — isolating it into a
  child component keeps state management focused

There is no strict rule on size, but a template that exceeds ~100 lines is usually
a signal to reconsider.

---

## Component Development Guidelines

### HTML is not a string

Imagine writing a basic component to add reusable buttons to your app.
The first iteration might look like this when using it:

```html
<my-button></my-button>
```

The next step might be adding a way to set the button label.

```html
<my-button :label="'MyButton'"></my-button>
```

Careful! The label-prop is just a **string**. This will limit your Button to only being able to have text-based Labels in the future. It is a lot less flexible because the **power of HTML was removed completely**.

Compare it to this button:

```html
<my-button>MyButton</my-button>
```

The label stays within the realm of HTML and we don't lose any HTML capabilities:

```html
<my-button>Two Line <br> Button!</my-button>

<my-button>Button with <my-icon :icon="mdiCheck" /> in the label!</my-button>
```

Both of these examples are (almost) impossible with a prop-based label.

> **Rule:** Readable text should be HTML and not a string-prop.

### Composition over Configuration

#### Using slots for highly flexible ui components

Let's build a simple vertical-menu with two clickable options and add more and more requirements as we go.

:::note
**Requirements**
* Menu with two clickable options
  :::
```html
<ul>
  <li>
    <my-button>Option 1</my-button>
  </li>
  <li>
    <my-button>Option 2</my-button>
  </li>
</ul>
```
:::note
**Updated Requirements**
* ~~Menu with two clickable options~~
* Menu with any number of clickable options
  :::
  To make our menu reusable, one approach might be to add an options prop:

```html
<!-- MyMenu.component.vue-->
<template>
  <ul>
    <li v-for="let option in options">
      <my-button @click="option.action">{{option.label}}</my-button>
    </li>
  </ul>
</template>

<!-- usage -->

<my-menu 
  :options="[
             { label: "Option 1", action: callback1 }, 
             { label: "Option 2", action: callback2 },
            ]">
</my-menu>
```

This approach has two major problems:
First you probably already notice that we demoted the label from HTML to being just a string again. _(See: [HTML is not a string](#html-is-not-a-string))_
Second we abstracted the structure of our menu into an Array. This replaces perfectly good HTML with a datastructure.

Take a look at this HTML-based approach:

```html
<my-menu>
  <my-menu-option @click="callback1">Option 1</my-menu-option>
  <my-menu-option @click="callback2">Option 2</my-menu-option>
</my-menu>
```

The original HTML-structure is preserved and only the default elements (`ul`, `li`, `button`) are abstracted in their own components. This leaves a lot of flexibility to interact with the structure (e.g. toggling options with v-if) while still making sure that the rendered output is valid.

Additionally, this is much easier to test since we do not have to deal with datastructures.
:::note
**Updated Requirements**
* Menu with any number of clickable options
* Menu-Options can be colored
* Any number of Menu-Dividers can be placed at any position in the menu
  :::
  Adding these new requirements in the HTML approach is very straightforward. We just have to add a prop to each `my-menu-option` to pick a color. Then we create a new `my-menu-divider` component.

Expanding the datastructure to support colors is easy, we just have to add a `color`-property. But the divider will be an actual problem. So far the datastructure was created to represent buttons. By adding the divider config object we will lose any uniformity of our config data. This will make it difficult to read, complicated to test und generally annoying to maintain.

Compare the two solutions in code:

```html
<!-- HTML approach -->
<my-menu>
  <my-menu-option @click="callback1">Option 1</my-menu-option>
  <my-menu-divider />
  <my-menu-option :color="'red'" @click="callback2">
    Option 2
  </my-menu-option>
</my-menu>

<!-- Datastructure approach -->
<my-menu 
  :options="[
             { label: "Option 1", action: callback1, color: 'default', type:'button' }, 
             { type: 'divider' },
             { label: "Option 2", action: callback2, color: 'red', type:'button' },
            ]">
</my-menu>
```

We can already see the datastructure approach falling apart. For complex menus this will be completely ineligible and difficult to understand.

Let's add more requirements to get closer to a real world menu.

:::note
**New Requirements**

* Menu with any number of clickable options
* Menu-Options can be colored
* Any number of Menu-Dividers can be placed at any position in the menu
* Menu-Options should have a disabled state
* Menu-Options can be a button or link
* Menu-Options can be nested dropdowns
  :::

```html
<!-- HTML approach -->
<my-menu>
  <my-menu-option @click="callback1" :disabled="true">Option 1</my-menu-option>
  <my-menu-divider />
  <my-menu-option :color="'red'" @click="callback2">Option 2</my-menu-option>
  <my-menu-link :href="'wikipedia.com'">Link 1</my-menu-option>
  <my-menu-nested-option>
    <template #default> <!--Default slot for button label-->
      Nested Option 
    </template>
    <template #options> <!--Named slot for options in the inner menu-->
       <my-menu-option @click="callback3">Option 3</my-menu-option>
       <my-menu-divider />
       <my-menu-option @click="callback4">Option 4</my-menu-option>
    </template>
  </my-menu-nested-option>
</my-menu>

<!--Datastructure approach-->

<good-luck>😅</good-luck>
```

> **Rule:** Use `slot` and small subcomponents to create robust and flexible features.

> **Rule:** Do not use datastructures to represent HTML.

#### Destructure data over multiple components

We often have to deal with complex data that we want to show to the user.

Take a look at this simplified example:

```ts
const users: User[] = [
  {
    id: 1,
    name: 'User 1',
    email: 'user1@example.com'
  },
  {
    id: 2,
    name: 'User 2',
    email: 'user2@example.com'
  }
]
```
:::note
**Requirements**
* Display the user array in a table
  :::
```html
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="let user in users">
      <td>{{user.id}}</td>
      <td>{{user.name}}</td>
      <td>{{user.email}}</td>
    </tr>
  </tbody>
</table>
```

This template will quickly get large and hard to understand if we were to add styling, more fields of our user object or even interactions like editing or deleting entries.

How can we easily split up the template?

##### Destructuring Data

A rule of thumb can be to not handle more than one level of your data structure in a single component. The `User` object consists of three levels:

1. `Array`
2. `Object`
3. `Property`

We can use this list to create subcomponents for the table:

1. `UserTable`
> the host component where all components come together
>
> This will also be the outside Api of our implementation

2. `UserTableBody`
> Component responsible for the `Array`-level of our data

3. `UserTableRow`
> Component responsible for the `Object`-level of our data

4. `UserTableHeader`
> Encapsulate `<thead>`

```html
<!--UserTable.vue-->
<!--props: User[]-->
<template>
  <user-table-head />
  <user-table-body :users="users"></user-table-body>
</template>

<!--UserTableHead.vue-->
<template>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
</template>

<!--UserTableBody.vue-->
<!--props: User[]-->
<template>
  <tbody>
    <user-table-row v-for="let user in users" :user="user">
    </user-table-row>
  </tbody>
</template>

<!--UserTableRow.vue-->
<!--props: User-->
<template>
  <tr>
    <td>{{user.id}}</td>
    <td>{{user.name}}</td>
    <td>{{user.email}}</td>
  </tr>
</template>
```

Splitting up the table into these sub-components keeps the template short and less complex. It also makes testing much easier since each level is only concerned about a certain part of the complexity in the data.

:::note
**New Requirements**
* Display the User Array in a table
* Deleting users should be possible
  :::
  To add the new interaction button we will have to place it at the end of each row. To have a more pronounced structure we will place this button in a new component `UserTableActions`. This creates a well defined place for adding more actions in the future. We also have to expand `UserTableHead` by one `<th>`.

```html
<!--UserTableRow.vue-->
<!--props: User-->
<template>
  <tr>
    <td>{{user.id}}</td>
    <td>{{user.name}}</td>
    <td>{{user.email}}</td>
    <td>
      <user-table-actions @delete="onDelete" @edit="onEdit"/>
    </td>
  </tr>
</template>

<!--UserTableActions.vue-->
<template>
  <button @click="emit('delete')">Delete</button>
</template>
```

Adding this action also reveals the biggest disadvantage of this approach: **We have to pass the emit all the way up to `UserTable` component**. Since all children of `UserTable` are ui-components they cannot access any state or the api.

> **Updated Requirements**
> * Display the User Array in a table
> * Deleting users should be possible
> * Delete button should be disabled while an async request is pending

Let's ignore state interactions for this example. But to fulfil this requirement we will add a `disabled`-prop to `UserTable` so that our outside logic can disable the buttons while requests are pending. But how do we deal with this internally.

##### Option 1 - Passing the prop
We can pass the disabled value through our whole component tree. That is a completely valid and comparatively easy solution but it can quickly create a lot of boilerplate.

##### Option 2 - provide/inject
[Vue Docs: Prop-Drilling & provide/inject](https://vuejs.org/guide/components/provide-inject.html#prop-drilling). This can safe some development time since we don't have to deal with all the boilerplate of _Option 1_
but it can also lead to a mess of injections if not used carefully. Since this table and it's children are already heavily dependant on each other (they serve one shared purpose: Displaying a User-Table) we can use prop-drilling if we keep the injection-key as a private property of the module.

> **Updated Requirements**
> * Display the User Array in a table
> * Deleting users should be possible
> * Delete button should be disabled while an async request is pending
> * The Email should be a mailto-Link

Remember the three levels of our data: `Array` > `Object` > `Property`.
So far we have destructured the `Array` and `Object` levels into separate components. The new requirement could be implemented like this:

```html
<!--UserTableRow.vue-->
<!--props: User-->
<template>
  <tr>
    <td>{{user.id}}</td>
    <td>{{user.name}}</td>
    <td>
      <a :href="'mailto:' + user.email">{{user.email}}</a>
    </td>
    <td>
      <user-table-actions @delete="onDelete" @edit="onEdit"/>
    </td>
  </tr>
</template>
```

While this template is still easy to understand in this simplified example, if we imagine a table with over 10 columns and a few lines of HTML for each table-cell we can see that this will get messy quite quickly.

A great possibility to keep the template clean is to destructure one more level, down to the `Property`:

```html
<!--UserTableRow.vue-->
<!--props: User-->
<template>
  <tr>
    <td>{{user.id}}</td>
    <td>{{user.name}}</td>
    <td>
      <user-table-cell-email :email="user.email" />
    </td>
    <td>
      <user-table-actions @delete="onDelete" @edit="onEdit"/>
    </td>
  </tr>
</template>

<!--UserTableCellEmail.vue-->
<!--props: String-->
<template>
  <a :href="'mailto:' + email">{{email}}</a>
</template>
```

Note that we did not create components for the `id` and `name` properties. Since they are not handled any differently they can just be shown using interpolation.

> **Rule**: Create a sub-component for each meaningful level in your data

> **Rule**: Use `provide/inject` of props only in small and defined scopes



## Writing Tests

How to write valuable, reliable tests that are easy to maintain.

### Basics

Writing good tests that cover all aspects of your code, leads to:

- **confidence**: to refactor your code
- **higher code quality**: as you review your code and identify problems when writing tests
- **well documented code**: as your tests describe how your code works

#### Unit-Tests vs. Component-Tests

##### Unit-Tests

Unit-Tests are suited for testing isolated logic like **composables**, **stores** and **utils**.
Test only input and output — do not rely on internal implementation details.

##### Component-Tests

Component-Tests ensure the stability of the **public interface** of a component
(props, events, slots, exposed methods). Test only input and output — do not rely
on internal implementation details.

This allows refactoring the internals of a component without breaking tests.

#### Positive & negative Tests

- **positive tests** test the default cases of your code = **how it should work**
- **negative tests** test **error-cases** or **exception**-behaviour
- you need to write both to ensure your component works correctly
- think of edge-cases that might break your component e.g. when providing input to the component:
    - **numbers**: high numbers, negative numbers, float\<->integer, at the edge of a range that is expected...
    - **dates**: none existing dates e.g. 30th February 2023, far away future,...
    - **strings**: umlauts, url-special-characters (?, &, =, \/\/: ), very long strings for names, long strings without linebreaks
    - **totally incorrect data**: e.g. giving a string instead of a number

#### Use Vue-Test-Utils

For testing Vue-Components [**Vue Test Utils**](https://github.com/vuejs/test-utils) is in use and is recommended.
Have a look at their [**Getting Started Guide**](https://test-utils.vuejs.org/guide).

### Testing Events

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

Sometimes you may want to ensure other, non Vue-related asynchronous behavior is completed, too.
This can be achieved using `flushPromises()`.

```typescript
await flushPromises();
```

Further reading: [VueTestUtils - Asynchronous Behavior](https://test-utils.vuejs.org/guide/advanced/async-suspense.html)

### Exceptions

```TypeScript
await expect(() => copyMock(payload)).rejects.toThrow(
    `CopyProcess unknown type: ${payload.type}`
);
```

### Mocking

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

#### Mocking composables

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

#### Mocking injections

- [VueTestUtils - provide / inject](https://test-utils.vuejs.org/guide/advanced/reusability-composition.html#Provide-inject)

#### Mocking Pinia Stores

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
    const { envStore } = createTestEnvStore({ SC_THEME: SchulcloudTheme.DEFAULT });
  });

    it("should call createBoard with correct params", () => {
      const envStore = mockedPiniaStoreTyping(useEnvStore);
      expect(envStore.doFooBar).toHaveBeenCalled();
    });
});
```
