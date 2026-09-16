# Design da landing previdenciária

Revisão de 16/09/2026. A implementação atual é a referência; as auditorias anteriores são registros históricos.

## Direção

Página clara, com fotografia, tipografia editorial e linguagem próxima do público que procura aposentadoria ou benefícios do INSS. A primeira tela identifica o serviço, apresenta o benefício da orientação e permite iniciar o contato. O formulário fica em uma seção própria.

Base de trabalho: `ui-ux-pro-max`, com consulta `legal services approachable editorial`, e pesquisas específicas de rótulos, validação e leitura. A recomendação foi adaptada ao escritório, sem números de sucesso, avaliações ou credenciais inventadas.

## Cores implementadas

| Token | Cor | Uso |
| --- | --- | --- |
| `--ink` | `#243d38` | Títulos, ações principais, seção do advogado e rodapé |
| `--ink-hover` | `#172d29` | Feedback dos botões |
| `--body` | `#4e5853` | Texto corrido |
| `--accent` | `#885b2f` | Destaque na aposentadoria, ícones e etiquetas |
| `--gold` | `#ddc399` | Destaque sobre fundo escuro |
| `--paper` | `#faf8f3` | Fundo principal |
| `--sand` | `#eee8de` | Contato e encerramento |
| `--line` | `#dadcd2` | Divisórias |
| `--on-dark` | `#d8e2dc` | Texto sobre verde escuro |

## Tipografia e layout

- Lora nos títulos; DM Sans no corpo e nas ações. Arquivos WOFF2 hospedados no próprio site, com licenças em `assets/fonts/` e `font-display: swap`.
- Corpo de 17 px no desktop e 16 px no celular, com entrelinha de 1,65. Campos têm 16 px.
- Conteúdo de até 1.200 px; laterais de 20 px no celular. A abertura tem duas colunas no desktop e uma no celular.
- Os botões principais têm pelo menos 50 px de altura. Links de navegação, de serviços e perguntas oferecem alvos de ao menos 44 px.
- O título não depende de quebras manuais; a largura e a escala foram conferidas em seis tamanhos de tela.

## Sequência da página

1. Serviço, foto do casal, ação principal, localização e identificação profissional.
2. Atalhos para aposentadoria, benefício e negativa.
3. Seis áreas de atendimento em blocos abertos, separados por linhas.
4. Retrato real e apresentação de Ronaldo Moura.
5. Três etapas do atendimento.
6. Formulário para preparar a mensagem no WhatsApp.
7. FAQ, convite de contato e rodapé com identificação e privacidade.

## Imagens

- `ronaldo-moura.webp`: foto original do advogado, sem alteração do rosto ou reconstrução por IA. A imagem mantém sua proporção na apresentação profissional.
- `casal-documentos-previdencia.webp`: cena ilustrativa gerada na revisão anterior, sem identificação como cliente, testemunho ou caso real. Nesta versão, aparece na abertura.
- As imagens foram codificadas em WebP, preservando as dimensões. A cena do casal passou de cerca de 1,9 MB para 96 KB; o retrato, de 164 KB para 16 KB.
- A imagem principal tem `fetchpriority="high"`; o retrato abaixo da dobra usa carregamento tardio. Todas têm dimensões declaradas.

## Interação e acessibilidade

- Menu móvel e FAQ com `details`/`summary` nativos, utilizáveis por teclado. Escape fecha o menu.
- Link de pular conteúdo, hierarquia semântica, foco visível e textos alternativos.
- Formulário com rótulos, seleção nativa de assunto, mensagens junto dos campos e resumo de erros focável.
- O assunto selecionado em um serviço é levado para o formulário. Nome, telefone e assunto entram na mensagem do WhatsApp.
- A barra móvel aparece quando a ação da abertura saiu da tela e fica oculta durante a exibição do formulário.
- Sem animações de entrada, conteúdo escondido por efeitos ou carrosséis. `prefers-reduced-motion` desliga a rolagem suave.

## Critérios para futuras revisões

Conferir 320, 375, 390, 768, 1024 e 1440 px: ausência de rolagem lateral, CTA principal visível na primeira tela, fotos com proporções corretas e menu utilizável. Validar também erros de formulário, cada assunto, dados na mensagem preparada, FAQ por teclado e igualdade entre FAQ visível e JSON-LD. A navegação para WhatsApp deve ser interceptada durante os testes, sem enviar mensagens.

## Referências

- [Nielsen Norman Group: leitura na web](https://www.nngroup.com/articles/how-users-read-on-the-web/).
- [Nielsen Norman Group: usabilidade para pessoas mais velhas](https://www.nngroup.com/articles/usability-for-senior-citizens/).
- [Cristiani Borges](https://cristianiborges.com.br/) e [Arraes & Centeno](https://arraesecenteno.com.br/): serviço identificado logo na abertura e caminhos por necessidade.
- [Referência no Behance](https://www.behance.net/gallery/218012995/Website-Advogada-Alecsandra-Resende): hierarquia visual e presença de fotografia. Nenhum material da referência foi reutilizado.
