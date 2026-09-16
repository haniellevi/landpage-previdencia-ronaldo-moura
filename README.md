# Landing Page — Direito Previdenciário · Dr. Ronaldo Moura

Página de captação (nome + WhatsApp) para o escritório de Ronaldo Rodrigues Moura
(OAB/SP 367822), em Marília/SP, com atendimento online para todo o Brasil.

- Cliente: `moura-multas` · R. R. Moura Sociedade Individual de Advocacia
- Pasta do projeto: `clientes/moura-multas/Landpage-Previdenciaria/`
- Stack: HTML + CSS + JavaScript puro. Sem build, sem dependências, sem framework.

## Estrutura

```
Landpage-Previdenciaria/
├── index.html          # página completa (copy, form, FAQ, JSON-LD)
├── styles.css          # design system (tokens, componentes, responsivo)
├── script.js           # máscara, validação, handoff p/ WhatsApp, tracking
├── assets/
│   ├── ronaldo-moura.png      # foto do advogado (fundo transparente)
│   ├── favicon.svg            # marca (diamante) do escritório
│   ├── apple-touch-icon.png   # ícone iOS
│   └── og-previdenciario.jpg  # imagem de compartilhamento (1200×630)
├── robots.txt
├── sitemap.xml
├── llms.txt            # resumo factual para buscadores e IAs (GEO)
├── DESIGN.md           # tokens, regras de design aplicadas e acessibilidade
└── README.md           # este arquivo
```

## Rodar localmente

```bash
cd "Landpage-Previdenciaria"
python3 -m http.server 8080
# abra http://localhost:8080
```

## Publicar

Domínio definido: **https://ronaldomoura.adv.br/** (raiz, sem build — é só servir
a pasta em qualquer host estático: Vercel, Cloudflare Pages, Netlify ou a
hospedagem atual).

Atenção antes de publicar na raiz:

1. O domínio hoje publica uma LP de **Lei Seca / trânsito** (Moura Multas, feita
   pela digitalbloom). Decidir com o cliente o destino dela: mover para
   `mouramultas.com.br` ou para `/transito/` neste domínio, com redirect 301.
2. `index.html` — `canonical`, `og:url`, `og:image`, `twitter:image` e o
   JSON-LD já apontam para `https://ronaldomoura.adv.br/`.
3. `sitemap.xml`, `robots.txt` e `llms.txt` também já usam o domínio novo.
4. Publicar somente com autorização explícita do responsável (regra operacional
   do Prospector: contrato assinado, entrada confirmada e briefing validado).

## SEO e GEO — o que já está implementado

- **SEO técnico**: title/description únicos, canonical, Open Graph e Twitter
  Card com imagem 1200×630, favicon e apple-touch-icon, `robots.txt` e
  `sitemap.xml`, HTML estático (sem JS para indexar), Lighthouse SEO 100.
- **Dados estruturados (JSON-LD)**: `WebSite`, `LegalService` (com `sameAs` do
  Instagram e do Google Maps, `hasMap`, endereço, telefone e catálogo de
  serviços), `Person` (advogado, OAB, `sameAs`) e `FAQPage` com as 7 perguntas
  visíveis na página.
- **GEO / citabilidade por IAs**: `llms.txt` na raiz com fatos verificáveis,
  serviços, prazos e contatos; respostas diretas no início de cada bloco; FAQ
  literal com as perguntas como as pessoas pesquisam; fontes oficiais linkadas
  (Lei 8.213/91, Decreto 6.214/2007, INSS, CRPS); entidades consistentes
  (nome, OAB, endereço, telefone idênticos na página, no schema e no llms.txt);
  data de revisão declarada.
- **Depois do deploy**: cadastrar no Google Search Console e Bing Webmaster,
  conferir o NAP no Google Business Profile (endereço/telefone iguais aos da
  página) e reenviar o sitemap. Validar o JSON-LD no Rich Results Test.

## Formulário (CTA principal)

Campos: **nome completo**, **WhatsApp com DDD** e consentimento LGPD.
Campo opcional de situação (chips) enriquece a mensagem.

Fluxo atual: ao enviar, a página abre o WhatsApp do escritório (14) 99673-4555
com a mensagem já preenchida (nome, telefone e situação). Proteções: honeypot
anti-spam, validação de telefone brasileiro e trava de tempo (1,5s).

