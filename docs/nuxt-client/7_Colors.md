---
sidebar_position: 8
---

# Colors
In the [Material Design system](https://m2.material.io/design/color/the-color-system.html) (the foundation of our component library), colors and color schemes are used to create a visual hierarchy, direct focus, and enhance the user experience.

You can find our custom defined theme colors under `/src/themes/base-vuetify.options.ts` and their overwrites per theme in `/src/themes/<theme_name>/vuetify.options.ts`.

You can find the colors provided by Vuetify [here](https://vuetifyjs.com/en/styles/colors/#colors).

## Usage

### Color Classes

All colors defined by Vuetify or in our Vuetify options generate CSS classes you can use. To apply a color variant like `lighten-1`, add it to the color like `grey-lighten-1`.
Backgrounds have the `bg-`prefix and texts the `text-`prefix.

#### Examples

Using a color from Vuetify's color palette:

```html
<div class="bg-blue">
  Blue background
</div>
```

Using a color defined in our vuetify options as text color:

```html
<p class="text-red">
  Text has a red color
</p>
```

To use a variant of a color, you have to add the name of the variant seperated by hyphens:

```html
<p class="text-red-darken-1">
   Text has a darken variant of the red color
</p>
```

### Use Colors in (S)CSS

For colors defined in our Vuetify options, Vuetify generates CSS variables.
Now, custom properties are an rgb list, so we need to use `rgba()` to access them.

#### Examples

```scss
.alert {
  background-color: rgba(var(--v-theme-primary-lighten-1));
  color: rgba(var(--v-theme-primary));
}
```

In Vuetify 2, we could only use hex values without the alpha property.
With Vuetify 3, it's now possible:

```scss
.example{
  background-color: rgba(var(--v-theme-primary), 0.12);
}
```

Colors from Vuetify's colors palette (as of now) do not get generated as CSS variables. You will need to access them with `map-get`.

```scss
.alert {
  background-color: map-get($grey, base);
  color: map-get($blue, lighten-3);
}
```

### "On-Surface" and "On-Background" Colors

"On" colors are important for making text, icons, and other elements recognizable and readable on various backgrounds.

- `on-surface`: Used for text, icons, and other elements that appear on top of a surface. Surfaces can include components like cards, dialogs, and menus.

- `on-background`: Used for text, icons, and other elements that appear on the primary background of an application or a component

We override the standard `on-surface` and `on-background` vuetify colors in our vuetify options and define them for each theme.

## Definition Of Custom Colors

You can define more custom colors in our vuetify options like this:

```typescript
...
colors: {
  info: "#0a7ac9",
  "icon-btn": colors.grey.darken3,
  "on-surface": "#0f3551",
}
...
```

### Rules

- Talk to UX before introducing a new color
- Do not overwrite vuetify colors
- Use a semantic name to represent the use case
- Prefer usage via `map-get` over new color definition, unless you introduce a new color
- Either define style in template or in SCSS
