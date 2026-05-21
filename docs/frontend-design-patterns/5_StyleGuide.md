# Style Guide

## Colors

Colors are included as CSS properties, often with transparency:

```CSS
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

Typography is defined via CSS variables and Vuetify utility classes, applied directly in templates and stylesheets:

```html
<!-- Room abbreviation in avatar (RoomGridItem.vue) e.g. for Math 5a -->
<span class="text-h1 text-white">Ma</span>

<!-- Board file element: Metadata (FileAttributes.vue) -->
<span class="text-caption">3 Files · 1.2 MB</span>
```

```css
.board-title {
  font-family: var(--font-accent);
  font-size: var(--heading-1);
}
```

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
| `h2` | `--heading-2` | `1.625rem` (26 px) | normal | `--line-height-body` (1.3) |
| `h3` | `--heading-3` | `1.375rem` (22 px) | bold | `--line-height-body` (1.3) |
| `h4` | `--heading-4` | `1.25rem` (20 px) | bold | `--line-height-lg` (1.4) |
| `h5` | `--heading-5` | `1.125rem` (18 px) | bold | `--line-height-lg` (1.4) |
| `h6` | `--heading-6` | `1rem` (16 px) | bold | `--line-height-lg` (1.4) |

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
| `--line-height-xl` | `1.5` | Text in boards|

## Spacing

### Vuetify Spacing Scale

Vuetify uses `4px` as the base unit with utility classes following the pattern `{property}{direction}-{n}`:

```html
<VCard class="pa-4">…</VCard>       <!-- padding: 16px; -->
<VCard class="mt-6 mb-2">…</VCard>  <!-- margin-top: 24px; margin-bottom: 8px; -->
<VCard class="mx-auto">…</VCard>    <!-- margin-left: auto; margin-right: auto; -->
```

- **Property:** `m` (margin), `p` (padding)
- **Direction:** `t` top, `b` bottom, `l` left, `r` right, `x` horizontal, `y` vertical, none = all sides

| px | `4` | `8` | `12` | `16` | `20` | `24` | `32` | `40` | `48` | `64` |
|---|---|---|---|---|---|---|---|---|---|---|
| n | `1` | `2` | `3` | `4` | `5` | `6` | `8` | `10` | `12` | `16` |

### Layout Sizes

Layout sizes are defined as CSS variables for consistent structural dimensions across the application:

`src/styles/css-variables/_layout-sizes.scss`

| Variable | Value | Usage |
|---|---|---|
| `--topbar-height` | `50px` | Height of the top navigation bar |
| `--breadcrumbs-height` | `22px` | Height of the breadcrumb row |
| `--footer-height` | `50px` | Height of the footer |
| `--content-min-width` | `30ch` | Minimum content width |
| `--content-max-width` | `80ch` | Maximum content width (text) |
| `--content-limited-width` | `1200px` | Maximum page width |

## Icons

### Material Design Icons

`src/components/icons/material/index.ts`

The **outline variant** is preferred (e.g. `mdiAccountOutline` instead of `mdiAccount`). Icons are imported and passed as a prop to components or as a property in configuration objects:

```ts
import { mdiNewspaperVariantOutline, mdiFolderOpenOutline } from "@mdi/js";
```

```html
<!-- directly to VIcon (Dashboard.page.vue) -->
<VIcon size="14" class="mr-1" :icon="mdiNewspaperVariantOutline" />

