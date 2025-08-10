'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-orange-950/10 via-gray-950 to-gray-950" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Join the Journey
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 mb-10">
            Contribute your research or start your own exploration
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/blog">
              Start Reading
            </Button>
            <Button variant="secondary" size="lg" href="https://github.com/casting-ai">
              View GitHub
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}