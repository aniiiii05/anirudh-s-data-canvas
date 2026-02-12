import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming & Data",
    color: "hsl(250 90% 70%)",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 92 },
      { name: "Spark", level: 65 },
    ],
  },
  {
    title: "Analytics & BI",
    color: "hsl(320 80% 65%)",
    skills: [
      { name: "Power BI", level: 88 },
      { name: "Tableau", level: 82 },
      { name: "Excel", level: 90 },
    ],
  },
  {
    title: "Data Engineering",
    color: "hsl(170 85% 50%)",
    skills: [
      { name: "ETL Pipelines", level: 85 },
      { name: "Time Series", level: 75 },
      { name: "Data Modeling", level: 80 },
    ],
  },
  {
    title: "AI & ML",
    color: "hsl(250 90% 70%)",
    skills: [
      { name: "LLMs (OpenAI, HuggingFace)", level: 78 },
      { name: "NLP & Prompt Engineering", level: 80 },
      { name: "Generative AI", level: 75 },
    ],
  },
  {
    title: "Tools & Practices",
    color: "hsl(40 90% 55%)",
    skills: [
      { name: "Git & Version Control", level: 85 },
      { name: "Agile / Scrum", level: 80 },
      { name: "Stakeholder Mgmt", level: 88 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-[200px] opacity-8 pointer-events-none" style={{ background: "hsl(170 85% 50%)" }} />

      <div className="section-container relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-center">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis, AI development, and business intelligence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="font-heading font-semibold mb-4" style={{ color: cat.color }}>
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="font-mono text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${cat.color}, hsl(320 80% 65%))`,
                          boxShadow: `0 0 8px ${cat.color}40`,
                        }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.2, delay: ci * 0.1 + si * 0.15, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;