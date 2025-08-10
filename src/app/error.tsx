'use client'

import { useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 to-gray-900">
      <Container>
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 mb-6">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">
            Something went wrong!
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto">
            An unexpected error occurred. We apologize for the inconvenience.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button onClick={reset}>
              Try again
            </Button>
            
            <Button variant="secondary" onClick={() => window.location.href = '/'}>
              Go home
            </Button>
          </div>
          
          {process.env.NODE_ENV === 'development' && error.message && (
            <div className="mt-8 p-4 bg-gray-900 rounded-lg text-left max-w-2xl mx-auto">
              <p className="text-sm font-mono text-gray-400">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs font-mono text-gray-500 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}