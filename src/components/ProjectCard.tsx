
import React from "react";
import { Calendar, Github, Users, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  date: string;
  teamSize: number;
  objective: string;
  summary: string;
  role: string;
  technologies: string[];
  gitLink?: string;
  demoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  date,
  teamSize,
  objective,
  summary,
  role,
  technologies,
  gitLink,
  demoLink,
}) => {
  return (
    <Card className="h-full glass rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] neu-shadow relative group">
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-xl border-2 border-secondary/80 blur-sm"></div>
        <div className="absolute inset-0 rounded-xl border-2 border-secondary"></div>
      </div>
      
      <CardHeader className="p-6 pb-0">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>Team Size: {teamSize}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 pt-4">
        <div className="space-y-3 mb-4">
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground">Objective</h4>
            <p className="text-sm">{objective}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground">Summary</h4>
            <p className="text-sm">{summary}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground">Role</h4>
            <p className="text-sm">{role}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <div className="flex flex-wrap gap-3">
          {gitLink && (
            <Button variant="outline" size="sm" asChild className="gap-2">
              <a
                href={gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="h-4 w-4" />
                <span>Code</span>
              </a>
            </Button>
          )}
          
          {demoLink && (
            <Button size="sm" asChild className="gap-2">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
