"use client";

import { motion } from "framer-motion";
import { Award, Cloud, Code, Server, Terminal, Brain, Database, Shield, Activity, Cpu, BookOpen } from "lucide-react";

export function Other() {
  const items = [
    {
      key: "cert-1",
      icon: Code,
      title: "Programming in Python",
      desc: "KIMO",
      href: "#",
      color: "from-blue-500 to-cyan-500",
    },
    {
      key: "cert-2",
      icon: Terminal,
      title: "Generative AI for All",
      desc: "Infosys Springboard",
      href: "#",
      color: "from-violet-500 to-purple-500",
    },
    {
      key: "cert-3",
      icon: Server,
      title: "Node.js RESTful API",
      desc: "DevTown Bootcamp",
      href: "#",
      color: "from-amber-500 to-orange-500",
    },
    {
      key: "cert-4",
      icon: Cloud,
      title: "Google Cloud Skills Boost",
      desc: "Vertex AI, Terraform, IAM, Kubernetes",
      href: "#",
      color: "from-emerald-500 to-teal-500",
    },
    {
      key: "cert-5",
      icon: Award,
      title: "Gen AI Exchange Hackathon",
      desc: "Google Cloud",
      href: "#",
      color: "from-pink-500 to-rose-500",
    },
    {
      key: "cert-6",
      icon: Database,
      title: "SAP Certified - Backend Developer",
      desc: "SAP",
      href: "#",
      color: "from-blue-600 to-indigo-600",
    },
    {
      key: "cert-7",
      icon: Brain,
      title: "ChatGPT for Data Science and ML",
      desc: "Udemy",
      href: "#",
      color: "from-fuchsia-500 to-purple-600",
    },
    {
      key: "cert-8",
      icon: Cpu,
      title: "Artificial Intelligence Fundamentals",
      desc: "IBM SkillsBuild",
      href: "#",
      color: "from-sky-400 to-blue-500",
    },
    {
      key: "cert-9",
      icon: Cloud,
      title: "Azure Fundamentals",
      desc: "Infosys Springboard",
      href: "#",
      color: "from-cyan-400 to-blue-500",
    },
    {
      key: "cert-10",
      icon: Activity,
      title: "GenAI Data Analytics Simulation",
      desc: "Forage",
      href: "#",
      color: "from-emerald-400 to-green-500",
    },
    {
      key: "cert-11",
      icon: Shield,
      title: "Cyber Job Simulation",
      desc: "Deloitte",
      href: "#",
      color: "from-slate-600 to-gray-800",
    },
    {
      key: "cert-12",
      icon: Database,
      title: "SAP Certified – Backend Developer – SAP CAP Model",
      desc: "SAP",
      href: "#",
      color: "from-blue-500 to-indigo-500",
    },
    {
      key: "cert-13",
      icon: BookOpen,
      title: "Software Developer Career Guide and Interview Preparation",
      desc: "IBM",
      href: "#",
      color: "from-blue-600 to-blue-800",
    },
    {
      key: "cert-14",
      icon: Brain,
      title: "Claude Code: Software Engineering with GenAI",
      desc: "Vanderbilt University",
      href: "#",
      color: "from-violet-600 to-fuchsia-600",
    },
    {
      key: "cert-15",
      icon: Cloud,
      title: "SAP Certified – Back-End Developer – ABAP Cloud",
      desc: "SAP",
      href: "#",
      color: "from-cyan-500 to-blue-500",
    },
    {
      key: "cert-16",
      icon: Code,
      title: "Emerging Technologies (Advanced Competitive Coding & SAP HANA)",
      desc: "SAP",
      href: "#",
      color: "from-orange-500 to-red-500",
    },
    {
      key: "cert-17",
      icon: Award,
      title: "SAP Professional Fundamentals",
      desc: "SAP",
      href: "#",
      color: "from-amber-400 to-orange-500",
    },
    {
      key: "cert-18",
      icon: Terminal,
      title: "Boost Your Productivity with GitHub Copilot",
      desc: "Microsoft",
      href: "#",
      color: "from-gray-700 to-gray-900",
    },
    {
      key: "cert-19",
      icon: Cpu,
      title: "Intro to Generative AI for Developers With Copilot",
      desc: "Microsoft",
      href: "#",
      color: "from-teal-500 to-emerald-500",
    },
    {
      key: "cert-20",
      icon: Activity,
      title: "Introduction to Agile Development and Scrum",
      desc: "IBM",
      href: "#",
      color: "from-blue-500 to-blue-700",
    },
    {
      key: "cert-21",
      icon: Server,
      title: "Introduction to Software Engineering",
      desc: "IBM",
      href: "#",
      color: "from-indigo-500 to-purple-500",
    },
    {
      key: "cert-22",
      icon: Database,
      title: "Software, Programming, and Database Essentials",
      desc: "Coursera",
      href: "#",
      color: "from-sky-500 to-blue-600",
    },
  ];

  return (
    <section
      id="other"
      className="relative overflow-hidden pt-0 pb-24 sm:pb-32"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 px-2 text-3xl font-bold text-pretty sm:text-5xl md:text-6xl">
            Certificates &{" "}
            <span className="text-gradient-shimmer">Achievements</span>
          </h2>
          <p className="mx-auto max-w-2xl px-3 text-base text-(--muted) sm:text-lg md:text-xl">
            My professional certifications and hackathon participation.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <motion.a
              key={item.key}
              href={item.href}
              className="group glass relative cursor-pointer overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:scale-105 sm:p-8"
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
              />
              <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                <div
                  className={`h-16 w-16 rounded-2xl bg-linear-to-br ${item.color} p-0.5`}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-(--background)">
                    <item.icon size={32} style={{ color: "var(--foreground)" }} />
                  </div>
                </div>
                <div>
                  <h3
                    className={`bg-linear-to-br ${item.color} mb-2 bg-clip-text px-1 text-xl font-bold text-transparent sm:text-2xl`}
                  >
                    {item.title}
                  </h3>
                  <p className="px-1 text-xs text-(--muted) sm:text-sm">{item.desc}</p>
                </div>
                <div
                  className={`bg-linear-to-br ${item.color} mt-2 bg-clip-text text-sm font-semibold text-transparent transition-transform duration-300 group-hover:translate-x-2`}
                >
                  Explore
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
