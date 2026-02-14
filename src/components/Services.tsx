import { Globe, Smartphone, Layout, Settings, Search, Code, CheckCircle } from "lucide-react";

const services = [
  { icon: Globe, title: "Développement d'applications web", desc: "Sites vitrines, e-commerce, applications métiers..." },
  { icon: Smartphone, title: "Développement d'applications mobiles", desc: "iOS, Android — Natives et cross-platform." },
  { icon: Layout, title: "Création de sites web", desc: "Vitrines, blogs, portfolios, e-commerce..." },
  { icon: Settings, title: "Maintenance et optimisation", desc: "Performance, sécurité, évolutivité." },
  { icon: Search, title: "Conseil et audit technique", desc: "Analyse de besoins, solutions techniques." },
];

const technologies = [
  { label: "Backend", value: "Laravel (PHP)" },
  { label: "Frontend", value: "React (JS/TS)" },
  { label: "Mobile", value: "React Native, Flutter" },
  { label: "Autres", value: "API REST, MySQL, PostgreSQL..." },
];

const whyMe = [
  "Expertise full stack",
  "Code propre et documenté",
  "Réactivité et communication",
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Mes <span className="text-gradient">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            En tant que développeur full stack expérimenté, je propose des solutions sur mesure pour vos projets web et mobile.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-sm transition-all duration-300">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Technologies & Why Me */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass rounded-xl p-6 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-primary" size={22} />
                <h3 className="text-xl font-semibold">Technologies</h3>
              </div>
              <div className="space-y-3">
                {technologies.map((tech) => (
                  <div key={tech.label} className="flex items-start gap-2">
                    <span className="text-primary font-medium text-sm min-w-[80px]">{tech.label} :</span>
                    <span className="text-muted-foreground text-sm">{tech.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-primary" size={22} />
                <h3 className="text-xl font-semibold">Pourquoi moi ?</h3>
              </div>
              <ul className="space-y-3">
                {whyMe.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm mt-6 border-t border-border/50 pt-4">
                Parfait pour des projets sur mesure, de la conception au déploiement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
