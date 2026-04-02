import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What are the age restrictions?", a: "NexusFest is an 18+ event. Valid government-issued ID is required at entry." },
  { q: "Can I get a refund on my ticket?", a: "Tickets are refundable up to 30 days before the event. After that, you may transfer your ticket to another person." },
  { q: "What can I bring to the festival?", a: "Small bags, sealed water bottles, sunscreen, and good vibes. No professional cameras, drones, or outside alcohol. Full list on our website." },
  { q: "Is there camping available?", a: "Yes! We offer on-site glamping and standard camping options. These can be added during ticket checkout." },
  { q: "How do VIP & Platinum upgrades work?", a: "You can upgrade your pass at any time before the event through our website. Upgrades are subject to availability." },
  { q: "What about accessibility?", a: "We provide ADA-compliant viewing areas, accessible restrooms, sign language interpreters, and sensory chill zones." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Questions?</p>
          <h2 className="font-display text-4xl md:text-6xl font-black gradient-text">FAQ</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-5 bg-card/50 backdrop-blur-sm data-[state=open]:neon-border transition-all duration-300"
              >
                <AccordionTrigger className="font-display text-sm md:text-base font-semibold tracking-wide text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
