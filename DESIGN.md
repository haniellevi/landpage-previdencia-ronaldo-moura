# Design da landing previdenciária

## Público

Pessoas de 45 a 75 anos, muitas com pouca escolaridade, lendo no celular. Estão ansiosas com um pedido negado, parado ou com a dúvida se já podem se aposentar.

## Princípios

- **Achar o assunto em um toque.** Logo após a abertura, 12 blocos com ícone e frase do dia a dia ("Trabalhei na roça", "Meu pedido está parado") levam direto à explicação.
- **Mesma estrutura em todo assunto.** Cada cartão tem "Para quem é", "Como o advogado ajuda" e um botão de WhatsApp com a mensagem já escrita para aquele assunto.
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

1. Abertura com título, WhatsApp, três garantias de atendimento e foto.
2. Encontre seu assunto (12 blocos).
3. Assuntos em três grupos: Aposentadoria, Benefícios do INSS e Problemas com o INSS.
4. O INSS negou? Três passos.
5. Prazos do INSS, com o vídeo "Jornada do pedido" e o texto do vídeo.
6. Como funciona o atendimento.
7. Quem atende, com aviso de golpe.
8. O que separar.
9. Dúvidas.
10. Contato e endereço.

## Vídeo

Feito com Remotion (`video/`), 1080×1080, 27 segundos, sem áudio. Toca sem som quando aparece na tela e pausa ao sair; não toca sozinho para quem prefere menos movimento. O texto do vídeo fica disponível abaixo dele.
