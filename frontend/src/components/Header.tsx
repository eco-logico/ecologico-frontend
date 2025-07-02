'use client'

import { useState } from 'react'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/', active: true },
  { name: 'Sobre Nós', href: '#sobre' },
  { name: 'Soluções', href: '#solucoes' },
  { name: 'Contato', href: '#contato' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white z-50 py-6">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              ECO.LÓGICO
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-x-2 bg-gray-100 rounded-full p-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200
                  ${item.active 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
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
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-green-700 transition-colors duration-200"
            >
              Fale Conosco
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Abrir menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    block px-4 py-3 rounded-lg text-base font-medium
                    ${item.active 
                      ? 'bg-gray-900 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/demo"
                className="block w-full bg-green-600 text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-green-700 transition-colors duration-200 mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 