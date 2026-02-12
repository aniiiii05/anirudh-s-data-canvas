import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "anirudh@example.com", href: "mailto:anirudh@example.com", emoji: "📧" },
  { icon: Phone, label: "Phone", value: "+91 XXX XXX XXXX", href: "tel:+91000000000", emoji: "📞" },
  { icon: MapPin, label: "Location", value: "Kolkata, India", href: "#", emoji: "📍" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/anirudh", href: "https://linkedin.com", emoji: "💼" },
  { icon: Github, label: "GitHub", value: "github.com/anirudh", href: "https://github.com", emoji: "🐙" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "🍄 Message sent!", description: "Thank you! I'll get back to you soon." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative" style={{ background: "linear-gradient(180deg, hsl(210 75% 58%), hsl(210 70% 52%))" }}>
      <div className="section-container relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="font-heading text-lg sm:text-xl font-bold mb-4 text-center text-foreground drop-shadow-[2px_2px_0_hsl(25,60%,20%)]">
            Send A <span className="text-accent">Message</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg" style={{ fontFamily: "'VT323', monospace" }}>
            Drop a message in the pipe! 📬
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 bg-muted border-4 border-mario-brick text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent text-sm transition" style={{ fontFamily: "'VT323', monospace", fontSize: "1.1rem" }} />
              <input type="email" placeholder="Your Email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 bg-muted border-4 border-mario-brick text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent text-sm transition" style={{ fontFamily: "'VT323', monospace", fontSize: "1.1rem" }} />
            </div>
            <input type="text" placeholder="Subject" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 bg-muted border-4 border-mario-brick text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent text-sm transition" style={{ fontFamily: "'VT323', monospace", fontSize: "1.1rem" }} />
            <textarea placeholder="Your Message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 bg-muted border-4 border-mario-brick text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent text-sm resize-none transition" style={{ fontFamily: "'VT323', monospace", fontSize: "1.1rem" }} />
            <button type="submit" className="glow-button w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-foreground hover:opacity-90 transition" style={{ fontFamily: "'VT323', monospace", fontSize: "1.3rem" }}>
              <Send size={16} /> Send Message 📬
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {contactInfo.map(({ label, value, href, emoji }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex items-center gap-4 hover:scale-[1.02] transition-all block">
                <span className="text-2xl">{emoji}</span>
                <div>
                  <p className="text-xs text-muted-foreground" style={{ fontFamily: "'VT323', monospace", fontSize: "1rem" }}>{label}</p>
                  <p className="font-bold text-accent" style={{ fontFamily: "'VT323', monospace", fontSize: "1.1rem" }}>{value}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
