import { motion } from "framer-motion";
import { GITHUB_STATS, PROFILE } from "../data/portfolio";
import { Github } from "lucide-react";

export default function GitHubStats() {
  return (
    <section
      id="stats"
      data-testid="stats-section"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-neon-cyan">
              // 05_github
            </div>
            <h2 className="mt-4 font-mono text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-foreground/40">git log</span> --pretty
            </h2>
          </div>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            data-testid="stats-github-link"
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/15 font-mono text-xs hover:border-neon-cyan/50 hover:text-neon-cyan transition-colors lift"
          >
            <Github size={14} /> @{PROFILE.handle}
          </a>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {GITHUB_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              data-testid={`stat-card-${i}`}
              className={`border border-white/10 bg-ink-850/60 p-5 lift ${i === 0 ? "lg:col-span-2" : ""}`}
            >
              <div className="flex items-center justify-between font-mono text-[11px] text-foreground/40 mb-3">
                <span className="uppercase tracking-[0.2em] text-neon-cyan">
                  // {s.label}
                </span>
                <span>auto-updates</span>
              </div>
              <div className="flex items-center justify-center bg-ink-900 border border-white/5 p-4 min-h-[200px]">
                <img
                  src={s.url}
                  alt={`github-${s.label}`}
                  loading="lazy"
                  className="max-w-full h-auto"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
