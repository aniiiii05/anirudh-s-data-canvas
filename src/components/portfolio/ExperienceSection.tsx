import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "PDF4me (Remote — Zürich, Switzerland)",
    role: "Data Specialist",
    period: "Oct 2024 – Present",
    achievements: [
      "Analyzing and optimizing document processing pipelines using Python & SQL",
      "Building Power BI dashboards for KPI tracking and business insights",
      "Implementing data quality frameworks and automated reporting",
    ],
    emoji: "⭐",
    flag: "🇨🇭",
  },
  {
    company: "Tata Motors (India)",
    role: "Data Analyst Intern",
    period: "2023",
    achievements: [
      "Developed OTIF supply chain dashboard improving delivery tracking by 20%",
      "Processed 2M+ records using Python and SQL for logistics optimization",
      "Automated weekly reporting workflows saving 15+ hours/week",
    ],
    emoji: "🏎️",
    flag: "🇮🇳",
  },
  {
    company: "Cisco (Virtual)",
    role: "Data Analytics Job Simulation",
    period: "2023",
    achievements: [
      "Completed advanced data analytics simulation program",
      "Applied statistical analysis and visualization techniques",
      "Presented actionable insights to stakeholder panels",
    ],
    emoji: "🌐",
    flag: "🌍",
  },
  {
    company: "Durga Engineering Works",
    role: "Business Operations Analyst",
    period: "2020 – 2021",
    achievements: [
      "Streamlined inventory management using Excel-based analytics",
      "Improved operational efficiency through data-driven process optimization",
      "Generated weekly business intelligence reports for decision-making",
    ],
    emoji: "🔧",
    flag: "🇮🇳",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative ground-section">
      <div className="section-container relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="font-heading text-lg sm:text-xl font-bold mb-4 text-center text-foreground drop-shadow-[2px_2px_0_hsl(25,60%,20%)]">
            Work <span className="text-accent">Experience</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg" style={{ fontFamily: "'VT323', monospace" }}>
            Levels completed on the journey! 🏁
          </p>
        </motion.div>

        <div className="relative">
          {/* Pipe-style timeline */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-6 md:-translate-x-3 pipe-style" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Coin marker */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1 md:-translate-x-4 mt-6 z-10 rounded-full bg-accent border-4 border-[hsl(35,80%,40%)] flex items-center justify-center text-sm">
                  {exp.emoji}
                </div>

                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="glass-card p-6 hover:scale-[1.01] transition-transform">
                    <div className="flex items-center gap-2 mb-2 justify-start">
                      <span className="text-lg">{exp.flag}</span>
                      <span className="font-bold text-accent" style={{ fontFamily: "'VT323', monospace", fontSize: "1.1rem" }}>{exp.period}</span>
                    </div>
                    <h3 className="font-heading text-[10px] sm:text-xs font-semibold text-start text-accent">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground mb-3 text-start" style={{ fontFamily: "'VT323', monospace", fontSize: "1rem" }}>{exp.company}</p>
                    <ul className="space-y-2 text-start">
                      {exp.achievements.map((a, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-2" style={{ fontFamily: "'VT323', monospace", fontSize: "1rem" }}>
                          <span className="flex-shrink-0">🍄</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
