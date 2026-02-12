import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Calendar, BookOpen } from "lucide-react";

const activities = [
  {
    icon: Users,
    title: "CCA Vice-President",
    desc: "Led the Cultural and Co-curricular Activities committee, organizing 15+ events for 500+ students annually.",
    stat: "500+ students",
  },
  {
    icon: Calendar,
    title: "Event Organizing",
    desc: "Coordinated technical workshops, hackathons, and inter-college competitions with cross-functional teams.",
    stat: "15+ events",
  },
  {
    icon: BookOpen,
    title: "Rotary Club Editor",
    desc: "Served as editor for the Rotary Club newsletter, managing content creation and publication for community outreach.",
    stat: "Monthly editions",
  },
];

const LeadershipSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-center">
            Leadership & <span className="gradient-text">Activities</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Beyond the code — leadership and community impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <a.icon className="text-primary" size={20} />
                </div>
                <span className="font-mono text-xs text-primary">{a.stat}</span>
              </div>
              <h3 className="font-heading font-semibold mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;