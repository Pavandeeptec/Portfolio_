'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Bot, Zap, Database } from 'lucide-react'

const skills = [
  { name: 'Python', icon: Code2, level: 90, color: 'from-blue-500 to-cyan-500' },
  { name: 'API Integration', icon: Zap, level: 85, color: 'from-cyan-500 to-teal-500' },
  { name: 'Chatbot Development', icon: Bot, level: 88, color: 'from-teal-500 to-green-500' },
  { name: 'AI Tools', icon: Database, level: 82, color: 'from-green-500 to-emerald-500' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Technical <span className="text-gradient">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-navy-800 rounded-xl p-6 card-glow border border-electric-blue/20 hover:border-electric-cyan/50 transition-all group"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-electric-blue/20 rounded-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-electric-cyan" />
                    </div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  
                  <div className="relative h-3 bg-navy-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                  <p className="text-right text-sm text-gray-400 mt-2">{skill.level}%</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
