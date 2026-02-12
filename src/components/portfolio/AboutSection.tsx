import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Database, Code, BarChart3, Lightbulb, Sparkles } from "lucide-react";

const skills = [
  { icon: Code, label: "Python", color: "text-[hsl(250,90%,70%)]" },
  { icon: Database, label: "SQL", color: "text-accent" },
  { icon: BarChart3, label: "Power BI", color: "text-secondary" },
  { icon: BarChart3, label: "Tableau", color: "text-[hsl(250,90%,70%)]" },
  { icon: Brain, label: "LLMs", color: "text-secondary" },
  { icon: Sparkles, label: "Gen AI", color: "text-accent" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[200px] opacity-10 pointer-events-none" style={{ background: "hsl(320 80% 65%)" }} />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Turning raw data into actionable insights and building AI-powered solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 rounded-2xl gradient-border">
              <div className="grid grid-cols-3 gap-4">
                {skills.map(({ icon: Icon, label, color }, i) => (
                  <motion.div
                    key={label}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/30 hover:bg-muted/60 transition-all"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Icon className={color} size={28} />
                    <span className="text-xs font-mono text-muted-foreground">{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-foreground leading-relaxed">
              I'm a <strong className="gradient-text">Data Specialist & AI Enthusiast</strong> with
              3+ years of experience transforming complex datasets into strategic business insights.
              My work spans data analysis, business intelligence, and cutting-edge AI applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently exploring the intersection of <strong className="text-secondary">Generative AI</strong> and
              data analytics — building tools that leverage LLMs, NLP, and prompt engineering to
              automate research, detect emotions, and deliver intelligent recommendations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Based in <strong className="text-accent">Kolkata, India</strong>, working remotely as a Data Specialist. 
              From architecting ETL pipelines processing 2M+ records to developing AI-powered
              applications, I bridge the gap between raw data and real-world impact.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["Data Analysis", "AI/ML", "Python", "SQL", "Power BI", "LLMs"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-mono border border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;