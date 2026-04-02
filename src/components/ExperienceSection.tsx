import { motion } from "framer-motion";
import { Zap, Speaker, Eye, Sparkles } from "lucide-react";

const experiences = [
  {
    icon: Speaker,
    title: "4 STAGES",
    description: "Main Stage, Neon Stage, Cyber Arena & Underground — each with a unique sonic identity.",
    color: "text-primary",
  },
  {
    icon: Eye,
    title: "IMMERSIVE ART",
    description: "Holographic installations, laser mazes, and interactive LED sculptures across the festival grounds.",
    color: "text-secondary",
  },
  {
    icon: Zap,
    title: "PYRO SHOWS",
    description: "Jaw-dropping pyrotechnics and drone light shows synchronized to headliner sets.",
    color: "text-neon-pink",
  },
  {
    icon: Sparkles,
    title: "VIP LOUNGES",
    description: "Elevated viewing decks, private bars, meet-and-greet access, and exclusive afterparties.",
    color: "text-accent",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Beyond Music</p>
          <h2 className="font-display text-4xl md:text-6xl font-black gradient-text">THE EXPERIENCE</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-body">
            NexusFest isn't just a festival — it's a portal to another dimension.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover-neon group cursor-pointer"
            >
              <exp.icon size={32} className={`${exp.color} mb-4 group-hover:animate-pulse-neon`} />
              <h3 className="font-display text-base font-bold text-foreground mb-2 tracking-wider">{exp.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 p-6 md:p-8 rounded-2xl border border-border bg-card/50"
        >
          {[
            { value: "80+", label: "ARTISTS" },
            { value: "4", label: "STAGES" },
            { value: "3", label: "DAYS" },
            { value: "50K", label: "ATTENDEES" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-black text-primary">{stat.value}</p>
              <p className="font-body text-xs tracking-[0.2em] text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
