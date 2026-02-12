import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Code, Database, BrainCircuit, LineChart, Users } from "lucide-react";

const competencies = [
  {
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    desc: "Transforming complex datasets into compelling visual narratives using Power BI, Tableau, and Python.",
    gradient: "from-[hsl(250,90%,70%)] to-[hsl(280,70%,60%)]",
  },
  {
    icon: Code,
    title: "Python & SQL Development",
    desc: "Building robust data pipelines, automation scripts, and analytical tools with clean, efficient code.",
    gradient: "from-[hsl(320,80%,65%)] to-[hsl(350,70%,60%)]",
  },
  {
    icon: Database,
    title: "ETL & Data Engineering",
    desc: "Designing medallion architecture pipelines processing millions of records with high reliability.",
    gradient: "from-[hsl(170,85%,50%)] to-[hsl(200,80%,55%)]",
  },
  {
    icon: LineChart,
    title: "Business Intelligence",
    desc: "Delivering actionable dashboards and KPI frameworks that drive 20%+ process improvements.",
    gradient: "from-[hsl(40,90%,55%)] to-[hsl(30,85%,50%)]",
  },
  {
    icon: BrainCircuit,
    title: "AI & Generative AI",
    desc: "Leveraging LLMs, NLP, and prompt engineering to build intelligent applications and automate workflows.",
    gradient: "from-[hsl(250,90%,70%)] to-[hsl(320,80%,65%)]",
  },
  {
    icon: Users,
    title: "Project Management",
    desc: "Leading cross-functional teams with Agile methodology, stakeholder management, and clear communication.",
    gradient: "from-[hsl(170,85%,50%)] to-[hsl(250,90%,70%)]",
  },
];

const CompetenciesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[200px] opacity-8 pointer-events-none" style={{ background: "hsl(250 90% 70%)" }} />

      <div className="section-container relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
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
              className="glass-card p-6 rounded-xl group hover:scale-[1.03] transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${c.gradient} flex items-center justify-center mb-4 opacity-80 group-hover:opacity-100 transition shadow-lg`}>
                <c.icon className="text-white" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetenciesSection;