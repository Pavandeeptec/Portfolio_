'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-electric-cyan rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-electric-blue/50 shadow-2xl shadow-electric-blue/30">
                  <Image
                    src="/profile.jpg"
                    alt="Pavandeep B"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </motion.div>

            {/* About Text */}
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm a self-taught AI builder with a passion for making technology more human.
                My journey started with curiosity about how chatbots work, and it quickly evolved
                into building intelligent systems that can understand, learn, and respond naturally.
              </p>

              <p>
                What drives me is the intersection of creativity and code. I love exploring how
                AI can automate complex tasks, make information more accessible, and create
                experiences that feel intuitive. From PDF-reading chatbots to API-powered tools,
                I'm constantly experimenting with new ways to make AI more practical and useful.
              </p>

              <p className="text-electric-cyan font-semibold italic">
                "I might be new to the field, but I'm already building tools that help AI
                understand humans better."
              </p>

              <p>
                Every project is a learning opportunity. I believe in continuous growth,
                staying curious, and pushing the boundaries of what's possible with Python
                and AI technologies. The future is intelligent, and I'm here to help build it.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
