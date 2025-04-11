
import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Experience = () => {
  const [activeItem, setActiveItem] = React.useState<number | null>(null);
  
  const experiences = [
    {
      title: "ML Intern",
      company: "Savidha Foundation, Pune",
      date: "Aug 2023 - Sep 2023",
      description: (
        <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
          <li>Used Python for Development For the ML models Libraries</li>
          <li>Used scikit-learn, Matplotlib, Pandas, NLTK</li>
          <li>Applied concepts of Data cleaning, Feature Engineering and NLP</li>
          <li>Developed a text summarizer, which summarized huge news articles</li>
        </ul>
      ),
      skills: ["Python", "ML", "NLP", "Data Analysis"],
      type: "work"
    },
    {
      title: "Computer Engineering",
      company: "Dr. D. Y. Patil Institute of Technology",
      date: "Nov 2021 - Present",
      description: (
        <>
          <p className="mb-2">
            Pursuing Bachelor of Engineering in Computer Engineering 
            from Dr. D. Y. Patil Institute of Technology, Pimpri (Savitribai Phule Pune University).
          </p>
          <p>
            Secured Department Rank 2 in Second Year and was awarded
            Academic Excellence Award in the year 2023.
          </p>
        </>
      ),
      gpa: "9.45/10",
      type: "education"
    }
  ];

  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="bg-muted/30 dark:bg-muted/10 py-20">
      <div className="section-container">
        <h2 className="section-heading">Experience</h2>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative pl-12 md:pl-0 mb-16 last:mb-0"
                variants={itemVariants}
                onHoverStart={() => setActiveItem(index)}
                onHoverEnd={() => setActiveItem(null)}
              >
                <div className="flex flex-col md:flex-row items-start">
                  <motion.div 
                    className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1"
                    animate={{ 
                      x: activeItem === index ? [-5, 0] : 0,
                      transition: { duration: 0.3 } 
                    }}
                  >
                    <div className="mb-2 text-secondary font-medium">
                      {exp.date}
                    </div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <div className="text-muted-foreground">
                      {exp.company}
                    </div>
                    {exp.gpa && <div className="font-medium mt-1">CGPA: {exp.gpa}</div>}
                  </motion.div>

                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-secondary bg-background flex items-center justify-center"
                    initial={{ scale: 1 }}
                    animate={{ 
                      scale: activeItem === index ? 1.2 : 1,
                      boxShadow: activeItem === index ? "0 0 12px rgba(0,0,0,0.2)" : "none",
                      transition: { duration: 0.3 } 
                    }}
                  >
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <div className={`absolute w-full h-full rounded-full bg-secondary/30 opacity-0 ${
                      activeItem === index ? "animate-ping" : ""
                    }`}></div>
                  </motion.div>

                  <motion.div 
                    className="md:w-1/2 md:pl-8 order-1 md:order-2 mb-4 md:mb-0"
                    animate={{ 
                      x: activeItem === index ? [5, 0] : 0,
                      transition: { duration: 0.3 } 
                    }}
                  >
                    <div 
                      className={`glass rounded-xl p-6 neu-shadow transition-all duration-300 ${
                        activeItem === index ? "shadow-lg transform scale-[1.02]" : ""
                      }`}
                    >
                      <div className="mb-4">{exp.description}</div>
                      
                      {exp.skills && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} className="transition-all duration-300 hover:scale-110">{skill}</Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
