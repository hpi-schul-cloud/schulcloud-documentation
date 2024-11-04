---
sidebar_position: 12
---
# Internationalisation (I18n)

[Relevant Docs of VueI18n](https://vue-i18n.intlify.dev/guide/advanced/typescript.html#typescript-support)

## How to Use in a component

1. Script Setup

```ts
<script lang="ts" setup>
// import original i18n composable 
import { useI18n } from "vue-i18n";
// import our I18n config for typehinting
import { I18nConfig } from "@/plugins/i18n";

const { t } = useI18n<I18nConfig>();

const translated = t('key.with.typehinting!');

</script>

```

```html
<template>
  {{ t('works.in.template.too!') }}
</template>

```


2. DefineComponent Setup

```ts
<script lang="ts" setup>
// import original i18n composable 
import { useI18n } from "vue-i18n";
// import our I18n config for typehinting
import { I18nConfig } from "@/plugins/i18n";

export default defineComponent({
  setup() {
    const { t } = useI18n<I18nConfig>();

    const translated = t('key.with.typehinting!');

    return {
      t // return t-Function to use it in the template!
    }
  }
})


</script>
```

```html
<template>
  {{ t('works.in.template.too!') }}
</template>

```

3. Global Setup (no typehinting)

```ts
<script lang="ts" setup>
 // Component Code
</script>
```

```html
<template>
  {{ $t('$t.does.not.have.typehinting') }}
</template>

```

