import { Code2, Smartphone, Globe, Brain } from "lucide-react";

const highlights = [
  {
    icon: Globe,
    title: "Développement Web",
    description: "Sites web dynamiques et applications web complexes",
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description: "Développement d'apps mobiles cross-platform",
  },
  {
    icon: Code2,
    title: "Fullstack",
    description: "Backend robuste avec Laravel/Symfony et frontend React",
  },
  {
    icon: Brain,
    title: "IA & Data Science",
    description: "Formation en Machine Learning et Data Science",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            À <span className="text-gradient">Propos</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center">
            Passionné par la programmation et le développement d'applications, et étant à l'aise 
            avec les intelligences artificielles, je suis un développeur web et mobile avec plus 
            de <span className="text-foreground font-semibold">4 ans d'expérience</span>. J'ai travaillé sur plusieurs projets, 
            allant de sites web dynamiques à des applications web de gestion de stocks et de gestion 
            des commandes. Je suis toujours à l'affût des dernières technologies et je m'efforce de 
            créer des solutions élégantes et performantes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
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

export default About;
