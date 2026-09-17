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

- `index.html`: conteúdo, links de WhatsApp com mensagem por assunto, FAQ e dados estruturados.
- `styles.css`: fonte local, cores, layout e regras responsivas.
- `script.js`: menu do celular, registro de cliques em `dataLayer` (se existir) e reprodução do vídeo quando ele aparece na tela.
- `assets/`: imagens, favicon e imagem de compartilhamento (`og-previdenciario.jpg`).
- `assets/video/`: vídeo "Jornada do pedido" e sua capa.
- `assets/fonts/manrope/`: Manrope variável (subconjunto latino), com licença OFL.
- `video/`: código-fonte do vídeo e da imagem de compartilhamento, feito com Remotion.
- `DESIGN.md` e `COPY-REWRITE.md`: direção visual e decisões de texto.
- `llms.txt`, `robots.txt` e `sitemap.xml`: informações públicas de descoberta.

## Vídeo e imagem de compartilhamento

```bash
cd video
npm install
npm run render
```

Gera `assets/video/jornada-pedido-inss.mp4`, a capa em PNG e `assets/og-previdenciario.png`. Converta a capa para WebP e a imagem de compartilhamento para JPEG antes de publicar. O Remotion é gratuito para pessoas físicas e empresas com até 3 funcionários; acima disso exige licença.
