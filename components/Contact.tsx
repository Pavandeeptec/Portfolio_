'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Github, Linkedin, Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '00190e47-e62a-449c-91e0-7e39221cb116',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        alert('Message sent successfully! I\'ll get back to you soon. 🚀')
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert('Failed to send message. Please try emailing me directly.')
      }
    } catch (error) {
      alert(
        'Failed to send message. Please email me directly at pavandeeptech@gmail.com'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Let's build something amazing together
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              
              <motion.a
                href="https://github.com/Pavandeeptec"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 p-4 bg-navy-800 rounded-lg card-glow border border-electric-blue/20 hover:border-electric-cyan/50 transition-all"
              >
                <Github className="w-6 h-6 text-electric-cyan" />
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-sm text-gray-400">@Pavandeeptec</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/pavandeeptech/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 p-4 bg-navy-800 rounded-lg card-glow border border-electric-blue/20 hover:border-electric-cyan/50 transition-all"
              >
                <Linkedin className="w-6 h-6 text-electric-cyan" />
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-sm text-gray-400">pavandeeptech</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:pavandeeptech@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 p-4 bg-navy-800 rounded-lg card-glow border border-electric-blue/20 hover:border-electric-cyan/50 transition-all"
              >
                <Mail className="w-6 h-6 text-electric-cyan" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-gray-400">pavandeeptech@gmail.com</p>
                </div>
              </motion.a>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-navy-800 border border-electric-blue/20 rounded-lg focus:border-electric-cyan focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-navy-800 border border-electric-blue/20 rounded-lg focus:border-electric-cyan focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-navy-800 border border-electric-blue/20 rounded-lg focus:border-electric-cyan focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-electric-blue hover:bg-electric-cyan text-navy-900 font-semibold rounded-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
