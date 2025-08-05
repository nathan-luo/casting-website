import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
              <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="text-white transition-colors">
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

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Logo size="sm" showText={false} />
              <span className="text-gray-400">© 2024 Casting</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
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