import Link from 'next/link'

const navigation = {
  solutions: [
    { name: 'Source', href: '#source' },
    { name: 'Diligence', href: '#diligence' },
    { name: 'Track', href: '#track' },
    { name: 'Insights', href: '#insights' },
  ],
  audience: [
    { name: 'Empresas', href: '#empresas' },
    { name: 'Investidores', href: '#investidores' },
    { name: 'Proprietários', href: '#proprietarios' },
    { name: 'Desenvolvedores', href: '#desenvolvedores' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Guias', href: '/guias' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'API Docs', href: '/api-docs' },
    { name: 'Calculadora CO₂', href: '/calculadora' },
  ],
  company: [
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Tecnologia', href: '/tecnologia' },
    { name: 'Parceiros', href: '/parceiros' },
    { name: 'Carreiras', href: '/carreiras' },
    { name: 'Contato', href: '/contato' },
  ],
  legal: [
    { name: 'Termos de Uso', href: '/termos' },
    { name: 'Privacidade', href: '/privacidade' },
    { name: 'Segurança', href: '/seguranca' },
    { name: 'Compliance', href: '/compliance' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
          <path
            fillRule="evenodd"
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
          <path
            fillRule="evenodd"
            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
          <path
            fillRule="evenodd"
            d="M10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.06 5.877.012 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817C6.944 19.988 7.284 20 10 20s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.817-5.817C19.988 13.057 20 12.716 20 10s-.012-3.056-.06-4.123C19.833 2.242 17.818.227 14.183.06 13.057.012 12.716 0 10 0zm0 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 4.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="section-padding py-16 sm:py-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <Link href="/" className="text-2xl font-bold text-white">
                🌳 Eco.lógico
              </Link>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Transformando o potencial florestal brasileiro em impacto real através de tecnologia satelital e inteligência artificial.
              </p>
            </div>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Soluções</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Para Quem</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.audience.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Recursos</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Empresa</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-16 border-t border-gray-800 pt-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">
                Receba insights semanais sobre o mercado de carbono
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Análises exclusivas, tendências e oportunidades no mercado brasileiro de carbono florestal.
              </p>
            </div>
            <div className="mt-6 sm:flex sm:max-w-md xl:mt-0">
              <label htmlFor="email-address" className="sr-only">
                Endereço de email
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-eco-primary sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                placeholder="Seu email"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-eco-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-eco-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eco-primary"
                >
                  Inscrever
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Legal */}
        <div className="mt-16 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.legal.map((item) => (
              <a key={item.name} href={item.href} className="text-sm leading-6 text-gray-400 hover:text-gray-300">
                {item.name}
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; 2024 Eco.lógico. Todos os direitos reservados. Tecnologia para um futuro mais verde.
          </p>
        </div>
        
        {/* Certifications */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-xs text-gray-400 mb-4">Certificações e Parcerias</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="bg-gray-800 rounded px-4 py-2 text-xs text-gray-400">VERRA</div>
            <div className="bg-gray-800 rounded px-4 py-2 text-xs text-gray-400">Gold Standard</div>
            <div className="bg-gray-800 rounded px-4 py-2 text-xs text-gray-400">NASA</div>
            <div className="bg-gray-800 rounded px-4 py-2 text-xs text-gray-400">ESA</div>
            <div className="bg-gray-800 rounded px-4 py-2 text-xs text-gray-400">INPE</div>
            <div className="bg-gray-800 rounded px-4 py-2 text-xs text-gray-400">ISO 27001</div>
          </div>
        </div>
      </div>
    </footer>
  )
}