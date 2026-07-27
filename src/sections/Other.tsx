"use client";

import { motion } from "framer-motion";
import { Award, Cloud, Code, Server, Terminal } from "lucide-react";

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
      desc: "Vertex AI, Terraform, IAM, Kubernetes, Cloud Storage",
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
