import { motion } from "framer-motion";
import { PROFILE } from "../data/portfolio";

const code = `const apoorva = {
  title       : "B.Tech Student → Building at the intersection of AI & Software",
  superpower  : "Bridging ML research with real, shippable products",
  building    : [
    "Sentinel_GNN — GNN for pattern detection",
    "SkillSetu    — Skills-to-opportunities platform",
    "QUANTIX      — Adversarial LOB simulator for LLM agents",
    "ChronoSherlock — TSP-based frame reordering",
  ],
  techStack   : {
    ai_ml      : ["BERT", "GNN", "TensorFlow", "scikit-learn", "HuggingFace"],
    fullStack  : ["React", "Node.js", "TailwindCSS", "FastAPI"],
    languages  : ["Python", "C++", "JavaScript"],
  },
  currently   : "Mastering DSA + System Design basics",
  belief      : "Code > Theory. Ship > Perfect. Learn > Everything.",
};`;

function colorize(src) {
  return src
    .replace(
      /(\/\/[^\n]*)/g,
      '<span style="color:rgba(229,231,235,0.4)">$1</span>',
    )
    .replace(/"([^"]*)"/g, '<span style="color:#C4F135">"$1"</span>')
    .replace(/\b(const|let|var)\b/g, '<span style="color:#00F0FF">$1</span>');
}

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-neon-cyan">
            // 01_about
          </div>
          <h2 className="mt-4 font-mono text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            who is this <span className="text-neon-lime">apoorva</span>
            <span className="text-neon-cyan">?</span>
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            I'm a B.Tech student who treats ML research as something you ship,
            not something you publish. I move between graph neural nets, NLP
            transformers, and a React+FastAPI stack — turning rough ideas into
            products people can actually click.
          </p>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            When I'm not training models, I'm grinding DSA, learning system
            design, or arguing with a teammate about whether a sliding-window
            solution counts as elegant. (It does.)
          </p>
          <div className="mt-8 p-4 border-l-2 border-neon-cyan bg-ink-850/60 font-mono text-sm">
            <span className="text-foreground/40"># belief</span>
            <div className="mt-1 text-foreground">{PROFILE.belief}</div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8"
        >
          <div className="border border-white/10 bg-ink-850 terminal-shadow">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-ink-800">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-neon-red/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-neon-amber/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-neon-lime/80" />
              </div>
              <span className="font-mono text-[11px] text-foreground/50">
                apoorva@portfolio: ~/about.js
              </span>
              <span className="font-mono text-[11px] text-foreground/30">
                UTF-8
              </span>
            </div>
            <pre
              className="p-5 lg:p-7 font-mono text-[12.5px] sm:text-sm leading-relaxed text-foreground/85 overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: colorize(code) }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
