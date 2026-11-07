// Fills the built index.html with server-rendered markup. Runs after the client and SSR builds.
import { readFile, writeFile } from "node:fs/promises";

// Must be set before React loads, or it renders with its development build.
process.env.NODE_ENV = "production";

const { render } = await import("../dist-ssr/entry-server.js");

const ROOT = '<div id="root"></div>';
const template = await readFile("dist/index.html", "utf8");

if (!template.includes(ROOT)) {
  throw new Error(`Prerender failed: ${ROOT} not found in dist/index.html`);
}

// 404.html is served by Workers for unknown paths (not_found_handling: "404-page"), and any
// path that isn't "/" renders the same NotFound markup, so it hydrates cleanly at every URL.
const pages = { "dist/index.html": "/", "dist/404.html": "/404" };

for (const [file, url] of Object.entries(pages)) {
  const html = render(url);
  // Replacer function: a string replacement would interpret "$" sequences in the markup.
  await writeFile(file, template.replace(ROOT, () => `<div id="root">${html}</div>`));
  console.log(`Prerendered ${url} -> ${file} (${(html.length / 1024).toFixed(1)} kB of markup)`);
}
