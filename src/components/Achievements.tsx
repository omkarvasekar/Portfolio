
import React from "react";
import { Trophy, Star, Award, Code, PresentationIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AchievementItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

const AchievementItem = ({ icon, title, description, className, style }: AchievementItemProps) => (
  <div className={cn("glass rounded-xl p-6 neu-shadow", className)} style={style}>
    <div className="flex items-center mb-4 text-secondary">
      {icon}
      <h3 className="ml-3 text-lg font-bold text-foreground">{title}</h3>
    </div>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Academic Excellence Award",
      description: "Secured Department Rank 2 in Second Year in the Department of Computer Engineering and was awarded Academic Excellence Award in the year 2023.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Academic Ranking",
      description: "Secured Department rank 3 in Third Year in the Department of Computer Engineering.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Open Source Contribution",
      description: "Actively contributed to open-source projects such as ACES Snippets on platforms such as GitHub, collaborating in teams to enhance quality of education and resolve issues throughout October and November 2023.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Smart India Hackathon Qualifier",
      description: "College level Smart India Hackathon Qualifier November 2023.",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "CodeCraft Coding Competition",
      description: "Runner up at CodeCraft Coding Competition, among a field of 100 students.",
    },
    {
      icon: <PresentationIcon className="w-6 h-6" />,
      title: "Quantum Computing Seminar",
      description: "Presented seminar on Introduction to Quantum Computing, as a part of Seminar towards fulfillment of degree in December 2023 at Dr. D. Y. Patil Institute of Technology.",
    },
    {
      icon: <PresentationIcon className="w-6 h-6" />,
      title: "Research Presentation",
      description: "Presented a poster on 'Solaris: Deep Learning Based Model for prediction of solar power yield on rooftop using aerial imagery' as part of the Internal Avirbhav 2024 Research Project Competition.",
    },
  ];

  return (
    <section id="achievements" className="bg-muted/30 dark:bg-muted/10 py-20">
      <div className="section-container">
        <h2 className="section-heading">Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementItem
              key={index}
              {...achievement}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
