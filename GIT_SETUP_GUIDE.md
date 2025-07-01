# 🚀 Guia Completo: Git + GitHub + Deploy Automático

## Passo 1: Configurar Git (JÁ INSTALADO ✅)

### Opção A: Reiniciar PowerShell
1. **Feche** o PowerShell atual
2. **Abra novamente** como Administrador
3. Navegue até o projeto: `cd "C:\Users\monte\OneDrive\Code\Reforest"`
4. Teste: `git --version`

### Opção B: Usar Script Automático
1. Execute o arquivo `setup-git.bat` (duplo clique)
2. Siga as instruções na tela

## Passo 2: Configurar Git Manualmente (se necessário)

```bash
# Configurar seu nome e email
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@gmail.com"

# Inicializar repositório
git init

# Adicionar todos os arquivos
git add .

# Fazer primeiro commit
git commit -m "Initial commit: Eco.logico landing page"

# Configurar branch principal
git branch -M main
```

## Passo 3: Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em **"New repository"**
3. Configure:
   - **Repository name**: `ecologico-frontend`
   - **Description**: `Eco.lógico - Plataforma de Carbono Florestal`
   - ✅ **Public** (para deploy gratuito)
   - ❌ **NÃO** marque "Add README" (já temos arquivos)

4. Clique **"Create repository"**

## Passo 4: Conectar Local com GitHub

```bash
# Adicionar repositório remoto (substitua USERNAME pelo seu)
git remote add origin https://github.com/USERNAME/ecologico-frontend.git

# Enviar código para GitHub
git push -u origin main
```

## Passo 5: Deploy Automático via Vercel

### Método 1: Integração GitHub
1. Acesse [vercel.com](https://vercel.com)
2. **"Login with GitHub"**
3. **"Import Project"**
4. Selecione `ecologico-frontend`
5. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
6. **Deploy!** 🚀

### Método 2: Vercel CLI (Alternativo)
```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd frontend
vercel

# Deploy para produção
vercel --prod
```

## Passo 6: Configurar Deploy Automático

✅ **Automático!** Agora sempre que você fizer:
```bash
git add .
git commit -m "Nova feature"
git push
```

➡️ **Deploy automático** acontece em ~2 minutos!

## Passo 7: Domínio Personalizado (Opcional)

1. No dashboard Vercel → **"Domains"**
2. Adicione: `ecologico.com.br`
3. Configure DNS conforme instruções

## URLs do Projeto

- **Código**: `https://github.com/USERNAME/ecologico-frontend`
- **Preview**: `https://ecologico-frontend.vercel.app`
- **Produção**: `https://ecologico-frontend-git-main.vercel.app`

## Comandos Úteis para o Futuro

```bash
# Verificar status
git status

# Ver diferenças
git diff

# Adicionar arquivos específicos
git add frontend/src/components/NovoComponent.tsx

# Commit com mensagem
git commit -m "Adiciona novo componente"

# Enviar para GitHub
git push

# Ver histórico
git log --oneline

# Criar nova branch para feature
git checkout -b feature/nova-funcionalidade
```

## Solução de Problemas

### Git não reconhecido
- Reinicie PowerShell como Admin
- Ou use: `"C:\Program Files\Git\bin\git.exe" --version`

### Erro de autenticação GitHub
- Configure Personal Access Token
- Ou use GitHub Desktop

### Build falha no Vercel
- Verifique `package.json` no frontend
- Confirme que todos os imports estão corretos

---

## 🎉 Resultado Final

Após concluir, você terá:
- ✅ Código versionado no GitHub
- ✅ Deploy automático configurado
- ✅ URL pública funcionando
- ✅ Atualizações automáticas a cada push

**Pronto para colocar o Eco.lógico online!** 🌳🚀 