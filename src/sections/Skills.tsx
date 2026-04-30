"use client";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";

const categoryColors: Record<string, string> = {
  Frontend: "bg-violet-50 text-violet-700 border-violet-100",
  Backend: "bg-blue-50 text-blue-700 border-blue-100",
  "Database & Storage": "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Cloud & DevOps": "bg-orange-50 text-orange-700 border-orange-100",
  Tools: "bg-pink-50 text-pink-700 border-pink-100",
  Practices: "bg-gray-100 text-gray-700 border-gray-200",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-2">Expertise</p>
          <h2 className="text-4xl font-bold text-[#1d1d1f] mb-12">Skills</h2>
        </motion.div>

        <div className="space-y-8">
          {Object.entries(resume.skills).map(([category, skills], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h3 className="text-sm font-semibold text-[#6e6e73] uppercase tracking-wider mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-sm font-medium px-3 py-1.5 rounded-full border ${
                      categoryColors[category] ?? "bg-gray-100 text-gray-700 border-gray-200"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
