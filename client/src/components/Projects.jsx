import React from "react"
import { motion } from "framer-motion"
import data from "../data/profile.json"

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {data.projects.map((p, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="card p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-muted">{p.description}</p>
              </div>
              <div className="flex gap-2 flex-wrap justify-end">
                {p.stack.map((s, i) => <span key={i} className="badge">{s}</span>)}
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              {p.demo && <a className="btn" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>}
              {p.source && <a className="btn" href={p.source} target="_blank" rel="noreferrer">Source</a>}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects
