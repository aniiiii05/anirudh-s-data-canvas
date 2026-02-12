import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  longDesc: string;
  tags: string[];
  category: string[];
  tech: string[];
  emoji: string;
};

const projects: Project[] = [
  {
    title: "Research.AI Insight Tool",
    desc: "LLM-based research summarization platform for automated literature review.",
    longDesc: "An AI-powered tool that leverages OpenAI and HuggingFace models to automatically summarize academic papers, extract key insights, and generate structured research reports.",
    tags: ["AI & NLP"],
    category: ["ai"],
    tech: ["Python", "OpenAI", "HuggingFace", "React", "LangChain"],
    emoji: "🧠",
  },
  {
    title: "MOODFLIX",
    desc: "Real-time emotion detection via webcam with AI-powered movie recommendations.",
    longDesc: "Uses your webcam to detect facial emotions in real-time using a pre-trained emotion detection model, then leverages the TMDB API to recommend movies matching your mood.",
    tags: ["AI & NLP"],
    category: ["ai"],
    tech: ["React", "Webcam", "Emotion Model", "TMDB API", "Python"],
    emoji: "🎬",
  },
  {
    title: "OTIF Dashboard",
    desc: "Supply chain analytics dashboard for Tata Motors tracking delivery performance.",
    longDesc: "Comprehensive Power BI dashboard analyzing delivery performance across Tata Motors' supply chain. Processes 2M+ records to identify bottlenecks.",
    tags: ["Business Intelligence"],
    category: ["bi"],
    tech: ["Power BI", "SQL", "Python", "DAX"],
    emoji: "📊",
  },
  {
    title: "Data Warehouse & Analytics",
    desc: "Medallion Architecture ETL pipeline for scalable data warehousing.",
    longDesc: "Designed and implemented a bronze-silver-gold medallion architecture for scalable data processing with automated data quality checks.",
    tags: ["Data Engineering"],
    category: ["de"],
    tech: ["SQL", "ETL", "Data Modeling", "Python"],
    emoji: "🏗️",
  },
  {
    title: "YouTube Channel Analytics",
    desc: "10K+ video metrics pipeline and dashboard for channel performance analysis.",
    longDesc: "End-to-end analytics pipeline that extracts data from 10K+ YouTube videos via the YouTube Data API.",
    tags: ["Data Engineering", "Business Intelligence"],
    category: ["de", "bi"],
    tech: ["Python", "YouTube API", "Power BI", "Pandas"],
    emoji: "📺",
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-stack MERN eco-friendly marketplace with sustainable product recommendations.",
    longDesc: "A full-stack e-commerce application built with the MERN stack, focused on eco-friendly and sustainable products.",
    tags: ["Full Stack"],
    category: ["fs"],
    tech: ["MongoDB", "Express", "React", "Node.js"],
    emoji: "🛒",
  },
  {
    title: "Google Docs Clone",
    desc: "Real-time collaborative document editor with live syncing across users.",
    longDesc: "A collaborative document editor built with PyQt5 and Supabase for real-time synchronization.",
    tags: ["Full Stack"],
    category: ["fs"],
    tech: ["PyQt5", "Supabase", "Sockets", "Python"],
    emoji: "📝",
  },
];

const filters = ["All", "AI & NLP", "Business Intelligence", "Data Engineering", "Full Stack"];
const filterMap: Record<string, string> = { "All": "all", "AI & NLP": "ai", "Business Intelligence": "bi", "Data Engineering": "de", "Full Stack": "fs" };

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category.includes(filterMap[filter]));

  return (
    <section id="projects" className="py-24 relative" style={{ background: "linear-gradient(180deg, hsl(210 75% 58%), hsl(210 70% 52%))" }}>
      <div className="section-container relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="font-heading text-lg sm:text-xl font-bold mb-4 text-center text-foreground drop-shadow-[2px_2px_0_hsl(25,60%,20%)]">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto text-lg" style={{ fontFamily: "'VT323', monospace" }}>
            Worlds explored and conquered! 🏰
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 text-sm font-bold transition-all border-4 ${
                filter === f
                  ? "question-block text-accent-foreground"
                  : "glass-card text-foreground hover:border-accent"
              }`}
              style={{ fontFamily: "'VT323', monospace", fontSize: "1.1rem" }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 cursor-pointer group hover:scale-[1.03] transition-all duration-300"
                onClick={() => setSelected(p)}
              >
                <div className="text-4xl mb-3">{p.emoji}</div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs font-bold bg-accent text-accent-foreground border-2 border-[hsl(35,80%,40%)]" style={{ fontFamily: "'VT323', monospace", fontSize: "0.9rem" }}>
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading text-[10px] sm:text-xs font-semibold mb-2 text-accent group-hover:text-foreground transition">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2" style={{ fontFamily: "'VT323', monospace", fontSize: "1rem" }}>{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.slice(0, 4).map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs bg-muted/50 text-muted-foreground border border-mario-brick" style={{ fontFamily: "'VT323', monospace", fontSize: "0.85rem" }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              style={{ background: "hsla(210 75% 30% / 0.8)" }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="question-block p-8 max-w-lg w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{selected.emoji}</span>
                    <h3 className="font-heading text-xs sm:text-sm font-bold" style={{ color: "hsl(25 60% 20%)" }}>{selected.title}</h3>
                  </div>
                  <button onClick={() => setSelected(null)} className="hover:opacity-70"><X size={20} style={{ color: "hsl(25 60% 20%)" }} /></button>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selected.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs font-bold bg-primary text-foreground border-2 border-[hsl(0,60%,35%)]" style={{ fontFamily: "'VT323', monospace" }}>{t}</span>
                  ))}
                </div>
                <p className="mb-6 leading-relaxed" style={{ color: "hsl(25 50% 30%)", fontFamily: "'VT323', monospace", fontSize: "1.2rem" }}>{selected.longDesc}</p>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-bold bg-secondary text-foreground border-2 border-[hsl(120,40%,25%)]" style={{ fontFamily: "'VT323', monospace" }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
