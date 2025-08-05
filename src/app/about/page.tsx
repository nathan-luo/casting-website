import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function AboutPage() {
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
              <Link href="/about" className="text-white transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
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
                    About Casting
                  </h1>
                  
                  <p className="text-lg text-gray-400">
                    We're building technology that transforms organizations into intelligent, self-directed entities.
                  </p>
                </div>
              </div>

              {/* Content section */}
              <div className="p-8 md:p-12">
                <div className="max-w-2xl mx-auto prose prose-sm prose-invert max-w-none 
                  prose-headings:font-semibold prose-headings:text-white
                  prose-p:text-gray-300 prose-p:leading-relaxed
                  prose-strong:text-white prose-strong:font-semibold
                  prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-orange-400">
                  
                  <h2>Our Mission</h2>
                  <p>
                    Casting is pioneering the development of autonomous AI organizations — complex software systems 
                    capable of independently pursuing organization-level objectives. We believe the future of work 
                    isn't about replacing humans, but creating AI systems that amplify human capability exponentially.
                  </p>
                  <p>
                    By building a unified data layer that captures every aspect of organizational knowledge and 
                    deploying intelligent agents that can act on this data, we're creating the foundation for 
                    organizations that can sense, decide, and act autonomously.
                  </p>

                  <h2>Why Casting?</h2>
                  
                  <h3>Like Casting Metal</h3>
                  <p>
                    We're forging raw data and AI capabilities into durable organizational structures, 
                    transforming the malleable into the permanent.
                  </p>

                  <h3>Like Casting Roles</h3>
                  <p>
                    We assign the right AI agents to the right tasks, orchestrating a symphony of 
                    specialized intelligence working in harmony.
                  </p>

                  <h3>Like Casting Spells</h3>
                  <p>
                    We're unlocking capabilities that seem magical — systems that understand context, 
                    make decisions, and take actions with minimal human intervention.
                  </p>

                  <h2>Our Approach</h2>

                  <p>
                    <strong>Research-Driven:</strong> We're at the cutting edge of applied AI, experimenting with novel architectures 
                    and approaches that haven't been tried before.
                  </p>

                  <p>
                    <strong>Open Development:</strong> We document our journey publicly, sharing insights, failures, and breakthroughs 
                    with the community.
                  </p>

                  <p>
                    <strong>Student-Powered:</strong> As students, we bring fresh perspectives and the freedom to explore ambitious 
                    ideas without legacy constraints.
                  </p>

                  <p>
                    <strong>Ethics-First:</strong> We're building powerful technology responsibly, with governance and accountability 
                    as first-class features.
                  </p>

                  <h2>Join the Journey</h2>
                  <p>
                    We're looking for ambitious engineers who want to work on problems that haven't been 
                    solved before. If you're excited about building the future of autonomous AI, we want 
                    to hear from you.
                  </p>
                </div>
              </div>

              {/* CTA section */}
              <div className="border-t border-gray-800 p-8 md:p-12">
                <div className="flex gap-4 justify-center">
                  <Button variant="primary" size="lg" href="/blog">
                    Read Our Blog
                  </Button>
                  <Button variant="secondary" size="lg" href="/projects">
                    View Projects
                  </Button>
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