'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gray-50 pt-20">
      {/* Background with curved white container */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-white rounded-t-[100px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                O{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-green-500 px-6 py-2">
                    MUNDO
                  </span>
                  <span className="absolute inset-0 border-2 border-green-500 rounded-full"></span>
                </span>{' '}
                FOI FEITO
              </h1>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                PARA SER EXPLORADO
              </h1>
            </div>

            {/* Circular image thumbnails */}
            <div className="flex items-center gap-4 pt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white shadow-md"></div>
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                +1000 projetos sustentáveis
              </p>
            </div>
          </div>

          {/* Right Content - Background Image with Cards */}
          <div className="relative h-[600px] lg:h-[700px]">
            {/* Main background image - green hills */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-green-400 to-green-600">
              {/* Placeholder for hills background */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-700/50 to-transparent"></div>
              
              {/* Hiker silhouette */}
              <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
                <div className="w-32 h-40 relative">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-red-600 rounded-t-full"></div>
                  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full"></div>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 -rotate-45 w-12 h-1 bg-red-600 origin-left"></div>
                </div>
              </div>
            </div>

            {/* Floating card with house */}
            <div className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-xl w-48">
              <div className="h-32 bg-gradient-to-br from-green-300 to-green-500 rounded-xl mb-3 relative overflow-hidden">
                {/* Simple house icon */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-10 bg-white"></div>
                  <div className="w-16 h-0 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-b-[24px] border-b-red-500 absolute -top-6 left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full transition-colors">
                Mais
              </button>
            </div>

            {/* Bottom floating elements */}
            <div className="absolute bottom-8 left-8 flex gap-4">
              <div className="bg-white rounded-full p-3 shadow-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="bg-white rounded-full p-3 shadow-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            {/* Decorative curved element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-100 rounded-full opacity-50"></div>
          </div>
        </div>

        {/* Bottom info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 relative z-10">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultoria Especializada</h3>
            <p className="text-gray-600 text-sm">Orientação completa para projetos de carbono florestal</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Certificação Garantida</h3>
            <p className="text-gray-600 text-sm">Processos verificados pelos principais padrões internacionais</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Impacto Imediato</h3>
            <p className="text-gray-600 text-sm">Comece a gerar créditos de carbono rapidamente</p>
          </div>
        </div>
      </div>
    </div>
  )
} 