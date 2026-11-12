import type { ReactNode } from "react";
import type { Brand } from "../components/BrandTile";
import type { Faq } from "../seo";

export type GuideStep = { title: string; body: string };

export type Guide = {
  /** URL segment under /guides. */
  slug: string;
  brand: Brand;
  /** Short name for cards and breadcrumbs, e.g. "TV Time import". */
  label: string;
  /** One-line summary for guide cards. */
  summary: string;
  /** <title>: written for search results. */
  title: string;
  description: string;
  h1: string;
  intro: string;
  updated: string;
  /** H2 above the quick steps; also the HowTo name. Phrase it the way people search. */
  stepsHeading: string;
  /** Rendered as the numbered quick steps and as HowTo JSON-LD, so both always match. Supports **bold**. */
  steps: GuideStep[];
  /** Longer sections below the quick steps. */
  sections: { id: string; heading: string; body: ReactNode }[];
  faqs: Faq[];
  related: string[];
};

export const guidePath = (slug: string) => `/guides/${slug}`;
