export const PROFILE = {
  name: "Apoorva Pandey",
  handle: "apoorva-ppl",
  tagline: "Building AI systems that actually work",
  taglineParts: ["GNN", "NLP", "BERT", "Full Stack"],
  title: "B.Tech Student · ML Engineer · Full Stack Developer",
  belief: "Code > Theory. Ship > Perfect. Learn > Everything.",
  email: "apoorvapandey0202@gmail.com",
  github: "https://github.com/apoorva-ppl",
  linkedin: "https://www.linkedin.com/",
  resume:
    "https://drive.google.com/file/d/1uBLPNVHIVZ7ugv1v8TX5VAeDYWD-GV81/view?usp=sharing",
};

export const NAV = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "focus", label: "focus" },
  { id: "stats", label: "stats" },
  { id: "contact", label: "contact" },
];

export const SKILLS = [
  {
    category: "AI / ML",
    accent: "neon-cyan",
    items: [
      "BERT",
      "GNN",
      "TensorFlow",
      "scikit-learn",
      "HuggingFace",
      "Streamlit",
    ],
  },
  {
    category: "Languages",
    accent: "neon-lime",
    items: ["Python", "C++", "JavaScript"],
  },
  {
    category: "Frontend",
    accent: "neon-amber",
    items: ["React", "TailwindCSS", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    category: "Backend & Dev Tools",
    accent: "neon-cyan",
    items: ["Node.js", "FastAPI", "REST APIs", "Git", "GitHub", "VS Code"],
  },
];

export const PROJECTS = [
  {
    name: "Sentinel_GNN",
    code: "GNN-01",
    blurb:
      "Graph Neural Network system for intelligent pattern detection & anomaly analysis on structured graph data.",
    tags: ["GNN", "Python", "Machine Learning"],
    accent: "neon-cyan",
    repo: "https://github.com/apoorva-ppl/Sentinel_GNN",
  },
  {
    name: "SkillSetu",
    code: "FS-02",
    blurb:
      "AI-powered skill assessment platform with voice interviews, RAG-based guidance chat, and personalized training roadmaps for blue-collar upskilling.",
    tags: ["FastAPI", "React", "Groq", "RAG", "STT/TTS"],
    accent: "neon-lime",
    repo: "https://github.com/arkadeycns/SkillSetu",
  },
  {
    name: "QUANTIX",
    code: "QT-03",
    blurb:
      "Production-grade Limit Order Book simulator evaluating LLM agents executing large block trades against TWAP benchmarks. Built for the Meta PyTorch OpenEnv Hackathon.",
    tags: ["Python", "LLM Agents", "Quant", "Streamlit"],
    accent: "neon-amber",
    repo: "https://github.com/CodeR-6-9/QUANTIX",
  },
  {
    name: "ChronoSherlock",
    code: "ML-04",
    blurb:
      "Frame reordering via TSP on pixel features for MLWare '26 at IIT BHU. Combines transformer direction model with physics-based heuristics.",
    tags: ["TSP", "DINOv2", "Transformer", "OpenCV"],
    accent: "neon-cyan",
    repo: "https://github.com/apoorva-ppl/ChronoSherlock",
  },
];

export const FOCUS = [
  {
    area: "Advanced DSA",
    status: "Active",
    note: "Patterns · contest-style problem solving",
  },
  {
    area: "System Design",
    status: "Learning",
    note: "HLD/LLD basics · scalability patterns",
  },
  {
    area: "ML Projects",
    status: "Building",
    note: "GNN · NLP · AI-powered full-stack apps",
  },
  {
    area: "SDE Internships",
    status: "Open",
    note: "Open to summer & full-time roles",
  },
];

export const GITHUB_STATS = [
  {
    label: "stats",
    url: "https://github-readme-stats.vercel.app/api?username=apoorva-ppl&show_icons=true&theme=tokyonight&hide_border=true&bg_color=050505&title_color=00F0FF&icon_color=00F0FF&text_color=9CA3AF&rank_icon=github",
  },
  {
    label: "streak",
    url: "https://github-readme-streak-stats.herokuapp.com/?user=apoorva-ppl&theme=tokyonight&hide_border=true&background=050505&ring=00F0FF&fire=00F0FF&currStreakLabel=00F0FF",
  },
  {
    label: "top-languages",
    url: "https://github-readme-stats.vercel.app/api/top-langs/?username=apoorva-ppl&layout=compact&theme=tokyonight&hide_border=true&bg_color=050505&title_color=00F0FF&text_color=9CA3AF&langs_count=8",
  },
];
