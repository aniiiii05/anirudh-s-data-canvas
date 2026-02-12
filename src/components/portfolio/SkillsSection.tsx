import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming & Data",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 92 },
      { name: "Spark", level: 65 },
    ],
  },
  {
    title: "Analytics & BI",
    skills: [
      { name: "Power BI", level: 88 },
      { name: "Tableau", level: 82 },
      { name: "Excel", level: 90 },
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      { name: "ETL Pipelines", level: 85 },
      { name: "Time Series", level: 75 },
      { name: "Data Modeling", level: 80 },
    ],
  },
  {
    title: "AI & ML",
    skills: [
      { name: "LLMs (OpenAI, HuggingFace)", level: 78 },
      { name: "NLP & Prompt Engineering", level: 80 },
      { name: "Generative AI", level: 75 },
    ],
  },
  {
    title: "Tools & Practices",
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
    <section id="skills" className="py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
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
              <h3 className="font-heading font-semibold mb-4 text-primary">
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="font-mono text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, hsl(234 80% 66%), hsl(270 50% 55%), hsl(320 80% 77%))",
                        }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: ci * 0.1 + si * 0.15,
                          ease: "easeOut",
                        }}
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