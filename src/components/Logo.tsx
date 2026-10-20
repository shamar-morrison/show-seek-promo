import logo from "../assets/logo.webp";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/#top" className={`flex items-center gap-2.5 ${className}`} aria-label="ShowSeek home">
      <img src={logo} alt="" width={32} height={32} className="size-8 rounded-[9px]" />
      <span className="font-display text-lg font-bold tracking-tight text-fg">ShowSeek</span>
    </a>
  );
}
