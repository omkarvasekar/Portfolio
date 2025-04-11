
import React from "react";
import { Server, Code, Database, Cpu, PenTool, Braces } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

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

  const [openCategory, setOpenCategory] = React.useState<string | null>(null);

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-heading">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Collapsible
              key={category.category}
              open={openCategory === category.category}
              onOpenChange={(open) => setOpenCategory(open ? category.category : null)}
              className="glass rounded-xl p-6 neu-shadow animate-fade-in group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <HoverCard openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="flex items-center justify-between w-full p-0 hover:bg-transparent">
                      <div className="flex items-center">
                        <div className="text-secondary transition-transform duration-300 group-hover:scale-110">
                          {category.icon}
                        </div>
                        <h3 className="text-xl font-bold ml-2">{category.category}</h3>
                      </div>
                      <div className="bg-secondary/20 rounded-full p-1 transition-transform duration-300">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`transform transition-transform ${
                            openCategory === category.category ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </Button>
                  </CollapsibleTrigger>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </HoverCardContent>
              </HoverCard>

              <CollapsibleContent className="mt-4 space-y-2">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <TooltipProvider key={skill}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span
                            className="px-3 py-1 bg-secondary/20 dark:bg-secondary/10 text-foreground rounded-full text-sm transition-all duration-300 hover:bg-secondary/30 hover:scale-105"
                          >
                            {skill}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>I'm proficient in {skill}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
