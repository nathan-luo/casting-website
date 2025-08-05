import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'error'
  pulse?: boolean
  className?: string
}

export function Badge({ children, variant = 'default', pulse = false, className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
    success: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    error: 'bg-red-500/10 border-red-500/20 text-red-400',
  }

  return (
    <span className={`inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium border rounded-full ${variants[variant]} ${className}`}>
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-current"></span>
        </span>
      )}
      {children}
    </span>
  )
}