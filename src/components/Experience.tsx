import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    period: "2022 - Présent",
    title: "Développeur Web et Mobile Fullstack Intermédiaire",
    company: "MIAV SERVICE",
    description:
      "Prestataire en tant que développeur Full Stack Symfony/React & Laravel/Vite/React. Développement d'applications web de gestion de stocks et de commandes.",
    current: true,
  },
  {
    period: "2024 - 2025",
    title: "Formations Professionnelles",
    company: "ESTI (financées par FMFP)",
    description:
      "Formation sur le framework Laravel, Docker, et Ethical Hacking Fundamentals.",
    current: false,
  },
  {
    period: "Nov 2024",
    title: "Formation Data Science & ML",
    company: "ARKEUP Academy Océan Indien",
    description: "Formation en Data Science et Machine Learning (financée par FMFP).",
    current: false,
  },
  {
    period: "2022 - 2023",
    title: "Stagiaire Développeur",
    company: "MIAV SERVICE",
    description:
      "Stage et formation en développement web et mobile. Formation complémentaire sur UDEMY.",
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Mon <span className="text-gradient">Expérience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 animate-fade-in-up ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-sm" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8 md:text-right"}`}>
                  <div className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                    <div className={`flex items-center gap-2 text-primary text-sm font-mono mb-2 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                      {exp.current && (
                        <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs">
                          Actuel
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{exp.title}</h3>
                    <p className="text-primary/80 text-sm mb-3 flex items-center gap-2">
                      <Briefcase size={14} className={`${index % 2 === 0 ? "" : "md:hidden"}`} />
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
