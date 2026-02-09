const skills = [
  { name: "Laravel", level: 90, category: "Backend" },
  { name: "Symfony", level: 85, category: "Backend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "PHP", level: 90, category: "Backend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "HTML5/CSS3", level: 95, category: "Frontend" },
  { name: "MySQL/PostgreSQL", level: 85, category: "Database" },
  { name: "Docker", level: 70, category: "DevOps" },
  { name: "Vite", level: 80, category: "Tools" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "React Native", level: 75, category: "Mobile" },
];

const languages = [
  { name: "Malagasy", level: "Natif" },
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Basique" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Mes <span className="text-gradient">Compétences</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Technical Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-primary font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">{skill.category}</span>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Langues</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {languages.map((lang, index) => (
                <div
                  key={lang.name}
                  className="glass rounded-xl px-6 py-4 text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="font-semibold block">{lang.name}</span>
                  <span className="text-sm text-muted-foreground">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
