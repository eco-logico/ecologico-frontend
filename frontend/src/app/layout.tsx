import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eco.lógico - Plataforma de Remoção de Carbono',
  description: 'Plataforma integrada para sourcing, due diligence, monitoramento e insights de projetos de remoção de carbono baseados na natureza',
  keywords: 'carbono, reflorestamento, ESG, sustentabilidade, monitoramento satelital',
  authors: [{ name: 'Eco.lógico' }],
  openGraph: {
    title: 'Eco.lógico - Tecnologia para um futuro mais verde',
    description: 'Transforme investimentos em impacto real com nossa plataforma de remoção de carbono',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ecologico.app',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Eco.lógico - Plataforma de Remoção de Carbono'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eco.lógico - Plataforma de Remoção de Carbono',
    description: 'Transforme investimentos em impacto real',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true
  },
  viewport: {
    width: 'device-width',
    initialScale: 1
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 