import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mail, Github, Linkedin, FileText, Send, Loader2 } from "lucide-react";
import { PROFILE } from "../data/portfolio";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      form.message.trim().length < 5
    ) {
      toast.error("[error] all fields required · message ≥ 5 chars");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${API}/contact`, form);
      toast.success(
        res.data?.email_sent
          ? "[ok] message delivered → inbox.apoorva"
          : "[ok] message logged · I'll reach out soon",
      );
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(
        `[error] ${typeof detail === "string" ? detail : "transmission failed"}`,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-neon-cyan">
            // 06_contact
          </div>
          <h2 className="mt-4 font-mono text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            let's <span className="text-neon-lime">build</span> something
            <span className="text-neon-cyan">_</span>
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed max-w-md">
            Hiring for an SDE/ML internship? Looking for a teammate for a
            hackathon? Just want to nerd out about graph networks at 2am? Drop a
            line — I read every message.
          </p>
          <div className="mt-8 space-y-3 font-mono text-sm">
            <a
              href={`mailto:${PROFILE.email}`}
              data-testid="contact-email-link"
              className="flex items-center gap-3 px-4 py-3 border border-white/10 hover:border-neon-cyan/50 hover:text-neon-cyan transition-colors lift"
            >
              <Mail size={16} className="text-neon-cyan" /> {PROFILE.email}
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              data-testid="contact-github-link"
              className="flex items-center gap-3 px-4 py-3 border border-white/10 hover:border-neon-cyan/50 hover:text-neon-cyan transition-colors lift"
            >
              <Github size={16} className="text-neon-cyan" />{" "}
              github.com/apoorva-ppl
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              data-testid="contact-linkedin-link"
              className="flex items-center gap-3 px-4 py-3 border border-white/10 hover:border-neon-cyan/50 hover:text-neon-cyan transition-colors lift"
            >
              <Linkedin size={16} className="text-neon-cyan" /> linkedin
            </a>
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noreferrer"
              data-testid="contact-resume-link"
              className="flex items-center gap-3 px-4 py-3 border border-white/10 hover:border-neon-lime/50 hover:text-neon-lime transition-colors lift"
            >
              <FileText size={16} className="text-neon-lime" /> view_resume.pdf
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={submit}
          data-testid="contact-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 border border-white/10 bg-ink-850/60 terminal-shadow"
        >
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-ink-800">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-neon-red/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-neon-amber/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-neon-lime/80" />
            </div>
            <span className="font-mono text-[11px] text-foreground/50">
              ~/send_message.sh
            </span>
            <span className="font-mono text-[11px] text-foreground/30">
              {loading ? "transmitting…" : "ready"}
            </span>
          </div>
          <div className="p-6 lg:p-8 space-y-6">
            <Field
              label="name"
              testid="contact-input-name"
              value={form.name}
              onChange={update("name")}
              placeholder="Ada Lovelace"
            />
            <Field
              label="email"
              testid="contact-input-email"
              type="email"
              value={form.email}
              onChange={update("email")}
              placeholder="you@somewhere.dev"
            />
            <div>
              <label className="font-mono text-[11px] tracking-[0.2em] uppercase text-neon-cyan">
                <span className="text-foreground/40">$</span> message
              </label>
              <textarea
                data-testid="contact-input-message"
                value={form.message}
                onChange={update("message")}
                rows={6}
                placeholder="// tell me about the role / idea / 2am thought…"
                className="mt-2 w-full bg-ink-900 border border-white/10 px-4 py-3 font-mono text-sm text-foreground placeholder-foreground/30 focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_0_1px_rgba(0,240,255,0.5)] resize-none transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              data-testid="contact-submit-button"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-neon-cyan text-ink-900 font-mono text-sm font-semibold hover:bg-neon-lime disabled:opacity-60 disabled:cursor-not-allowed transition-colors lift"
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
              {loading ? "transmitting…" : "execute()"}
              <span className="caret h-[1em]" />
            </button>
            <p className="font-mono text-[11px] text-foreground/40">
              // delivered straight to {PROFILE.email}. no spam, no newsletters.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, testid, type = "text", value, onChange, placeholder }) {
  return (
    <div>
      <label className="font-mono text-[11px] tracking-[0.2em] uppercase text-neon-cyan">
        <span className="text-foreground/40">$</span> {label}
      </label>
      <input
        data-testid={testid}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full bg-ink-900 border border-white/10 px-4 py-3 font-mono text-sm text-foreground placeholder-foreground/30 focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_0_1px_rgba(0,240,255,0.5)] transition-all"
      />
    </div>
  );
}