<!-- as a prop to a custom component (FolderContentElement.vue) -->
<ContentElementBar :icon="mdiFolderOpenOutline">
```

```ts
// RoomBoardCard.vue – icon as a property in menu actions (RoomDotMenu)
actions.push({
  icon: mdiTrashCanOutline,
  action: () => emit("delete-board"),
  name: t("common.actions.delete"),
});
```

Icons are used in:

- **UI elements:** menu, sidebar, tabs, icon buttons
- **Content types:** tasks, folders, boards, board-elements

A full searchable overview of all available icons is at [pictogrammers.com/library/mdi](https://pictogrammers.com/library/mdi/).

### Custom Icons

`src/components/icons/custom/`

Custom SVG icons as Vue components, registered as Vuetify aliases in `base-vuetify-theme.options.ts`:

```html
<VIcon icon="$h5pOutline" />
```

| Alias | Datei |
|---|---|
| `$gridRowOutline` | `grid-row-outline.vue` |
| `$h5pOutline` | `h5p-outline.vue` |
| `$langIconDe` | `lang-icon-de.vue` |


<style>{`
.swatch {
  display: inline-block;
  vertical-align: middle;
  border-radius: .5rem;
  width: 2rem;
  height: 2rem;
  border: 1px solid #a0a0a0;
}
.swatch-9e292b { background-color: #9e292b; }
.swatch-800416 { background-color: #800416; }
.swatch-f5eaea { background-color: #f5eaea; }
.swatch-ffffff { background-color: #ffffff; border: 1px solid #cccccc; }
.swatch-0a7ac9 { background-color: #0a7ac9; }
.swatch-0e8c71 { background-color: #0e8c71; }
.swatch-0960a0 { background-color: #0960a0; }
.swatch-13ba98 { background-color: #13ba98; }
.swatch-ff8311 { background-color: #ff8311; }
.swatch-fff0e2 { background-color: #fff0e2; }
.swatch-ed0122 { background-color: #ed0122; }
.swatch-bf0d26 { background-color: #bf0d26; }
.swatch-4e555d { background-color: #4E555D; }
.swatch-f7f7f8 { background-color: #F7F7F8; border: 1px solid #cccccc; }
.swatch-2370cb { background-color: #2370CB; }
.swatch-1e599c { background-color: #1e599c; }
.swatch-e9f1fa { background-color: #e9f1fa; }
.swatch-0f3551 { background-color: #0f3551; }
.swatch-f2f5f9 { background-color: #f2f5f9; }
.swatch-3a424b { background-color: #3a424b; }
.swatch-f3f4f4 { background-color: #f3f4f4; }
.swatch-455b6a { background-color: #455b6a; }
.swatch-ec407a { background-color: #ec407a; }
.swatch-d50000 { background-color: #d50000; }
.swatch-ef6c00 { background-color: #ef6c00; }
.swatch-827717 { background-color: #827717; }
.swatch-689f38 { background-color: #689f38; }
.swatch-009688 { background-color: #009688; }
.swatch-0091ea { background-color: #0091ea; }
.swatch-304ffe { background-color: #304ffe; }
.swatch-d500f9 { background-color: #d500f9; }
.swatch-9c27b0 { background-color: #9c27b0; }
.swatch-795548 { background-color: #795548; }
.swatch-ffc107 { background-color: #ffc107; }
.swatch-f1f8e9 { background-color: #f1f8e9; }
.swatch-e8f5e9 { background-color: #e8f5e9; }
.swatch-e0f7fa { background-color: #e0f7fa; }
.swatch-e3f2fd { background-color: #e3f2fd; }
.swatch-e8eaf6 { background-color: #e8eaf6; }
.swatch-f3e5f5 { background-color: #f3e5f5; }
.swatch-fce4ec { background-color: #fce4ec; }
.swatch-fbe9e7 { background-color: #fbe9e7; }
.swatch-fff8e1 { background-color: #fff8e1; }
.swatch-eceff1 { background-color: #eceff1; }
.swatch-388e3c { background-color: #388E3C; }
.swatch-00838f { background-color: #00838F; }
.swatch-1976d2 { background-color: #1976D2; }
.swatch-3f51b5 { background-color: #3F51B5; }
.swatch-673ab7 { background-color: #673AB7; }
.swatch-d81b60 { background-color: #D81B60; }
.swatch-d32f2f { background-color: #D32F2F; }
.swatch-dcedc8 { background-color: #DCEDC8; }
.swatch-c8e6c9 { background-color: #C8E6C9; }
.swatch-b2ebf2 { background-color: #B2EBF2; }
.swatch-bbdefb { background-color: #BBDEFB; }
.swatch-c5cae9 { background-color: #C5CAE9; }
.swatch-e1bee7 { background-color: #E1BEE7; }
.swatch-f8bbd0 { background-color: #F8BBD0; }
.swatch-ffccbc { background-color: #FFCCBC; }
.swatch-ffecb3 { background-color: #FFECB3; }
`}</style>