import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { PROFILE } from "../data/portfolio";

const ROLES = ["ML_Engineer", "Full_Stack_Dev", "GNN_Researcher", "Builder"];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState(0);
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const role = ROLES[roleIdx];
    let timeout;
    if (phase === 0) {
      if (typed.length < role.length) {
        timeout = setTimeout(
          () => setTyped(role.slice(0, typed.length + 1)),
          70,
        );
      } else {
        timeout = setTimeout(() => setPhase(1), 1400);
      }
    } else if (phase === 1) {
      timeout = setTimeout(() => setPhase(2), 250);
    } else {
      if (typed.length > 0) {
        timeout = setTimeout(
          () => setTyped(role.slice(0, typed.length - 1)),
          35,
        );
      } else {
        setPhase(0);
        setRoleIdx((roleIdx + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [typed, phase, roleIdx]);

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-32 pb-24 lg:pt-44 lg:pb-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] tracking-[0.25em] uppercase text-neon-cyan flex items-center gap-3"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-neon-lime animate-pulse" />
          status://available_for_sde_internships
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          data-testid="hero-name"
          className="mt-6 font-mono font-bold leading-[0.95] tracking-tight text-[44px] sm:text-[68px] lg:text-[92px] xl:text-[108px]"
        >
          Apoorva
          <br />
          <span className="text-neon-cyan glow-cyan">Pandey</span>
          <span className="text-neon-lime">.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 font-mono text-base sm:text-lg text-foreground/80 flex flex-wrap items-center gap-x-2"
        >
          <span className="text-neon-lime">$</span>
          <span className="text-foreground/50">./role</span>
          <span className="text-foreground/30">=</span>
          <span className="text-neon-cyan" data-testid="hero-role-typed">
            {typed}
          </span>
          <span className="caret h-[1em] align-middle" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 max-w-2xl text-foreground/70 text-base sm:text-lg leading-relaxed"
        >
          {PROFILE.tagline} — bridging ML research with real, shippable
          products. Currently sharpening DSA, system design, and shipping
          AI-driven full-stack apps that solve concrete problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            data-testid="hero-cta-hire"
            className="group inline-flex items-center gap-2 px-5 py-3 bg-neon-cyan text-ink-900 font-mono text-sm font-semibold hover:bg-neon-lime transition-colors lift"
          >
            <Sparkles size={16} />
            <span>deploy(hire_me)</span>
            <ArrowDownRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </a>
          <a
            href="#projects"
            data-testid="hero-cta-projects"
            className="inline-flex items-center gap-2 px-5 py-3 border border-white/15 font-mono text-sm hover:border-neon-cyan/50 hover:text-neon-cyan transition-colors lift"
          >
            cat ./projects.json
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 border border-white/5 font-mono"
        >
          {[
            { k: "focus", v: "AI · ML · FS" },
            { k: "stack", v: "Python · React · TS" },
            { k: "based", v: "India 🌐" },
            { k: "status", v: "Building" },
          ].map((it, idx) => (
            <div key={idx} className="bg-ink-900 p-4 lg:p-5">
              <div className="text-[10px] text-foreground/40 uppercase tracking-[0.2em]">
                // {it.k}
              </div>
              <div className="mt-1 text-sm text-foreground/90">{it.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
