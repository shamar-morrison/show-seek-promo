import { homeFaqs } from "../faq";
import { FaqList } from "../components/FaqList";
import { Reveal } from "../components/Reveal";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:py-32">
      <Reveal className="text-center">
        <h2 id="faq-title" className="font-display text-4xl font-bold tracking-tighter text-balance md:text-5xl">
          Frequently asked questions
        </h2>
      </Reveal>
      <Reveal index={1} className="mt-12">
        <FaqList faqs={homeFaqs} />
      </Reveal>
    </section>
  );
}
