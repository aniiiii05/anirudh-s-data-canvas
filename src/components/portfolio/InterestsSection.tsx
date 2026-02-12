import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const interests = [
  { emoji: "🏸", label: "Badminton" },
  { emoji: "✏️", label: "Sketching" },
  { emoji: "🎤", label: "Public Speaking" },
  { emoji: "📚", label: "Reading" },
  { emoji: "🌍", label: "Languages" },
];

const InterestsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 ground-section">
      <div className="section-container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="font-heading text-lg sm:text-xl font-bold mb-4 text-center text-foreground drop-shadow-[2px_2px_0_hsl(25,60%,20%)]">
            Bonus <span className="text-accent">Items</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg" style={{ fontFamily: "'VT323', monospace" }}>
            What keeps me powered up outside work! 🌟
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {interests.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="question-block px-8 py-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform cursor-pointer"
            >
              <motion.span
                className="text-4xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              >
                {item.emoji}
              </motion.span>
              <span className="font-bold" style={{ color: "hsl(25 60% 20%)", fontFamily: "'VT323', monospace", fontSize: "1.2rem" }}>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
