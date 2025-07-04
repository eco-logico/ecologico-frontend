'use client'

import { useState } from 'react'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/', active: true },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white z-50 py-5">
      <nav className="max-w-7xl mx-auto px-8" aria-label="Global">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-black tracking-tight">
              ECO.LÓGICO
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-x-1 bg-gray-50 rounded-full px-2 py-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out
                  ${item.active 
                    ? 'bg-black text-white shadow-sm' 
                    : 'text-green-500 hover:text-green-600 hover:bg-green-50'
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link 
              href="/demo" 
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
            >
              Let's Talk
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Abrir menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="space-y-2 bg-gray-50 rounded-2xl p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200
                    ${item.active 
                      ? 'bg-black text-white' 
                      : 'text-green-500 hover:bg-green-50 hover:text-green-600'
                    }
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/demo"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-medium text-center transition-all duration-200 shadow-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 