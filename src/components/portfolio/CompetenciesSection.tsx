import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Code, Database, BrainCircuit, LineChart, Users } from "lucide-react";

const competencies = [
  { icon: BarChart3, title: "Data Analysis & Visualization", desc: "Transforming complex datasets into compelling visual narratives using Power BI, Tableau, and Python.", emoji: "📊" },
  { icon: Code, title: "Python & SQL Development", desc: "Building robust data pipelines, automation scripts, and analytical tools with clean, efficient code.", emoji: "🐍" },
  { icon: Database, title: "ETL & Data Engineering", desc: "Designing medallion architecture pipelines processing millions of records with high reliability.", emoji: "🏗️" },
  { icon: LineChart, title: "Business Intelligence", desc: "Delivering actionable dashboards and KPI frameworks that drive 20%+ process improvements.", emoji: "📈" },
  { icon: BrainCircuit, title: "AI & Generative AI", desc: "Leveraging LLMs, NLP, and prompt engineering to build intelligent applications.", emoji: "🧠" },
  { icon: Users, title: "Project Management", desc: "Leading cross-functional teams with Agile methodology and clear communication.", emoji: "👥" },
];

const CompetenciesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative ground-section">
      <div className="section-container relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="font-heading text-lg sm:text-xl font-bold mb-4 text-center text-foreground drop-shadow-[2px_2px_0_hsl(25,60%,20%)]">
            Core <span className="text-accent">Competencies</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg" style={{ fontFamily: "'VT323', monospace" }}>
            Key areas of expertise — power-ups collected along the journey!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="question-block p-6 group hover:scale-[1.03] transition-all duration-300 cursor-pointer"
            >
              <div className="text-3xl mb-4">{c.emoji}</div>
              <h3 className="font-heading text-[10px] sm:text-xs font-semibold mb-2" style={{ color: "hsl(25 60% 20%)" }}>
                {c.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(25 50% 30%)", fontFamily: "'VT323', monospace", fontSize: "1.1rem" }}>
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetenciesSection;
