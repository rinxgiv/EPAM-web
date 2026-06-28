# EPAM — Engineered for what's next

A small, self-contained multi-page marketing website with a dark, technical "engineering studio" aesthetic. Built with plain HTML, CSS, and vanilla JavaScript — no build step, no framework, no dependencies.

## Preview

| Page | File | Description |
| --- | --- | --- |
| Home | [`index.html`](index.html) | Hero, services overview, about, tech stack, featured cases, and call-to-action. |
| Services | [`Services.html`](Services.html) | Detailed breakdown of service offerings. |
| Case study | [`Case.html`](Case.html) | In-depth case study (Northmark Bank). |

## Features

- **Pure static site** — open the HTML files directly in a browser; nothing to compile or install.
- **Shared design system** — a single [`shared.css`](shared.css) defines CSS custom properties (colors, typography, spacing, glow effects) consumed by every page.
- **Runtime accent theming** — an accent hue can be switched at runtime (e.g. `cyan` / `burgundy`) via the tweaks panel and the `data-accent` attribute, driven by [`shared.js`](shared.js).
- **Live UTC clock** — a small clock in the navigation updates every second (`[data-clock]`).
- **Responsive navigation** — accessible mobile hamburger menu with `aria-expanded` state and `Escape`-to-close.
- **Web fonts** — uses Space Grotesk (display) and JetBrains Mono (mono) via Google Fonts.

## Project structure

```
EPAM-web/
├── index.html       # Home page
├── Services.html    # Services page
├── Case.html        # Case-study page
├── shared.css       # Shared design system / styles for all pages
├── shared.js        # Shared behavior: accent theming, clock, mobile nav
├── package.json     # Project metadata (no runtime dependencies)
└── README.md
```

## Getting started

No tooling is required. Clone the repo and open a page in your browser:

```bash
git clone <your-repo-url>
cd EPAM-web
open index.html        # macOS — or just double-click the file
```

### Local server (optional)

For a more production-like setup (correct relative paths, no `file://` quirks), serve the folder with any static server:

```bash
# Python 3
python3 -m http.server 8000

# or Node (no install needed)
npx serve .
```

Then visit <http://localhost:8000>.

## Customization

- **Colors, fonts, spacing** — edit the CSS custom properties at the top of [`shared.css`](shared.css) (e.g. `--bg`, `--fg`, `--accent`, `--display`, `--mono`).
- **Accent color** — change the default in [`shared.js`](shared.js) (the `TWEAKS.accent` value) or switch it at runtime via the tweaks panel.
- **Content** — edit the relevant `*.html` file directly; markup and per-page styles live in each page.

## Tech stack

- HTML5
- CSS3 (custom properties, `clamp()`, grid/flex layout)
- Vanilla JavaScript (no framework, no build tooling)

## License

This project is private and unlicensed. All rights reserved unless stated otherwise.
