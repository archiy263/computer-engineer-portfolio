import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

export interface Social {
  name: string;
  url: string;
  icon: LucideIcon;
}

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/archiy263",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/archi-yadav-41150734b/",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:archiyadav263@gmail.com",
    icon: Mail,
  },
];

export const siteConfig = {
  name: "Archi Yadav",
  title: "Backend Developer",
  description: "Computer Engineering student and Backend Developer specializing in Python, APIs, and AI integrations.",
};
