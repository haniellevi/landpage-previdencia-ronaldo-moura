# Design da landing previdenciária

Revisão de 17/09/2026. A implementação atual é a referência; auditorias antigas registram versões anteriores.

## Direção

Fotografia de cenas familiares, fundo marfim, verde escuro e terracota. Abertura com assunto claro, foto grande e contato visível. Áreas separadas com perguntas curtas; andamento do pedido explicado sem depender de interação. Retrato real do advogado preservado.

Base: UI/UX Pro Max, consulta `legal services accessible warm photography`. Recomendações de contraste, foco, leitura e navegação foram adaptadas à identidade existente.

## Sistema visual

| Uso | Valor |
| --- | --- |
| Títulos, botões, seção do pedido | `#253f35` |
| Texto corrido | `#4b574e` |
| Destaques e ícones | `#925231` |
| Fundo principal | `#f8f5ee` |
| Fundo dos serviços e formulário | `#fffefa` |
| Texto no fundo escuro | `#e2e9df` |
| Destaques no fundo escuro | `#e6c8a0` |

Lora nos títulos e DM Sans no corpo, com fontes locais. Corpo de 18 px no computador e 17 px no celular. Textos dos cartões no celular usam 17 px. Campos têm no mínimo 16 px. Títulos se ajustam à largura sem quebras manuais no H1.

Conteúdo até 1200 px, laterais de 20 px no celular. Cards em três, duas ou uma coluna conforme o espaço. Botões principais com pelo menos 56 px; navegação e demais ações com alvos de 44 px ou mais. Bordas, fundos e espaçamento separam assuntos sem exigir leitura do bloco inteiro.

## Imagens

Duas cenas ilustrativas novas, registradas em `IMAGENS.md`. Cada cena tem versões WebP de 640 e 1120 px, com `srcset` e `sizes`. A foto da abertura tem prioridade; a segunda é carregada conforme a rolagem. As dimensões estão declaradas para reservar espaço durante o carregamento.

O retrato de Ronaldo usa o arquivo original convertido para WebP, sem gerar ou modificar o rosto. Não há depoimentos associados às fotos ilustrativas.

## Navegação e leitura

Atalhos da abertura levam a aposentadoria, benefício e pedido em andamento. As informações centrais ficam sempre visíveis. Apenas as perguntas frequentes e o menu móvel usam abertura e fechamento nativos.

A jornada está em quatro etapas numeradas. Foi escolhida uma apresentação estática porque não exige reprodução, som ou espera para acessar a informação. Não há carrossel, vídeo automático, animação de entrada ou conteúdo escondido por efeitos.

## Formulário

Nome, WhatsApp com DDD e assunto opcional. Consentimento, rótulos visíveis, erros próximos dos campos e resumo de erros com foco. Links de atendimento já selecionam o assunto. Há uma alternativa para abrir o WhatsApp diretamente.

O botão prepara uma mensagem para o visitante enviar. Não confirma recebimento pelo escritório. A barra de contato móvel fica oculta quando o formulário aparece e quando a ação da abertura está visível.

## QA realizado

- Larguras 320, 375, 390, 768, 1024 e 1440 px: sem rolagem horizontal. A ação principal permaneceu dentro da primeira tela.
- axe-core 4.10.3, WCAG A/AA: zero violações e 30 verificações aprovadas em 1440 e 390 px, sem itens inconclusivos nessa execução.
- Seleção de nove assuntos, erros, dados preservados e uma única tentativa de abrir a mensagem no número correto.
- FAQ operado por teclado; foco visível, hierarquia de títulos, âncoras e paridade com JSON-LD conferidos.
- O WhatsApp foi interceptado durante o teste; nenhum contato foi enviado.

A inspeção técnica não substitui teste de compreensão com pessoas do público. Em futuras revisões, observar se elas encontram o próprio assunto e explicam o que acontece ao tocar no contato.
