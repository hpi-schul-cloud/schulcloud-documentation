# Style Guide

## Colors

Colors are included as CSS properties, often with transparency:

```
color: rgba(var(--v-theme-primary));
background-color: rgba(var(--v-theme-on-surface), 0.6);
```

### Theme

#### Federal State Instances
`src/themes/vuetify-theme.options.ts`

| Color | Token | Hex | Usage |
|---|---|---|---|
| <span class="swatch swatch-2370cb"></span> | `primary` | `#2370CB` | Button, Toolbar, Switch, Checkbox, Select, Progress Bar |
| <span class="swatch swatch-1e599c"></span> | `primary-darken-1` | `#1e599c` | DataTable Header, Sort Icon |
| <span class="swatch swatch-e9f1fa"></span> | `primary-lighten` | `#e9f1fa` | Card Header (e.g. News) |
| <span class="swatch swatch-0f3551"></span> | `on-surface-light` / `on-surface` /<br /> `on-background` / `on-white` | `#0f3551` | Text, Icons, Chip Text, Alert Text |
| <span class="swatch swatch-f2f5f9"></span> | `surface-light` | `#f2f5f9` | Boards (in Rooms), Filters (in Tasks) |

#### dBildungscloud
`src/themes/base-vuetify-theme.options.ts`

| Color | Token | Hex | Usage |
|---|---|---|---|
| <span class="swatch swatch-9e292b"></span> | `primary` | `#9e292b` | Button, Toolbar, Switch, Checkbox, Select, Progress Bar |
| <span class="swatch swatch-800416"></span> | `primary-darken-1` | `#800416` | DataTable Header, Sort Icon |
| <span class="swatch swatch-f5eaea"></span> | `primary-lighten` | `#f5eaea` | Card Header (e.g. News) |
| <span class="swatch swatch-3a424b"></span> | `on-surface-light` / `on-surface` /<br /> `on-background` / `on-white` | `#3a424b` | Text, Icons, Chip Text, Alert Text |
| <span class="swatch swatch-f3f4f4"></span> | `surface-light` | `#f3f4f4` | Boards (in Rooms), Filters (in Tasks) |

### Background
`src/themes/base-vuetify-theme.options.ts`

| Color | Token | Hex | Usage |
|---|---|---|---|
| <span class="swatch swatch-4e555d"></span> | `surface-variant` | `#4E555D` | Avatar, Tooltip (Background) |
| <span class="swatch swatch-f7f7f8"></span> | `on-surface-variant` | `#F7F7F8` | Text/Icons on `surface-variant` |
| <span class="swatch swatch-ffffff"></span> | `white` | `#ffffff` | Toolbar, Board |

### Info, Warning, Error
`src/themes/base-vuetify-theme.options.ts`

| Color | Token | Hex | Usage |
|---|---|---|---|
| <span class="swatch swatch-0a7ac9"></span> | `info` | `#0a7ac9` | Alert, Chip |
| <span class="swatch swatch-13ba98"></span> | `success` | `#13ba98` | Alert, Status Icon |
| <span class="swatch swatch-ff8311"></span> | `warning` | `#ff8311` | Alert, Chip, Status Icon (Tool deactivated/outdated) |
| <span class="swatch swatch-ed0122"></span> | `error` | `#ed0122` | Alert, Chip, Status Icon, Error Text |

### Rooms

#### Room Colors

`src/styles/utility/_room-colors.scss`

| Color | CSS Class | Hex |
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

#### Card Background Colors (`lighten5`)

`src/utils/color.utils.ts`

> **Note:** Hex values are computed at runtime via `colors[color]["lighten5"]` from Vuetify's color palette and are shown here for reference only. Use the `Colors` enum in code.

| Color | `Colors` Enum | Hex |
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

#### Font Color in CK5 Editor

`src/modules/feature/editor/config.ts`

| Color | Label | Hex |
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

#### Text Highlighting in CK5 Editor

`src/modules/feature/editor/config.ts`

| Color | Label | Hex |
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

### Fonts

`src/styles/css-variables/_typography.scss`

| Variable | Font Family | Usage |
|---|---|---|
| `--font-primary` | `PT Sans`, System Fallback | Body text, UI elements |
| `--font-accent` | `PT Sans Narrow`, System Fallback | Headings (`h1`–`h6`) |

### Typographic Scale

#### Headings

`src/styles/utility/_typography.scss`

| Element | CSS Variable | Size | Weight | Line-Height |
|---|---|---|---|---|
| `h1` | `--heading-1` | `2.0625rem` (33 px) | normal | `--line-height-body` (1.3) |
| `h2` | `--heading-2` | `1.75rem` (28 px) | normal | `--line-height-body` (1.3) |
| `h3` | `--heading-3` | `1.4375rem` (23 px) | **bold** | `--line-height-body` (1.3) |
| `h4` | `--heading-4` | `1.1875rem` (19 px) | **bold** | `--line-height-lg` (1.4) |
| `h5` | `--heading-5` | `1.0rem` (16 px) | **bold** | `--line-height-lg` (1.4) |
| `h6` | `--heading-6` | `0.875rem` (14 px) | **bold** | `--line-height-lg` (1.4) |

#### Vuetify Typography

Vuetify provides its own text classes that can be used independently of the HTML element:

| Class | Size | Usage |
|---|---|---|
| `.text-h1` – `.text-h6` | `--heading-1` – `--heading-6` (see Headings table) | Heading style without semantic `h` element |
| `.text-subtitle-1` | 1 rem | Section labels, form labels |
| `.text-subtitle-2` | 0.875 rem | Secondary labels, due dates |
| `.text-body-1` | 1 rem | Default body text, card titles |
| `.text-body-2` | 0.875 rem | Secondary text, hint text |
| `.text-caption` | 0.75 rem | Metadata, file attributes |

#### Font Size Classes

`src/styles/utility/_typography.scss`

| Class | CSS Variable | Size |
|---|---|---|
| `.text-xs` | `--text-xs` | `0.694rem` (≈ 11 px) |
| `.text-sm` | `--text-sm` | `0.833rem` (≈ 13 px) |
| `.text-md` | `--text-md` | `1rem` (16 px) |
| `.text-lg` | `--text-lg` | `1.2rem` (≈ 19 px) |

### Line-Heights

| Variable | Value | Usage |
|---|---|---|
| `--line-height-md` | `1.2` | Board title |
| `--line-height-body` | `1.3` | `h1`–`h3`, Body text |
| `--line-height-lg` | `1.4` | `h4`–`h6` |

### Examples

```html
<!-- Room abbreviation in avatar (RoomGridItem.vue) e.g. for Math 5a -->
<span class="text-h1 text-white">Ma</span>

<!-- Board file element: Metadata (FileAttributes.vue) -->
<span class="text-caption">3 Files · 1.2 MB</span>
```

### SCSS Usage

```scss
// Accent font directly in components (e.g. BoardHeader.vue, BoardAnyTitleInput.vue)
.board-title {
  font-family: var(--font-accent);
  font-size: var(--heading-1);
}
```

## Spacing

## Icons

---
