# Style Guide

## Farben

Farben werden als CSS Properties eingebunden, häufig mit Transparenz:

```
color: rgba(var(--v-theme-primary));
background-color: rgba(var(--v-theme-on-surface), 0.6);
```

### Theme

#### Instanzen der Bundesländer
`src/themes/vuetify-theme.options.ts`

| Farbe | Token | Hex | Verwendung |
|---|---|---|---|
| <span class="swatch swatch-2370cb"></span> | `primary` | `#2370CB` | Button, Toolbar, Switch, Checkbox, Select, Fortschrittsbalken |
| <span class="swatch swatch-1e599c"></span> | `primary-darken-1` | `#1e599c` | DataTable-Header, Sortier-Icon |
| <span class="swatch swatch-e9f1fa"></span> | `primary-lighten` | `#e9f1fa` | Card-Header (z.B. Neuigkeiten) |
| <span class="swatch swatch-0f3551"></span> | `on-surface-light` / `on-surface` /<br /> `on-background` / `on-white` | `#0f3551` | Text, Icons, Chip-Text, Alert-Text |
| <span class="swatch swatch-f2f5f9"></span> | `surface-light` | `#f2f5f9` | Boards (in Räumen), Filter (in Aufgaben) |

#### dBildungscloud
`src/themes/base-vuetify-theme.options.ts`

| Farbe | Token | Hex | Verwendung |
|---|---|---|---|
| <span class="swatch swatch-9e292b"></span> | `primary` | `#9e292b` | Button, Toolbar, Switch, Checkbox, Select, Fortschrittsbalken |
| <span class="swatch swatch-800416"></span> | `primary-darken-1` | `#800416` | DataTable-Header, Sortier-Icon |
| <span class="swatch swatch-f5eaea"></span> | `primary-lighten` | `#f5eaea` | Card-Header (z.B. Neuigkeiten) |
| <span class="swatch swatch-3a424b"></span> | `on-surface-light` / `on-surface` /<br /> `on-background` / `on-white` | `#3a424b` | Text, Icons, Chip-Text, Alert-Text |
| <span class="swatch swatch-f3f4f4"></span> | `surface-light` | `#f3f4f4` | Boards (in Räumen), Filter (in Aufgaben) |

### Hintergrund
`src/themes/base-vuetify-theme.options.ts`

| Farbe | Token | Hex | Verwendung |
|---|---|---|---|
| <span class="swatch swatch-4e555d"></span> | `surface-variant` | `#4E555D` | Avatar, Tooltip (Hintergrund) |
| <span class="swatch swatch-f7f7f8"></span> | `on-surface-variant` | `#F7F7F8` | Text/Icons auf `surface-variant` |
| <span class="swatch swatch-ffffff"></span> | `white` | `#ffffff` | Toolbar, Board |

### Info, Warnung, Fehler
`src/themes/base-vuetify-theme.options.ts`

| Farbe | Token | Hex | Verwendung |
|---|---|---|---|
| <span class="swatch swatch-0a7ac9"></span> | `info` | `#0a7ac9` | Alert, Chip |
| <span class="swatch swatch-13ba98"></span> | `success` | `#13ba98` | Alert, Status-Icon |
| <span class="swatch swatch-ff8311"></span> | `warning` | `#ff8311` | Alert, Chip, Status-Icon (Tool deaktiviert/veraltet) |
| <span class="swatch swatch-ed0122"></span> | `error` | `#ed0122` | Alert, Chip, Status-Icon, Fehlertext |

### Räume

#### Raum-Farben

`src/styles/utility/_room-colors.scss`

| Farbe | CSS-Klasse | Hex |
|---|---|---|
| <span class="swatch swatch-455b6a"></span> | `.room-color--blue-grey` | `#455b6a` |
| <span class="swatch swatch-ec407a"></span> | `.room-color--pink` | `#ec407a` |
| <span class="swatch swatch-d50000"></span> | `.room-color--red` | `#d50000` |
| <span class="swatch swatch-ef6c00"></span> | `.room-color--orange` | `#ef6c00` |
| <span class="swatch swatch-827717"></span> | `.room-color--olive` | `#827717` |
| <span class="swatch swatch-689f38"></span> | `.room-color--green` | `#689f38` |
| <span class="swatch swatch-009688"></span> | `.room-color--turquoise` | `#009688` |
| <span class="swatch swatch-0091ea"></span> | `.room-color--light-blue` | `#0091ea` |
| <span class="swatch swatch-304ffe"></span> | `.room-color--blue` | `#304ffe` |
| <span class="swatch swatch-d500f9"></span> | `.room-color--magenta` | `#d500f9` |
| <span class="swatch swatch-9c27b0"></span> | `.room-color--purple` | `#9c27b0` |
| <span class="swatch swatch-795548"></span> | `.room-color--brown` | `#795548` |
| <span class="swatch swatch-ffc107"></span> | `.room-color--yellow` | `#ffc107` |

