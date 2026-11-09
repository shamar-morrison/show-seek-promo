# ShowSeek promo site

Marketing site for [ShowSeek](https://play.google.com/store/apps/details?id=app.horizon.showseek), the movie and TV tracker for Android. Built for [show-seek.app](https://show-seek.app/).

## Stack

- React 19 + TypeScript, bundled with Vite
- React Router (single page plus a 404 route)
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

`npm run build` writes real markup into `dist/index.html` and `dist/404.html`, so crawlers that don't run JavaScript see the full content. The client build runs first, then an SSR build of `src/entry-server.tsx` goes to `dist-ssr/` (outside `dist/`, so it is never deployed), and `scripts/prerender.mjs` fills the HTML. `src/main.tsx` hydrates that markup.

Components render at build time and again in the browser, and both results must match. Anything that varies between the two (the current date, `window`, random values) has to start from a build-time value and change in an effect, as the footer year does.

## Project structure

```
src/
  content.ts        # all copy, links and reviews (single source of truth)
  sections/         # Hero, Features, Reviews, Socials, Download, Footer
  components/       # Navbar, Logo, StoreButtons, Reveal, ExternalLink
  pages/            # Home, NotFound
  hooks/useInView.ts
  index.css         # theme tokens and animations
  assets/           # optimized images used by the site
images/             # source screenshots, logo and OG image
images/raw/         # downloaded badges, avatars, posters and backdrops
scripts/            # prerender step and image optimization scripts (sharp)
public/             # favicon, OG image, robots.txt
```

Most text changes (links, reviews) happen in `src/content.ts`.

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

Re-run the relevant script after adding or replacing a source image.

## Deployment

The site is served by Cloudflare Workers as static assets (no Worker code). `wrangler.jsonc` points at `./dist`, serves `404.html` with a 404 status for unknown paths, and has `workers.dev` and preview URLs disabled.

```bash
npm run build
npx wrangler deploy --dry-run   # check what will be uploaded
npx wrangler deploy
```

## Credits

Poster and backdrop artwork comes from [TMDB](https://www.themoviedb.org/). This site is not endorsed or certified by TMDB. Reviews are from the ShowSeek Google Play listing. Google Play and the App Store badges are trademarks of Google LLC and Apple Inc.
