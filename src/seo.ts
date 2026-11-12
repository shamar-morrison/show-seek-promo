// Page metadata and schema.org JSON-LD. scripts/prerender.mjs writes these into each page's static <head>.

export const SITE_URL = "https://show-seek.app";

export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;

/** Copy may mark UI labels as **bold**; this strips the markers for plain-text contexts like JSON-LD. */
export const plainText = (s: string) => s.replace(/\*\*/g, "");

export type JsonLd = Record<string, unknown>;

export type PageMeta = {
  path: string;
  /** Output file, relative to dist/. Workers serves `a/b.html` at `/a/b`. */
  file: string;
  title: string;
  description: string;
  /** Defaults to `description`. */
  ogDescription?: string;
  /** ISO date of the last meaningful content change; becomes the sitemap's lastmod. */
  updated: string;
  jsonLd: JsonLd[];
};

export type Faq = { q: string; a: string; link?: { href: string; label: string } };

export function faqPageLd(faqs: Faq[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: plainText(f.a) },
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function howToLd(opts: { name: string; description: string; path: string; steps: { title: string; body: string }[] }): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: plainText(s.title),
      text: plainText(s.body),
      url: `${absoluteUrl(opts.path)}#step-${i + 1}`,
    })),
  };
}
