import Link from 'next/link'
import { Container } from '@/components/ui/Container'

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800/50 py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Casting</h3>
          <p className="text-gray-400 mb-8 max-w-md">
            Student blog exploring autonomous AI organizations
          </p>
          
          <div className="flex items-center gap-8 mb-8">
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
              Experiments
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              About
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
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Casting. Built by students.
          </p>
        </div>
      </Container>
    </footer>
  )
}