import { motion } from "framer-motion";

const headliners = [
  { name: "ECLIPSE", genre: "Techno / Industrial", day: "FRI" },
  { name: "NOVA WAVE", genre: "Progressive House", day: "SAT" },
  { name: "CIPHER", genre: "Drum & Bass", day: "SUN" },
];

const artists = [
  "Phantom Circuit", "Astra", "Voidrunner", "Neon Siren", "Bass Architect",
  "Synth Oracle", "Dark Frequency", "Pulse Theory", "Chrome Bloom", "Wave Collapse",
  "Stellar Drift", "Zero Point", "Lucid State", "Orbit", "Echo Chamber",
  "Sub Zero", "Neural Link", "Flux Capacitor", "Binary Sunset", "Deep Current",
];

const LineupSection = () => {
  return (
    <section id="lineup" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">The Artists</p>
          <h2 className="font-display text-4xl md:text-6xl font-black gradient-text">LINEUP</h2>
        </motion.div>

        {/* Headliners */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {headliners.map((artist, i) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative group rounded-2xl overflow-hidden border border-border bg-card hover-neon cursor-pointer"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-neon-cyan/20 via-card to-neon-magenta/20 flex items-end p-6">
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 font-display text-xs text-primary tracking-wider">
                  {artist.day}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="relative z-10">
                  <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-1">{artist.genre}</p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {artist.name}
                  </h3>
                  <p className="text-primary text-sm font-display tracking-wider mt-1">★ HEADLINER</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Artists */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-display text-sm tracking-[0.3em] text-muted-foreground mb-8 uppercase">
            + 80 More Artists
          </h3>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-4xl mx-auto">
            {artists.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="font-body text-sm md:text-base text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LineupSection;
