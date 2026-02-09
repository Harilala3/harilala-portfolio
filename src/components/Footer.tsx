import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#home" className="text-xl font-bold text-gradient">
            &lt;Harilala /&gt;
          </a>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Fait avec <Heart size={14} className="text-primary" /> par Harilala Rakotoarisoa
          </p>

          <nav className="flex items-center gap-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              À propos
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Expériences
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
