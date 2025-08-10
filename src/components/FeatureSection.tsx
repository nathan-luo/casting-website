'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

const features = [
  {
    title: 'Weekly Experiments',
    description: 'New AI challenges every week.',
    emoji: '🧪',
  },
  {
    title: 'Open Source',
    description: 'All code and findings public.',
    emoji: '💻',
  },
  {
    title: 'Student Community',
    description: 'Learn and build together.',
    emoji: '🎓',
  },
  {
    title: 'Real Prototypes',
    description: 'From ideas to working demos.',
    emoji: '🚀',
  },
  {
    title: 'Learning Resources',
    description: 'Tutorials by students for students.',
    emoji: '📚',
  },
  {
    title: 'Research Notes',
    description: 'Document our AI journey.',
    emoji: '📝',
  },
]

export function FeatureSection() {
  return (
    <section className="py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white">
            What We Do
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="text-center p-6 rounded-xl bg-gray-900/30 border border-gray-800/50 hover:bg-gray-900/50 transition-all"
            >
              <div className="text-3xl mb-3">{feature.emoji}</div>
              <h3 className="text-sm font-semibold text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}