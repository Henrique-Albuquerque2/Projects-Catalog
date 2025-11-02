import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";


const projectsData = [
  {
    title: "AÇO I – Sales Analytics Dashboard",
    description:
      "End-to-end analytics dashboard built for a company using an internal ERP system. The solution integrates FastAPI, Redis, and PostgreSQL for efficient data pipelines, caching, and analysis.",
    technologies: ["FastAPI", "React", "PostgreSQL", "Redis", "ETL", "Vercel"],
    image: "../../src/assets/aco.png",
    youtubeUrl: "https://youtu.be/VZgLSuxtFvQ",
  },
  {
    title: "Institutional Website – Insper Jr.",
    description:
      "Rebuilt the company's institutional website from scratch with modern architecture and responsive design. Integrated with RD Station CRM, improving performance and conversion rate by 4.3%.",
    technologies: ["React", "TypeScript", "FastAPI", "Vite", "Tailwind CSS", "RD Station"],
    image: "../../src/assets/consulting.png",
    liveUrl: "https://www.insperjunior.com/",
  },
  {
    title: "Custom Game Controller with FreeRTOS",
    description:
      "Embedded system developed for Raspberry Pi Pico using FreeRTOS. Reads joystick and IMU data (MPU6050) to emulate mouse movements and actions in PC games through UART communication.",
    technologies: ["C", "FreeRTOS", "MPU6050", "UART", "Raspberry Pi Pico"],
    image: "../../src/assets/freertos.png",
    githubUrl: "https://github.com/Henrique-Albuquerque2/25a-emb-aps-2-gh?tab=readme-ov-file",
    youtubeUrl: "https://youtu.be/sFyntL15UdM"
  },
  {
  title: "Beacon – Voice-Controlled Browser for the Blind",
  description:
    "Developed for the Devs de Impacto Hackathon (4th place overall), Beacon is a voice-driven web browser that uses AI to interpret, summarize, and navigate websites for blind users. Instead of reading every element, it transforms pages into intuitive spoken menus that enable fast and accessible browsing.",
  technologies: [
    "Python",
    "OpenAI GPT-4o-mini",
    "Speech-to-Text / Text-to-Speech",
    "browser-use",
    "FastAPI",
    "Voice Interface",
    "Accessibility"
  ],
  image: "../../src/assets/beacon.png", // adicione o banner do Beacon em /public/images
  githubUrl: "https://github.com/InsperAI/Hackathon-DevsImpacto",
  youtubeUrl: "https://youtu.be/0nn5LYcQLlg",
  },
  {
    title: "WhatsApp Football Tracker Bot",
    description:
      "A WhatsApp bot that registers users, tracks favorite teams, and sends daily match reminders using the API-Football. Includes login/admin pages and broadcast reminders. Built with Twilio WhatsApp, Django, and a simple web UI.",
    technologies: [
      "Python",
      "Django",
      "Twilio WhatsApp API",
      "API-Football",
      "SQLite/PostgreSQL",
      "HTML/CSS",
      "Ngrok"
    ],
    image: "../../src/assets/torcedor.png", // coloque um banner seu em /public/images
    youtubeUrl: "https://www.youtube.com/shorts/jWKDpox6CZs",
    githubUrl: "https://github.com/Henrique-Albuquerque2/torcedorRoxo" // adicione quando quiser
  },
  {
    title: "Crossy Road Clone (Pygame)",
    description:
      "2D game built with Pygame, simulating the logic and mechanics of Crossy Road. Includes sprite animation, collision detection, and increasing difficulty.",
    technologies: ["Python", "Pygame", "Game Design"],
    image: "../../src/assets/pygame.png",
    githubUrl: "https://github.com/Henrique-Albuquerque2/DesSoft-2023.1-Pygame",
    youtubeUrl: "https://youtu.be/MfjJGuUqavU",
  },
  {
    title: "Getit – Task Management App",
    description:
      "Web app for personal task organization featuring CRUD operations and local database integration. Designed for simplicity and usability.",
    technologies: ["Python", "FastAPI", "React", "SQLite", "Tailwind CSS"],
    image: "../../src/assets/getit.png",
    youtubeUrl: "https://youtu.be/fiOd3oh3OOk",
  },
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleProjects = projectsData.slice(0, visibleCount);
  const canLoadMore = visibleCount < projectsData.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, projectsData.length));
  };

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work. Each project represents a unique challenge 
            and demonstrates my ability to deliver high-quality solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          {canLoadMore ? (
            <Button
              onClick={handleLoadMore}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
              size="lg"
            >
              Load more
            </Button>
          ) : (
            <p className="text-muted-foreground">You’ve reached the end.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
