export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  deviceType: "desktop" | "mobile";
  bgColor?: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: "project-vbeam",
    title: "VBEAM | Voice Email Assistant",
    description: "Voice-controlled email assistant with NLP and speech recognition. Integrates external APIs for reliable execution.",
    tags: ["Python", "Flask", "NLP", "Speech Recognition"],
    github: "https://github.com/archiy263/VBEAM",
    featured: true,
    deviceType: "desktop",
    bgColor: "bg-linear-to-br from-violet-500/90 to-fuchsia-500/90",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    id: "project-watchwise",
    title: "WatchWise | AI Recommendation Platform",
    description: "Full-stack movie and music recommendation platform with sentiment analysis, backend testing, and optimized performance.",
    tags: ["FastAPI", "React.js", "PostgreSQL", "REST APIs"],
    github: "https://github.com/archiy263/WatchWise",
    featured: true,
    deviceType: "desktop",
    bgColor: "bg-linear-to-br from-blue-500/90 to-cyan-500/90",
    screenshots: [
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    id: "project-taskmanager",
    title: "TeamTaskManager",
    description: "Task management platform featuring secure REST APIs, role-based authentication, and CRUD operations.",
    tags: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    github: "https://github.com/archiy263/TeamTaskManager",
    featured: true,
    deviceType: "desktop",
    bgColor: "bg-linear-to-br from-emerald-500/90 to-teal-500/90",
    screenshots: [
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=900&auto=format&fit=crop",
    ],
  }
];
