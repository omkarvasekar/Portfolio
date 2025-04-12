
import React from "react";
import { Users, CalendarDays, Heart, Code, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Activities = () => {
  const activities = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Senior Event Manager at ACES",
      description: "Association for Computer Engineering Students (2023-2024). Organized numerous events such as Hacktoberfest, Student orientation and Farewell.",
    },
    {
      icon: <CalendarDays className="h-6 w-6" />,
      title: "Event Head for 'Avanetha'",
      description: "The largest technical fest which comprises of various events such as coding competitions and treasure hunts at college. Responsible for steady flow of the event, work delegation, crowd control, scheduling etc. (Feb 2024)",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Volunteer at Viva Maharashtra",
      description: "An organization dedicated to community service and cultural heritage preservation. The volunteer work included cleanliness drives, food donation camps, organizing plays for promoting the local culture.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Led Hacktoberfest",
      description: "An online virtual event where Open Source contributions are promoted among fellow developers. Fostered collaboration among over 40 contributors in the department.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="activities" className="py-20">
      <div className="section-container">
        <h2 className="section-heading">Leadership & Activities</h2>

        

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl p-6 neu-shadow relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              {/* Animated background gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                initial={false}
                animate={{ 
                  background: [
                    "linear-gradient(120deg, rgba(147, 51, 234, 0.1), rgba(79, 70, 229, 0.1))",
                    "linear-gradient(240deg, rgba(147, 51, 234, 0.1), rgba(79, 70, 229, 0.1))",
                    "linear-gradient(360deg, rgba(147, 51, 234, 0.1), rgba(79, 70, 229, 0.1))"
                  ]
                }}
                transition={{ 
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 4
                }}
              />
              <div className="flex items-center mb-4 text-secondary relative">
                <motion.div 
                  className="text-secondary"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {activity.icon}
                </motion.div>
                <h3 className="ml-3 text-xl font-bold text-foreground">{activity.title}</h3>
              </div>
              <p className="text-muted-foreground relative">{activity.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
