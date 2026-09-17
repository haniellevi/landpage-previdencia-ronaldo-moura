# Landing previdenciária de Ronaldo Moura

Site estático em HTML, CSS e JavaScript, sem etapa de build.

- Produção: https://landpage-previdencia-ronaldo-moura.vercel.app/
- Repositório: https://github.com/haniellevi/landpage-previdencia-ronaldo-moura
- Advogado: Ronaldo Rodrigues Moura, OAB/SP 367822.
- Contato: (14) 99673-4555 e rrmoura.adv@gmail.com.

## Executar localmente

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Abra http://127.0.0.1:4173/.

## Arquivos

- `index.html`: conteúdo, formulário, FAQ e dados estruturados.
- `styles.css`: fontes locais, cores, layout e regras responsivas.
- `script.js`: menu móvel, seleção de assunto, máscara, validação e preparação da mensagem.
- `assets/`: imagens e ícones. As cenas de família têm versões WebP de 640 e 1120 px, escolhidas pelo navegador conforme a tela.
- `assets/fonts/`: WOFF2 de DM Sans e Lora, com licenças OFL.
- `DESIGN.md`: direção visual e critérios de revisão.
- `COPY-REWRITE.md`: pesquisa, decisões de copy e padrão editorial.
- `IMAGENS.md`: origem e prompts das duas novas fotos ilustrativas.
- `.vercelignore`: mantém pesquisas locais, documentos de trabalho e originais não utilizados fora da publicação.
- `llms.txt`, `robots.txt` e `sitemap.xml`: informações públicas de descoberta.

## Contato pelo WhatsApp

O formulário valida nome, telefone brasileiro e consentimento. O assunto é opcional. Ao continuar, abre uma mensagem preenchida para o WhatsApp do escritório, contendo nome, telefone e assunto. O visitante precisa enviar a mensagem para iniciar a conversa.

Não há backend, gravação de leads ou envio automático. Os dados permanecem nos campos caso seja necessário corrigir a mensagem. Um link visível permite abrir a conversa se a nova aba for bloqueada.

Eventos opcionais, emitidos somente quando já há `window.dataLayer` ou `window.lpTrack`: `cta_click`, `situation_selected` e `whatsapp_message_prepared`. Não incluem nome nem telefone. Preparar a mensagem não equivale a confirmar um lead recebido.

## Verificação

```bash
node --check script.js
git diff --check
```

Conferir também:

1. Layout em 320, 375, 390, 768, 1024 e 1440 px, sem rolagem lateral.
2. CTA da abertura, menu por teclado e toque, FAQ e preferência por movimento reduzido.
3. Seleção de todos os assuntos, mensagens de erro e telefone com DDD.
4. Conteúdo e destino da mensagem preparada, interceptando a navegação durante os testes.
5. Uma única aba de WhatsApp e preservação dos campos.
6. Paridade das seis respostas do FAQ com o JSON-LD, IDs únicos, âncoras e assets.

## Publicação

A pasta está vinculada ao projeto Vercel `landpage-previdencia-ronaldo-moura`. A publicação é estática e usa o domínio informado acima. Após publicar, conferir conteúdo e assets no domínio de produção. Mudanças de domínio, integrações de CRM e serviços adicionais exigem definição própria; não fazem parte deste site.
