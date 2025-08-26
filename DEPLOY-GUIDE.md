# 🚀 Manual da Nutri - Guia de Deploy

## ✅ Status Atual do Projeto
- **UTMfy Pixel**: ✅ Configurado e funcionando
- **SEO**: ✅ Meta tags, Open Graph, Schema.org
- **Performance**: ✅ CSS crítico, preload de recursos
- **PWA**: ✅ Manifest e ícones SVG
- **Cross-domain**: ✅ Suporte para iframe tracking

## 📋 Checklist de Deploy

### 1. Arquivos Otimizados Criados
- ✅ `deploy-ready.html` - HTML limpo para produção
- ✅ `client/public/manifest.json` - PWA manifest
- ✅ Pixel UTMfy otimizado (sem logs de debug)

### 2. UTMfy Pixel Configuration
```javascript
// Pixel ID configurado: 68a94d581eb2a94462b2e9d5
// Features ativadas:
- ✅ Auto pageview tracking
- ✅ Cross-domain support
- ✅ Iframe compatibility
- ✅ Manual tracking fallbacks
```

### 3. Performance Optimizations
- ✅ CSS crítico inlined
- ✅ DNS prefetch para recursos externos
- ✅ Preload de imagens críticas
- ✅ Fonts otimizadas (Google Fonts)
- ✅ Compressão de SVG icons

### 4. SEO & Social Media
- ✅ Meta description otimizada
- ✅ Open Graph tags configuradas
- ✅ Twitter Cards configuradas
- ✅ Schema.org structured data
- ✅ PWA manifest com ícones

### 5. Security & Headers
- ✅ Content Security Policy configurada
- ✅ X-UA-Compatible header
- ✅ Theme color para mobile browsers

## 🎯 Próximos Passos para Deploy

### No Replit:
1. Clique no botão **"Deploy"** no painel
2. Configure domínio personalizado (se necessário)
3. Monitore logs de deployment

### Verificações Pós-Deploy:
1. **Teste UTMfy**: Verifique no dashboard se pageviews aparecem
2. **Teste performance**: Google PageSpeed Insights
3. **Teste mobile**: Responsividade e PWA
4. **Teste conversão**: Botão de compra → Yampi

## 🔧 Configurações de Produção

### Environment Variables (se necessário):
```bash
NODE_ENV=production
PORT=5000
```

### Domain Configuration:
- Domínio atual: `manual-da-nutri.replit.app`
- Yampi checkout: `nucleosaudavel.pay.yampi.com.br`
- UTMfy tracking: Configurado para qualquer domínio

## 📊 Monitoramento

### UTMfy Dashboard:
- PageViews devem aparecer em tempo real
- Verifique conversions após deploy
- Monitor cross-domain tracking

### Analytics:
- Google Analytics (placeholder configurado)
- Meta Pixel (fallback configurado)
- UTMfy como tracking primário

## 🐛 Troubleshooting

### Se UTMfy não funcionar:
1. Verifique se `pixelId` está correto
2. Confirme no Network tab se scripts carregam
3. Verifique CSP permite `cdn.utmify.com.br`

### Se conversões não aparecerem:
1. Teste manualmente o checkout
2. Verifique se Yampi está ativo
3. Confirme tracking de eventos customizados

---

**Status**: ✅ PRONTO PARA DEPLOY
**Última atualização**: 26 de Janeiro, 2025