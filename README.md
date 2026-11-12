# ShowSeek promo site

Marketing site for [ShowSeek](https://play.google.com/store/apps/details?id=app.horizon.showseek), the movie and TV tracker for Android. Built for [show-seek.app](https://show-seek.app/).

## Stack

- React 19 + TypeScript, bundled with Vite
- React Router (homepage, `/guides` and `/watch` pages, and a 404 route)
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- [Base UI](https://base-ui.com/) for the tabs, tooltip and mobile menu dialog
- [Hugeicons](https://hugeicons.com/) for icons
- Inter (self-hosted via `@fontsource-variable/inter`), with SF Pro used natively on Apple devices
- Deployed as static assets on Cloudflare Workers

## Getting started

Requires Node 22 (see `.nvmrc`).

```bash
npm ci
npm run dev       # dev server
npm run build     # type-check, build to dist/ and prerender the HTML
npm run preview   # serve the production build locally
```

`npm run preview` falls back to `index.html` for unknown paths, so a 404 URL logs a hydration error there. Use `npx wrangler dev` after a build to get the real 404 behavior.

## Prerendering

Every page ships as fully rendered static HTML, so crawlers that don't run JavaScript see the full content. The client build runs first, then an SSR build of `src/entry-server.tsx` goes to `dist-ssr/` (outside `dist/`, so it is never deployed), and `scripts/prerender.mjs` renders each page listed in `src/routes.ts` to its own file (`/guides/tv-time-import` → `dist/guides/tv-time-import.html`, which Workers serves without the extension), plus `dist/404.html`. `src/main.tsx` hydrates that markup.

Each page's `<title>`, meta description, canonical URL, Open Graph tags and JSON-LD come from `src/routes.ts` and are written into its static `<head>` at build time. The same list generates `dist/sitemap.xml`, with each page's `updated` date as its `lastmod`. The build fails if a listed page renders as a 404 or is missing its head data.

Components render at build time and again in the browser, and both results must match. Anything that varies between the two (the current date, `window`, random values) has to start from a build-time value and change in an effect, as the footer year does.

## Project structure

```
src/
  content.ts        # homepage copy, links and reviews
  faq.ts            # homepage FAQ (also emitted as FAQPage JSON-LD)
  guides/           # one data file per guide, registered in guides/index.ts
  watch/            # watch-order pages: orders/ (one file per franchise), tmdb.json snapshot, helpers
  routes.ts         # every prerendered page: path, output file, <head> and JSON-LD
  seo.ts            # site URL and JSON-LD helpers
  sections/         # Hero, Features, Reviews, Imports, Faq, Download, Footer
  components/       # Navbar, Logo, StoreButtons, Reveal, BrandTile, FaqList, GuideCards, ...
  pages/            # Home, GuidesIndex, GuidePage, NotFound
  hooks/useInView.ts
  index.css         # theme tokens and animations
  assets/           # optimized images used by the site
images/             # source screenshots, logo and OG image
images/raw/         # downloaded badges, avatars, posters and backdrops
scripts/            # prerender step and image optimization scripts (sharp)
public/             # favicon, OG image, robots.txt
```

Most homepage text changes (links, reviews) happen in `src/content.ts`.

## Guides

To add a guide, create a `Guide` in `src/guides/` and add it to the list in `src/guides/index.ts`. Its route, prerendered page, `<head>`, JSON-LD, sitemap entry, footer link and `/guides` card follow from that. Set `guide` on the matching card in `src/sections/Imports.tsx` to link it from the homepage. When you change a guide's content, bump its `updated` date so the sitemap's `lastmod` tells search engines to recrawl it.

## Watch orders

Franchise watch orders live in `src/watch/orders/`, one `WatchOrder` per file, registered in `src/watch/index.ts`. Like guides, each gets a prerendered page under `/watch/`, its own `<head>`, ItemList/FAQPage/BreadcrumbList JSON-LD, a sitemap entry and a footer link.

Titles reference TMDB as string literals (`"movie/954"`, `"tv/1429/season/2"`). Posters, years, runtimes and episode counts come from `src/watch/tmdb.json`, a committed snapshot, so builds never call TMDB. After adding or changing a ref, refresh the snapshot. It needs a TMDB v3 key in `TMDB_API_KEY`, read from the git-ignored `.env` file or the environment:

```bash
npm run fetch:watch
```

The build fails if a ref has no snapshot data, a `release-order`/`broadcast-order`/`main-story` list isn't in date order, or a related slug doesn't exist. Entries TMDB doesn't list separately (some anime specials) can omit `ref` and give `title`, `year` and `episodes` instead.

Guide facts come from the app repo (`show-seek`, mainly `src/i18n/locales/en-US.json`), but the copy is written for search rather than copied from the app. Don't mention Premium on these pages.

## Images

Source images are converted to optimized WebP in `src/assets/` with two scripts:

```bash
# (Optional) Put raw phone screenshots from images/raw/screens/ into the phone frame → images/<name>_front.png
node scripts/frame-screens.mjs

# App screenshots, hero images, logo, favicons and OG image from images/
node scripts/optimize-images.mjs "$PWD/images" "$PWD"

# Store badges, reviewer avatars, posters and backdrops from images/raw/
node scripts/optimize-raw.mjs
```

Re-run the relevant script after adding or replacing a source image. The app screenshots also have 360px and 540px copies in `src/assets/responsive/` for `srcset`, so smaller screens don't download the 720px originals. Regenerate them after replacing a screenshot (the build fails if one is missing):

```bash
node scripts/screenshot-variants.mjs
```

## Deployment

The site is served by Cloudflare Workers as static assets (no Worker code). `wrangler.jsonc` points at `./dist`, serves `404.html` with a 404 status for unknown paths, and has `workers.dev` and preview URLs disabled.

```bash
npm run build
npx wrangler deploy --dry-run   # check what will be uploaded
npx wrangler deploy
```

## Credits

Poster and backdrop artwork comes from [TMDB](https://www.themoviedb.org/). This site is not endorsed or certified by TMDB. Reviews are from the ShowSeek Google Play listing. Google Play and the App Store badges are trademarks of Google LLC and Apple Inc.
