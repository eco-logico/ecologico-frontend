'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">
                O{' '}
                <span className="relative">
                  <span className="bg-gray-100 text-green-500 px-4 py-1 rounded-full">
                    FUTURO
                  </span>
                </span>{' '}
                FOI FEITO
              </h1>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">
                PARA SER SUSTENTÁVEL
              </h1>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative">
            {/* Main large image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl h-80 lg:h-96 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Forest overlay pattern */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-800/60 to-transparent"></div>
              </div>

              {/* Arrow indicator */}
              <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Secondary smaller image */}
            <div className="absolute bottom-0 right-0 w-64 h-48 transform translate-x-4 translate-y-4">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl h-full overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white px-6 py-2 rounded-full">
                    <span className="text-black font-medium text-sm">Mais</span>
                  </div>
                </div>
                {/* Solar panels pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="grid grid-cols-4 gap-1 h-full p-4">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="bg-blue-900/40 rounded-sm"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom right arrow */}
              <div className="absolute bottom-4 right-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 