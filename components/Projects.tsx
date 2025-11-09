'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, FileText } from 'lucide-react'
import projectsData from '@/data/projects.json'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Building intelligent solutions with AI and Python
          </p>

          <div className="grid md:grid-cols-1 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-navy-800 rounded-xl p-8 card-glow border border-electric-blue/20 hover:border-electric-cyan/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-8 h-8 text-electric-cyan" />
                    <h3 className="text-2xl font-bold text-gradient">
                      {project.title}
                    </h3>
                  </div>
                  {project.featured && (
                    <span className="px-3 py-1 bg-electric-blue/20 text-electric-cyan text-sm rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-300 mb-6 text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-navy-700 text-electric-cyan text-sm rounded-lg border border-electric-blue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-electric-blue/20 hover:bg-electric-blue/30 text-electric-cyan rounded-lg transition-all hover:scale-105"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-electric-cyan/20 hover:bg-electric-cyan/30 text-electric-cyan rounded-lg transition-all hover:scale-105"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
