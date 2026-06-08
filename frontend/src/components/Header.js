import { useEffect, useState } from "react";
import { NAV, PROFILE } from "../data/portfolio";
import { Github, FileText } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-900/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          data-testid="logo-link"
          className="flex items-center gap-2 font-mono text-sm"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-neon-cyan shadow-[0_0_10px_#00F0FF]" />
          <span className="text-neon-cyan">~/</span>
          <span className="text-foreground">{PROFILE.handle}</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-[13px]">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              data-testid={`nav-${n.id}`}
              className="text-foreground/70 hover:text-neon-cyan transition-colors relative group"
            >
              <span className="text-foreground/30 mr-1">/</span>
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-neon-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            data-testid="header-github-link"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 text-xs font-mono hover:border-neon-cyan/50 hover:text-neon-cyan transition-colors lift"
          >
            <Github size={14} /> github
          </a>
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noreferrer"
            data-testid="header-resume-link"
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-neon-cyan text-ink-900 text-xs font-mono font-semibold hover:bg-neon-lime transition-colors"
          >
            <FileText size={14} /> resume
          </a>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setMobile(!mobile)}
            className="md:hidden text-foreground/70 hover:text-neon-cyan font-mono text-xs px-2 py-1 border border-white/10"
            aria-label="menu"
          >
            {mobile ? "✕" : "≡"}
          </button>
        </div>
      </div>
      {mobile && (
        <div className="md:hidden bg-ink-900/95 backdrop-blur-xl border-t border-white/5 px-6 py-4">
          <div className="flex flex-col gap-3 font-mono text-sm">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setMobile(false)}
                data-testid={`mobile-nav-${n.id}`}
                className="text-foreground/70 hover:text-neon-cyan"
              >
                <span className="text-foreground/30">/</span> {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
