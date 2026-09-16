# Design — Landing Page Previdenciária

Documento de referência visual e técnico. Aplicado em `styles.css` de forma
literal — os valores abaixo são a fonte de verdade.

## Princípios

1. Confiança antes de estética: sóbrio, claro, sem ruído visual.
2. Um único acento (dourado) para todas as ações principais.
3. Movimento mínimo: só feedback de interação, em `transform`/`opacity`, ≤ 200 ms.
4. Leitura primeiro: hierarquia clara, largura de linha controlada, contraste alto.

## Cores

| Token | Valor | Uso |
| --- | --- | --- |
| `--navy-900` | `#081f3c` | Seções escuras, títulos, rodapé |
| `--navy-800` | `#0b315c` | Marca, chips ativos, destaques |
| `--navy-700` | `#123f70` | Links, foco de inputs |
| `--gold` | `#b8832a` | **Único acento**: botões primários, eyebrows, ícones |
| `--gold-on-dark` | `#e9ba50` | Acento em fundo escuro (contraste AA) |
| `--paper` / `--paper-alt` | `#fbfaf6` / `#f5f2ea` | Fundos claros alternados |
| `--ink` / `--muted` | `#14202e` / `#53606e` | Texto principal / secundário |
| `--line` | `#e6e1d5` | Bordas e divisores |
| `--whats` | `#0f6b36` | Exclusivo do canal WhatsApp (verde funcional) |

Contraste: botão primário usa texto navy sobre dourado (≈ 4,9:1); muted sobre
paper ≈ 7:1; cream sobre navy-900 > 12:1. O verde de WhatsApp é usado apenas em
botão de canal, nunca como acento de marca.

## Tipografia

- Títulos: serifada (`Iowan Old Style → Palatino → Georgia`), peso 600, `text-wrap: balance`.
- Corpo: pilha de sistema (`system-ui`), 17 px, linha 1,62, `text-wrap: pretty`.
- Escala fluida: `h1 clamp(1.95rem, 4.4vw, 3rem)` · `h2 clamp(1.55rem, 3vw, 2.15rem)`.
- Zero webfonts: elimina request bloqueante e FOUT.

## Espaçamento e forma

- Seções: `padding-block: clamp(56px, 7vw, 88px)` (mobile 56 → desktop 88).
- Grid da página: 1120 px; leitura longa: 780 px.
- Raio: 14 px (cards) e 10 px (inputs/botões); sombras suaves em 2 níveis.
- Escala de `z-index`: header 200 · CTA mobile 300 · skip link 400 (sem valores soltos).

## Componentes

Header sticky · hero 2 colunas · card de formulário · trust bar · grid de 8
cards de situação · passos numerados · painel de documentos · seção escura de
consignado com "extrato" ilustrado · bio do advogado com foto · FAQ em
`<details>` · CTA final com formulário · rodapé com aviso legal · barra fixa de
CTA no mobile.

## Regras da skill `baseline-ui` aplicadas

| Regra | Como foi aplicada |
| --- | --- |
| Nunca animar sem pedido | Só transições de hover/focus em `background/transform`, ≤ 150 ms |
| Animar apenas compostos | `transform: translateY(1px)` no `:active`; hover de card com translate |
| `ease-out` em entradas | Todas as transições usam `ease-out` |
| Respeitar `prefers-reduced-motion` | Bloco dedicado desliga transições e smooth scroll |
| `text-balance` / `text-pretty` | Aplicados em títulos e parágrafos |
| Sem gradientes | Nenhum gradiente na página |
| Sem glow como affordance | Sombras suaves padrão, sem brilho |
| Um acento por view | Dourado; verde reservado ao canal WhatsApp |
| Escala fixa de z-index | Variáveis `--z-*`, nenhum `z-*` arbitrário |
| Alvos de toque | Botões com altura mínima de 42–48 px |
| Erros junto da ação | Mensagens de erro ao lado de cada campo |

Nota: a skill assume stack Tailwind/React. O projeto é estático (zero build),
então os princípios foram aplicados no CSS puro — mesmo resultado, sem
dependência de framework.

## Acessibilidade (referência WCAG 2.2 AA)

- Estrutura semântica: `header`, `main`, `section`, `footer`, hierarquia h1→h3 sem saltos.
- Skip link, `nav` rotulado, `aria-label` nos grupos e na barra mobile.
- Formulário: `<label>` em todos os campos, `aria-invalid`, erros com `hidden`
  + `role="status"` com `aria-live="polite"`, honeypot `aria-hidden` e fora do tab.
- Chips com `aria-pressed`; FAQ nativo (`<details>/<summary>`), sem JS.
- Foco visível global (`outline` dourado de 3 px, offset 2 px).
- Sem conteúdo dependente de animação; contraste verificado nos pares usados.

## Performance

- Zero dependências, zero build: 1 CSS (~13 KB), 1 JS (~4 KB), HTML estático.
- Fontes de sistema; imagens com `width/height` (sem CLS), foto com `loading="lazy"`.
- `backdrop-filter` apenas no header (área pequena e fixa).
- Orçamento alvo: < 100 KB de JS e < 1,2 MB na primeira carga mobile.

## Copy — racional em uma linha

Dor nomeada no H1 (INSS negou/cortou/silenciou), alívio cognitivo na sub
(“você não precisa entender tudo de uma vez”), prova verificável (OAB, formação,
sede), especificidade factual (prazos 45/90/30 dias, margem de 45%) e CTA único
(nome + WhatsApp). Nada de promessa de resultado, superlativo ou urgência
artificial — posicionamento "Guia" do cliente, aplicado ao previdenciário.
