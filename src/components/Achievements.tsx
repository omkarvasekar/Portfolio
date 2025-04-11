
import React from "react";
import { Trophy, Star, Award, Code, PresentationIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface AchievementItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

const AchievementItem = ({ icon, title, description, className, style }: AchievementItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
        transition: { duration: 0.2 }
      }}
      className={cn(
        "glass rounded-xl p-6 neu-shadow relative overflow-hidden group",
        className
      )}
      style={style}
    >
      {/* Decorative background element */}
      <div className="absolute -right-6 -top-6 w-20 h-20 bg-secondary/10 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
      <div className="absolute right-10 bottom-0 w-16 h-16 bg-secondary/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-700 delay-100"></div>
      
      <div className="flex items-center mb-4 relative z-10">
        <div className="text-secondary transform group-hover:rotate-12 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="ml-3 text-lg font-bold text-foreground group-hover:text-secondary transition-colors duration-300">{title}</h3>
      </div>
      <p className="text-muted-foreground relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">{description}</p>
    </motion.div>
  );
};

const Achievements = () => {
  const [viewMode, setViewMode] = React.useState("grid");
  
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Academic Excellence Award",
      description: "Secured Department Rank 2 in Second Year in the Department of Computer Engineering and was awarded Academic Excellence Award in the year 2023.",
      type: "academic"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Academic Ranking",
      description: "Secured Department rank 3 in Third Year in the Department of Computer Engineering.",
      type: "academic"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Open Source Contribution",
      description: "Actively contributed to open-source projects such as ACES Snippets on platforms such as GitHub, collaborating in teams to enhance quality of education and resolve issues throughout October and November 2023.",
      type: "technical"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Smart India Hackathon Qualifier",
      description: "College level Smart India Hackathon Qualifier November 2023.",
      type: "technical"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "CodeCraft Coding Competition",
      description: "Runner up at CodeCraft Coding Competition, among a field of 100 students.",
      type: "technical"
    },
    {
      icon: <PresentationIcon className="w-6 h-6" />,
      title: "Quantum Computing Seminar",
      description: "Presented seminar on Introduction to Quantum Computing, as a part of Seminar towards fulfillment of degree in December 2023 at Dr. D. Y. Patil Institute of Technology.",
      type: "academic"
    },
    {
      icon: <PresentationIcon className="w-6 h-6" />,
      title: "Research Presentation",
      description: "Presented a poster on 'Solaris: Deep Learning Based Model for prediction of solar power yield on rooftop using aerial imagery' as part of the Internal Avirbhav 2024 Research Project Competition.",
      type: "research"
    },
  ];
  
  const [filter, setFilter] = React.useState("all");
  const filteredAchievements = achievements.filter(achievement => 
    filter === "all" ? true : achievement.type === filter
  );

  return (
    <section id="achievements" className="bg-muted/30 dark:bg-muted/10 py-20">
      <div className="section-container">
        <h2 className="section-heading">Achievements</h2>
        
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <ToggleGroup type="single" value={filter} onValueChange={(value) => value && setFilter(value)}>
            <ToggleGroupItem value="all" aria-label="Show all achievements">All</ToggleGroupItem>
            <ToggleGroupItem value="academic" aria-label="Show academic achievements">Academic</ToggleGroupItem>
            <ToggleGroupItem value="technical" aria-label="Show technical achievements">Technical</ToggleGroupItem>
            <ToggleGroupItem value="research" aria-label="Show research achievements">Research</ToggleGroupItem>
          </ToggleGroup>
          
          <ToggleGroup type="single" value={viewMode} onValueChange={(value) => value && setViewMode(value)}>
            <ToggleGroupItem value="grid" aria-label="Grid view">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 2C3.22386 2 3 2.22386 3 2.5V6.5C3 6.77614 3.22386 7 3.5 7H7.5C7.77614 7 8 6.77614 8 6.5V2.5C8 2.22386 7.77614 2 7.5 2H3.5ZM4 6V3H7V6H4ZM3.5 8C3.22386 8 3 8.22386 3 8.5V12.5C3 12.7761 3.22386 13 3.5 13H7.5C7.77614 13 8 12.7761 8 12.5V8.5C8 8.22386 7.77614 8 7.5 8H3.5ZM4 12V9H7V12H4ZM9.5 2C9.22386 2 9 2.22386 9 2.5V6.5C9 6.77614 9.22386 7 9.5 7H13.5C13.7761 7 14 6.77614 14 6.5V2.5C14 2.22386 13.7761 2 13.5 2H9.5ZM10 6V3H13V6H10ZM9.5 8C9.22386 8 9 8.22386 9 8.5V12.5C9 12.7761 9.22386 13 9.5 13H13.5C13.7761 13 14 12.7761 14 12.5V8.5C14 8.22386 13.7761 8 13.5 8H9.5ZM10 12V9H13V12H10Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </ToggleGroupItem>
            <ToggleGroupItem value="list" aria-label="List view">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1.5 7C1.22386 7 1 7.22386 1 7.5C1 7.77614 1.22386 8 1.5 8H13.5C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7H1.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className={viewMode === "grid" ? 
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : 
          "flex flex-col space-y-4"}>
          {filteredAchievements.map((achievement, index) => (
            <AchievementItem
              key={index}
              {...achievement}
              className={viewMode === "list" ? "!p-4" : ""}
            />
          ))}
          
          {filteredAchievements.length === 0 && (
            <div className="col-span-full text-center py-10">
              <p className="text-muted-foreground">No achievements found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
