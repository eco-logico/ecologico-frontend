# Deploy do Eco.lógico

## Opções de Deploy

### 1. Deploy via Vercel (Recomendado)

#### Método 1: Upload Manual
1. Acesse [vercel.com](https://vercel.com)
2. Faça login ou crie uma conta
3. Clique em "New Project"
4. Arraste a pasta `frontend` para o upload
5. Configure:
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

#### Método 2: Via Git (Recomendado)
1. Instale o Git no Windows
2. Inicialize o repositório:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Conecte com GitHub e faça push
4. No Vercel, importe do GitHub

### 2. Deploy via Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta `frontend` 
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### 3. Deploy via Railway
1. Acesse [railway.app](https://railway.app)
2. Conecte seu GitHub ou faça upload
3. Selecione o projeto Next.js

## Configurações Necessárias

### Variáveis de Ambiente
Se necessário, configure no painel do provedor:
```
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://seu-dominio.vercel.app
```

### Domínio Personalizado
Depois do deploy, você pode configurar um domínio personalizado como:
- `ecologico.com.br`
- `app.ecologico.com.br`

## Estrutura do Projeto
```
frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   └── styles/
├── public/
├── package.json
└── next.config.js
```

## URL do Deploy
Após o deploy, sua aplicação estará disponível em:
- Vercel: `https://ecologico-[hash].vercel.app`
- Netlify: `https://[random-name].netlify.app`

## Monitoramento
- Analytics: Vercel Analytics integrado
- Performance: Core Web Vitals automático
- Logs: Disponíveis no dashboard do provedor 