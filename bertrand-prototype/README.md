# Bertrand Prototype - Apresentação Académica

Protótipo multi-página da Livraria Bertrand para apresentação académica sobre "Atendimento Não Presencial ao Cliente" e "Utilização dos Canais Online como Estratégia de Marketing".

## 🎯 Objetivo da Apresentação

Este protótipo demonstra os canais digitais de atendimento ao cliente da Bertrand, incluindo:
- E-commerce e levantamento em livraria (omnichannel)
- Sistema de notificações (Email + SMS)
- Acompanhamento de encomendas em tempo real
- Centro de apoio multicanal (WhatsApp, Chat, Telefone, Email)
- FAQ auto-serviço
- Área de cliente com programa de fidelização
- Backoffice CRM para gestão de casos

## 📁 Estrutura do Projeto

```
bertrand-prototype/
├── index.html              # Homepage com banner de levantamento
├── produto.html            # Página de produto
├── carrinho.html           # Cesto + checkout com seleção de levantamento
├── confirmacao.html        # Confirmação da encomenda
├── email-confirmacao.html  # Simulação email de confirmação
├── sms-confirmacao.html    # Simulação SMS de confirmação
├── acompanhar.html         # Acompanhamento de encomenda (timeline interativo)
├── email-pronta.html       # Simulação email "Pronta para levantamento"
├── sms-pronta.html         # Simulação SMS "Pronta para levantamento"
├── apoio.html              # Página "Fale com o seu Livreiro"
├── ajuda.html              # FAQ (accordion)
├── conta.html              # Área de cliente + Clube Leitores
├── backoffice.html         # Backoffice CRM (visão interna)
├── assets/
│   ├── css/
│   │   └── styles.css      # Design system completo
│   └── js/
│       └── app.js          # Estado global, funcionalidades
└── README.md               # Este ficheiro
```

## 🚀 Como Utilizar

### Opção 1: Abrir diretamente no navegador
1. Abra o ficheiro `index.html` no seu navegador
2. Navegue utilizando os links normais ou o menu de apresentação

### Opção 2: GitHub Pages
1. Faça upload deste protótipo para um repositório GitHub
2. Ative GitHub Pages nas definições do repositório
3. Aceda através da URL fornecida

### Opção 3: Servidor local (recomendado para apresentações)
```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (npx)
npx serve

# Depois aceda a: http://localhost:8000
```

## 🎮 Fluxo de Apresentação Sugerido

### Parte 1: Jornada de Compra Omnichannel
1. **index.html** - Apresentar o banner de "Levantamento em Livraria" (GRÁTIS)
2. **produto.html** - Mostrar disponibilidade de levantamento
3. **carrinho.html** - Destacar a opção de levantamento vs entrega domicílio
4. **confirmacao.html** - Sucesso + timeline de estados

**Pontos-chave:**
- O levantamento em livraria é um diferencial competitivo (grátis vs portes pagos)
- O cliente escolhe a livraria conveniente
- Timeline clara do estado da encomenda

### Parte 2: Canais de Notificação
5. **email-confirmacao.html** - Email detalhado de confirmação
6. **sms-confirmacao.html** - SMS conciso com nº encomenda

**Pontos-chave:**
- Email: detalhes completos, comprovativo, link para tracking
- SMS: imediato, alta taxa de leitura (98%), informação essencial
- Estratégia multicanal: ambos complementam

### Parte 3: Acompanhamento e Notificação de Prontidão
7. **acompanhar.html** - Clicar em "Simular: Encomenda Pronta"
8. **email-pronta.html** - Notificação de disponibilidade
9. **sms-pronta.html** - SMS urgente "Já pode levantar!"

**Pontos-chave:**
- O cliente não precisa de verificar - é notificado proativamente
- Instruções claras: local, horário, como levantar
- Reduz ligações de "já está pronto?"

### Parte 4: Canais de Apoio
10. **apoio.html** - "Fale com o seu Livreiro"
    - WhatsApp (chat, resposta rápida)
    - Chat Online
    - Telefone
    - Email
    - Formulário
    - Localizador de livrarias

