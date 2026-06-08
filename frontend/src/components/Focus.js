import { motion } from "framer-motion";
import { FOCUS } from "../data/portfolio";

const STATUS_COLOR = {
  Active: "text-neon-lime  bg-neon-lime/10  border-neon-lime/40",
  Learning: "text-neon-cyan  bg-neon-cyan/10  border-neon-cyan/40",
  Building: "text-neon-amber bg-neon-amber/10 border-neon-amber/40",
  Open: "text-neon-lime  bg-neon-lime/10  border-neon-lime/40",
};

export default function Focus() {
  return (
    <section
      id="focus"
      data-testid="focus-section"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-neon-cyan">
              // 04_focus
            </div>
            <h2 className="mt-4 font-mono text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              right now i'm <span className="text-neon-cyan">on it</span>
              <span className="text-neon-lime">.</span>
            </h2>
          </div>
          <p className="max-w-md text-foreground/60 text-sm">
            Live status of what I'm grinding, building, and shipping this
            quarter.
          </p>
        </div>
        <div className="mt-12 border border-white/10 bg-ink-850/60 font-mono">
          <div className="grid grid-cols-12 px-4 sm:px-6 py-3 text-[11px] tracking-[0.2em] uppercase text-foreground/40 border-b border-white/10">
            <div className="col-span-5">area</div>
            <div className="col-span-3">status</div>
            <div className="col-span-4 hidden sm:block">notes</div>
          </div>
          {FOCUS.map((row, i) => (
            <motion.div
              key={row.area}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              data-testid={`focus-row-${i}`}
              className="grid grid-cols-12 items-center px-4 sm:px-6 py-5 border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors"
            >
              <div className="col-span-12 sm:col-span-5 text-foreground/90 text-sm flex items-center gap-2">
                <span className="text-neon-cyan">▹</span>
                {row.area}
              </div>
              <div className="col-span-6 sm:col-span-3 mt-2 sm:mt-0">
                <span
                  className={`inline-flex items-center gap-2 px-2.5 py-1 text-[11px] border ${STATUS_COLOR[row.status]}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                  {row.status}
                </span>
              </div>
              <div className="col-span-12 sm:col-span-4 mt-2 sm:mt-0 text-foreground/60 text-xs sm:text-sm">
                {row.note}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
