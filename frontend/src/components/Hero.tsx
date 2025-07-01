'use client'

import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-eco-light/20">
      <div className="section-padding pt-32 pb-16 sm:pt-40 lg:pt-48">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="animate-fade-in text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transforme o potencial florestal brasileiro em{' '}
            <span className="gradient-text">impacto real</span>
          </h1>
          
          <p className="animate-slide-up mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
            Plataforma integrada de tecnologia satelital e IA para sourcing, análise, 
            monitoramento e certificação de projetos de carbono florestal no Brasil.
          </p>
          
          <div className="animate-slide-up mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/demo"
              className="btn-primary inline-flex items-center gap-2"
            >
              Agendar Demo Gratuita
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link 
              href="#solucoes" 
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-eco-primary"
            >
              Explorar a Plataforma <span aria-hidden="true">→</span>
            </Link>
          </div>
          
          <div className="mt-16 animate-fade-in">
            <div className="flex justify-center items-center gap-8 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                100% Brasileiro
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
                Tecnologia NASA/ESA
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full"></span>
                Certificado VERRA
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-eco-light to-eco-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
} 