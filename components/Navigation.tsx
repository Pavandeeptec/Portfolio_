'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['About', 'Projects', 'Skills', 'Journey', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-navy-900/80 backdrop-blur-lg border-b border-electric-blue/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-gradient"
          >
            Pavandeep B
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-electric-cyan transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="flex items-center space-x-4">
              <a href="https://github.com/Pavandeeptec" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 hover:text-electric-cyan transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/pavandeeptech/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 hover:text-electric-cyan transition-colors" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-electric-cyan"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-navy-800 border-t border-electric-blue/20"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-electric-cyan transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
