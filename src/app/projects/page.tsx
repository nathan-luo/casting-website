'use client'

import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "Autonomous AI Organization Platform",
    status: "In Development",
    description: "Building the core infrastructure for organizations that can sense, decide, and act autonomously.",
    tags: ["AI", "Architecture", "Systems"],
    highlights: [
      "Unified data layer capturing organizational knowledge",
      "Intelligent agent orchestration system",
      "Real-time decision making capabilities"
    ]
  },
  {
    title: "Casting Lab",
    status: "Active",
    description: "Our experimental playground where we test cutting-edge AI concepts on real organizational challenges.",
    tags: ["Research", "Experimentation"],
    highlights: [
      "Testing ground for new AI architectures",
      "Live experiments with partner organizations",
      "Open-source research outputs"
    ]
  },
  {
    title: "Agent Memory Systems",
    status: "Research",
    description: "Developing memory architectures that allow AI agents to learn and adapt from organizational context.",
    tags: ["ML", "Memory", "Context"],
    highlights: [
      "Long-term memory for AI agents",
      "Context-aware decision making",
      "Organizational learning loops"
    ]
  }
]

export default function ProjectsPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <Container>
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Logo size="sm" />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-white transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                Blog
              </Link>
              <a
                href="https://github.com/casting-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </Container>
      </nav>

      <section className="min-h-screen py-20">
        <Container>
          <div className="max-w-3xl mx-auto pt-12">
            {/* Main article card */}
            <article className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm">
              {/* Header section */}
              <div className="border-b border-gray-800 p-8 md:p-12">
                <div className="max-w-2xl mx-auto text-center">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    Our Projects
                  </h1>
                  
                  <p className="text-lg text-gray-400">
                    Explore the projects where we're pushing the boundaries of what's possible with autonomous AI systems.
                  </p>
                </div>
              </div>

              {/* Content section */}
              <div className="p-8 md:p-12">
                <div className="max-w-2xl mx-auto">
                  <div className="space-y-8">
                    {projects.map((project, index) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border-b border-gray-800 last:border-0 pb-8 last:pb-0"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h2 className="text-xl font-semibold text-white">
                            {project.title}
                          </h2>
                          <Badge variant={project.status === "Active" ? "success" : "default"}>
                            {project.status}
                          </Badge>
                        </div>
                        
                        <p className="text-gray-400 mb-4">
                          {project.description}
                        </p>
                        
                        <div className="mb-4">
                          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            Key Features
                          </h3>
                          <ul className="space-y-1">
                            {project.highlights.map((highlight) => (
                              <li key={highlight} className="flex items-start gap-2 text-sm text-gray-300">
                                <span className="text-orange-400 mt-0.5">•</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 text-xs font-medium text-gray-500 rounded-full border border-gray-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA section */}
              <div className="border-t border-gray-800 p-8 md:p-12">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">Want to Contribute?</h3>
                  <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                    Our projects are open to collaboration. Whether you're interested in research, 
                    development, or testing, there's a place for you in our mission.
                  </p>
                  <Link
                    href="https://github.com/casting-ai"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    View on GitHub
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Logo size="sm" showText={false} />
              <span className="text-gray-400">© 2024 Casting</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                Blog
              </Link>
              <a
                href="https://github.com/casting-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:hello@casting.systems"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  )
}