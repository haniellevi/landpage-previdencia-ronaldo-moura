# Design da landing previdenciária

## Público

Pessoas de 45 a 75 anos, muitas com pouca escolaridade, lendo no celular. Estão ansiosas com um pedido negado, parado ou com a dúvida se já podem se aposentar.

## Princípios

- **Menos seções, nada repetido.** Seis seções na página inteira. Cada informação aparece uma vez só: prazo do INSS fica na seção de prazos, documentos ficam na dúvida sobre documentos.
- **Um toque, uma frase.** Os 12 assuntos são linhas clicáveis com ícone, título do dia a dia ("Trabalhei na roça") e uma única frase de explicação. O toque abre o WhatsApp com a mensagem daquele assunto já escrita.
- **Uma ação.** WhatsApp em verde, repetido ao longo da página e numa barra fixa no celular, com a opção de ligar.
- **Leitura confortável.** Texto base de 18px (17px no celular), alvos de toque de pelo menos 48px, contraste alto e nada escondido atrás de animação.

## Tokens

| Token | Valor | Uso |
| --- | --- | --- |
| `--navy` | `#14213d` | Títulos, faixas escuras |
| `--body` | `#3b4656` | Texto |
| `--green` | `#1f7a4d` | Ações e destaques |
| `--green-soft` | `#e8f5ee` | Fundo de ícones e botões secundários |
| `--amber` / `--amber-soft` | `#8a5210` / `#fdf1dc` | Problemas com o INSS e aviso de golpe |
| `--paper` | `#f6f7f9` | Seções alternadas |

Fonte: Manrope (400 a 800), hospedada no próprio site. Raios de 14 a 28px. Ícones de traço em SVG, 24px.

## Seções

1. Abertura: "Aposentadoria e benefícios do INSS" em destaque verde no título, WhatsApp, duas garantias e foto.
2. Assuntos: 12 linhas clicáveis em três grupos (Aposentadoria, Benefícios do INSS, Problemas com o INSS).
3. Prazos do INSS, com o vídeo "Jornada do pedido" e o texto do vídeo.
4. Quem atende, com os três passos do atendimento e o aviso de golpe.
5. Dúvidas (seis).
6. Contato e endereço.

A palavra-chave "Aposentadoria e benefícios do INSS" abre o título da página, o `<title>` e a descrição.

## Vídeo

Feito com Remotion (`video/`), 1080×1080, 27 segundos, sem áudio. Toca sem som quando aparece na tela e pausa ao sair; não toca sozinho para quem prefere menos movimento. O texto do vídeo fica disponível abaixo dele.
