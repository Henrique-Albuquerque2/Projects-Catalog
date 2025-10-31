import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout, Server, Cloud, Wrench } from "lucide-react";

const skillsData = {
  "Frontend": {
    icon: Layout,
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "Styled Components",
      "HTML",
      "CSS",
      "UI Shadcn",
      "Phosphor Icons"
    ]
  },
  "Backend": {
    icon: Server,
    skills: [
      "Python",
      "FastAPI",
      "Django",
      "C",
      "Java",
      "REST APIs",
      "Redis (Cache)",
      "PostgreSQL",
      "MySQL",
      "MongoDB"
    ]
  },
  "Data & DevOps": {
    icon: Cloud,
    skills: [
      "ETL Pipelines",
      "SQL (Advanced)",
      "Streamlit",
      "Power BI",
      "AWS",
      "Vercel",
      "Docker",
      "Git",
    ]
  },
  "Tools & Design": {
    icon: Wrench,
    skills: [
      "Figma",
      "VS Code",
      "Postman",
      "GitHub",
      "Render",
      "Excel / Google Sheets",
      "Microsoft Office"
    ]
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A diverse set of tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skillsData).map(([category, data], index) => {
            const Icon = data.icon;
            return (
              <Card
                key={category}
                className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-card-hover animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-primary/20 hover:border-primary transition-all cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
