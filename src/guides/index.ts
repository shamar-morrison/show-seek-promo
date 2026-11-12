import { imdbImport } from "./imdbImport";
import { simklImport } from "./simklImport";
import { stremioSync } from "./stremioSync";
import { traktSync } from "./traktSync";
import { tvTimeImport } from "./tvTimeImport";
import type { Guide } from "./types";

export { guidePath, type Guide } from "./types";

/** Every guide, in the order they're listed on /guides. */
export const guides: Guide[] = [tvTimeImport, traktSync, imdbImport, simklImport, stremioSync];

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);
