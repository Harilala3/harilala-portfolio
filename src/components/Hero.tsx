import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import profilePhoto from "@/assets/photo-profil.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Photo */}
          <div className="relative animate-fade-in">
            <div className="relative w-64 h-64 lg:w-80 lg:h-90">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent glow animate-pulse-glow" />
              <img
                src={profilePhoto}
                alt="Harilala Rakotoarisoa"
                className="absolute inset-2 rounded-full object-cover border-4 border-background"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <p className="text-primary font-mono text-sm lg:text-base mb-4 animate-fade-in-up">
              Bonjour, je suis
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="text-gradient">Harilala</span>{" "}
              <span className="text-foreground">Rakotoarisoa</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-muted-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Développeur Fullstack{" "}
              <span className="text-primary font-semibold">Laravel/React</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Développeur web et mobile avec <span className="text-foreground font-semibold">+4 ans d'expérience</span>. 
              Passionné par la création de solutions élégantes et performantes, 
              je maîtrise Laravel, Symfony, React et les technologies mobiles.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <a
                href="https://www.linkedin.com/in/harilala-rakotoarisoa-37494b328"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ndrianiainarakotoarisoa@gmail.com"
                className="p-3 rounded-lg glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-sm"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+261345469278"
                className="p-3 rounded-lg glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-sm"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-sm"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 glow"
              >
                Me Contacter
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
