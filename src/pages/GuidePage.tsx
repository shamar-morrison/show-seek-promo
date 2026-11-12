import { Link } from "react-router-dom";
import { guideBySlug, type Guide } from "../guides";
import { guidesIndexPath } from "../routes";
import { BrandTile } from "../components/BrandTile";
import { FaqList } from "../components/FaqList";
import { GuideCards } from "../components/GuideCards";
import { RichText } from "../components/RichText";
import { Download } from "../sections/Download";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** Fixed formatting (not toLocaleDateString) so server and client render the same text. */
const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
};

// Styles for the free-form section bodies in guide data files.
const prose =
  "mt-5 leading-relaxed text-muted [&_p]:mt-4 [&_p:first-child]:mt-0 [&_ul]:mt-4 [&_ul:first-child]:mt-0 [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-5 [&_li]:pl-1 [&_li::marker]:text-accent [&_strong]:font-semibold [&_strong]:text-fg [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_code]:rounded-md [&_code]:bg-surface-2 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[0.9em] [&_code]:text-fg";

const h2 = "font-display text-2xl font-bold tracking-tight text-balance md:text-3xl";

export function GuidePage({ guide }: { guide: Guide }) {
  const related = guide.related.map(guideBySlug).filter((g): g is Guide => g !== undefined);

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 pt-10 pb-24 sm:px-6 lg:pt-14">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
            <li>
              <Link to="/" className="transition-colors hover:text-fg">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link to={guidesIndexPath} className="transition-colors hover:text-fg">
                Guides
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-fg">
              {guide.label}
            </li>
          </ol>
        </nav>

        <header className="mt-10">
          <BrandTile brand={guide.brand} />
          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-bold tracking-tighter text-balance md:text-5xl">
            {guide.h1}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-fg/80">{guide.intro}</p>
          <p className="mt-5 text-sm text-muted">
            Updated <time dateTime={guide.updated}>{formatDate(guide.updated)}</time>
          </p>
        </header>

        <section aria-labelledby="steps-title" className="mt-12 rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <h2 id="steps-title" className={h2}>
            {guide.stepsHeading}
          </h2>
          <ol className="mt-8 grid gap-7">
            {guide.steps.map((step, i) => (
              <li key={step.title} id={`step-${i + 1}`} className="flex gap-4">
                <span
                  aria-hidden
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-fill text-sm font-bold text-white"
                >
                  {i + 1}
                </span>
                <div className="pt-0.5">
                  <h3 className="font-semibold text-fg">{step.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">
                    <RichText text={step.body} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {guide.sections.map((s) => (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="mt-16">
            <h2 id={`${s.id}-title`} className={h2}>
              {s.heading}
            </h2>
            <div className={prose}>{s.body}</div>
          </section>
        ))}

        <section aria-labelledby="faq-title" className="mt-16">
          <h2 id="faq-title" className={h2}>
            Frequently asked questions
          </h2>
          <div className="mt-6">
            <FaqList faqs={guide.faqs} />
          </div>
        </section>

        {related.length > 0 && (
          <section aria-labelledby="related-title" className="mt-16">
            <h2 id="related-title" className={h2}>
              Keep reading
            </h2>
            <div className="mt-6">
              <GuideCards guides={related} headingLevel="h3" />
            </div>
          </section>
        )}
      </article>
      <Download />
    </>
  );
}
