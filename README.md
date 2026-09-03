# astro-njx-saas

**SaaS landing page starter — Astro + njX UI (npm: `njx-ui`) + Alpine.js.**

One CSS import, nine themes, zero custom CSS to write. Every element on the page
is an [njX UI](https://njxui.dev) class; interactivity is plain Alpine `x-data`
recipes; Astro renders it all to static HTML.

**Live demo:** https://astro-njx-saas.pages.dev

![astro-njx-saas preview](./screenshot.png)

## The stack

| Layer | Tool | Why |
| ----- | ---- | --- |
| Markup & build | [Astro](https://astro.build) | Components, zero JS by default |
| Look | [njX UI](https://njxui.dev) — 44 KB gzip | Ready blocks: cards, pricing, nav, gradients |
| Interactivity | [Alpine.js](https://alpinejs.dev) | Pricing toggle, theme switch — state lives in the markup |

No Tailwind, no design tokens to configure, no `npm run build` for the CSS —
`import 'njx-ui/css/style.min.css'` and you're styling.

## Quick start

```bash
git clone https://github.com/njbSaab/astro-njx-saas my-landing
cd my-landing
npm install
npm run dev
```

Open `http://localhost:4321`, edit the data arrays in
`src/components/{Features,Pricing,Faq}.astro`, replace the words — ship.

## What's inside

```
src/
├── layouts/Layout.astro      # njX UI import · theme restore · SEO meta
├── styles/global.css         # the one signature gradient (~30 lines)
├── components/
│   ├── Nav.astro             # navbar + Alpine dark/light toggle
│   ├── Hero.astro            # gradient hero + live deploy widget + social proof
│   ├── Features.astro        # three showcase card styles (data-driven)
│   ├── Pricing.astro         # plans array + Alpine monthly/yearly toggle
│   ├── Faq.astro             # native <details> accordion, zero JS
│   ├── Cta.astro             # gradient CTA
│   └── Footer.astro
└── pages/index.astro         # assembles the sections
```

## Themes

njX UI ships 9 themes driven by one attribute:

```html
<html data-theme="dark">   <!-- dark · light · red · blue · green · cyan · yellow · pink · purple -->
```

The navbar toggle persists the choice to `localStorage`; the layout restores it
before first paint (no flash).

## Deploy

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Deploy%20to-Cloudflare%20Pages-f38020?logo=cloudflarepages&logoColor=white)](https://dash.cloudflare.com/?to=/:account/pages/new)
[![Deploy to Netlify](https://img.shields.io/badge/Deploy%20to-Netlify-00c7b7?logo=netlify&logoColor=white)](https://app.netlify.com/start/deploy?repository=https://github.com/njbSaab/astro-njx-saas)

Static output — any host works. Build command `npm run build`, output directory `dist`.

## Learn more

- njX UI documentation: https://njxui.dev/documentation (Astro 🚀 and Alpine 🏔 modes)
- More ready-made landings: https://njxui.dev/examples
- Classless sibling library: https://classless.njxui.dev

## License

MIT — use it for anything, no attribution required.
