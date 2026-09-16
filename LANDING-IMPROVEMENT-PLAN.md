# Plano de aperfeiçoamento da landing

## Objetivo

Fazer a página transformar uma dúvida previdenciária em um contato qualificado com o advogado responsável. A pessoa precisa entender três coisas logo no início: o escritório atende a situação dela, ela não precisa chegar com toda a documentação pronta e o próximo passo é conversar, sem promessa de resultado.

## O que as auditorias mostraram

| Frente | Achado | Decisão no plano |
|---|---|---|
| Concorrência | Escritórios maiores ganham alcance com páginas por assunto; a chance de Ronaldo é falar da carta, do corte e do extrato que a pessoa tem em mãos. | Organizar a landing por situações reais e criar guias próprios depois. |
| Marca | A voz mais forte é clara, calma e direta. Atendimento pessoal e explicação do documento são diferenciais verdadeiros. | Colocar Ronaldo e o método de atendimento no primeiro contato. |
| Copy | A página já tinha boa intenção, mas repetia explicações longas antes de pedir uma ação. | Fazer cada seção levar a uma ação simples e concreta. |
| Conversão | O formulário e WhatsApp funcionam como caminhos de contato, mas faltava continuidade da situação escolhida e feedback acessível de erro. | Manter só nome, WhatsApp e consentimento; guardar a situação escolhida na mensagem e mostrar erros claros. |
| SEO e GEO | Canonical, sitemap, Open Graph, schema e `llms.txt` apontavam para um domínio de direito de trânsito. | Enquanto a URL Vercel for a página pública, todos os sinais técnicos apontam para ela. |
| UI e acessibilidade | A página tinha base limpa, mas a hierarquia visual e os cartões tratavam todos os temas com o mesmo peso. | Usar contraste, espaço, foto real e navegação curta para deixar o caminho de contato evidente. |

## Entrega feita nesta versão

1. **Hero novo.** A abertura fala da negativa, corte ou exigência do INSS. O botão oferece entendimento dos próximos passos, sem usar promessa de ganho ou aprovação.
2. **Contato humanizado.** A foto e o nome de Ronaldo ficam no topo do formulário. A pessoa entende que está falando com o advogado, não com uma central.
3. **Triagem por situação.** Os cartões levam ao formulário e preservam a categoria selecionada para a mensagem do WhatsApp.
4. **Texto mais comum.** Saíram percentuais, prazos e conclusões jurídicas do texto de conversão. A página explica o que a pessoa pode separar e o que será analisado.
5. **Hierarquia visual.** Azul profundo organiza confiança, dourado marca ação e o fundo claro mantém a leitura leve. A imagem do advogado ganhou função de credibilidade, sem virar decoração distante.
6. **Mobile.** O celular tem dois caminhos fixos e claros: WhatsApp ou formulário. Botões, inputs e chips têm áreas de toque adequadas.
7. **Acessibilidade.** Há link para pular ao conteúdo, foco visível, rótulos de formulário, erros junto ao campo, resumo de erros com foco, chips com estado e redução de movimento quando o sistema pede.
8. **Descoberta técnica.** Canonical, Open Graph, Twitter image, JSON-LD, robots, sitemap e `llms.txt` foram alinhados à URL publicada na Vercel.

## Ordem de trabalho

### Antes de publicar

1. Confirmar que `https://landpage-previdencia-ronaldo-moura.vercel.app/` é a URL pública que deve ser indexada. Se houver domínio próprio, trocar todos os sinais técnicos para ele no mesmo deploy.
2. Conferir nome profissional, OAB, endereço, CNPJ, telefone, e-mail e disponibilidade real de atendimento direto.
3. Conferir a política de privacidade contra o destino real dos dados do formulário e do WhatsApp.
4. Publicar a versão e testar imagem de compartilhamento, formulário, WhatsApp e links em celular real.

### Primeiros 30 dias

1. Verificar a propriedade no Google Search Console e no Bing Webmaster Tools. Enviar o sitemap somente depois da URL canônica estar correta.
2. Medir sem dados sensíveis: visualização de CTA, clique em CTA, situação escolhida, abertura do WhatsApp e envio válido do formulário. Não enviar nome, telefone, documentos ou texto do caso para analítica.
3. Confirmar no atendimento se a mensagem pré-preenchida ajuda a entender a origem e a situação do lead.
4. Criar a primeira página de apoio: negativa de benefício. Ela deve explicar os documentos iniciais, citar fonte oficial, ter data de revisão e convidar a pessoa a entender o caso.

### De 31 a 90 dias

1. Publicar guias para CNIS, BPC/LOAS, benefício por incapacidade e descontos consignados. Cada guia precisa responder uma dúvida, citar a fonte ao lado da afirmação e ter autoria identificada.
2. Criar links entre os guias e os cartões da landing. A pessoa deve chegar ao assunto certo sem perder o caminho de contato.
3. Padronizar perfil do Google, Instagram e LinkedIn com o mesmo nome, OAB, telefone, endereço ou área de atendimento e URL pública.
4. Medir quais situações geram conversa qualificada. Depois de haver dados suficientes, testar somente uma mudança por vez, por exemplo o título ou o texto do botão.

## Métricas úteis

| Momento | Evento | O que mostra |
|---|---|---|
| Interesse | Clique em formulário ou WhatsApp | A pessoa viu motivo para iniciar contato. |
| Contexto | Situação escolhida | Quais assuntos trazem procura. |
| Conversão | Formulário válido ou abertura do WhatsApp | A página conseguiu iniciar a conversa. |
| Qualidade | Conversa qualificada, registrada pelo atendimento | Se o texto está atraindo pessoas com demanda atendida. |
| Resultado | Contratação, registrada fora da analítica pública | Impacto comercial sem expor informação pessoal. |

## Regras para qualquer novo texto

- Começar pela situação que a pessoa vive, como negativa, carta, corte, desconto ou planejamento.
- Explicar um termo técnico na primeira vez em que aparecer.
- Dizer o que a pessoa pode fazer agora, sem antecipar conclusão jurídica.
- Usar fonte oficial e data de revisão para prazos, margens, valores e regras do INSS.
- Não prometer benefício, devolução de valores, prazo de decisão ou resultado judicial.
- Evitar frases genéricas sobre excelência, autoridade, segurança ou transformação. Mostrar o método, o advogado responsável e o que será analisado.

## Risco que continua aberto

O código agora assume que a URL da Vercel é a página pública. Se ela for apenas uma prévia, a recomendação muda: a prévia deve usar `noindex, nofollow`, e o domínio de produção precisa receber a mesma landing com canonical, imagens sociais, schema, robots, sitemap e `llms.txt` apontando para ele. Não misture as duas versões.
