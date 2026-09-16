# GEO Audit Report: Ronaldo Moura, Advocacia Previdenciária

**Audit date:** 16 September 2026
**Audited URL:** <https://landpage-previdencia-ronaldo-moura.vercel.app/>
**Business type:** local legal service in Marília, SP, with online service in Brazil
**Pages analyzed:** 1 public landing page, plus `robots.txt`, `sitemap.xml`, `llms.txt` and declared canonical resources

## Executive assessment

**GEO score: 48/100, Poor.** The landing has a solid source-level base for retrieval: it returns HTTP 200, exposes substantive HTML without JavaScript, has a clear FAQ, identifies the attorney and OAB registration, and permits crawlers. The decisive problem is entity integrity. Canonical, Open Graph, sitemap, robots sitemap reference, `llms.txt`, JSON-LD identifiers and several media URLs point to `https://ronaldomoura.adv.br/`, which currently serves Moura Multas, a site about direito de trânsito, not the previdenciary practice.

That error can cause search engines and AI retrieval systems to consolidate the previdenciary content with a different legal service. It must be resolved before investing in new guides, link building, monitoring or platform-specific GEO work.

| Dimension | Score | Weight | Weighted result | Main evidence |
|---|---:|---:|---:|---|
| AI citability and access | 54 | 25% | 13.50 | Strong HTML and FAQ, but discovery signals redirect machines to another service |
| Brand authority | 8 | 20% | 1.60 | Limited independent corroboration of the previdenciary practice entity |
| Content E-E-A-T | 63 | 20% | 12.60 | Named attorney, OAB, local identity and process clarity; no topic library or case evidence |
| Technical foundations | 74 | 15% | 11.10 | Static readable page and good response, but critical canonical and sitemap conflict |
| Structured data | 58 | 10% | 5.80 | Good type coverage, FAQ and `speakable`; entity URLs use the wrong host |
| Platform readiness | 33 | 10% | 3.30 | Access is open, while correct discovery and indexation are unverified |
| **Composite GEO score** |  | **100%** | **47.90, rounded to 48** | **Poor** |

The score is a readiness assessment based on public evidence, not a ranking, traffic or AI-citation measurement. Search Console, Bing Webmaster Tools, server logs, CrUX and platform citation data were not available. No claim of current indexation or presence in Google AI Overviews, ChatGPT Search, Perplexity, Gemini or Copilot is made here.

## The single critical fix

Choose the one public domain that will represent the previdenciary practice. Then make the selected host serve this exact landing and use it consistently in every identity signal:

1. `rel=canonical`, `og:url`, `og:image`, Twitter image and all social preview assets.
2. `WebSite`, `WebPage`, `LegalService`, `Person` and `FAQPage` URLs and `@id` values in JSON-LD.
3. `robots.txt`, the sitemap reference, `sitemap.xml`, `llms.txt` and all internal absolute URLs.
4. Google Search Console and Bing Webmaster Tools verification, only after the files above are correct.

If the Vercel hostname is only a preview, it should not remain indexable while declaring an unrelated canonical. If `ronaldomoura.adv.br` is intended to be production, it must first deliver the previdenciary landing, its real social images, `robots.txt` and `sitemap.xml`. The currently declared canonical is live, but its page title identifies Moura Multas and traffic-law services, so it is not a safe canonical destination for this content: <https://ronaldomoura.adv.br/>.

## AI citability and crawler access: 54/100

The landing is structurally easy to quote. The raw response includes the navigation, a single H1, eight H2 sections, FAQ answers, contact context, attorney identity and JSON-LD. This allows retrieval systems that do not execute JavaScript to read the meaningful content. The page has useful standalone blocks, especially the document checklist for first contact, the statement that no benefit is guaranteed, the explanation of who assesses the case, and FAQ answers about process and timelines.

| Citability component | Score | Assessment |
|---|---:|---|
| Answer structure | 82 | One H1, descriptive sections and visible FAQ support extraction |
| Factual specificity | 72 | OAB, service scope, city and document list are concrete; legal claims need nearby primary citations |
| Primary evidence and depth | 55 | Official sources appear in a collective reference block, but no dedicated guides or original analysis exist |
| Page-level citability | **77** | Strong for a conversion landing, constrained by single-page topical depth |

The `robots.txt` is permissive through `User-agent: *` and `Allow: /`. Under that wildcard, GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Amazonbot, Google-Extended, Bytespider, CCBot, Applebot-Extended, FacebookBot and Cohere-ai are not blocked by a more specific rule. Direct requests using representative crawler user agents returned HTTP 200. That does not validate crawler source IPs or prove indexation, but it shows no public robots restriction.

