import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "AÇO I – Sales Analytics Dashboard",
    description:
      "End-to-end analytics dashboard built for a company using an internal ERP system. The solution integrates FastAPI, Redis, and PostgreSQL for efficient data pipelines, caching, and analysis.",
    technologies: ["FastAPI", "React", "PostgreSQL", "Redis", "ETL", "Vercel"],
    image: "/images/aco1.png",
    githubUrl: "https://github.com/henriquealbuquerque/aco1-dashboard",
  },
  {
    title: "Institutional Website – Insper Jr.",
    description:
      "Rebuilt the company's institutional website from scratch with modern architecture and responsive design. Integrated with RD Station CRM, improving performance and conversion rate by 4.3%.",
    technologies: ["React", "TypeScript", "FastAPI", "Vite", "Tailwind CSS", "RD Station"],
    image: "/images/insperjr.png",
    liveUrl: "https://insperjr.vercel.app",
    githubUrl: "https://github.com/henriquealbuquerque/insperjr-site",
  },
  {
    title: "Custom Game Controller with FreeRTOS",
    description:
      "Embedded system developed for Raspberry Pi Pico using FreeRTOS. Reads joystick and IMU data (MPU6050) to emulate mouse movements and actions in PC games through UART communication.",
    technologies: ["C", "FreeRTOS", "MPU6050", "UART", "Raspberry Pi Pico"],
    image: "/images/freertos-controller.png",
    githubUrl: "https://github.com/insper-classroom/25a-emb-aps-2-gh",
  },
  {
    title: "Getit – Task Management App",
    description:
      "Web app for personal task organization featuring CRUD operations, login system, and local database integration. Designed for simplicity and usability.",
    technologies: ["Python", "FastAPI", "React", "SQLite", "Tailwind CSS"],
    image: "/images/getit.png",
    githubUrl: "https://github.com/henriquealbuquerque/getit",
  },
  {
    title: "Football Tracker Bot",
    description:
      "WhatsApp bot that sends live football match updates using web scraping and API integration. Designed to deliver real-time team stats and scores.",
    technologies: ["Python", "Selenium", "Twilio API", "FastAPI"],
    image: "/images/footballbot.png",
    githubUrl: "https://github.com/henriquealbuquerque/football-tracker-bot",
  },
  {
    title: "Crossy Road Clone (Pygame)",
    description:
      "2D game built with Pygame, simulating the logic and mechanics of Crossy Road. Includes sprite animation, collision detection, and increasing difficulty.",
    technologies: ["Python", "Pygame", "OOP", "Game Design"],
    image: "/images/crossyroad.png",
    githubUrl: "https://github.com/henriquealbuquerque/crossyroad-clone",
  },
];


const Projects = () => {
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
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-12 text-center text-muted-foreground">
          <p>More projects coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
