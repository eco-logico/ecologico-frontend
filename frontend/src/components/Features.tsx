import { 
  MagnifyingGlassIcon, 
  DocumentCheckIcon, 
  ChartBarIcon, 
  LightBulbIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Source',
    title: 'Encontre as melhores oportunidades',
    description: 'IA analisa milhares de áreas para identificar projetos com maior potencial de carbono e menor risco.',
    features: [
      'Análise automatizada de elegibilidade',
      'Mapeamento de áreas degradadas',
      'Estimativa de potencial de carbono',
      'Ranking por viabilidade'
    ],
    icon: MagnifyingGlassIcon,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    name: 'Diligence',
    title: 'Due diligence em dias, não meses',
    description: 'Análise completa com IA e satélites: riscos, baseline, adicionalidade e projeções.',
    features: [
      'Análise de risco automatizada',
      'Cálculo de baseline dinâmico',
      'Verificação de adicionalidade',
      'Relatórios DMRV completos'
    ],
    icon: DocumentCheckIcon,
    color: 'bg-green-100 text-green-600',
  },
  {
    name: 'Track',
    title: 'Monitoramento em tempo real',
    description: 'Acompanhe a evolução da floresta com imagens de satélite atualizadas e alertas automáticos.',
    features: [
      'Alertas de desmatamento',
      'Medição de crescimento florestal',
      'Tracking de biodiversidade',
      'Dashboard em tempo real'
    ],
    icon: ChartBarIcon,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    name: 'Insights',
    title: 'Inteligência para maximizar impacto',
    description: 'Analytics avançado e recomendações de IA para otimizar seus projetos.',
    features: [
      'Benchmarking de projetos',
      'Previsões de mercado',
      'Recomendações de otimização',
      'Relatórios personalizados'
    ],
    icon: LightBulbIcon,
    color: 'bg-amber-100 text-amber-600',
  },
]

export default function Features() {
  return (
    <div id="solucoes" className="py-24 sm:py-32 bg-white">
      <div className="section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uma plataforma completa para toda a{' '}
            <span className="gradient-text">jornada do carbono</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quatro módulos integrados que transformam dados satelitais em insights acionáveis para seus projetos de carbono florestal
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors">
                <div className="flex items-start gap-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${feature.color}`}>
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.name}: {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-eco-primary rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 