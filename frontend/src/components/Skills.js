import { motion } from "framer-motion";
import { SKILLS } from "../data/portfolio";

const ACCENT = {
  "neon-cyan":
    "text-neon-cyan  border-neon-cyan/30  hover:border-neon-cyan/70  hover:shadow-[0_0_18px_-4px_rgba(0,240,255,0.5)]",
  "neon-lime":
    "text-neon-lime  border-neon-lime/30  hover:border-neon-lime/70  hover:shadow-[0_0_18px_-4px_rgba(196,241,53,0.5)]",
  "neon-amber":
    "text-neon-amber border-neon-amber/30 hover:border-neon-amber/70 hover:shadow-[0_0_18px_-4px_rgba(255,176,32,0.5)]",
};
const HEAD = {
  "neon-cyan": "text-neon-cyan",
  "neon-lime": "text-neon-lime",
  "neon-amber": "text-neon-amber",
};

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-neon-cyan">
              // 02_skills
            </div>
            <h2 className="mt-4 font-mono text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              the toolbox <span className="text-foreground/40">.</span>
            </h2>
          </div>
          <p className="max-w-md text-foreground/60 text-sm">
            Tools I actually reach for — not a Skills.txt copied off a Coursera
            certificate.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {SKILLS.map((block, i) => (
            <motion.div
              key={block.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              data-testid={`skill-block-${i}`}
              className="bg-ink-900 p-6 lg:p-8"
            >
              <div className="flex items-baseline justify-between">
                <h3
                  className={`font-mono text-sm tracking-wider uppercase ${HEAD[block.accent]}`}
                >
                  {block.category}
                </h3>
                <span className="font-mono text-[11px] text-foreground/30">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {block.items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 border bg-ink-850/60 font-mono text-[12px] transition-all duration-200 ${ACCENT[block.accent]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 relative overflow-hidden border-y border-white/5 py-4">
          <div className="flex marquee-track w-max gap-10 font-mono text-foreground/30 text-sm whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-10">
                {[
                  "Python",
                  "C++",
                  "JavaScript",
                  "React",
                  "FastAPI",
                  "TensorFlow",
                  "HuggingFace",
                  "GNN",
                  "BERT",
                  "TailwindCSS",
                  "Node.js",
                  "Git",
                  "VS Code",
                ].map((t) => (
                  <span key={t + k} className="flex items-center gap-3">
                    <span className="text-neon-cyan">▹</span> {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
