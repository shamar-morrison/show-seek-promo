import { homeFaqs } from "./faq";
import { guidePath, guides, type Guide } from "./guides";
import { absoluteUrl, breadcrumbLd, faqPageLd, howToLd, type PageMeta } from "./seo";
import { links } from "./content";

// Every prerendered page and its <head>. scripts/prerender.mjs renders each path to static HTML and builds the
// sitemap from this list; App.tsx sets document.title from it on client-side navigation.

export const guidesIndexPath = "/guides";

const home: PageMeta = {
  path: "/",
  file: "index.html",
  title: "ShowSeek: Movie & TV Tracker",
  description:
    "Track episodes, build watchlists, rate movies and shows, and get release reminders. ShowSeek keeps everything you watch in one place.",
  ogDescription:
    "Track your movies and shows across streaming providers. Episode progress, watchlists, ratings and release reminders.",
  updated: "2026-11-11",
  jsonLd: [
    // No aggregateRating: ratings live on Google Play, and Google's guidelines bar aggregating them from other sites.
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "ShowSeek",
      url: absoluteUrl("/"),
      description: "Track episodes, build watchlists, rate movies and shows, and get release reminders.",
      operatingSystem: "ANDROID",
      applicationCategory: "EntertainmentApplication",
      installUrl: links.playStore,
      offers: { "@type": "Offer", price: 0 },
    },
    faqPageLd(homeFaqs),
  ],
};

const guidesIndex: PageMeta = {
  path: guidesIndexPath,
  file: "guides.html",
  title: "ShowSeek Guides: Import and Sync Your Watch History",
  description:
    "Step-by-step guides for moving your watch history to ShowSeek: import from TV Time, IMDb and Simkl, sync with Trakt, and track Stremio automatically.",
  updated: "2026-11-11",
  jsonLd: [
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Guides", path: guidesIndexPath },
    ]),
  ],
};

function guideMeta(guide: Guide): PageMeta {
  const path = guidePath(guide.slug);
  return {
    path,
    file: `guides/${guide.slug}.html`,
    title: guide.title,
    description: guide.description,
    updated: guide.updated,
    jsonLd: [
      howToLd({ name: guide.stepsHeading, description: guide.description, path, steps: guide.steps }),
      faqPageLd(guide.faqs),
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Guides", path: guidesIndexPath },
        { name: guide.label, path },
      ]),
    ],
  };
}

export const pages: PageMeta[] = [home, guidesIndex, ...guides.map(guideMeta)];

export const pageForPath = (pathname: string) => {
  const path = pathname.replace(/\/+$/, "") || "/";
  return pages.find((p) => p.path === path);
};
