import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import anirudhCharacter from "@/assets/anirudh-character.png";

const skills = [
  { label: "Python", emoji: "🐍" },
  { label: "SQL", emoji: "🗄️" },
  { label: "Power BI", emoji: "📊" },
  { label: "Tableau", emoji: "📈" },
  { label: "Excel VBA", emoji: "📋" },
  { label: "NLP", emoji: "🧠" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" style={{ background: "linear-gradient(180deg, hsl(210 75% 58%), hsl(210 70% 55%))" }}>
      <div className="section-container relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="font-heading text-lg sm:text-xl font-bold mb-4 text-center text-foreground drop-shadow-[2px_2px_0_hsl(25,60%,20%)]">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg" style={{ fontFamily: "'VT323', monospace" }}>
            Data-focused engineering graduate turning ambiguous requirements into actionable analytics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <motion.img
              src={anirudhCharacter}
              alt="Anirudh pixel character"
              className="w-40 sm:w-52"
              style={{ imageRendering: "pixelated", mixBlendMode: "multiply", filter: "drop-shadow(3px 3px 0 hsl(25 60% 20%))" }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="glass-card p-6 w-full">
              <div className="grid grid-cols-3 gap-4">
                {skills.map(({ label, emoji }, i) => (
                  <motion.div
                    key={label}
                    className="flex flex-col items-center gap-2 p-3 bg-muted/50 border-2 border-mario-brick hover:border-accent transition-all"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-2xl">{emoji}</span>
                    <span className="text-xs text-foreground" style={{ fontFamily: "'VT323', monospace", fontSize: "1rem" }}>{label}</span>
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
            <div className="glass-card p-6">
              <p className="text-foreground leading-relaxed text-lg" style={{ fontFamily: "'VT323', monospace" }}>
                I'm a <strong className="text-accent">Data Specialist & Data Analyst</strong> — a data-focused engineering graduate with internship experience in analytics, BI, and operations support. Skilled in Python, SQL, and Power BI with hands-on exposure to ETL automation, dashboarding, and data validation.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3 text-lg" style={{ fontFamily: "'VT323', monospace" }}>
                Proven ability to translate ambiguous requirements into actionable analytics, delivering measurable operational improvements across <strong className="text-primary">production pipelines handling 2M+ daily records</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3 text-lg" style={{ fontFamily: "'VT323', monospace" }}>
                <strong className="text-secondary">B.Tech, Mechanical Engineering</strong> from NIT Durgapur (2022–2026) 🇮🇳. Based in <strong className="text-accent">Kolkata, India</strong>.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {["🐍 Python", "🗄️ SQL", "📊 Power BI", "📈 Tableau", "📋 Excel VBA", "🧠 NLP", "⚙️ ETL", "📉 ARIMA"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-bold bg-accent text-accent-foreground border-2 border-[hsl(35,80%,40%)]"
                  style={{ fontFamily: "'VT323', monospace", fontSize: "1rem", boxShadow: "2px 2px 0 hsl(25,60%,20%)" }}
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
