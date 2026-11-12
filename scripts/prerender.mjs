// Renders every page in src/routes.ts to static HTML, with its own <head>, and writes the sitemap.
// Runs after the client and SSR builds. Every page ships fully rendered; the client only hydrates.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

// Must be set before React loads, or it renders with its development build.
process.env.NODE_ENV = "production";

const { render, pages, SITE_URL, watchOrderProblems } = await import("../dist-ssr/entry-server.js");

const problems = watchOrderProblems();
if (problems.length > 0) {
  throw new Error(`Prerender failed: watch-order data problems:\n  ${problems.join("\n  ")}`);
}

const ROOT = '<div id="root"></div>';
const template = await readFile("dist/index.html", "utf8");

if (!template.includes(ROOT)) {
  throw new Error(`Prerender failed: ${ROOT} not found in dist/index.html`);
}

const escapeAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
// "<" escaped so no string inside the JSON can close the <script> early.
const jsonLdTag = (data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;

/** Replaces exactly one match, or fails the build: a silently skipped tag would ship the homepage's value. */
function replaceOnce(html, pattern, replacement, label) {
  const count = html.match(new RegExp(pattern.source, "g"))?.length ?? 0;
  if (count !== 1) throw new Error(`Prerender failed: expected one ${label} in index.html, found ${count}`);
  return html.replace(pattern, () => replacement);
}

function withHead(html, page) {
  const url = `${SITE_URL}${page.path}`;
  const title = escapeAttr(page.title);
  const ogDescription = escapeAttr(page.ogDescription ?? page.description);
  const tags = [
    [/<title>[^<]*<\/title>/, `<title>${title}</title>`, "<title>"],
    [/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeAttr(page.description)}" />`, "meta description"],
    [/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`, "canonical link"],
    [/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`, "og:url"],
    [/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`, "og:title"],
    [/<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/, `<meta property="og:description" content="${ogDescription}" />`, "og:description"],
  ];
  for (const [pattern, replacement, label] of tags) html = replaceOnce(html, pattern, replacement, label);
  const jsonLd = page.jsonLd.map((d) => `    ${jsonLdTag(d)}\n`).join("");
  return replaceOnce(html, /\n\s*<\/head>/, `\n${jsonLd}  </head>`, "</head>");
}

async function writePage(file, html) {
  const out = join("dist", file);
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, html);
}

for (const page of pages) {
  if (!page.title || !page.description || !/^\d{4}-\d{2}-\d{2}$/.test(page.updated)) {
    throw new Error(`Prerender failed: ${page.path} is missing a title, description or ISO updated date`);
  }
  if (page.description.length > 160) {
    console.warn(`  ! ${page.path}: description is ${page.description.length} chars; search results cut off around 155-160`);
  }
  const markup = render(page.path);
  if (markup.includes("data-not-found") || !markup.includes("<h1")) {
    throw new Error(`Prerender failed: ${page.path} rendered as a 404 or without an <h1>. Is its route in App.tsx?`);
  }
  // Replacer function: a string replacement would interpret "$" sequences in the markup.
  await writePage(page.file, withHead(template, page).replace(ROOT, () => `<div id="root">${markup}</div>`));
  console.log(`Prerendered ${page.path} -> dist/${page.file} (${(markup.length / 1024).toFixed(1)} kB of markup)`);
}

// 404.html is served by Workers for unknown paths (not_found_handling: "404-page"), and any unlisted path renders
// the same NotFound markup, so it hydrates cleanly at every URL. It keeps the template's head, without JSON-LD.
await writePage("404.html", template.replace(ROOT, () => `<div id="root">${render("/404")}</div>`));
console.log("Prerendered /404 -> dist/404.html");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url>\n    <loc>${SITE_URL}${p.path}</loc>\n    <lastmod>${p.updated}</lastmod>\n  </url>`).join("\n")}
</urlset>
`;
await writeFile("dist/sitemap.xml", sitemap);
console.log(`Wrote dist/sitemap.xml (${pages.length} URLs)`);
