import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experienceData = [
  {
    company: "Insper Jr.",
    position: "Engineering & Business Consultant • BDR",
    period: "2023 – Present",
    description:
      "Full-stack development and data projects end-to-end (FastAPI, React, Redis, PostgreSQL), plus market/finance engagements and active prospecting as BDR.",
    achievements: [
      "Rebuilt the company’s institutional website from scratch (Figma → React/Vite + FastAPI) and integrated CRM",
      "Improved load time and UX; increased lead conversion rate by +4.3%",
      "Built analytics dashboards connected to an ERP (200+ PostgreSQL tables) with ETL and Redis caching",
      "Ran discovery with prospects, mapped pains, and helped craft proposals and presentations"
    ]
  },
  {
    company: "Insper AI",
    position: "Co-founder & Director",
    period: "2024 – Present",
    description:
      "Founded Insper’s first AI organization to bring practical AI to students early in the course and foster hands-on learning.",
    achievements: [
      "Designed the entity’s statute, org structure, and selection processes",
      "Led workshops and study tracks in ML, NLP and Computer Vision",
      "Built partnerships and coordinated project squads with a collaborative, product-oriented culture"
    ]
  },
  {
    company: "Insper University",
    position: "Teaching Assistant — Multivariable Calculus",
    period: "2024 – Present",
    description:
      "Supported lectures and office hours for Calculus II/IV (gradients, vector calculus, optimization), focusing on clear explanations and applied intuition.",
    achievements: [
      "Created complementary study materials and problem sets",
      "Facilitated review sessions and one-on-one mentoring",
      "Strengthened technical communication and teaching skills"
    ]
  },
  {
    company: "Agro Insper",
    position: "Project Coordinator",
    period: "2022",
    description:
      "Coordinated a partner project with Sardrones and prospected new companies for semester-long engagements.",
    achievements: [
      "Led the team that rebuilt the partner’s frontend",
      "Brought the first computing/software project to the entity’s history",
      "Managed stakeholder expectations and deliveries end-to-end"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 items-start animate-fade-in-up ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow transform md:-translate-x-1/2 animate-pulse"></div>

                {/* Content card */}
                <div className={`md:w-[calc(50%-2rem)] ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <Card className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-card-hover group">
                    <CardHeader>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <CardTitle className={`text-2xl flex items-center gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse md:justify-end' : ''}`}>
                          <Briefcase className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                          {exp.position}
                        </CardTitle>
                        <CardDescription className="text-lg text-foreground/80 font-medium">
                          {exp.company}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{exp.description}</p>
                      <div className="space-y-2">
                        <p className="font-semibold text-sm text-primary">Key Achievements:</p>
                        <ul className={`space-y-1 text-muted-foreground ${index % 2 === 0 ? 'md:list-inside' : 'list-disc list-inside'}`}>
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
