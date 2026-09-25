# AeroCore UAE — Website Build from Approved Design

The uploaded design image is the specification. Every section, its order, the black/white/red palette, the thin red markers, the circled arrow buttons and the dark full-bleed bands get rebuilt in code — no redesign, no extra sections.

## Pages

- **Home** — sections in the exact order shown: header, hero ("Cleaner Air Engineered Better" with play button and side caption), the four-row expandable list, Purer Air filtration story, Clean Air For Every Space, application icons row, Our Filters (5 products), Filtration You Can Trust, Why AeroCore, Brochures & Datasheets, Built For A Cleaner Tomorrow, footer.
- **Product pages** — Panel, Pocket, HEPA, Carbon and Fine Filters, each reproducing the detail composition from the right column of the design: product shot, specification table, datasheet download, layered-media visual, filter media circles, applications gallery, quote form, "Need Help?" dark band.
- **Products index, Solutions, About, Resources, Contact** — built in the same visual language so every link in the menu and footer lands on a real page.
- **Welcome intro** — short AeroCore reveal on first load, then the home page appears behind it. Site loads underneath so nothing is delayed.

## Content and imagery

- I generate the studio-style filter product shots, the layered filter-media visuals, and the building/interior photography to match the look of the design.
- Product specs, section copy and captions come from the design image; anything not legible there I fill with clear placeholder text and flag it so you can correct it.
- Quote and Contact forms validate and show a confirmation. They don't store or email anything yet — that needs the backend step below.

## Mobile first

Mobile composition matches the design's phone column: stacked sections, full-width product shots, drawer menu from the round menu button. Desktop expands to the wide composition shown.

## Not in this pass

Saving quote/contact submissions, editable content and the admin panel all need a backend with logins. Say the word after you've reviewed the preview and I'll add it — keeping it out now means you see the full site sooner.

## Technical notes

- TanStack Start routes: `/`, `/products`, `/products/$slug` (five filters), `/solutions`, `/about`, `/resources`, `/contact`.
- Design tokens (near-white base, ink black, AeroCore red accent, thin hairline borders, minimal radius, condensed-sans headings) defined in `src/styles.css`; no hardcoded colors in components.
- Shared pieces: header with search + menu drawer, circled arrow button, section label with red dash, spec table, footer.
- Generated imagery saved under `src/assets` and imported directly.
- Per-page head metadata (title, description, social tags).
