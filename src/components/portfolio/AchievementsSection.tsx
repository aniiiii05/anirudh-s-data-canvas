import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Trophy, TrendingUp, Award } from "lucide-react";

const useScrollCounter = (target: number, inView: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = () => {
      start += Math.ceil(target / 40);
      if (start >= target) {
        setCount(target);
        return;
      }
      setCount(start);
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, inView]);
  return count;
};

const achievements = [
  {
    icon: Trophy,
    title: "Hackathons",
    items: [
      "Smart India Hackathon participant",
      "University-level coding competitions",
      "AI/ML challenge finalist",
    ],
  },
  {
    icon: TrendingUp,
    title: "Measurable Impact",
    items: [
      "20%+ improvement in OTIF delivery scores",
      "2M+ records processed and analyzed",
      "15+ hours/week saved through automation",
    ],
  },
  {
    icon: Award,
    title: "Certifications",
    items: [
      "Data Analytics Professional",
      "Python for Data Science",
      "Business Intelligence Fundamentals",
    ],
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-center">
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Milestones and accomplishments along the journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-6 rounded-xl text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <a.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-4">
                {a.title}
              </h3>
              <ul className="space-y-2 text-left">
                {a.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;