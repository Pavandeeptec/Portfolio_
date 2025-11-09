'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Rocket, Code, Lightbulb, Target } from 'lucide-react'

const milestones = [
  {
    icon: Lightbulb,
    title: 'The Spark',
    description: 'Discovered the world of AI and chatbots. Started learning Python basics.',
    year: 'Start',
  },
  {
    icon: Code,
    title: 'First Lines',
    description: 'Built my first simple chatbot. Learned about APIs and how they power modern applications.',
    year: 'Early Days',
  },
  {
    icon: Rocket,
    title: 'AI Integration',
    description: 'Created AI-PDF Chatbot using LangChain and OpenAI API. Mastered PDF processing and natural language understanding.',
    year: 'Breakthrough',
  },
  {
    icon: Target,
    title: 'Building the Future',
    description: 'Continuously exploring new AI technologies, building smarter tools, and pushing boundaries.',
    year: 'Now',
  },
]

export default function Journey() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-center text-gray-400 mb-16">
            From curiosity to creation
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-electric-blue via-electric-cyan to-electric-purple hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 }}
                    className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
                  >
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-navy-800 rounded-xl p-6 card-glow border border-electric-blue/20 hover:border-electric-cyan/50 transition-all">
                        <div className={`flex items-center space-x-3 mb-3 ${isEven ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}>
                          <div className="p-2 bg-electric-blue/20 rounded-lg">
                            <Icon className="w-6 h-6 text-electric-cyan" />
                          </div>
                          <h3 className="text-xl font-bold">{milestone.title}</h3>
                        </div>
                        <p className="text-gray-300">{milestone.description}</p>
                        <p className="text-electric-cyan text-sm mt-2 font-semibold">{milestone.year}</p>
                      </div>
                    </div>

                    <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0">
                      <div className="w-4 h-4 bg-electric-cyan rounded-full border-4 border-navy-900 shadow-lg shadow-electric-cyan/50" />
                    </div>

                    <div className="w-full md:w-5/12" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
