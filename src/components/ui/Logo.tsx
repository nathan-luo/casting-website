import React from 'react'
import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: 20 },
    md: { icon: 48, text: 26 },
    lg: { icon: 64, text: 36 },
  }

  const currentSize = sizes[size]

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className="relative" style={{ width: currentSize.icon, height: currentSize.icon }}>
        <Image
          src="/logo.png"
          alt="Casting Logo"
          width={currentSize.icon}
          height={currentSize.icon}
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <span
          className="font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
          style={{ fontSize: `${currentSize.text}px` }}
        >
          Casting
        </span>
      )}
    </div>
  )
}