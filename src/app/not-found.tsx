import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 to-gray-900" role="alert" aria-live="polite">
      <Container>
        <div className="text-center">
          <div className="inline-flex items-center justify-center mb-8">
            <span className="text-8xl font-bold text-gradient">404</span>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link href="/" aria-label="Go to homepage">
              <Button>
                Go home
              </Button>
            </Link>
            <Link href="/blog" aria-label="Visit the blog">
              <Button variant="secondary">
                Visit blog
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <Link href="/blog" className="group" aria-label="Go to the blog">
              <div className="p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all">
                <h3 className="font-semibold text-white group-hover:text-orange-500 transition-colors">
                  Blog
                </h3>
                <p className="text-sm text-gray-400 mt-2">
                  Read posts, notes, and experiments
                </p>
              </div>
            </Link>

            <Link href="/about" className="group" aria-label="Learn about the team">
              <div className="p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all">
                <h3 className="font-semibold text-white group-hover:text-orange-500 transition-colors">
                  About
                </h3>
                <p className="text-sm text-gray-400 mt-2">
                  Who we are and what we do
                </p>
              </div>
            </Link>

            <Link href="/" className="group" aria-label="Return to homepage">
              <div className="p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all">
                <h3 className="font-semibold text-white group-hover:text-orange-500 transition-colors">
                  Home
                </h3>
                <p className="text-sm text-gray-400 mt-2">
                  Back to the homepage
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
