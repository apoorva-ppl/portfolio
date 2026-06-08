import { PROFILE } from "../data/portfolio";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative border-t border-white/5 py-10 mt-8"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-foreground/40">
        <div>
          <span className="text-neon-cyan">~/</span>built_by/{PROFILE.handle} ·
          © {new Date().getFullYear()}
        </div>
        <div className="flex items-center gap-4">
          <span>v1.0.0</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">react · fastapi · tailwind</span>
          <span className="hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-lime animate-pulse" />{" "}
            all systems nominal
          </span>
        </div>
      </div>
    </footer>
  );
}
