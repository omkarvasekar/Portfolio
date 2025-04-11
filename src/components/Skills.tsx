
import React from "react";
import { Server, Code, Database, Cpu, PenTool, Braces } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      icon: <Code className="w-5 h-5 mr-2" />,
      skills: ["C", "C++", "Python", "JavaScript", "Java"],
      description: "Programming languages I'm proficient in.",
    },
    {
      category: "Web Technologies",
      icon: <Braces className="w-5 h-5 mr-2" />,
      skills: ["HTML5", "CSS3", "PHP", "Bootstrap", "ExpressJS", "NodeJS", "ReactJS", "Tailwind"],
      description: "Frontend and backend technologies I work with.",
    },
    {
      category: "Databases",
      icon: <Database className="w-5 h-5 mr-2" />,
      skills: ["MySQL", "MongoDB"],
      description: "Database systems I'm experienced with.",
    },
    {
      category: "Tools & Concepts",
      icon: <PenTool className="w-5 h-5 mr-2" />,
      skills: [
        "Machine Learning",
        "NLP",
        "Feature Extraction",
        "Data Analysis",
        "Computer Networking",
        "Deep Learning",
        "Data Structures",
        "Algorithms",
      ],
      description: "Key concepts and methodologies I utilize.",
    },
    {
      category: "Operating Systems",
      icon: <Server className="w-5 h-5 mr-2" />,
      skills: ["Windows", "Linux", "MacOS"],
      description: "Operating systems I'm comfortable working with.",
    },
    {
      category: "ML Libraries",
      icon: <Cpu className="w-5 h-5 mr-2" />,
      skills: ["TensorFlow", "Scikit-learn", "Matplotlib", "Pandas", "NLTK"],
      description: "Machine learning frameworks and libraries I use.",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-heading">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className="glass rounded-xl p-6 neu-shadow animate-fade-in group hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] dark:hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-500 ease-in-out hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4 text-secondary group-hover:text-secondary/90 transition-all duration-300">
                <div className="transform transition-transform duration-300 group-hover:scale-110">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold ml-2">{category.category}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary/20 dark:bg-secondary/10 text-foreground rounded-full text-sm transition-all duration-300 hover:bg-secondary/30 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
