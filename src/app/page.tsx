import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { HeroSection } from '@/components/HeroSection'
import { FeatureSection } from '@/components/FeatureSection'
import { NewsletterSection } from '@/components/NewsletterSection'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/90 backdrop-blur-xl border-b border-gray-800/50 transition-all duration-300">
        <Container>
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="transition-transform hover:scale-105">
              <Logo size="sm" />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-gray-400 hover:text-orange-400 transition-colors font-medium">
                About
              </Link>
              <Link href="/projects" className="text-gray-400 hover:text-orange-400 transition-colors font-medium">
                Projects
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-orange-400 transition-colors font-medium">
                Articles
              </Link>
              <a
                href="https://github.com/casting-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 hover:bg-orange-500/20 transition-all font-medium text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </Container>
      </nav>

      {/* Hero Section */}
      <HeroSection />
      
      {/* Feature Section */}
      <FeatureSection />
      
      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer */}
      <footer className="py-16 border-t border-gray-800 bg-gradient-to-b from-gray-950 to-black">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Logo size="sm" showText={true} />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                A student-driven blog exploring AI, technology, and innovation through research and experimentation.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Explore</h3>
              <div className="space-y-2">
                <Link href="/blog" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Latest Articles
                </Link>
                <Link href="/projects" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Student Projects
                </Link>
                <Link href="/about" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  About Us
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Community</h3>
              <div className="space-y-2">
                <a
                  href="https://github.com/casting-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://discord.gg/casting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  Discord
                </a>
                <a
                  href="https://twitter.com/casting_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  Twitter
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Get Involved</h3>
              <div className="space-y-2">
                <Link href="/contribute" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Write for Us
                </Link>
                <Link href="/research" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Join Research
                </Link>
                <a
                  href="mailto:hello@casting.systems"
                  className="block text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>© 2024 Casting Student Blog</span>
                <span className="text-gray-700">•</span>
                <span>Built by students, for students</span>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                  Terms
                </Link>
                <Link href="/rss" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                  RSS
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  )
}