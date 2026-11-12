// Shared class strings and formatting for the long-form pages (guides and watch orders).

/** Styles for free-form section bodies written in data files. */
export const prose =
  "mt-5 leading-relaxed text-muted [&_p]:mt-4 [&_p:first-child]:mt-0 [&_ul]:mt-4 [&_ul:first-child]:mt-0 [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-5 [&_li]:pl-1 [&_li::marker]:text-accent [&_strong]:font-semibold [&_strong]:text-fg [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_code]:rounded-md [&_code]:bg-surface-2 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[0.9em] [&_code]:text-fg";

export const sectionHeading = "font-display text-2xl font-bold tracking-tight text-balance md:text-3xl";

export const pageHeading = "font-display text-4xl leading-[1.05] font-bold tracking-tighter text-balance md:text-5xl";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** Fixed formatting (not toLocaleDateString) so server and client render the same text. */
export const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
};
