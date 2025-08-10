import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/90 backdrop-blur-xl border-b border-gray-800/50">
        <Container>
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="transition-transform hover:scale-105">
              <Logo size="sm" />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-orange-400 font-medium">
                About
              </Link>
              <Link href="/projects" className="text-gray-400 hover:text-orange-400 transition-colors font-medium">
                Projects
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-orange-400 transition-colors font-medium">
                Articles
              </Link>
            </div>
          </div>
        </Container>
      </nav>

      {/* Main Content - Clean and easy to edit */}
      <main className="pt-32 pb-20 min-h-screen">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Page Header */}
            <h1 className="text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                About Casting
              </span>
            </h1>

            {/* Simple intro */}
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              We're students exploring AI through hands-on experiments and open research.
            </p>

            {/* Three key points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div>
                <h3 className="text-orange-400 font-semibold mb-2">Weekly Experiments</h3>
                <p className="text-gray-400 text-sm">
                  New AI challenges every week, documented and shared.
                </p>
              </div>
              <div>
                <h3 className="text-orange-400 font-semibold mb-2">Open Source</h3>
                <p className="text-gray-400 text-sm">
                  All code public. Learn from our successes and failures.
                </p>
              </div>
              <div>
                <h3 className="text-orange-400 font-semibold mb-2">Student Community</h3>
                <p className="text-gray-400 text-sm">
                  Diverse backgrounds, unique perspectives on AI.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 mb-4">Want to contribute?</p>
              <div className="flex gap-4">
                <Link 
                  href="mailto:hello@casting.systems" 
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Email →
                </Link>
                <Link 
                  href="https://github.com/casting-ai" 
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  GitHub →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}