// srcset for the app screenshots: the 720px originals plus the 360/540px copies from scripts/screenshot-variants.mjs.

const variants = import.meta.glob<string>("./assets/responsive/*.webp", { eager: true, import: "default" });

/** Fails the build (at prerender) if a variant is missing, rather than shipping a broken srcset. */
export function screenshotSrcSet(name: string, original: string) {
  const at = (width: number) => {
    const url = variants[`./assets/responsive/${name}-${width}.webp`];
    if (!url) throw new Error(`Missing ${name}-${width}.webp. Run node scripts/screenshot-variants.mjs`);
    return `${url} ${width}w`;
  };
  return `${at(360)}, ${at(540)}, ${original} 720w`;
}
