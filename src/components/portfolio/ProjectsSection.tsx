import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, X } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  longDesc: string;
  tags: string[];
  category: string[];
  tech: string[];
};

const projects: Project[] = [
  {
    title: "Research.AI Insight Tool",
    desc: "LLM-based research summarization platform for automated literature review and insight extraction.",
    longDesc:
      "An AI-powered tool that leverages OpenAI and HuggingFace models to automatically summarize academic papers, extract key insights, and generate structured research reports. Features include multi-document analysis, citation tracking, and exportable summaries.",
    tags: ["AI & NLP"],
    category: ["ai"],
    tech: ["Python", "OpenAI", "HuggingFace", "React", "LangChain"],
  },
  {
    title: "🎬 MOODFLIX",
    desc: "Real-time emotion detection via webcam with AI-powered movie recommendations based on your current mood.",
    longDesc:
      "A cutting-edge platform that uses your webcam to detect facial emotions in real-time using a pre-trained emotion detection model, then leverages the TMDB API to recommend movies matching your current mood. Features include live emotion visualization, genre mapping, and personalized watchlists.",
    tags: ["AI & NLP"],
    category: ["ai"],
    tech: ["React", "Webcam", "Emotion Model", "TMDB API", "Python"],
  },
  {
    title: "OTIF Dashboard",
    desc: "Supply chain analytics dashboard for Tata Motors tracking on-time in-full delivery performance.",
    longDesc:
      "Comprehensive Power BI dashboard analyzing delivery performance across Tata Motors' supply chain. Processes 2M+ records to identify bottlenecks, forecast delays, and provide actionable recommendations that improved OTIF scores by 20%.",
    tags: ["Business Intelligence"],
    category: ["bi"],
    tech: ["Power BI", "SQL", "Python", "DAX"],
  },
  {
    title: "Data Warehouse & Analytics",
    desc: "Medallion Architecture ETL pipeline for scalable data warehousing and analytics.",
    longDesc:
      "Designed and implemented a bronze-silver-gold medallion architecture for scalable data processing. Includes automated data quality checks, incremental loading, and dimensional modeling for optimized query performance.",
    tags: ["Data Engineering"],
    category: ["de"],
    tech: ["SQL", "ETL", "Data Modeling", "Python"],
  },
  {
    title: "YouTube Channel Analytics",
    desc: "10K+ video metrics pipeline and dashboard for YouTube channel performance analysis.",
    longDesc:
      "End-to-end analytics pipeline that extracts data from 10K+ YouTube videos via the YouTube Data API, processes engagement metrics, and visualizes trends in Power BI. Features include sentiment analysis on comments and predictive view count modeling.",
    tags: ["Data Engineering", "Business Intelligence"],
    category: ["de", "bi"],
    tech: ["Python", "YouTube API", "Power BI", "Pandas"],
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-stack MERN eco-friendly marketplace with sustainable product recommendations.",
    longDesc:
      "A full-stack e-commerce application built with the MERN stack, focused on eco-friendly and sustainable products. Features include user authentication, product search with filters, shopping cart, Stripe payments, and an admin dashboard.",
    tags: ["Full Stack"],
    category: ["fs"],
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Google Docs Clone",
    desc: "Real-time collaborative document editor with live syncing across multiple users.",
    longDesc:
      "A collaborative document editor built with PyQt5 and Supabase for real-time synchronization. Supports multiple concurrent users, rich text formatting, version history, and socket-based live updates.",
    tags: ["Full Stack"],
    category: ["fs"],
    tech: ["PyQt5", "Supabase", "Sockets", "Python"],
  },
];

const filters = ["All", "AI & NLP", "Business Intelligence", "Data Engineering", "Full Stack"];
const filterMap: Record<string, string> = {
  "All": "all",
  "AI & NLP": "ai",
  "Business Intelligence": "bi",
  "Data Engineering": "de",
  "Full Stack": "fs",
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(filterMap[filter]));

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            A collection of data, AI, and full-stack projects
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
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
                className="glass-card p-6 rounded-xl cursor-pointer group hover:scale-[1.02] transition-transform duration-300"
                onClick={() => setSelected(p)}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-full text-xs font-mono bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs bg-muted/50 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass-card p-8 rounded-2xl max-w-lg w-full border border-border"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading font-bold text-xl">
                    {selected.title}
                  </h3>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selected.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-full text-xs font-mono bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selected.longDesc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-muted text-foreground"
                    >
                      {t}
                    </span>
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