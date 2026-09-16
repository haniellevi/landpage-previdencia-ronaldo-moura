# SEO Content Audit

## https://landpage-previdencia-ronaldo-moura.vercel.app/

**Data:** 16 de setembro de 2026
**Método:** leitura do HTML público, análise automatizada, respostas HTTP, sitemap, robots, amostra de busca e inspeção dos arquivos publicados. Dados de Google Search Console, CrUX e rankings não estavam disponíveis.

## SEO Health Score: 58/100

O conteúdo e a confiança da página são bons para uma landing de advocacia. O resultado cai porque os sinais de indexação apontam para `ronaldomoura.adv.br`, um domínio cujo HTML raiz entrega o site Moura Multas, de direito de trânsito, e cujas rotas `robots.txt` e `sitemap.xml` retornam 404. Enquanto esse conflito existir, título, FAQ e conteúdo terão impacto orgânico limitado.

## Critical decision: qual domínio será público?

Há duas configurações válidas, mas apenas uma pode ser usada:

1. **Vercel é uma prévia.** Manter `noindex, nofollow` na URL Vercel e não submetê-la ao Search Console. Depois, publicar a mesma página no domínio final antes de apontar canonical, Open Graph, robots e sitemap para ele.
2. **Vercel é a versão pública.** Trocar canonical, `og:url`, imagens Open Graph, referência de sitemap e URLs em `sitemap.xml` para o domínio Vercel, ou conectar e publicar corretamente o domínio `ronaldomoura.adv.br` na mesma hospedagem.

O estado atual combina os dois cenários. A página Vercel permite indexação, mas declara que a versão canônica está em um domínio que entrega outro site. A recomendação é definir o domínio de produção antes de qualquer esforço de conteúdo ou link building.

## On-Page SEO Checklist

### Title Tag

- **Status:** Needs Work
- **Atual:** `Advogado Previdenciário | INSS e Aposentadoria - Ronaldo Moura`
- **Comprimento confirmado:** 62 caracteres.
- **O que funciona:** contém “Advogado Previdenciário”, INSS, aposentadoria e marca; a palavra-chave aparece no começo.
- **O que falta:** é ligeiramente longo e não reforça Marília, onde a concorrência orgânica é local.
- **Recomendado para uma página focada em Marília:** `Advogado Previdenciário em Marília | Ronaldo Moura`

Essa versão concentra a intenção local. Se a estratégia principal for nacional, manter “INSS e Aposentadoria” pode ser melhor, mas o site precisará de páginas temáticas e autoridade editorial muito maiores para competir com escritórios nacionais.

### Meta Description

- **Status:** Needs Work
- **Atual:** `INSS negou, cortou ou não responde seu pedido? Aposentadoria, auxílios, BPC/LOAS, pensão e descontos de empréstimo no benefício. Fale com Ronaldo Moura, OAB/SP 367822.`
- **Comprimento confirmado:** 167 caracteres.
- **O que funciona:** parte da dor do usuário e lista as intenções principais.
- **O que falta:** tende a ser truncada e não localiza o serviço.
- **Recomendada:** `Advogado previdenciário em Marília e online. Aposentadoria, BPC/LOAS, benefícios do INSS e revisões. Ronaldo Moura, OAB/SP 367822.`

A meta é uma sugestão para o snippet, não garantia do texto que o Google exibirá. Ela deve ser ajustada ao domínio que for escolhido como público.

### Heading Hierarchy

- **Status:** Pass, com oportunidade de melhoria.
- **Estrutura confirmada:** 1 H1, 8 H2 e 12 H3, sem salto de níveis.
- **H1 atual:** `O INSS negou, cortou ou ainda não respondeu o seu pedido?`
- **Ponto forte:** é específico, humano e alinhado a quem chega com problema imediato.
- **Lacuna:** o H1 não inclui “advogado previdenciário”, “INSS em Marília” ou “Marília”.

Não recomendo sacrificar o H1 atual apenas para inserir palavra-chave. Preserve a conversão e inclua, no bloco de identificação do profissional, um H2 claro como `Advogado previdenciário em Marília, com atendimento online`. Ele cria relevância local sem transformar a abertura em uma frase mecânica.

### Image Optimization

- **Status:** Pass, com melhoria de eficiência disponível.
- **Confirmado:** há uma imagem de conteúdo, `ronaldo-moura.png`, 408 x 573 px, com `alt` descritivo, dimensões declaradas e `loading="lazy"`.
- **Peso do arquivo:** 167 KB em PNG.
- **Recomendação:** exportar uma versão WebP e servir PNG apenas como fallback, se a inspeção visual preservar a qualidade. A imagem atual é pequena, portanto é melhoria secundária.
- **Open Graph:** a imagem declarada usa JPG de 1200 x 630, formato adequado para compartilhamento. Após a decisão de domínio, conferir se a URL apontada devolve a imagem no domínio canônico.

