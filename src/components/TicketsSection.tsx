import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const tiers = [
  {
    name: "GENERAL",
    price: "$199",
    color: "border-border hover:border-primary/50",
    glowClass: "",
    features: [
      "3-day festival access",
      "All 4 stages",
      "Food court access",
      "Festival merch store",
    ],
    cta: "Get Pass",
    ctaClass: "border border-primary text-primary hover:bg-primary/10",
  },
  {
    name: "VIP",
    price: "$449",
    color: "border-primary/50",
    glowClass: "neon-border",
    popular: true,
    features: [
      "Everything in General",
      "VIP viewing platforms",
      "Premium bars & lounges",
      "Exclusive afterparties",
      "Commemorative wristband",
    ],
    cta: "Get VIP",
    ctaClass: "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.5)]",
  },
  {
    name: "PLATINUM",
    price: "$899",
    color: "border-secondary/50",
    glowClass: "neon-border-magenta",
    features: [
      "Everything in VIP",
      "Backstage access",
      "Artist meet & greet",
      "Private sky deck",
      "Complimentary drinks",
      "Helicopter arrival option",
    ],
    cta: "Get Platinum",
    ctaClass: "bg-secondary text-secondary-foreground hover:shadow-[0_0_30px_hsl(var(--neon-magenta)/0.5)]",
  },
];

const TicketsSection = () => {
  return (
    <section id="tickets" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Secure Your Spot</p>
          <h2 className="font-display text-4xl md:text-6xl font-black gradient-text">TICKETS</h2>
          <p className="text-muted-foreground mt-4 font-body">Early bird pricing ends June 30, 2026</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl border bg-card/80 backdrop-blur-sm p-6 md:p-8 flex flex-col ${tier.color} ${tier.glowClass}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground font-display text-[10px] tracking-wider flex items-center gap-1">
                  <Star size={10} /> MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-lg font-bold tracking-wider text-foreground">{tier.name}</h3>
                <div className="mt-3">
                  <span className="font-display text-4xl md:text-5xl font-black text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground font-body text-sm ml-2">/ person</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-display text-sm font-bold tracking-wider transition-all duration-300 ${tier.ctaClass}`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
