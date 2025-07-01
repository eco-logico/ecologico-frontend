/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [],
    unoptimized: true // Para compatibility com static exports se necessário
  },
  // Otimizações para produção
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Configurações para deploy
  output: 'standalone', // Para melhor performance
  trailingSlash: false,
}

module.exports = nextConfig 