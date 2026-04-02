import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Lineup", href: "#lineup" },
  { label: "Schedule", href: "#schedule" },
  { label: "Experience", href: "#experience" },
  { label: "Tickets", href: "#tickets" },
  { label: "Venue", href: "#venue" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="font-display text-lg md:text-xl font-bold tracking-wider neon-glow-cyan text-primary">
          NEXUS<span className="text-secondary">FEST</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="font-body text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors duration-200 uppercase"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#tickets")}
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground font-display text-xs font-bold tracking-wider hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.5)] transition-all duration-300"
          >
            GET TICKETS
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className="font-body text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors uppercase"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleClick("#tickets")}
                className="mt-2 px-6 py-2 rounded-full bg-primary text-primary-foreground font-display text-xs font-bold tracking-wider"
              >
                GET TICKETS
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