### Boards

#### Hintergrundfarben für Karten in Boards (`lighten5`)

`src/utils/color.utils.ts`

| Farbe | `Colors`-Enum | Hex |
|---|---|---|
| <span class="swatch swatch-ffffff"></span> | `transparent` | `#ffffff` |
| <span class="swatch swatch-f1f8e9"></span> | `lightGreen` | `#f1f8e9` |
| <span class="swatch swatch-e8f5e9"></span> | `green` | `#e8f5e9` |
| <span class="swatch swatch-e0f7fa"></span> | `cyan` | `#e0f7fa` |
| <span class="swatch swatch-e3f2fd"></span> | `blue` | `#e3f2fd` |
| <span class="swatch swatch-e8eaf6"></span> | `indigo` | `#e8eaf6` |
| <span class="swatch swatch-f3e5f5"></span> | `purple` | `#f3e5f5` |
| <span class="swatch swatch-fce4ec"></span> | `pink` | `#fce4ec` |
| <span class="swatch swatch-fbe9e7"></span> | `deepOrange` | `#fbe9e7` |
| <span class="swatch swatch-fff8e1"></span> | `amber` | `#fff8e1` |
| <span class="swatch swatch-eceff1"></span> | `blueGrey` | `#eceff1` |

#### Schriftfarbe im CK5 Editor

`src/modules/feature/editor/config.ts`

| Farbe | Label | Hex |
|---|---|---|
| <span class="swatch swatch-827717"></span> | Olive Green | `#827717` |
| <span class="swatch swatch-388e3c"></span> | Green | `#388E3C` |
| <span class="swatch swatch-00838f"></span> | Turquoise | `#00838F` |
| <span class="swatch swatch-1976d2"></span> | Blue | `#1976D2` |
| <span class="swatch swatch-3f51b5"></span> | Indigo | `#3F51B5` |
| <span class="swatch swatch-673ab7"></span> | Dark Purple | `#673AB7` |
| <span class="swatch swatch-9c27b0"></span> | Purple | `#9C27B0` |
| <span class="swatch swatch-d81b60"></span> | Pink | `#D81B60` |
| <span class="swatch swatch-d32f2f"></span> | Red | `#D32F2F` |

#### Textmarkierung im CK5 Editor

`src/modules/feature/editor/config.ts`

| Farbe | Label | Hex |
|---|---|---|
| <span class="swatch swatch-dcedc8"></span> | Light Green | `#DCEDC8` |
| <span class="swatch swatch-c8e6c9"></span> | Green | `#C8E6C9` |
| <span class="swatch swatch-b2ebf2"></span> | Turquoise | `#B2EBF2` |
| <span class="swatch swatch-bbdefb"></span> | Blue | `#BBDEFB` |
| <span class="swatch swatch-c5cae9"></span> | Indigo | `#C5CAE9` |
| <span class="swatch swatch-e1bee7"></span> | Dark Purple | `#E1BEE7` |
| <span class="swatch swatch-f8bbd0"></span> | Pink | `#F8BBD0` |
| <span class="swatch swatch-ffccbc"></span> | Orange | `#FFCCBC` |
| <span class="swatch swatch-ffecb3"></span> | Yellow | `#FFECB3` |

## Typography

## Spacing

## Icons

## Typography

## Spacing

## Icons

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
options = {
    // ...
    colors: {
        info: "#0a7ac9",
        icon_btn: "colors.grey.darken3",
        on_surface: "#0f3551",
    }
// ...
}
```

### Rules

- Talk to UX before introducing a new color
- Do not overwrite vuetify colors
- Use a semantic name to represent the use case
- Prefer usage via `map-get` over new color definition, unless you introduce a new color
- Either define style in template or in SCSS