11. **ajuda.html** - FAQ auto-serviço
    - Perguntas organizadas por categoria
    - Respostas detalhadas
    - Links para contactos se necessário

**Pontos-chave:**
- 6 canais de contacto disponíveis
- Compromisso de tempo de resposta explícito
- FAQ reduz volume de contactos

### Parte 5: CRM e Fidelização
12. **conta.html** - Área de cliente
    - Clube de Leitores (pontos, vouchers)
    - Histórico de encomendas
    - Lista de desejos
    - Desafio de leitura (gamificação)

**Pontos-chave:**
- Programa de fidelização com valor real
- Dados pessoais para personalização
- Histórico para suporte informado

### Parte 6: Visão Interna (Backoffice)
13. **backoffice.html** - Dashboard CRM
    - Casos de apoio em tempo real
    - Encomendas e estados
    - Métricas de desempenho
    - Distribuição por canais

**Pontos-chave:**
- Monitorização de todos os canais
- SLAs e tempos de resposta
- Visão 360º do cliente

## 📊 KPIs Demonstrados

### Disponibilidade
- 6 canais de contacto (WhatsApp, Chat, Telefone, Email, Formulário, FAQ)
- Horário alargado (9h-20h chat/whatsapp)
- FAQ disponível 24/7

### Navegabilidade
- Menu "Fale com o seu Livreiro" proeminente
- Links para contacto em todas as páginas
- FAQ organizado por categorias
- Chat widget sempre disponível

### Fiabilidade
- Notificações automáticas (Email + SMS)
- Timeline de estados atualizada
- Nº de encomenda para referência
- Comprovativos digitais

### Pontualidade de Cumprimento
- Previsão de disponibilidade clara (24-48h)
- Notificação proativa quando pronto
- Compromisso de resposta explícito (24-48h email, 5min chat)
- Prazo de levantamento definido (15 dias)

## 🎨 Design System

O protótipo utiliza o design system real da Bertrand:

- **Cores:**
  - Preto: #141414
  - Azul (links): #337AB7
  - Laranja (accent): #FF6600
  - Vermelho (preços): #E74C3C
  - Verde (sucesso): #27AE60

- **Tipografia:**
  - Ubuntu (títulos)
  - Open Sans (corpo)

- **Componentes:**
  - Cards, botões, forms
  - Timeline interativo
  - Accordion (FAQ)
  - Badges, alertas

## 🔧 Configuração

O protótipo utiliza apenas:
- HTML5
- CSS3 (com variáveis CSS)
- JavaScript vanilla
- Session Storage (para persistência de dados)
- Google Fonts (CDN)
- Tailwind CSS (CDN) - apenas como referência

**Sem frameworks, sem build tools, sem backend!**

## 📱 Responsividade

O protótipo é totalmente responsivo:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## 🎓 Contexto Académico

Este protótipo foi desenvolvido para apresentação académica sobre:
- **Atendimento não presencial ao cliente**
- **Utilização dos canais online como estratégia de marketing**
- **Integração omnichannel** (online + offline)
- **CRM e fidelização** no retalho de livros

## 📝 Notas para Apresentação

### Destacar:
1. **Levantamento em livraria GRÁTIS** - diferencial vs concorrência
2. **Notificações proativas** - cliente não precisa de verificar
3. **Multicanal integrado** - email + SMS + chat + telefone
4. **FAQ auto-serviço** - reduz carga do centro de contacto
5. **Clube de Leitores** - retenção e valor de vida do cliente

### Comparar com concorrência:
- **FNAC:** Maior variedade, mas levantamento pago
- **Wook:** Menos canais de contacto, menos lojas físicas
- **Bertrand:** Rede de 50+ lojas, levantamento grátis, clube com histórico

### Oportunidades identificadas:
1. Chatbot para FAQ automaticamente
2. Videochamada para consultoria de livros
3. Comunidade de leitores (reviews, recomendações)
4. Personalização baseada em histórico

## 🔗 Links Úteis

- Site real: https://www.bertrand.pt
- Relatório completo: `.keyword-research/bertrand-analysis/FINAL-REPORT.md`

---

© 2026 Protótipo académico - Apresentação sobre atendimento digital