The discovery metadata reverses much of this benefit. The [live robots file](https://landpage-previdencia-ronaldo-moura.vercel.app/robots.txt) names `https://ronaldomoura.adv.br/sitemap.xml`, which returned 404. The [Vercel sitemap](https://landpage-previdencia-ronaldo-moura.vercel.app/sitemap.xml) has one URL and it is the unrelated canonical host. Crawler access is therefore open, while its discovery path is inaccurate.

`[llms.txt](https://landpage-previdencia-ronaldo-moura.vercel.app/llms.txt)` is present and well organized: H1, summary, Key Facts, Contact and Legal sections. Its only documentation link and contact website point to the unrelated canonical host. It earns format credit but is operationally inaccurate. `llms-full.txt` returned 404, which is not a defect by itself; a full version should only exist when there is real, maintained source content to include.

### Priority content actions

After the domain correction, publish a small set of signed, source-linked guides for the high-intent questions already represented on the landing: benefit denial, BPC/LOAS, CNIS, benefit review and consignado deductions. Each guide should answer the question in the opening paragraph, identify the attorney and review date, link to the exact official source next to time-sensitive claims, and link back to the service page. The purpose is durable retrieval value, not a claim of guaranteed AI inclusion.

The page should retain its current caution about individual assessment. The OAB advertising rules require informative, discreet and truthful professional communications and restrict outcome guarantees and promotional claims: [OAB Provimento 205/2021](https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021).

## Brand authority: 8/100

The landing itself has a usable first-party identity: Ronaldo Rodrigues Moura, OAB/SP 367822, Marília, contact channels and a stated previdenciary focus. Public searches did not establish a separate, recognized `Ronaldo Moura, Advocacia Previdenciária` entity across independent sources.

| Presence check | Result | Interpretation |
|---|---|---|
| Wikipedia and Wikidata | No matching attorney entity found | No action should be taken to manufacture an encyclopedic entry |
| Reddit and YouTube | No relevant exact-brand result in the sampled search | No evidence of a visible public content footprint |
| LinkedIn | A similarly named profile appeared, without verified connection to this practice | Identity remains weakly corroborated |
| Official and industry sources | Limited court-agenda and registry-style identity corroboration | Supports professional identity, not topical authority or recommendation |

The right next step is consistent first-party entity data: a verified Google Business Profile, official professional Instagram and LinkedIn profiles, and the production domain should display the same name, OAB number, phone, address or service area, and website URL. Do not create artificial Wikipedia, review, forum or press activity. The objective is accurate corroboration that users and crawlers can independently verify.

## Content E-E-A-T: 63/100

| Signal | Score | Evidence and gap |
|---|---:|---|
| Experience | 12/25 | The page explains the first-contact process and required documents. It has no anonymized educational case examples or first-party procedural insights. |
| Expertise | 19/25 | A named lawyer, OAB registration, benefits and process explanations make the expertise legible. Several legal and benefits figures need precise nearby sources and review dates. |
| Authority | 9/25 | The page names credible professional details, while independent topical recognition and a content library are absent. |
| Trust | 23/25 | No-outcome guarantee, privacy section, direct contact, local address and sources are strong. Canonical identity conflict is a major trust reduction. |
| **E-E-A-T total** | **63/100** | Adequate landing-page trust base, not yet a durable information source. |

The FAQ's stated timelines and the consignado percentage breakdown are useful only if the page links each current claim to the precise official source. Previdenciary rules and ongoing judicial themes change. For example, the STJ identifies Tema Repetitivo 1435 as addressing whether improper deductions from previdenciary benefits create presumed moral damage, so the page should not imply that a final uniform outcome already exists: [STJ Tema 1435](https://processo.stj.jus.br/repetitivos/temas_repetitivos/pesquisa.jsp?cod_tema_final=1435&cod_tema_inicial=1435&novaConsulta=true&tipo_pesquisa=T). Official INSS information should also be cited at the claim level, rather than in a generic source list: [Meu INSS](https://www.gov.br/inss/pt-br/canais_atendimento/meu-inss/meu-inss).

## Technical foundations: 74/100

| Category | Score | Evidence |
|---|---:|---|
| Server-side content | 100 | HTML response contains the substantive landing and structured data |
| Meta tags and indexability | 30 | Relevant title, description, language, viewport and robots; canonical and social identity point elsewhere |
| Crawlability | 65 | Public robots and sitemap exist, but target the wrong host |
| Security headers | 60 | HTTPS and HSTS are present; CSP, frame, MIME, referrer and permissions policies were absent in sampled headers |
| Performance risk | 85 | Small static response, one deferred script and fixed image dimensions indicate low source-level risk |
| Mobile source signals | 85 | Responsive breakpoints, readable base size and most primary controls meet 48 px; compact controls need real-device review |
| URL and response | 95 | HTTPS, HTTP 200 and a clean root path; Vercel hostname is not a confirmed final identity |
| Additional deployment checks | 50 | Image, schema and sitemap assets are tied to the wrong declared host |
| **Technical total** | **74/100** | The page is technically readable, while publication identity is critically inconsistent. |

The sampled response had HSTS, compression, cache-hit behavior and a single-request TTFB near 283 ms. This is not Core Web Vitals data. The PageSpeed API was unavailable because of quota exhaustion, and no CrUX data was available. Measure LCP, INP and CLS after production host alignment, using field data or a reproducible PageSpeed run.

The highest-value technical action after host correction is to add a Content Security Policy, `X-Content-Type-Options`, clickjacking protection, `Referrer-Policy` and `Permissions-Policy` at the deployment layer. It is secondary to the canonical fix, but it reduces deployment exposure and completes the public-site baseline.

## Structured data: 58/100

The source contains valid JSON-LD with `WebSite`, `WebPage`, `LegalService`, `Person` and `FAQPage`. The `LegalService` object has address, contact, service scope and social profiles; `Person` has name, professional role, OAB identifier and works-for relation. FAQ answers are visible in the HTML, and a `SpeakableSpecification` targets concise hero text. This is a credible schema base for a single landing.

| Schema area | Score | Finding |
|---|---:|---|
| Syntax and renderability | 95 | Valid JSON-LD is present in source HTML |
| Entity coverage | 85 | Appropriate `LegalService`, `Person`, page, site and FAQ entities |
| Identity consistency | 10 | Every key URL, ID and image identifies the wrong host |
| Relationship clarity | 75 | Attorney, organization and page links are coherent within the graph, but on the wrong domain |
| Topical expansion readiness | 45 | No Article or BlogPosting pattern exists because there are no guides yet |
| **Schema total** | **58/100** | Rich structure, invalid practical attribution until host values are corrected. |

Correcting the host is enough for the first schema pass. Do not add schema types merely to chase results. When signed guides exist, use `Article` or `BlogPosting` with author, reviewed date, publisher and direct links to the `Person` and `LegalService` nodes. Add `BreadcrumbList` only when the site has genuine hierarchical URLs. FAQ markup may help semantic understanding, but Google limits FAQ rich results primarily to well-known government and health sites, so it should not be sold as a visible-results promise.

## Platform readiness: 33/100

These scores measure observable preparation, not rankings or citations.

| Platform | Score | Basis |
|---|---:|---|
| Google AI Overviews | 25 | Crawlable page, but no indexation proof and canonical eligibility is compromised |
| ChatGPT Search | 45 | `OAI-SearchBot` is not blocked; discovery and entity identity remain inconsistent |
| Perplexity | 42 | Wildcard robots allows crawling; no public inclusion evidence and source identity conflict persist |
| Gemini | 30 | Public HTML is usable, but no dedicated submission path or indexation evidence exists |
| Bing Copilot | 25 | `bingbot` access is open, but sitemap and canonical point to the wrong host |
| **Platform average** | **33** | Correct discovery and verified webmaster data are required before measurement. |

Google states that pages must be indexed and eligible to show a snippet in Google Search before they can be used as a supporting link in AI features. It does not require special AI markup: [Google AI features and your website](https://developers.google.com/search/docs/appearance/ai-features). OpenAI documents that publishers can control search crawling through `OAI-SearchBot`: [OpenAI publisher FAQ](https://help.openai.com/en/articles/12627856). These are access and eligibility conditions, not promises of citation.

## Action plan

### First 48 hours

1. Decide whether the Vercel host or a custom domain is the public production URL for previdenciary services.
2. Make that host serve the landing, then replace every cross-host value in HTML, JSON-LD, `robots.txt`, `sitemap.xml` and `llms.txt`.
3. Verify that the final homepage, its social image, `/robots.txt`, `/sitemap.xml` and every schema URL return the correct service and HTTP 200.
4. If Vercel remains only a preview, apply `noindex, nofollow` there until production is ready.

### Next 30 days

1. Verify the production property in Search Console and Bing Webmaster Tools, submit the production sitemap and inspect the final URL.
2. Publish five attorney-reviewed guides for denial, BPC/LOAS, CNIS, review and consignado, each with a direct official source beside each variable legal or benefits claim.
3. Create coherent professional profiles and a verified business profile using the exact production identity data.
4. Add security headers and run a real mobile and Core Web Vitals verification on the final domain.
5. Update `llms.txt` only with correct, maintained canonical links. Publish `llms-full.txt` only if there is enough substantive material to make it accurate.

## Evidence boundaries and sources

This audit used public HTTP responses, rendered source analysis and sampled public searches on 16 September 2026. It did not access private analytics, Search Console, Bing Webmaster Tools, Google Business Profile, server logs, platform internal indexes or paid databases. The following public resources support the external guidance used above:

- [Audited landing](https://landpage-previdencia-ronaldo-moura.vercel.app/)
- [Live robots file](https://landpage-previdencia-ronaldo-moura.vercel.app/robots.txt)
- [Live sitemap](https://landpage-previdencia-ronaldo-moura.vercel.app/sitemap.xml)
- [Live llms.txt](https://landpage-previdencia-ronaldo-moura.vercel.app/llms.txt)
- [Declared canonical host](https://ronaldomoura.adv.br/)
- [Google guidance for AI features](https://developers.google.com/search/docs/appearance/ai-features)
- [OpenAI publisher and developer FAQ](https://help.openai.com/en/articles/12627856)
- [OAB Provimento 205/2021](https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021)
- [STJ Tema Repetitivo 1435](https://processo.stj.jus.br/repetitivos/temas_repetitivos/pesquisa.jsp?cod_tema_final=1435&cod_tema_inicial=1435&novaConsulta=true&tipo_pesquisa=T)
