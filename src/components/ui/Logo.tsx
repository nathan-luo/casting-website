import React from 'react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizes = {
    sm: { icon: 24, text: 20 },
    md: { icon: 40, text: 26 },
    lg: { icon: 60, text: 36 },
  }

  const currentSize = sizes[size]

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#ea580c', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#dc2626', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d="M20 10C20 10 25 15 25 20C25 25 22 30 17 30C12 30 9 25 9 20C9 15 14 10 14 10L17 7L20 10Z"
          fill="url(#logoGradient)"
        />
        <circle cx="17" cy="20" r="3" fill="white" opacity="0.9" />
      </svg>
      {showText && (
        <span
          className="font-semibold text-white"
          style={{ fontSize: `${currentSize.text}px` }}
        >
          casting
        </span>
      )}
    </div>
  )
}