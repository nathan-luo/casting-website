'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center py-20 overflow-hidden">
      {/* Flame gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950 to-orange-950/20" />
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[80%]"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-orange-600/30 via-orange-500/20 to-transparent blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 via-orange-500/10 to-transparent blur-2xl transform scale-110" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-gradient-to-t from-yellow-500/20 to-transparent blur-2xl" />
        </motion.div>
        
        {/* Floating embers */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `-10px`,
              }}
              animate={{
                y: [-10, -800],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </div>

      <Container className="relative z-10">
        <motion.h1
          className="text-6xl md:text-8xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            Casting
          </span>
        </motion.h1>
        
        <motion.p
          className="mt-6 text-xl md:text-2xl text-gray-300 font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Building AI Leverage
        </motion.p>

        <motion.div
          className="mt-16 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Button variant="primary" size="lg" href="/about">
            Learn More
          </Button>
          <Button variant="ghost" size="lg" href="/blog">
            Read Blog →
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}