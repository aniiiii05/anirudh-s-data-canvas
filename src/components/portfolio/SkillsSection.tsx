import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming & Data",
    emoji: "🐍",
    barColor: "hsl(0 80% 50%)",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 92 },
      { name: "Spark", level: 65 },
    ],
  },
  {
    title: "Analytics & BI",
    emoji: "📊",
    barColor: "hsl(120 65% 38%)",
    skills: [
      { name: "Power BI", level: 88 },
      { name: "Tableau", level: 82 },
      { name: "Excel", level: 90 },
    ],
  },
  {
    title: "Data Engineering",
    emoji: "🏗️",
    barColor: "hsl(45 100% 50%)",
    skills: [
      { name: "ETL Pipelines", level: 85 },
      { name: "Time Series", level: 75 },
      { name: "Data Modeling", level: 80 },
    ],
  },
  {
    title: "AI & ML",
    emoji: "🧠",
    barColor: "hsl(0 80% 50%)",
    skills: [
      { name: "LLMs (OpenAI, HuggingFace)", level: 78 },
      { name: "NLP & Prompt Engineering", level: 80 },
      { name: "Generative AI", level: 75 },
    ],
  },
  {
    title: "Tools & Practices",
    emoji: "🔧",
    barColor: "hsl(120 65% 38%)",
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
    <section id="skills" className="py-24 relative" style={{ background: "linear-gradient(180deg, hsl(210 75% 58%), hsl(210 70% 52%))" }}>
      <div className="section-container relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="font-heading text-lg sm:text-xl font-bold mb-4 text-center text-foreground drop-shadow-[2px_2px_0_hsl(25,60%,20%)]">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg" style={{ fontFamily: "'VT323', monospace" }}>
            Power-up levels unlocked! 🍄
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="font-heading text-[10px] font-semibold mb-4 text-accent drop-shadow-[1px_1px_0_hsl(25,60%,20%)]">
                {cat.emoji} {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground" style={{ fontFamily: "'VT323', monospace", fontSize: "1.1rem" }}>{skill.name}</span>
                      <span className="font-bold text-accent" style={{ fontFamily: "'VT323', monospace", fontSize: "1.1rem" }}>{skill.level}%</span>
                    </div>
                    <div className="h-4 bg-muted border-2 border-mario-brick overflow-hidden">
                      <motion.div
                        className="h-full"
                        style={{
                          background: cat.barColor,
                          boxShadow: `inset 0 -2px 0 hsla(0 0% 0% / 0.2), inset 0 2px 0 hsla(0 0% 100% / 0.2)`,
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
