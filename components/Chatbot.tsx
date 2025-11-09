'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

const responses: Record<string, string> = {
  hello: "Hey there! I'm Pavandeep's AI assistant. Ask me about his projects, skills, or background!",
  hi: "Hey there! I'm Pavandeep's AI assistant. Ask me about his projects, skills, or background!",
  projects: "Pavandeep's featured project is the AI-PDF Chatbot - an intelligent system that reads and answers questions from PDF files using LangChain and OpenAI API. Check it out in the Projects section!",
  skills: "Pavandeep specializes in Python, API Integration, Chatbot Development, and AI Tools. He's passionate about making AI more accessible and human-friendly.",
  about: "Pavandeep is a self-taught AI builder who loves creating intelligent systems. He's driven by curiosity and the goal of making technology more intuitive and helpful.",
  contact: "You can reach Pavandeep through GitHub (@Pavandeeptec) or LinkedIn (pavandeeptech). Scroll down to the Contact section for more details!",
  default: "That's an interesting question! You can ask me about Pavandeep's projects, skills, background, or how to contact him.",
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hi! I'm Pavandeep's AI assistant. Ask me anything about his work!", isUser: false },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }])
    setInput('')

    setTimeout(() => {
      const lowerInput = userMessage.toLowerCase()
      let response = responses.default

      for (const [key, value] of Object.entries(responses)) {
        if (lowerInput.includes(key)) {
          response = value
          break
        }
      }

      setMessages((prev) => [...prev, { text: response, isUser: false }])
    }, 500)
  }

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 p-4 bg-electric-blue hover:bg-electric-cyan text-navy-900 rounded-full shadow-lg shadow-electric-blue/50"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-navy-800 rounded-xl shadow-2xl border border-electric-blue/30 flex flex-col"
          >
            <div className="p-4 border-b border-electric-blue/30 bg-navy-900 rounded-t-xl">
              <h3 className="font-semibold text-electric-cyan">Talk with Pavandeep's AI</h3>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.isUser
                        ? 'bg-electric-blue text-navy-900'
                        : 'bg-navy-700 text-gray-200'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-electric-blue/30">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 bg-navy-700 border border-electric-blue/20 rounded-lg focus:border-electric-cyan focus:outline-none text-sm"
                />
                <button
                  onClick={handleSend}
                  className="px-4 py-2 bg-electric-blue hover:bg-electric-cyan text-navy-900 rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
