import React from "react"
import { motion } from "framer-motion"
import data from "../data/profile.json"

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <div className="mt-6 grid gap-6">
        {data.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-muted">{exp.company} • {exp.duration}</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {exp.stack.map((s, i) => <span key={i} className="badge">{s}</span>)}
              </div>
            </div>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              {exp.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
