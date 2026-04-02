import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

const days = ["FRI AUG 15", "SAT AUG 16", "SUN AUG 17"] as const;

const schedule: Record<string, { time: string; artist: string; stage: string; highlight?: boolean }[]> = {
  "FRI AUG 15": [
    { time: "18:00", artist: "Gates Open", stage: "All Stages" },
    { time: "19:00", artist: "Phantom Circuit", stage: "Neon Stage" },
    { time: "20:00", artist: "Voidrunner", stage: "Cyber Arena" },
    { time: "21:30", artist: "Bass Architect", stage: "Neon Stage" },
    { time: "23:00", artist: "ECLIPSE", stage: "Main Stage", highlight: true },
    { time: "01:00", artist: "Dark Frequency", stage: "Underground" },
  ],
  "SAT AUG 16": [
    { time: "17:00", artist: "Gates Open", stage: "All Stages" },
    { time: "18:00", artist: "Stellar Drift", stage: "Neon Stage" },
    { time: "19:30", artist: "Synth Oracle", stage: "Cyber Arena" },
    { time: "21:00", artist: "Wave Collapse", stage: "Neon Stage" },
    { time: "22:30", artist: "NOVA WAVE", stage: "Main Stage", highlight: true },
    { time: "00:30", artist: "Neural Link", stage: "Underground" },
  ],
  "SUN AUG 17": [
    { time: "16:00", artist: "Gates Open", stage: "All Stages" },
    { time: "17:00", artist: "Lucid State", stage: "Neon Stage" },
    { time: "18:30", artist: "Chrome Bloom", stage: "Cyber Arena" },
    { time: "20:00", artist: "Pulse Theory", stage: "Neon Stage" },
    { time: "22:00", artist: "CIPHER", stage: "Main Stage", highlight: true },
    { time: "00:00", artist: "Grand Finale Show", stage: "Main Stage", highlight: true },
  ],
};

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState<string>(days[0]);

  return (
    <section id="schedule" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-3">Three Days</p>
          <h2 className="font-display text-4xl md:text-6xl font-black gradient-text">SCHEDULE</h2>
        </motion.div>

        {/* Day Tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-10">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-display text-xs md:text-sm tracking-wider transition-all duration-300 ${
                activeDay === day
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--neon-cyan)/0.4)]"
                  : "border border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {schedule[activeDay].map((item, i) => (
              <motion.div
                key={item.time + item.artist}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`flex items-center gap-4 md:gap-6 p-4 md:p-5 rounded-xl border transition-all duration-300 ${
                  item.highlight
                    ? "border-primary/40 bg-primary/5 neon-border"
                    : "border-border bg-card/50 hover:border-border"
                }`}
              >
                <div className="flex items-center gap-2 min-w-[70px] md:min-w-[80px]">
                  <Clock size={14} className="text-muted-foreground" />
                  <span className="font-display text-sm text-primary">{item.time}</span>
                </div>
                <div className="flex-1">
                  <p className={`font-display text-sm md:text-base font-bold ${item.highlight ? "text-primary" : "text-foreground"}`}>
                    {item.artist}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin size={12} />
                  <span className="font-body text-xs">{item.stage}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ScheduleSection;
