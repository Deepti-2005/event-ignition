import { motion } from "framer-motion";
import { MapPin, Train, Car, Plane } from "lucide-react";

const VenueSection = () => {
  return (
    <section id="venue" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-3">The Location</p>
          <h2 className="font-display text-4xl md:text-6xl font-black gradient-text">VENUE</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/3] rounded-2xl border border-border overflow-hidden bg-card relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-secondary/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-primary mx-auto mb-4 animate-pulse-neon" />
                <p className="font-display text-xl font-bold text-foreground">NEO ARENA</p>
                <p className="text-muted-foreground font-body text-sm mt-1">Los Angeles, California</p>
                <p className="text-muted-foreground font-body text-xs mt-1">34.0407° N, 118.2468° W</p>
              </div>
            </div>
            <div className="absolute inset-0 grid-bg opacity-30" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Neo Arena Complex</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                A 200-acre outdoor venue transformed into a futuristic festival ground with
                four distinct stage environments, immersive art installations, and world-class
                production facilities.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-display text-sm tracking-[0.2em] text-primary uppercase">Getting There</h4>
              {[
                { icon: Plane, text: "LAX Airport — 25 min drive" },
                { icon: Train, text: "Metro Expo Line — Neo Arena Station" },
                { icon: Car, text: "Free parking for VIP & Platinum" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card/50">
                  <item.icon size={18} className="text-primary shrink-0" />
                  <span className="font-body text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
