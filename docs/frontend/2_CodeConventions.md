---
sidebar_position: 3
---

# Code Conventions

<!-- vscode-markdown-toc -->

- [Code-Conventions](#Code-Conventions)     
  - [data-testids](#data-testids)    
  - [ts-ignore-comments](#ts-ignore-comments)
  - [composables](#composables)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## data-testids

Please use `<div ... data-testid="some-example" ...>` in your HTML-code if you want to define a data-testid.

- do not use uppercase-characters
- only use one dash - right after data

We also recommend to use **ref**s instead of data-testids. But if you do that, you need to be careful when removing them... as they could be used in the component-code AND in tests:

- [VueJs - template refs](https://vuejs.org/guide/essentials/template-refs.html)
- [VueTestUtils - ref](https://v1.test-utils.vuejs.org/api/#ref)

Also look here: _Frontend Arc Group: Meeting Notes 2022-11-04_

## ts-ignore-comments

Everybody should try to avoid `// @ts-ignore` and try his/her best to define the types of variables in TypeScript files.

Also look here: _Frontend Arc Group: Meeting Notes 2022-10-28_

## composables

Composables are a great way to make our code more reusable and to extract code from components. If you want to write a composable, consider using one of these well documented and well tested ones:
[VueUse - Collection of Vue Composition Utilities](https://vueuse.org/)

If you write a composable:

- it should have the extension `.composable.ts`
- should be placed in your feature folder (see section "directory structure" above), if it is only used inside of your feature
- should be placed in the global folder `/ src / composables`, if it is used in multiple features