### Internal Linking

- **Status:** Fail para crescimento orgânico.
- **Confirmado:** a análise encontrou 28 links, zero links internos entre páginas e somente âncoras da própria landing.
- **Impacto:** não existe caminho para o buscador entender que “BPC/LOAS”, “benefício negado”, “consignado” e “planejamento” são tópicos distintos em que o site possui profundidade.
- **Depois:** criar páginas próprias de serviço e guias, com links recíprocos entre página pilar, conteúdos relacionados e contato.

### URL Structure

- **Status:** Fail se a URL Vercel for pública; Pass se ela for somente prévia.
- **Atual:** `landpage-previdencia-ronaldo-moura.vercel.app/`.
- **Problema:** o subdomínio é técnico, longo e não corresponde à canonical declarada.
- **Meta:** uma URL de domínio próprio como `https://ronaldomoura.adv.br/`, desde que o domínio entregue a página real, ou a URL Vercel definida de modo consistente como canônica.

## Content Quality, E-E-A-T

| Dimensão | Avaliação | Evidência observada |
|---|---|---|
| Experiência | Present | O conteúdo orienta pelo documento real, CNIS, carta, extrato e laudos. Não usa casos de clientes, o que é prudente em publicidade jurídica. |
| Expertise | Strong | Identifica Ronaldo, OAB/SP 367822, áreas de atuação, método de análise e fontes como Lei 8.213/91, Decreto 6.214/2007 e INSS. |
| Autoridade | Present | Há perfil profissional identificado e dados estruturados. Faltam páginas temáticas aprofundadas, referências externas verificáveis e histórico editorial público. |
| Trustworthiness | Strong | HTTPS, endereço, telefone, e-mail, política de dados, aviso contra promessa de resultado e identificação do responsável são visíveis. |

Para uma área que afeta direitos e renda, o conteúdo precisa manter fonte oficial, data de revisão e autoria identificada. A página já segue esse princípio em parte. Não recomendo “provas” baseadas em promessa de êxito, comparações, números de casos ou depoimentos que possam conflitar com o [Provimento 205/2021 da OAB](https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021).

## Keyword Analysis

### Primary Keyword

- **Foco local recomendado:** `advogado previdenciário em Marília`.
- **Foco de categoria já presente:** `advogado previdenciário`, `INSS` e `aposentadoria`.
- **Intenção predominante:** comercial local, misturada a buscas informativas de pessoas com negativa, revisão ou dúvida documental.
- **Alinhamento:** a landing atende bem à intenção de contato e triagem. Ela não substitui uma página-guia para perguntas como “o que fazer quando o INSS nega o benefício”.

| Elemento | Estado atual | Ajuste recomendado |
|---|---|---|
| Title | Palavra-chave de categoria presente | Acrescentar Marília se a prioridade é local |
| H1 | Foca na situação, sem termo de categoria | Preservar H1 e adicionar H2 de especialidade/localização |
| Primeiro bloco | Fala de INSS e benefícios | Inserir uma frase natural sobre atuação previdenciária em Marília |
| H2/H3 | Boa cobertura de problemas | Criar páginas com H1 próprio para cada intenção |
| Meta description | Termos de benefícios presentes | Incluir “advogado previdenciário em Marília” sem exceder o tamanho |
| URL | Subdomínio técnico | Publicar em domínio final coerente |

### Secondary Keywords to Map by Page

- advogado INSS em Marília
- aposentadoria em Marília
- benefício INSS negado
- recurso contra decisão do INSS
- BPC/LOAS em Marília
- auxílio por incapacidade negado
- revisão de benefício INSS
- planejamento previdenciário
- CNIS com vínculo faltando
- desconto consignado no benefício INSS

Não há dados de volume ou posição do Search Console nesta auditoria. Os termos são priorizados por aderência à oferta e ao que aparece nas páginas concorrentes locais encontradas em busca, não por promessa de tráfego.

## Technical SEO

