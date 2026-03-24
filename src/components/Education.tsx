import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    year: "2024 - 2025",
    title: "Certificats Professionnels",
    institution: "ArkeUp & ESTI",
    description:
      "4 Certificats en Data Science, Machine Learning, PHP Laravel, Docker et Ethical Hacking",
    type: "certificate",
  },
  {
    year: "2019 - 2022",
    title: "Licence en Informatique",
    institution: "Université CNTEMAD Madagascar",
    description: "Informatique | Base de Données et Génie Logiciel",
    type: "degree",
  },
  {
    year: "2019",
    title: "Certificat en Électronique",
    institution: "FPTI Ampasapito",
    description: "Formation Professionnelle Technique et Industrielle en Électronique",
    type: "certificate",
  },
  {
    year: "2016",
    title: "Baccalauréat Scientifique C",
    institution: "Lycée Privé Méthodique Ambatobe",
    description: "Série Scientifique C",
    type: "degree",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Formation & <span className="text-gradient">Diplômes</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  {item.type === "degree" ? <GraduationCap size={24} /> : <Award size={24} />}
                </div>
                <div className="flex-1">
                  <span className="text-primary font-mono text-sm">{item.year}</span>
                  <h3 className="font-semibold text-lg mt-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.institution}</p>
                  <p className="text-muted-foreground/70 text-sm mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
