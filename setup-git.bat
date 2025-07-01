@echo off
echo Configurando Git para o projeto Eco.logico...

REM Adicionar Git ao PATH (caminho padrão de instalação)
set PATH=%PATH%;"C:\Program Files\Git\bin"

REM Verificar se Git está funcionando
git --version
if %errorlevel% neq 0 (
    echo ERRO: Git não encontrado. Reinicie o PowerShell e tente novamente.
    pause
    exit /b 1
)

REM Configurar Git (substitua pelos seus dados)
echo.
echo Configurando usuário Git...
set /p USERNAME="Digite seu nome para Git: "
set /p EMAIL="Digite seu email para Git: "

git config --global user.name "%USERNAME%"
git config --global user.email "%EMAIL%"

REM Inicializar repositório
echo.
echo Inicializando repositório Git...
git init

REM Adicionar arquivos
echo Adicionando arquivos ao repositório...
git add .

REM Primeiro commit
echo Fazendo primeiro commit...
git commit -m "Initial commit: Eco.logico landing page"

REM Configurar branch principal
git branch -M main

echo.
echo ========================================
echo Git configurado com sucesso!
echo.
echo Próximos passos:
echo 1. Crie um repositório no GitHub
echo 2. Execute: git remote add origin [URL_DO_SEU_REPO]
echo 3. Execute: git push -u origin main
echo ========================================
pause 