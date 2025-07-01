# 🌳 Eco.lógico

Plataforma integrada para sourcing, due diligence, monitoramento e insights de projetos de remoção de carbono baseados na natureza (reflorestamento).

[![License](https://img.shields.io/badge/license-Proprietary-red.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![Python](https://img.shields.io/badge/python-%3E%3D3.11.0-blue.svg)](https://python.org/)
[![Docker](https://img.shields.io/badge/docker-compose-blue.svg)](https://docs.docker.com/compose/)

## 📋 Índice

- [Tecnologias](#-tecnologias)
- [Arquitetura](#-arquitetura)
- [Módulos da Plataforma](#-módulos-da-plataforma)
- [Instalação e Configuração](#-instalação-e-configuração)
- [Desenvolvimento](#-desenvolvimento)
- [Testes](#-testes)
- [API Documentation](#-api-documentation)
- [Casos de Uso](#-casos-de-uso)
- [Segurança](#-segurança)
- [Monitoramento](#-monitoramento)
- [Troubleshooting](#-troubleshooting)
- [Contribuindo](#-contribuindo)

## 🚀 Tecnologias

### Stack Principal
- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Backend**: NestJS + TypeScript
- **AI Service**: Python + FastAPI + TensorFlow/PyTorch
- **Banco de Dados**: PostgreSQL com PostGIS
- **Cache**: Redis
- **Infraestrutura**: Docker + Docker Compose

### Integrações de Satélite
- Mapbox
- Planet Labs
- Sentinel Hub

## 🏗️ Arquitetura

A plataforma é construída com uma arquitetura de microserviços para garantir escalabilidade e manutenibilidade:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   AI Service    │
│   (Next.js)     │◄──►│   (NestJS)      │◄──►│   (FastAPI)     │
│   Port: 3000    │    │   Port: 3001    │    │   Port: 8000    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 ▼
                    ┌─────────────────────────────────┐
                    │        Infraestrutura          │
                    │  ┌─────────────┐ ┌───────────┐  │
                    │  │ PostgreSQL  │ │   Redis   │  │
                    │  │  + PostGIS  │ │  (Cache)  │  │
                    │  └─────────────┘ └───────────┘  │
                    └─────────────────────────────────┘
```

### Serviços Externos
- **Satellite APIs**: Google Earth Engine, Planet Labs, Sentinel Hub
- **Authentication**: JWT-based authentication
- **Monitoring**: Logs centralizados e métricas de performance

## 📦 Módulos da Plataforma

### 1. Source
- **Coleta uniforme de dados**: Consolida informações de centenas de áreas e projetos
- **Screening automatizado**: Filtra as iniciativas mais promissoras automaticamente

### 2. Diligence
- **DMRV Insights**: Relatórios detalhados sobre carbono sequestrado
- **Análise de riscos**: Avaliação de riscos (incêndios, mudanças de uso do solo, adicionalidade)
- **Baseline dinâmico**: Cálculos de linha de base atualizados

### 3. Track
- **Monitoramento em tempo real**: Acompanha cobertura florestal usando imagens de satélite
- **Alertas automáticos**: Notificações sobre mudanças detectadas
- **Rastreamento de fundos**: Monitora alocação de recursos ao longo do tempo
- **Modulo Lavoura-Floresta**: Monitora propriedades rurais com sistema agroflorestal e/ou LAF

### 4. Insights
- **Análises avançadas**: Dados científicos e visualizações personalizadas
- **Benchmarks**: Comparação entre projetos
- **Relatórios sob demanda**: Geração de análises ad hoc

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Docker e Docker Compose
- Node.js 18+ (para desenvolvimento local)
- Python 3.11+ (para desenvolvimento local)

### Configuração do Ambiente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/ecologico.git
cd ecologico
```

2. Copie o arquivo de ambiente:
```bash
cp env.example .env
```

3. Configure as variáveis de ambiente no arquivo `.env`:
- Chaves de API dos serviços de satélite
- Credenciais do banco de dados
- Configurações de autenticação

### Executando com Docker

```bash
# Construir e iniciar todos os serviços
docker-compose up -d

# Verificar logs
docker-compose logs -f

# Parar todos os serviços
docker-compose down
```

A aplicação estará disponível em:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- AI Service: http://localhost:8000
- Documentação API: http://localhost:3001/api/docs

## 👨‍💻 Desenvolvimento

### Configuração Local

Para desenvolvimento local sem Docker, configure cada serviço separadamente:

#### Frontend (Next.js)
```bash
# Navegue para o diretório do frontend
cd frontend

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Servidor disponível em http://localhost:3000
```

#### Backend (NestJS)
```bash
# Navegue para o diretório do backend
cd backend

# Instale as dependências
npm install

# Configure o banco de dados
npm run db:migrate

# Inicie o servidor de desenvolvimento
npm run start:dev

# API disponível em http://localhost:3001
```

#### AI Service (Python)
```bash
# Navegue para o diretório do AI service
cd ai-service

# Crie um ambiente virtual
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou
venv\Scripts\activate  # Windows

# Instale as dependências
pip install -r requirements.txt

# Inicie o servidor
uvicorn app.main:app --reload --port 8000

# API disponível em http://localhost:8000
```

### Variáveis de Ambiente

Copie o arquivo de exemplo e configure as variáveis necessárias:

```bash
# Arquivo .env.example para .env
cp .env.example .env
```

**Variáveis obrigatórias:**
- `DATABASE_URL`: URL de conexão PostgreSQL
- `REDIS_URL`: URL de conexão Redis
- `JWT_SECRET`: Chave secreta para JWT
- `GOOGLE_EARTH_ENGINE_KEY`: Chave da API Google Earth Engine
- `PLANET_LABS_API_KEY`: Chave da API Planet Labs
- `SENTINEL_HUB_CLIENT_ID`: ID do cliente Sentinel Hub
- `SENTINEL_HUB_CLIENT_SECRET`: Segredo do cliente Sentinel Hub

## 🧪 Testes

### Executando Testes

#### Frontend
```bash
cd frontend
npm run test          # Testes unitários
npm run test:e2e      # Testes end-to-end
npm run test:coverage # Cobertura de testes
```

#### Backend
```bash
cd backend
npm run test          # Testes unitários
npm run test:e2e      # Testes end-to-end
npm run test:cov      # Cobertura de testes
```

#### AI Service
```bash
cd ai-service
pytest                # Testes unitários
pytest --cov         # Cobertura de testes
```

### Qualidade de Código

#### Frontend & Backend
```bash
# ESLint
npm run lint
npm run lint:fix

# Prettier
npm run format

# TypeScript
npm run type-check
```

#### AI Service
```bash
# Black (formatação)
black .

# Flake8 (linting)
flake8 .

# MyPy (type checking)
mypy .
```

## 📚 API Documentation

### Documentação Interativa

Acesse a documentação interativa das APIs:

- **Backend API**: http://localhost:3001/api/docs (Swagger)
- **AI Service**: http://localhost:8000/docs (FastAPI docs)

### Endpoints Principais

#### Backend API
```
GET    /api/projects           # Lista todos os projetos
POST   /api/projects           # Cria um novo projeto
GET    /api/projects/:id       # Obtém detalhes de um projeto
PUT    /api/projects/:id       # Atualiza um projeto
DELETE /api/projects/:id       # Remove um projeto

GET    /api/monitoring/:id     # Dados de monitoramento
POST   /api/analysis           # Inicia análise de due diligence
GET    /api/reports/:id        # Relatórios gerados
```

#### AI Service
```
POST   /predict/forest-cover  # Predição de cobertura florestal
POST   /analyze/risk          # Análise de risco
POST   /calculate/carbon      # Cálculo de carbono sequestrado
GET    /models/status         # Status dos modelos de ML
```

### Autenticação

Todas as APIs requerem autenticação via JWT. Inclua o token no header:

```bash
Authorization: Bearer <your-jwt-token>
```

## 📱 Casos de Uso

### Empresas
- Buscar créditos de carbono de alta qualidade
- Cumprir metas ESG
- Monitorar projetos investidos

### Investidores
- Reduzir riscos com análises detalhadas
- Diversificar portfólios com soluções baseadas na natureza
- Acompanhar performance em tempo real

### Desenvolvedores de Projetos
- Atrair capital com transparência
- Acelerar processos de due diligence
- Demonstrar impacto com dados científicos

## 🔐 Segurança

- Autenticação JWT
- Criptografia de dados sensíveis
- Rate limiting nas APIs
- Validação de entrada em todos os endpoints

## 📊 Monitoramento

- Logs centralizados
- Métricas de performance
- Alertas de sistema
- Backup automático de dados

### Configuração de Monitoramento

#### Logs
```bash
# Visualizar logs em tempo real
docker-compose logs -f

# Logs específicos por serviço
docker-compose logs -f frontend
docker-compose logs -f backend
docker-compose logs -f ai-service
```

#### Métricas
As métricas são coletadas automaticamente e podem ser visualizadas em:
- **Health Check**: http://localhost:3001/health
- **AI Service Status**: http://localhost:8000/health
- **Database Status**: Verificado automaticamente pelos health checks

## 🛠️ Troubleshooting

### Problemas Comuns

#### Docker não inicia
```bash
# Verifique se o Docker está rodando
docker --version
docker-compose --version

# Limpe containers e volumes antigos
docker-compose down -v
docker system prune -f
```

#### Erro de conexão com banco de dados
```bash
# Verifique se o PostgreSQL está rodando
docker-compose ps

# Resetar o banco de dados
docker-compose down -v
docker-compose up -d postgres
docker-compose exec backend npm run db:migrate
```

#### Problemas com APIs de satélite
1. Verifique se as chaves de API estão configuradas no `.env`
2. Confirme se as chaves não expiraram
3. Verifique os logs para erros de rate limiting

#### Frontend não carrega
```bash
# Limpe o cache do Next.js
cd frontend
rm -rf .next
npm run build
npm run dev
```

#### AI Service com erro de dependências
```bash
# Reconstrua o container do AI service
docker-compose build ai-service
docker-compose up -d ai-service
```

### FAQ

**Q: Como resetar todos os dados?**
```bash
docker-compose down -v
docker-compose up -d
```

**Q: Como fazer backup do banco de dados?**
```bash
docker-compose exec postgres pg_dump -U postgres ecologico > backup.sql
```

**Q: Como restaurar backup do banco?**
```bash
docker-compose exec -T postgres psql -U postgres ecologico < backup.sql
```

**Q: Como configurar HTTPS em produção?**
Configure um reverse proxy (Nginx/Traefik) com certificados SSL/TLS.

**Q: Como escalar os serviços?**
```bash
docker-compose up -d --scale backend=3 --scale ai-service=2
```

## 🤝 Contribuindo

### Fluxo de Contribuição

1. **Fork** o repositório
2. **Clone** seu fork localmente
3. **Crie** uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
4. **Faça** suas mudanças seguindo as convenções de código
5. **Execute** os testes e linting
6. **Commit** suas mudanças (`git commit -m 'feat: adiciona nova funcionalidade'`)
7. **Push** para sua branch (`git push origin feature/nova-funcionalidade`)
8. **Abra** um Pull Request

### Convenções de Código

#### Commits
Seguimos a convenção [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: nova funcionalidade
fix: correção de bug
docs: documentação
style: formatação
refactor: refatoração
test: testes
chore: manutenção
```

#### Código
- **TypeScript/JavaScript**: ESLint + Prettier
- **Python**: Black + Flake8 + MyPy
- **Commits**: Conventional Commits
- **Branches**: `feature/`, `fix/`, `docs/`

### Pull Request Template

Ao abrir um PR, inclua:

- [ ] Descrição das mudanças
- [ ] Testes adicionados/atualizados
- [ ] Documentação atualizada
- [ ] Linting passou
- [ ] Testes passaram

Para mais detalhes, leia nosso guia de contribuição completo.

## 📝 Licença

Este projeto está sob licença proprietária. Todos os direitos reservados.

---

**Eco.lógico** - Tecnologia para um futuro mais verde 🌱 