import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Festival stage" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-4"
        >
          August 15–17, 2026 • Neo Arena, Los Angeles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-6"
        >
          <span className="gradient-text">NEXUS</span>
          <br />
          <span className="neon-glow-magenta text-secondary">FEST</span>
          <br />
          <span className="text-foreground text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.2em]">2026</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Three days of otherworldly beats, 80+ artists, and a sensory experience beyond reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <CountdownTimer targetDate="2026-08-15T18:00:00" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <a
            href="#tickets"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-display text-sm font-bold tracking-wider hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.5)] transition-all duration-300 animate-glow"
          >
            GET YOUR PASS
          </a>
          <a
            href="#lineup"
            className="px-8 py-4 rounded-full border border-secondary/50 text-secondary font-display text-sm font-bold tracking-wider hover:bg-secondary/10 transition-all duration-300"
          >
            VIEW LINEUP
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
