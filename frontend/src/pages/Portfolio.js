import { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Focus from "../components/Focus";
import GitHubStats from "../components/GitHubStats";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Portfolio() {
  const [bootDone, setBootDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setBootDone(true), 600);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="relative min-h-screen bg-ink-900 text-foreground overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-50 z-0" />
      <div className="pointer-events-none fixed inset-0 bg-radial-cyan z-0" />
      <div
        className={`relative z-10 transition-opacity duration-500 ${bootDone ? "opacity-100" : "opacity-0"}`}
      >
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Focus />
          <GitHubStats />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
