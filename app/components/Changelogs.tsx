"use client";

import { motion } from "framer-motion";
import { Code2, Bug, Sparkles, Rocket } from "lucide-react";

const changelog = [
  {
    version: "v1.0.0",
    date: "Sep 2025",
    highlights: [
      {
        icon: <Rocket className="w-4 h-4 text-red-400" />,
        text: "Initial start of version tracking",
      },
      {
        icon: <Code2 className="w-4 h-4 text-red-400" />,
        text: "Fixed character selection screen UI bugs",
      },
    ],
  },
  {
    version: "v1.0.1",
    date: "Oct 2025",
    highlights: [
      {
        icon: <Bug className="w-4 h-4 text-red-400" />,
        text: "Fixed character stats bugs",
      },
      {
        icon: <Sparkles className="w-4 h-4 text-red-400" />,
        text: "Added more characters (+4)",
      },
    ],
  },
];

export default function Changelogs() {
  return (
    <section className="py-24 bg-black/60 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-red-500"
        >
          Dev Changelog
        </motion.h2>

        <div className="space-y-8 text-left">
          {changelog.map((log, i) => (
            <motion.div
              key={log.version}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/40 border border-red-600/30 rounded-2xl p-6 hover:border-red-500/60 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-red-400">
                  {log.version}
                </h3>
                <span className="text-sm text-gray-400">{log.date}</span>
              </div>
              <ul className="space-y-2">
                {log.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-gray-300">
                    {h.icon}
                    <span>{h.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        ></motion.div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.08)_0%,transparent_80%)] pointer-events-none" />
    </section>
  );
}
