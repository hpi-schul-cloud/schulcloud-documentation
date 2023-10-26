---
sidebar_position: 11
---
# Component-Development Guidelines

## HTML is not a string {#html-is-not-a-string}

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


## Composition over Configuration {#composition-over-configuration}

### Using slots for highly flexible ui components {#using-slots}

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

First you probably already notice that we demoted the label from HTML to being just a string again. _(See: HTML is not a string)_

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

Expanding the datastructure to support colors is easy, but it already starts t become quite difficult to read. The divider will be an actual problem. So far the datastructure was created to represent buttons. By adding the divider config object we will lose any uniformity of our config data. This will make it difficult to read, complicated to test und generally annoying to maintain.

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
             { label: "Option 1", action: callback1, color: 'default' }, 
             // how is the divider supposed to be represented in data? 
             { label: "Option 2", action: callback2, color: 'red' },
            ]">
</my-menu>
```
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

> **Rule:** Use Slots and small subcomponents to create robust and flexible features.

> **Rule:** Do not use datastructures to represent HTML.

### Destructure data over multiple components {#destructure-data-in-component-trees}

We often have to deal with complex data that we want to show to the user.

Take a look at this simplified example:

```ts
const users: User[] = [
  {
    id: 1,
    name: 'User 1',
    email: 'user1@example.com'
  }
  {
    id: 2,
    name: 'User 2',
    email: 'user2@example.com'
  }
]
```
:::note 
 **Requirements**
 * Display the User Array in a table
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

#### Destructuring Data

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

#### Option 1 - Passing the prop
We can pass the disabled value through our whole component tree. That is a completely valid and comparatively easy solution but it can quickly create a lot of boilerplate.

#### Option 2 - provide/inject
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

### Naming components in destructured component trees {#naming-in-destructured-trees}

Destructuring data over components can lead to many small components and picking meaningful names can become a challenge. 

To find a name without much effort whenever I am creating components I use a pattern-based approach: 

 * `<feature identifier><level><specific description>`

Let's analyze the naming in the `UserTable` example to illustrate the pattern: 

1. `UserTable`

> The root component of the implementation. Its name consists of the feature identifier `UserTable` and nothing else.

2. `UserTableHead`, `UserTableBody` and `UserTableRow`

> The children of the root component are named by the feature identifier and their appriopriate levels in the table: `Head`, `Body` and `Row`. They are still quite general components and do not need a specific description since they are unique to their levels.

3. `UserTableCellEmail`

> This is a highly specific component and therefore includes the feature identifier, the level and a specific description to reflect its specific usecase.

Following this pattern makes it quite easy to name things while destructuring. It also leads to a well organized folder in the workspace explorer since components on the same level will be listed closely together - e.g. all `UserTableCell`-components have the same "prefix".

The most difficult part in my experience is finding a good name for the `level`-part of the name. I usually try to use names that reflect the component as an HTML-Element: names of the part of a table, `list` and `list-item` for list-structures or `option` when dealing with dropdowns etc.