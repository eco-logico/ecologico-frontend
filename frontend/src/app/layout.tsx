import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Eco.lógico - Plataforma de Carbono Florestal',
  description: 'O Integrador Brasileiro de Carbono Florestal - Conectando sustentabilidade e tecnologia para um futuro mais verde',
  keywords: 'carbono florestal, sustentabilidade, meio ambiente, créditos de carbono, reflorestamento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 