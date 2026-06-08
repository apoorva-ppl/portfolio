import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "../data/portfolio";

const BORDER = {
  "neon-cyan": "hover:border-neon-cyan/50",
  "neon-lime": "hover:border-neon-lime/50",
  "neon-amber": "hover:border-neon-amber/50",
};
const TEXT = {
  "neon-cyan": "text-neon-cyan",
  "neon-lime": "text-neon-lime",
  "neon-amber": "text-neon-amber",
};

export default function Projects() {
  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-neon-cyan">
              // 03_projects
            </div>
            <h2 className="mt-4 font-mono text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              things i <span className="text-neon-lime">shipped</span>
              <span className="text-neon-cyan">.</span>
            </h2>
          </div>
          <p className="max-w-md text-foreground/60 text-sm">
            Selected builds — hackathons, competitions, and side experiments
            that survived past the prototype stage.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              data-testid={`project-card-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative block border border-white/10 bg-ink-850/60 p-6 lg:p-8 lift transition-all duration-300 ${BORDER[p.accent]}`}
            >
              <span
                className={`absolute top-2 left-2 h-3 w-3 border-l border-t border-white/15 group-hover:border-current ${TEXT[p.accent]}`}
              />
              <span
                className={`absolute top-2 right-2 h-3 w-3 border-r border-t border-white/15 group-hover:border-current ${TEXT[p.accent]}`}
              />
              <span
                className={`absolute bottom-2 left-2 h-3 w-3 border-l border-b border-white/15 group-hover:border-current ${TEXT[p.accent]}`}
              />
              <span
                className={`absolute bottom-2 right-2 h-3 w-3 border-r border-b border-white/15 group-hover:border-current ${TEXT[p.accent]}`}
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div
                    className={`font-mono text-[11px] tracking-[0.2em] uppercase ${TEXT[p.accent]}`}
                  >
                    {p.code}
                  </div>
                  <h3 className="mt-2 font-mono text-2xl sm:text-3xl font-bold tracking-tight">
                    {p.name}
                  </h3>
                </div>
                <ArrowUpRight
                  size={22}
                  className={`shrink-0 ${TEXT[p.accent]} opacity-60 group-hover:opacity-100`}
                />
              </div>
              <p className="mt-4 text-foreground/70 text-sm leading-relaxed">
                {p.blurb}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 border border-white/10 font-mono text-[11px] text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 font-mono text-xs text-foreground/50 group-hover:text-foreground/90 transition-colors">
                <Github size={14} />
                <span>view_repository.sh</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
