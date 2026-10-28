import { Hero } from "../sections/Hero";
import { Stats } from "../sections/Stats";
import { Features } from "../sections/Features";
import { Reviews } from "../sections/Reviews";
import { Imports } from "../sections/Imports";
import { Download } from "../sections/Download";

export function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Reviews />
      <Imports />
      <Download />
    </>
  );
}
