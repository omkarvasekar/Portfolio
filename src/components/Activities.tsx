
import React from "react";
import { Users, CalendarDays, Heart, Code } from "lucide-react";

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

  return (
    <section id="activities" className="py-20">
      <div className="section-container">
        <h2 className="section-heading">Leadership & Activities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 neu-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4 text-secondary">
                {activity.icon}
                <h3 className="ml-3 text-xl font-bold text-foreground">{activity.title}</h3>
              </div>
              <p className="text-muted-foreground">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
