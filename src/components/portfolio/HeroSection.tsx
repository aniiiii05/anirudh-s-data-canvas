import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import anirudhCharacter from "@/assets/anirudh-character.png";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";

const roles = [
  "Data Specialist",
  "AI Enthusiast",
  "Python & SQL Expert",
  "Business Intelligence Analyst",
];

const stats = [
  { value: 2000000, suffix: "+", label: "Records Analyzed", prefix: "" },
  { value: 20, suffix: "%+", label: "Process Improvements", prefix: "" },
  { value: 3, suffix: "+", label: "Years Experience", prefix: "" },
];

const useCounter = (target: number, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

const formatNumber = (n: number) => {
  if (n >= 1000000) return `${(n / 1000000).toFixed(0)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
  return n.toString();
};

// Mario Cloud component
const Cloud = ({ top, left, delay, size = 1 }: { top: string; left: string; delay: number; size?: number }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ top, left, transform: `scale(${size})` }}
    animate={{ x: [0, 30, 0] }}
    transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="relative">
      <div className="flex gap-0">
        <div className="w-8 h-8 rounded-full bg-white" />
        <div className="w-12 h-12 rounded-full bg-white -mt-4 -ml-2" />
        <div className="w-10 h-10 rounded-full bg-white -mt-2 -ml-3" />
        <div className="w-6 h-6 rounded-full bg-white -ml-1" />
      </div>
      {/* Cloud eyes */}
      <div className="absolute top-3 left-6 flex gap-4">
        <div className="w-1.5 h-2 bg-[hsl(25,60%,20%)] rounded-sm" />
        <div className="w-1.5 h-2 bg-[hsl(25,60%,20%)] rounded-sm" />
      </div>
    </div>
  </motion.div>
);

// Green pipe decoration
const Pipe = ({ side, bottom }: { side: "left" | "right"; bottom: string }) => (
  <div className={`absolute ${side}-4 sm:${side}-12`} style={{ bottom }}>
    <div className="pipe-style rounded-t-sm" style={{ width: 48, height: 24, marginLeft: -4, marginBottom: -2 }} />
    <div className="pipe-style" style={{ width: 40, height: 60 }} />
  </div>
);

// Coin
const Coin = ({ top, left, delay }: { top: string; left: string; delay: number }) => (
  <motion.div
    className="absolute w-6 h-6 rounded-full bg-accent border-2 border-[hsl(35,80%,40%)] flex items-center justify-center pointer-events-none"
    style={{ top, left }}
    animate={{ rotateY: [0, 180, 360], y: [0, -5, 0] }}
    transition={{ duration: 2, delay, repeat: Infinity }}
  >
    <span className="text-[8px] font-bold text-[hsl(25,60%,20%)]">$</span>
  </motion.div>
);

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;
    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{ background: "linear-gradient(180deg, hsl(210 80% 65%) 0%, hsl(210 75% 58%) 60%, hsl(210 70% 50%) 100%)" }}>
      
      {/* Clouds */}
      <Cloud top="10%" left="5%" delay={0} size={0.8} />
      <Cloud top="15%" left="60%" delay={2} size={1.2} />
      <Cloud top="25%" left="30%" delay={4} size={0.6} />
      <Cloud top="8%" left="80%" delay={1} size={1} />

      {/* Character */}
      <motion.img
        src={anirudhCharacter}
        alt="Anirudh pixel character"
        className="absolute bottom-20 right-[12%] w-32 sm:w-40 lg:w-48 pointer-events-none z-10"
        style={{ imageRendering: "pixelated", mixBlendMode: "multiply", filter: "drop-shadow(3px 3px 0 hsl(25 60% 20%))" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Coins */}
      <Coin top="30%" left="15%" delay={0} />
      <Coin top="35%" left="75%" delay={0.5} />
      <Coin top="20%" left="50%" delay={1} />

      {/* Pipes */}
      <Pipe side="left" bottom="0" />
      <Pipe side="right" bottom="0" />

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="brick-pattern h-16 border-t-4 border-mario-ground" />
      </div>

      {/* Green hills */}
      <div className="absolute bottom-16 left-8 pointer-events-none">
        <div className="w-40 h-20 rounded-t-full" style={{ background: "hsl(120 65% 38%)" }} />
      </div>
      <div className="absolute bottom-16 right-16 pointer-events-none">
        <div className="w-24 h-12 rounded-t-full" style={{ background: "hsl(120 60% 35%)" }} />
      </div>

      <div ref={ref} className="section-container text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-accent font-heading text-[8px] sm:text-[10px] mb-6 tracking-widest uppercase drop-shadow-[2px_2px_0_hsl(25,60%,20%)]"
        >
          ⭐ Welcome to my world ⭐
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-relaxed"
          style={{ 
            color: "hsl(0 0% 100%)",
            textShadow: "4px 4px 0 hsl(0 80% 40%), -1px -1px 0 hsl(0 80% 40%), 1px -1px 0 hsl(0 80% 40%), -1px 1px 0 hsl(0 80% 40%)",
          }}
        >
          ANIRUDH
          <br />
          SHARMA
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl sm:text-2xl mb-10 h-8"
          style={{ fontFamily: "'VT323', monospace" }}
        >
          <span className="text-foreground drop-shadow-[2px_2px_0_hsl(25,60%,20%)]">{displayed}</span>
          <span className="animate-pulse-glow text-accent">_</span>
        </motion.div>

        {/* Stats as Question Blocks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-10"
        >
          {stats.map((s, i) => {
            const count = useCounter(s.value, 2000, inView);
            return (
              <motion.div
                key={i}
                className="question-block p-4 sm:p-6 text-center"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
              >
                <div className="font-heading text-sm sm:text-lg font-bold" style={{ color: "hsl(25 60% 20%)" }}>
                  {s.prefix}{formatNumber(count)}{s.suffix}
                </div>
                <div className="text-xs mt-1" style={{ color: "hsl(25 50% 30%)", fontFamily: "'VT323', monospace", fontSize: "0.9rem" }}>
                  {s.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <a
            href="#projects"
            className="glow-button inline-flex items-center gap-2 px-8 py-3 font-bold text-foreground hover:opacity-90 transition"
            style={{ fontFamily: "'VT323', monospace", fontSize: "1.3rem" }}
          >
            🍄 View Projects
          </a>
          <a
            href="#contact"
            className="glow-ring inline-flex items-center gap-2 px-8 py-3 font-bold bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground transition"
            style={{ fontFamily: "'VT323', monospace", fontSize: "1.3rem" }}
          >
            <Download size={18} /> Download Resume
          </a>
        </motion.div>

        {/* Socials as coins */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/-anirudh-sharma/", label: "LinkedIn" },
            { icon: Github, href: "https://github.com/aniiiii05", label: "GitHub" },
            { icon: Mail, href: "mailto:anirudh@example.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-accent border-4 border-[hsl(35,80%,40%)] flex items-center justify-center text-accent-foreground hover:scale-110 hover:shadow-[0_0_15px_hsla(45,100%,50%,0.5)] transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="animate-bounce text-accent" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
