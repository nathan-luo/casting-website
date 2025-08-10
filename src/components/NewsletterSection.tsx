'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { motion } from 'framer-motion'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-950 to-black border-t border-gray-800">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-transparent to-red-600/10" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Eye-catching badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-orange-400 text-sm font-medium">Newsletter Launch</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Don't Miss Out
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Join <span className="text-white font-semibold">500+ students</span> getting weekly insights on AI research, 
            exclusive tutorials, and early access to our experiments
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-gray-800/70 transition-all text-lg"
            />
            
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 text-lg ${
                status === 'success' 
                  ? 'bg-green-500/20 text-green-400 border-2 border-green-500/30' 
                  : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/25'
              } disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
            >
              {status === 'loading' ? 'Subscribing...' : 
               status === 'success' ? '✓ Subscribed!' : 
               'Get Started →'}
            </button>
          </form>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 font-medium"
            >
              Awesome! Check your inbox to confirm your subscription.
            </motion.p>
          )}

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Weekly articles
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Exclusive tutorials
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No spam ever
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}