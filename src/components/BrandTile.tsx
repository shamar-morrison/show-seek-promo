import type { ReactNode } from "react";
import { ImdbLogo, ShowlyLogo, SimklLogo, StremioLogo, TraktLogo, TvTimeLogo } from "./BrandLogos";

export type Brand = "trakt" | "imdb" | "simkl" | "showly" | "tvtime" | "stremio";

type TileSpec = { name: string; tile: string; logo: (size: "md" | "lg") => ReactNode };

const tiles: Record<Brand, TileSpec> = {
  trakt: {
    name: "Trakt",
    tile: "bg-[#ed1c24] text-white",
    logo: (s) => <TraktLogo className={s === "lg" ? "size-9" : "size-7"} />,
  },
  imdb: {
    name: "IMDb",
    tile: "bg-[#f5c518] text-black",
    logo: (s) => <ImdbLogo className={s === "lg" ? "size-10" : "size-8"} />,
  },
  simkl: {
    name: "Simkl",
    tile: "bg-black text-white ring-1 ring-white/15 ring-inset",
    logo: (s) => <SimklLogo className={s === "lg" ? "size-9" : "size-7"} />,
  },
  showly: {
    name: "Showly",
    tile: "bg-[#25262a] ring-1 ring-white/15 ring-inset",
    logo: (s) => <ShowlyLogo className={s === "lg" ? "size-9" : "size-7"} />,
  },
  tvtime: {
    name: "TV Time",
    tile: "bg-[#373737]",
    logo: (s) => <TvTimeLogo className={s === "lg" ? "size-9" : "size-7"} />,
  },
  stremio: {
    name: "Stremio",
    tile: "bg-[#685cee] text-white",
    logo: (s) => <StremioLogo className={s === "lg" ? "size-9" : "size-7"} />,
  },
};

export const brandName = (brand: Brand) => tiles[brand].name;

/** A service's mark on its brand-colored tile, labelled for screen readers. */
export function BrandTile({ brand, size = "lg" }: { brand: Brand; size?: "md" | "lg" }) {
  const { name, tile, logo } = tiles[brand];
  const box = size === "lg" ? "size-16 rounded-2xl" : "size-12 rounded-xl";
  return (
    <span role="img" aria-label={`${name} logo`} className={`flex shrink-0 items-center justify-center ${box} ${tile}`}>
      {logo(size)}
    </span>
  );
}
