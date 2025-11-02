import { ExternalLink, Youtube, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  demoUrl?: string;
  youtubeUrl?: string;
  liveUrl?: string;
  githubUrl?: string; // <-- nova prop
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  image, 
  demoUrl, 
  youtubeUrl,
  liveUrl,
  githubUrl
}: ProjectCardProps) => {
  return (
    <Card className="group bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-card-hover overflow-hidden animate-fade-in-up">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
        </div>
      )}
      
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              className="bg-secondary/50 hover:bg-secondary transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2">
        {youtubeUrl && (
          <Button 
            size="sm" 
            variant="outline"
            className="border-border hover:border-primary hover:bg-primary/10 transition-all"
            asChild
          >
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
              <Youtube className="w-4 h-4 mr-2" />
              Demo
            </a>
          </Button>
        )}

        {githubUrl && (
          <Button 
            size="sm" 
            variant="outline"
            className="border-border hover:border-primary hover:bg-primary/10 transition-all"
            asChild
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
        )}

        {liveUrl && (
          <Button 
            size="sm"
            className="bg-gradient-primary hover:shadow-glow transition-all"
            asChild
          >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Site
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