| Item | Estado confirmado | Ação |
|---|---|---|
| HTTPS | Pass | Manter |
| Viewport | Pass | Manter; a página declara viewport responsivo |
| Robots na Vercel | Pass isoladamente | O arquivo permite rastreamento, mas aponta sitemap do domínio incorreto |
| Sitemap na Vercel | Needs Work | Existe e contém uma URL, mas o `<loc>` usa `https://ronaldomoura.adv.br/` |
| Canonical | Critical fail | Aponta para domínio que entrega outro site, de direito de trânsito |
| Open Graph URL/imagem | Critical fail | Referenciam o mesmo domínio de produção não publicado |
| Domínio `ronaldomoura.adv.br` | Critical fail | A raiz responde HTTP 200, mas entrega Moura Multas, de direito de trânsito; `robots.txt` e `sitemap.xml` retornam HTTP 404 |
| Meta robots | Pass | `index, follow, max-image-preview:large`, apropriado somente para a URL definitiva |
| CSS/JS | Pass inicial | Um stylesheet local e um script foram encontrados; não há rastreadores de terceiros detectados |
| Compressão e cache | Pass inicial | A resposta Vercel usa Brotli e foi atendida de cache |
| TTFB sintético | Needs Work | Três leituras externas retornaram aproximadamente 278 a 290 ms. É diagnóstico pontual, não Core Web Vital de campo. |

### Core Web Vitals

Não foi possível obter laboratório do PageSpeed Insights porque a API pública respondeu 429 por cota esgotada. Portanto, LCP, INP e CLS não foram estimados. O HTML reserva dimensões para a imagem principal e mantém dependências leves, sinais positivos para estabilidade visual, mas isso não substitui dados reais.

Depois da correção do domínio, conectar o domínio definitivo ao Google Search Console e acompanhar Core Web Vitals e desempenho por 28 dias. Use o relatório de experiência real para decidir se existe trabalho de velocidade além da otimização opcional da imagem.

## Schema Markup

O JSON-LD da página contém `WebSite`, `WebPage`, `LegalService`, `Person` e `FAQPage`. Esse conjunto é apropriado para a página atual e é coerente com o conteúdo visível.

| Tipo | Status | Recomendação |
|---|---|---|
| LegalService | Present | Manter nome, endereço, telefone, área atendida e URL alinhados ao domínio final |
| Person | Present | Manter nome, OAB e função apenas se conferidos e atuais |
| FAQPage | Present | Manter respostas visíveis e revisar regras/datas antes de atualizar |
| WebSite / WebPage | Present | Corrigir `url` e `@id` junto com canonical |
| BreadcrumbList | N/A na landing | Adicionar quando houver páginas de serviço e guias |
| Article | Missing where relevant | Adicionar em cada artigo publicado, com autor e data de revisão |
| LocalBusiness | N/A | `LegalService` já descreve melhor a atividade |
| Review / AggregateRating | Não adicionar sem base | Não marcar avaliação que não esteja visível e verificável |

FAQ estruturado ajuda interpretação semântica, mas não é promessa de rich result. A elegibilidade de exibição é decisão do Google.

## Content Gap Analysis

| Tema ausente como página própria | Potencial de intenção | Concorrência | Formato recomendado | Prioridade |
|---|---|---|---|---:|
| Benefício do INSS negado: o que conferir na decisão | Alta | Média | Página pilar e FAQ | 5 |
| Advogado previdenciário em Marília | Alta | Alta | Página local de serviço | 5 |
| Como conferir CNIS antes de pedir aposentadoria | Média | Média | Guia informativo | 4 |
| BPC/LOAS: documentos, CadÚnico e análise individual | Alta | Alta | Página de serviço com fonte oficial | 4 |
| Desconto consignado não reconhecido no benefício | Média | Média | Guia e página de serviço | 4 |
| Benefício por incapacidade negado ou cessado | Alta | Alta | Página de serviço e FAQ | 4 |
| Pensão por morte: documentos iniciais e próximos passos | Média | Média | Guia de decisão | 3 |
| Planejamento previdenciário e correção de CNIS | Média | Média | Página de serviço e checklist | 3 |

