import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70dvh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-7xl font-bold tracking-tighter text-accent">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold tracking-tight">This page is not on the list.</h1>
      <p className="mt-3 text-muted">The link may be broken, or the page may have moved.</p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-accent-fill px-6 py-3 font-semibold text-white transition-[transform,background-color] hover:bg-accent-fill-hover active:scale-[0.98]"
      >
        Back to home
      </Link>
    </section>
  );
}
