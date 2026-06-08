import { motion } from "framer-motion";
import { PROFILE } from "../data/portfolio";
import { Github } from "lucide-react";

const LANGS = [
  { name: "C++", pct: 75, color: "#00F0FF" },
  { name: "Python", pct: 60, color: "#C4F135" },
  { name: "React", pct: 18, color: "#61DAFB" },
  { name: "Next.js", pct: 22, color: "#ffffff" },
  { name: "TailwindCSS", pct: 9, color: "#38BDF8" },
  { name: "PyTorch", pct: 70, color: "#FFB020" },
];

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
              // 05_languages
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

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* language bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-white/10 bg-ink-850/60 p-6 lg:p-8 terminal-shadow"
          >
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-neon-cyan mb-6">
              // top_languages
            </div>
            <div className="space-y-4">
              {LANGS.map((l, i) => (
                <div key={l.name}>
                  <div className="flex justify-between font-mono text-xs mb-1.5">
                    <span className="text-foreground/80">{l.name}</span>
                    <span style={{ color: l.color }}>{l.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 w-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className="h-full"
                      style={{ background: l.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* combined bar */}
            <div className="mt-6 flex h-2 w-full overflow-hidden gap-px">
              {LANGS.map((l) => (
                <div
                  key={l.name}
                  style={{ width: `${l.pct}%`, background: l.color }}
                  className="h-full"
                />
              ))}
            </div>
          </motion.div>

          {/* streak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-white/10 bg-ink-850/60 p-5 terminal-shadow"
          >
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-neon-cyan mb-3">
              // streak
            </div>
            <div className="flex items-center justify-center bg-ink-900 border border-white/5 p-4 min-h-[200px]">
              <img
                src="https://streak-stats.demolab.com/?user=apoorva-ppl&theme=tokyonight&hide_border=true&background=050505&ring=00F0FF&fire=00F0FF&currStreakLabel=00F0FF"
                alt="github-streak"
                loading="lazy"
                className="max-w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
