import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart3,
  Code,
  Database,
  BrainCircuit,
  LineChart,
  Users,
} from "lucide-react";

const competencies = [
  {
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    desc: "Transforming complex datasets into compelling visual narratives using Power BI, Tableau, and Python.",
  },
  {
    icon: Code,
    title: "Python & SQL Development",
    desc: "Building robust data pipelines, automation scripts, and analytical tools with clean, efficient code.",
  },
  {
    icon: Database,
    title: "ETL & Data Engineering",
    desc: "Designing medallion architecture pipelines processing millions of records with high reliability.",
  },
  {
    icon: LineChart,
    title: "Business Intelligence",
    desc: "Delivering actionable dashboards and KPI frameworks that drive 20%+ process improvements.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Generative AI",
    desc: "Leveraging LLMs, NLP, and prompt engineering to build intelligent applications and automate workflows.",
  },
  {
    icon: Users,
    title: "Project Management",
    desc: "Leading cross-functional teams with Agile methodology, stakeholder management, and clear communication.",
  },
];

const CompetenciesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-center">
            Core <span className="gradient-text">Competencies</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Key areas of expertise spanning data, AI, and leadership
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 rounded-xl group hover:scale-[1.02] transition-transform duration-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <c.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                {c.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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