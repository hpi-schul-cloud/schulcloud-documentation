---
sidebar_position: 7
---

# Accessibility (A11y)

Accessibility is a continuous process that requires collaboration between UX, development, and QA. We want to make sure that our product can be used by anyone — including people with disabilities, slow connections, outdated hardware, or unfavorable environments.

:::info Important
There is a difference between meeting technical accessibility standards (like WCAG) and providing a truly user-friendly experience. Both aspects matter for inclusive digital products.

For insight into the most common barriers, see the [WebAIM Screen Reader Survey](https://webaim.org/projects/screenreadersurvey10/#problematic).
:::

## Target Group

Accessibility benefits everyone, not just people with disabilities:

- People with visual, auditory, motor, or cognitive impairments
- Elderly users
- Users with temporary injuries (e.g. broken arm)
- People in challenging environments (e.g. bright sunlight, noisy places)
- Users with slow internet or older devices
- Anyone who prefers keyboard navigation or alternative input methods

Further reading: [5 Personas to Learn About Digital Accessibility](https://a11y-guidelines.orange.com/en/persona/)

## Standards and Criteria

Our work must meet the following standards:

| Standard | Level | Notes |
|---|---|---|
| **EN 301 549** | References WCAG 2.1 | Follow WCAG 2.2 — an update to the standard is expected soon |
| **BITV 2.0** | AA | German accessibility standard |
| **WCAG 2.2** | Target AAA | [Official criteria](https://www.w3.org/TR/WCAG22/) |

### The Four Principles (POUR)

All criteria are based on these principles:

1. **Perceivable** — Information must be presentable in ways users can perceive
2. **Operable** — UI components must be operable by all users
3. **Understandable** — Information and UI operation must be understandable
4. **Robust** — Content must be interpretable by a wide variety of user agents

:::tip
Not every criterion applies to every page or component. It is common for some criteria to be irrelevant depending on the context.
:::

### Resources

- [WCAG 2.2 (official)](https://www.w3.org/TR/WCAG22/)
- [Overview of WCAG 2.2 (A & AA) in German](https://www.barrierefreies-webdesign.de/wcag2/)
- [Detailed BITV test procedures (German)](https://www.bitvtest.de/bitv_test.html)
- [W3C ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)

## General Principles

- Adhere to WCAG 2.2 AAA guidelines
- Ensure all features are accessible via keyboard and screen reader
- Test on mobile as well
- Use semantic HTML whenever possible

## Design / UI

- Verify sufficient color contrast — use tools like the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) or Firefox/Chrome DevTools
- Do not rely solely on color to convey information
- **Avoid disabled elements** if possible:
    - They are often skipped by keyboard and screen reader users
    - Users may not understand why an element is disabled or how to enable it
    - Consider showing a message or using read-only states instead

:::warning
If you must disable an element, clearly explain why and provide guidance on how to proceed.
:::

## Keyboard Accessibility

All interactive elements (buttons, links, inputs) must be reachable and usable via keyboard with a visible focus indicator.

### Navigation Shortcuts

| Key | Action |
|---|---|
| `TAB` | Move focus to next interactive element |
| `SHIFT + TAB` | Move focus to previous interactive element |
| `Enter` / `Space` | Activate the focused element |
| Arrow Keys | Navigate within menus or grouped controls |
| `ESC` | Close dialogs or modals |

### Safari — Keyboard Navigation

By default, `Tab` in Safari navigates only to text fields and pop-up menus. To enable full keyboard navigation:

**Settings → Advanced → Accessibility → Enable keyboard navigation for all controls**

## Screen Reader Testing

### Recommended Combinations

| Screen Reader | Browser | Platform |
|---|---|---|
| VoiceOver | Safari | macOS / iOS |
| NVDA | Firefox | Windows |
| JAWS | Chrome | Windows |
| TalkBack | Chrome | Android |

### Tips

:::warning
`TAB` only moves to the next **interactive** element. Use screen reader navigation features (e.g. heading navigation, landmarks) to fully test accessibility.
:::

- Practice using the screen reader — it may feel slow at first but improves with experience
- Ensure all elements can be reached and interacted with
- Verify that labels are clear and descriptive
- Check screen reader rotors/menus for:
    - **Headings:** No headings skipped, logical structure
    - **Links:** Clear names, indicate if they open in a new tab
    - **Buttons and forms:** Accessible and properly labeled

## Focus Management

- Ensure the focus indicator is **always visible**
- Prefer the browser's native focus indicator (users can customize it)
- When opening dialogs, set focus inside the dialog
- Avoid trapping focus unless necessary (e.g. modals)
- Verify focus order using browser dev tools (e.g. Firefox Accessibility Tab → "Show Tabbing Order")

## Coding Guidelines

### ARIA

ARIA attributes provide additional information for assistive technologies — they do **not** change behavior or appearance.

- Use ARIA roles and attributes only when necessary ([helpful article (DE)](https://gehirngerecht.digital/aria/))
- Do not assign non-interactive roles to interactive elements
- Prefer native HTML elements over ARIA workarounds
- Verify that Vuetify uses correct ARIA attributes; if not, consider opening an issue

```html
<!-- BAD: redundant aria-label -->
<VBtn aria-label="Save">Save</VBtn>

<!-- GOOD: button text is sufficient -->
<VBtn>Save</VBtn>

<!-- GOOD: aria-label for icon-only buttons -->
<VBtn icon aria-label="More options">
  <VIcon :icon="mdiDotsVertical" />
</VBtn>
```

### Semantic HTML

- Use headings (`h1`–`h6`) in logical, hierarchical order — not for styling
- Ensure all non-decorative images have meaningful `alt` text
- Label all form fields with `<label>` or `aria-label`
- Use semantic elements (`nav`, `main`, `footer`, `section`) for landmarks

## Mobile Testing

- Test in both portrait and landscape modes
- Zoom to at least 200% to check responsive layout
- Ensure touch targets are large enough and properly spaced
- Verify that content does not overlap or get cut off
- Test navigation menus, dialogs, and overlays for usability

## Screen Magnifiers & Browser Zoom

Test your site at **200% browser zoom** and with a screen magnifier (at least 4×) to ensure:

- Text and images remain clear and readable
- Layouts adapt without content overlap
- Interactive elements remain accessible
- Element placement stays consistent

## Browser Developer Tools

- **Accessibility Tree / Tab:** Shows how screen readers interpret your page — useful for finding missing labels or roles
- **Contrast Check (AAA):** Built-in contrast checker in Chrome and Firefox DevTools
- **Tabbing Order:** Firefox Accessibility Tab → "Show Tabbing Order"

## Vuetify

In general, Vuetify components should be accessible when used correctly without many additional ARIA attributes or workarounds. However, the library is not perfect.

### Known Issues

**VTextField — WAVE false positives:**

WAVE may report missing or duplicate labels on Vuetify inputs. These can be disregarded when the placeholder/floating label correctly describes the input. However, there is a real issue with text fields:
- [vuetifyjs/vuetify#21914](https://github.com/vuetifyjs/vuetify/issues/21914)

**VForm — Screen reader announcement:**

Fast-fail inputs are not announced to screen reader users when submitting invalid forms.
**Workaround:** Set focus to the first invalid input on submit so the error message is announced.
- [vuetifyjs/vuetify#21920](https://github.com/vuetifyjs/vuetify/issues/21920)

:::tip
When you encounter accessibility issues in Vuetify, open an issue on [their GitHub repository](https://github.com/vuetifyjs/vuetify/issues) so it can be addressed properly.
:::

## Testing Checklist

- [ ] Every interactive control is usable via keyboard
- [ ] Every heading is marked as a heading (correct hierarchy)
- [ ] Every link is reachable and has a descriptive name
- [ ] Landmarks (navigation, main, footer) are accessible
- [ ] Input fields can be filled out and are labeled
- [ ] Dialogs trap focus correctly and can be closed with `ESC`
- [ ] Color contrast meets AA (ideally AAA) requirements
- [ ] Content is usable at 200% zoom
- [ ] Mobile: touch targets are appropriate, no content is lost
