# 🚀 Manual da Nutri - Deploy no Vercel

## ✅ Status: 100% PRONTO PARA DEPLOY

Este projeto está completamente configurado e otimizado para deploy no Vercel.

## 📋 Configurações Incluídas

### ✅ Arquivos de Configuração
- `vercel.json` - Configuração completa do Vercel
- `.vercelignore` - Otimização do build excluindo arquivos desnecessários
- `package.json` - Scripts otimizados para Vercel

### ✅ Otimizações de Performance
- **Build otimizado**: Vite com minificação e tree-shaking
- **Cache headers**: Assets com cache de 1 ano
- **Compressão**: Gzip automático no Vercel
- **PWA**: Manifest e service worker prontos

### ✅ SEO & Analytics
- **UTMfy Pixel**: ID `68a94d581eb2a94462b2e9d5` configurado
- **Meta tags**: Open Graph, Twitter Cards, Schema.org
- **Sitemap**: `/sitemap.xml` configurado
- **Robots.txt**: Otimizado para SEO

## 🚀 Como Fazer Deploy

### Método 1: Deploy Direto (Recomendado)
1. Acesse [vercel.com](https://vercel.com)
2. Conecte sua conta GitHub/GitLab
3. Importe este repositório
4. O Vercel detectará automaticamente as configurações
5. Clique em "Deploy"

### Método 2: Vercel CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel --prod
```

## ⚙️ Configurações Automáticas

O Vercel irá automaticamente:
- ✅ Executar `npm install`
- ✅ Executar `npm run build`
- ✅ Servir arquivos da pasta `dist/public`
- ✅ Aplicar headers de cache e segurança
- ✅ Configurar redirects para SPA

## 🔧 Variáveis de Ambiente

Nenhuma variável de ambiente é necessária para este projeto.

## 📊 Pós-Deploy - Verificações

### 1. Performance
- Teste no [PageSpeed Insights](https://pagespeed.web.dev/)
- Verifique Core Web Vitals

### 2. UTMfy Analytics
- Acesse o dashboard UTMfy
- Confirme que pageviews estão sendo registrados

### 3. PWA
- Teste instalação no mobile
- Verifique manifest.json

### 4. SEO
- Teste compartilhamento social
- Verifique meta tags no código fonte

## 🎯 URLs Importantes Pós-Deploy

- **Landing Page**: `https://seu-dominio.vercel.app/`
- **Manifest PWA**: `https://seu-dominio.vercel.app/manifest.json`
- **Sitemap**: `https://seu-dominio.vercel.app/sitemap.xml`
- **Robots**: `https://seu-dominio.vercel.app/robots.txt`

## 🔄 Atualizações Futuras

Para atualizações:
1. Faça push para o repositório
2. Vercel fará deploy automático
3. Verifique preview antes de promover para produção

## 📈 Métricas Esperadas

- **Performance Score**: 95+ no PageSpeed
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

---

**✅ PROJETO 100% PRONTO PARA VERCEL**

*Todas as otimizações, configurações e integrações estão funcionais.*