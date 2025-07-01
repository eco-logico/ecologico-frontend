import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import CredibilitySection from '@/components/CredibilitySection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CredibilitySection />
      <Features />
      <Footer />
    </main>
  )
}