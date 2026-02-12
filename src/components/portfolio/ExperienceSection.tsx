import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "PDF4me (Zürich, Switzerland)",
    role: "Data Specialist",
    period: "Oct 2024 – Present",
    achievements: [
      "Analyzing and optimizing document processing pipelines using Python & SQL",
      "Building Power BI dashboards for KPI tracking and business insights",
      "Implementing data quality frameworks and automated reporting",
    ],
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
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-center">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A journey through data analytics and business intelligence
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-6 z-10 ring-4 ring-background" />

                <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass-card p-6 rounded-xl">
                    <div className="flex items-center gap-2 mb-2 justify-start">
                      <Briefcase className="text-primary" size={16} />
                      <span className="font-mono text-xs text-primary">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-start">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 text-start">
                      {exp.company}
                    </p>
                    <ul className="space-y-2 text-start">
                      {exp.achievements.map((a, j) => (
                        <li
                          key={j}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
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