Para gravar o lead em um CRM/planilha **além** do WhatsApp, configurar em
`script.js`:

```js
const LP_CONFIG = {
  whatsapp: "5514996734555",   // número no formato E.164 sem "+"
  endpoint: ""                 // vazio = só WhatsApp
};
```

Com `endpoint` preenchido, a página faz `POST` JSON (fire-and-forget, sem
travar a conversão):

```json
{ "nome": "...", "whatsapp": "14999999999", "situacao": "...", "origem": "https://..." }
```

Sugestões de destino: webhook do n8n/Make/Zapier, Google Apps Script, Formspree
ou o CRM do escritório. Nada é armazenado nesta página.

### Tracking

`data-cta` está em todos os botões relevantes. A página emite eventos para:
- `window.dataLayer` (se existir) — `cta_click`, `lead_form_submit`
- `window.lpTrack(evento, dados)` (se existir) — mesmo padrão

Basta colar o GTM/GA4 antes do `script.js` que os eventos já fluem.

## Fatos usados na copy (verificados em 15/09/2026)

| Afirmação na página | Fonte |
| --- | --- |
| OAB/SP 367822, formado em 2009, inscrito desde 2015 | CRM do cliente + confirmação do Dr. Ronaldo |
| Prazo de análise: em regra 45 dias (auxílios) e 90 dias (BPC/LOAS) | Lei 8.213/91 e Decreto 6.214/2007; notícias TRF-4 e Jusbrasil (2026) |
| Recurso administrativo em 30 dias | Gov.br — Conselho de Recursos da Previdência Social |
| Margem consignável de 45% (35% empréstimo + 5% cartão + 5% benefício) desde set/2026 | MP 1.355/2026 caducou em 31/08/2026; Extra/Correio24h/NSC (set/2026) |
| STJ Tema 1.435 (dano moral em descontos indevidos, afetação em 2026) | Notícia TJMA (mai/2026) |

Dados de contato extraídos de `https://ronaldomoura.adv.br/` em 15/09/2026:
WhatsApp (14) 99673-4555, e-mail rrmoura.adv@gmail.com, Instagram
[@advocacia_moura_](https://www.instagram.com/advocacia_moura_/), endereço
R. Quatro de Abril, 869, Centro, Marília/SP e link do Google Maps.

Fontes completas da pesquisa de referência (concorrência e mercado) ficaram na
pasta do cliente: `MARKETING-AUDIT.md`, `BRAND-VOICE.md`, `COPY-SUGGESTIONS.md`.

## Confirmar com o cliente antes de publicar

- [ ] Escopo: o escritório de fato atende **todas** as frentes listadas?
      (aposentadorias, auxílios, BPC/LOAS, pensão, salário-maternidade,
      revisão de benefício, planejamento e revisão de consignado)
- [ ] Nome/branding da página: usamos "Ronaldo Moura — Advocacia Previdenciária"
      (a marca "Moura Multas" é de trânsito). Validar preferência.
- [ ] Destino da LP de Lei Seca que hoje ocupa o domínio (mover para
      `mouramultas.com.br` ou para `/transito/` com redirect 301).
- [ ] Uso da foto do advogado nesta página (arquivo veio do site atual).
- [ ] Número de WhatsApp correto para leads desta campanha (hoje: comercial).
- [ ] E-mail público: a página usa **rrmoura.adv@gmail.com** (extraído de
      ronaldomoura.adv.br); o CRM registra rrmoura.adv@hotmail.com. Confirmar
      qual vale.
- [x] Instagram definido a partir do domínio: **@advocacia_moura_**
      (`mouramultas` no CRM fica desatualizado).
- [ ] Endereço, horário de atendimento e avaliação do Google (5,0 / 376) —
      reconferir imediatamente antes de publicar; a página **não** exibe
      depoimentos nem nota (cláusula contratual + Provimento 205/2021).

## Compliance

A copy segue o Código de Ética da OAB e o Provimento 205/2021: sem promessa de
resultado, sem comparação com outros profissionais, sem urgência artificial, sem
depoimentos de clientes e sem superlativos. O texto informa prazos e caminhos,
mas não antecipa resultado de caso concreto. O rodapé traz a identificação
completa e o aviso legal.
