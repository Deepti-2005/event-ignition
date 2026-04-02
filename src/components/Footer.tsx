import { Instagram, Twitter, Youtube, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold tracking-wider mb-3">
              <span className="text-primary neon-glow-cyan">NEXUS</span>
              <span className="text-secondary">FEST</span>
            </h3>
            <p className="font-body text-sm text-muted-foreground max-w-sm leading-relaxed">
              Three days of otherworldly music, art, and connection.
              August 15–17, 2026 at Neo Arena, Los Angeles.
            </p>
            <div className="flex gap-4 mt-5">
              {[Instagram, Twitter, Youtube, Music].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xs tracking-[0.2em] text-primary uppercase mb-4">Festival</h4>
            <ul className="space-y-2">
              {["Lineup", "Schedule", "Tickets", "Venue", "FAQ"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div id="contact">
            <h4 className="font-display text-xs tracking-[0.2em] text-primary uppercase mb-4">Contact</h4>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>info@nexusfest.com</li>
              <li>press@nexusfest.com</li>
              <li>+1 (213) 555-NEXUS</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 NexusFest. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a key={l} href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
