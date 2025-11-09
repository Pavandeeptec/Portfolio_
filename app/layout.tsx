import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pavandeep B | AI Developer | Python Chatbot Builder',
  description: 'I build intelligent systems that make AI feel human. Explore my AI projects, chatbots, and Python-based tools.',
  keywords: ['AI Developer', 'Chatbot Developer', 'Python', 'Machine Learning', 'Pavandeep B'],
  authors: [{ name: 'Pavandeep B' }],
  openGraph: {
    title: 'Pavandeep B | AI Developer',
    description: 'Building intelligent systems with AI and Python',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
