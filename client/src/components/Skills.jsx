import React from "react"
import { motion } from "framer-motion"
import data from "../data/profile.json"

const categoryOrder = ["Frontend", "Backend", "AI & Automation", "Databases", "Platforms", "Visualization", "Languages"]

const Skills = () => {
  const categories = categoryOrder.filter(c => data.skills[c])
  return (
    <section id="skills" className="py-16 md:py-24">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.04 }}
            className="card p-6"
          >
            <h3 className="font-semibold">{cat}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {data.skills[cat].map((s, i) => <span key={i} className="badge">{s}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
