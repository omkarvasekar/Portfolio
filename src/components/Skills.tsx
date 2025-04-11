
import React from "react";
import { Server, Code, Database, Cpu, PenTool, Braces } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      icon: <Code className="w-5 h-5 mr-2" />,
      skills: ["C", "C++", "Python", "JavaScript", "Java"],
    },
    {
      category: "Web Technologies",
      icon: <Braces className="w-5 h-5 mr-2" />,
      skills: ["HTML5", "CSS3", "PHP", "Bootstrap", "ExpressJS", "NodeJS", "ReactJS", "Tailwind"],
    },
    {
      category: "Databases",
      icon: <Database className="w-5 h-5 mr-2" />,
      skills: ["MySQL", "MongoDB"],
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
    },
    {
      category: "Operating Systems",
      icon: <Server className="w-5 h-5 mr-2" />,
      skills: ["Windows", "Linux", "MacOS"],
    },
    {
      category: "ML Libraries",
      icon: <Cpu className="w-5 h-5 mr-2" />,
      skills: ["TensorFlow", "Scikit-learn", "Matplotlib", "Pandas", "NLTK"],
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
              className="glass rounded-xl p-6 neu-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary/20 dark:bg-secondary/10 text-foreground rounded-full text-sm"
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