Concorrentes locais encontrados já publicam conteúdo ou páginas para BPC/LOAS, incapacidade, aposentadoria e revisões, como [Kimberly Ramos Advocacia](https://www.kimberlyramosadv.com.br/), [Bordinhon Advogados](https://bordinhonadvogados.com.br/) e [Mataruco Advocacia](https://www.mataruco.adv.br/). A oportunidade não é repetir alegações de “melhor benefício”; é responder uma pergunta documental específica com mais clareza, fonte e atualização.

## Featured Snippet Opportunities

Criar páginas-guia, não expandir a landing indefinidamente. Em cada uma, usar pergunta em H2 e resposta verificável de 40 a 60 palavras imediatamente abaixo.

| Pergunta-alvo | Resposta/formato recomendado |
|---|---|
| O que fazer quando o INSS nega um benefício? | Parágrafo que explica guardar a decisão, conferir data e documentos, e avaliar os caminhos aplicáveis |
| Como ver o CNIS no Meu INSS? | Lista ordenada com fonte oficial e observação de que a leitura do histórico depende do caso |
| Quais documentos ajudam na análise de BPC/LOAS? | Lista curta separando documentos pessoais, CadÚnico e laudos quando aplicável |
| Como consultar empréstimo consignado do INSS? | Passo a passo baseado no Meu INSS, com aviso para guardar extrato e contrato |
| Qual o prazo para recorrer de uma decisão do INSS? | Resposta factual, fonte oficial e data de revisão, sem transformar prazo em promessa de resultado |

## Internal Linking Architecture

```
Home
  |-- /advogado-previdenciario-marilia
  |     |-- /aposentadoria
  |     |-- /beneficio-inss-negado
  |     |-- /bpc-loas
  |     |-- /beneficio-por-incapacidade
  |     |-- /desconto-consignado-beneficio
  |     |-- /planejamento-previdenciario
  |
  |-- /guias/
        |-- cnis-antes-da-aposentadoria
        |-- carta-de-indeferimento-inss
        |-- extrato-consignado-meu-inss
```

Cada guia deve apontar para uma página de serviço relevante e voltar à página pilar. Cada página de serviço deve ligar para dois ou três guias úteis, com texto âncora descritivo. Não criar dezenas de URLs rasas ou quase iguais para cidades, benefícios e variações de palavra-chave.

## Content Strategy Recommendations

### Cadência inicial

Publicar duas peças aprofundadas por mês durante os primeiros três meses, depois atualizar o que já existe antes de aumentar volume. Isso produz seis páginas úteis, suficientes para começar um cluster interno coerente sem reduzir a precisão jurídica.

### Primeiros 90 dias

| Conteúdo | Volume | Competição | Valor de negócio | Prioridade |
|---|---|---|---|---:|
| Página “Advogado previdenciário em Marília” | Não verificado | Alta | Alta | 10 |
| Guia “Benefício INSS negado: o que conferir” | Não verificado | Média | Alta | 9 |
| Página “BPC/LOAS” | Não verificado | Alta | Alta | 8 |
| Guia “Como conferir CNIS” | Não verificado | Média | Alta | 8 |
| Página “Desconto consignado no benefício” | Não verificado | Média | Alta | 8 |
| Guia “Documentos para benefício por incapacidade” | Não verificado | Média | Média | 7 |

Cada peça precisa de autor identificado, data de revisão, fontes oficiais e uma CTA que convide a entender o próximo passo. Evitar títulos de urgência artificial, estimativas de valor, “casos ganhos” ou linguagem que prometa aprovação.

## Prioritized Recommendations

### Critical, corrigir antes de produzir conteúdo

1. Escolher o domínio público e tornar canonical, Open Graph, `robots.txt`, sitemap e JSON-LD consistentes com ele.
2. Se `ronaldomoura.adv.br` for o domínio final, publicar o site de fato nele e verificar que `/`, `/robots.txt` e `/sitemap.xml` respondem 200 com o conteúdo esperado.
3. Se a Vercel for somente prévia, bloquear sua indexação até a produção final. Não manter uma prévia indexável com canonical quebrada.

### High Priority, neste mês

1. Ajustar title e meta description para a estratégia local escolhida.
2. Criar a página local de serviço e duas páginas temáticas: benefício negado e BPC/LOAS.
3. Adicionar links entre home, páginas de serviço e guias, substituindo a arquitetura de página única.
4. Conectar Search Console no domínio definitivo, enviar sitemap e solicitar indexação somente depois da verificação de canonical.

### Medium Priority, neste trimestre

1. Publicar os guias de CNIS, benefício por incapacidade e consignado, com revisão de fontes oficiais.
2. Adicionar `Article` schema aos guias e breadcrumb às páginas internas.
3. Converter a foto em WebP se a comparação visual mostrar ganho sem perda de qualidade.

### Low Priority, quando houver dados

1. Refinar páginas conforme consultas, impressões e cliques do Search Console.
2. Investigar LCP, INP e CLS reais usando CrUX ou relatório de Core Web Vitals após haver tráfego suficiente.
3. Auditar e alinhar o Instagram antes de usá-lo como canal de distribuição de conteúdo.

## Evidence Sources

- [Landing page analisada](https://landpage-previdencia-ronaldo-moura.vercel.app/)
- [Robots da URL Vercel](https://landpage-previdencia-ronaldo-moura.vercel.app/robots.txt)
- [Sitemap da URL Vercel](https://landpage-previdencia-ronaldo-moura.vercel.app/sitemap.xml)
- [Domínio apontado como canonical](https://ronaldomoura.adv.br/)
- [OAB, Provimento 205/2021](https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021)
- [Meu INSS, fonte institucional para conteúdos operacionais](https://www.gov.br/inss/pt-br/canais_atendimento/meu-inss/meu-inss)
