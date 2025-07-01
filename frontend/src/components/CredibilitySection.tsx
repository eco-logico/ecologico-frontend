'use client'

import { useState, useEffect } from 'react'

const metrics = [
  {
    value: 2.5,
    unit: 'Milhões',
    label: 'Hectares monitorados',
    suffix: 'M ha'
  },
  {
    value: 850,
    unit: 'Mil',
    label: 'Toneladas de CO₂ certificadas',
    suffix: 'K tCO₂'
  },
  {
    value: 127,
    unit: '',
    label: 'Projetos ativos',
    suffix: ''
  },
  {
    value: 99.2,
    unit: '',
    label: 'Precisão satelital',
    suffix: '%'
  }
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const increment = value / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span className="text-3xl font-bold text-eco-primary">
      {Math.floor(count).toLocaleString('pt-BR')}{suffix}
    </span>
  )
}

export default function CredibilitySection() {
  return (
    <div className="py-16 sm:py-20 bg-gray-50">
      <div className="section-padding">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            O Brasil tem o maior potencial de carbono florestal do mundo
          </h2>
          <p className="text-gray-600">
            Empresas que confiam no Eco.lógico para transformar esse potencial em impacto real
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="mb-2">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-sm text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Company logos placeholder */}
        <div className="border-t border-gray-200 pt-12">
          <p className="text-center text-sm text-gray-500 mb-8">
            Parceiros e clientes que confiam em nossa tecnologia
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-200 rounded-lg px-8 py-4 text-gray-400 font-semibold">
              Empresa A
            </div>
            <div className="bg-gray-200 rounded-lg px-8 py-4 text-gray-400 font-semibold">
              Empresa B
            </div>
            <div className="bg-gray-200 rounded-lg px-8 py-4 text-gray-400 font-semibold">
              Empresa C
            </div>
            <div className="bg-gray-200 rounded-lg px-8 py-4 text-gray-400 font-semibold">
              Empresa D
            </div>
            <div className="bg-gray-200 rounded-lg px-8 py-4 text-gray-400 font-semibold">
              Empresa E
            </div>
            <div className="bg-gray-200 rounded-lg px-8 py-4 text-gray-400 font-semibold">
              Empresa F
            </div>
          </div>
        </div>

        {/* Problem/Opportunity section */}
        <div className="mt-20 bg-white rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Desafios do mercado atual
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">Falta de transparência e padronização</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">Processos manuais e demorados</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">Dificuldade de verificação e monitoramento</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">Barreiras técnicas e linguísticas</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nossa solução
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">60% da Amazônia em território brasileiro</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">Tecnologia 100% brasileira e certificada</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">Suporte em português 24/7</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">Plataforma integrada e transparente</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="#solucoes"
              className="inline-flex items-center text-eco-primary font-semibold hover:text-eco-secondary transition-colors"
            >
              Veja como o Eco.lógico resolve esses desafios
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}