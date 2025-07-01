'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const solutionsMenu = [
  { name: 'Source', href: '#source', description: 'Descobrir projetos' },
  { name: 'Diligence', href: '#diligence', description: 'Analisar riscos' },
  { name: 'Track', href: '#track', description: 'Monitorar em tempo real' },
  { name: 'Insights', href: '#insights', description: 'Otimizar resultados' },
]

const audienceMenu = [
  { name: 'Empresas', href: '#empresas' },
  { name: 'Investidores', href: '#investidores' },
  { name: 'Proprietários de Terra', href: '#proprietarios' },
  { name: 'Desenvolvedores de Projetos', href: '#desenvolvedores' },
]

const navigation = [
  { name: 'Soluções', href: '#', hasSubmenu: true, submenu: solutionsMenu },
  { name: 'Para Quem', href: '#', hasSubmenu: true, submenu: audienceMenu },
  { name: 'Tecnologia', href: '#tecnologia' },
  { name: 'Sobre Nós', href: '#sobre' },
  { name: 'Blog', href: '/blog' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="section-padding py-4" aria-label="Global">
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold gradient-text">🌳 Eco.lógico</span>
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menu principal</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-eco-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900 hover:text-eco-primary">
              Entrar
            </Link>
            <Link href="/demo" className="btn-primary text-sm">
              Solicitar Demo
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold gradient-text">🌳 Eco.lógico</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              
              <div className="py-6">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Entrar
                </Link>
                <Link
                  href="/demo"
                  className="mt-2 block btn-primary text-center"
                >
                  Solicitar Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 