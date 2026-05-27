# GEO: Generative Engine Optimization for Appdraft
## How to Get Recommended by AI Assistants as a Salesforce Consultancy

**Research Date:** 25 May 2026  
**Purpose:** Actionable strategy for Appdraft (appdraft.com) to appear in AI recommendations for queries like "best Salesforce consultants in London" or "recommend a Salesforce implementation partner in the UK"  
**Confidence:** High — based on multiple primary and academic sources

---

## 1. How LLMs Decide Who to Recommend

### The Core Mechanism: Training Data + Live Retrieval (RAG)

Modern AI answer engines use two distinct layers:

**Layer 1 — Training Data (the "prior")**
LLMs are trained on massive web corpora. When a user asks a question without triggering a live web search, the model draws on patterns from its training data. A brand that appears frequently in that data — in articles, reviews, forum discussions, and editorial content — will be surfaced more confidently.

- **OpenAI (ChatGPT):** Trained on Common Crawl, Wikipedia, books, licensed datasets, and its own crawl (GPTBot). Common Crawl is an open web archive with 250+ billion pages going back to 2008. Knowledge cutoff for GPT-4o is approximately early 2025 but is regularly updated.
- **Anthropic (Claude):** Trained on The Pile + Common Crawl + proprietary mix of internet data (as of March 2025), books, academic papers, code repositories, and curated high-quality text. Also uses data from users who have opted in. Anthropic operates its own general-purpose web crawler respecting robots.txt.
- **Google (Gemini):** Uses Google's own crawl index plus YouTube, Google Books, and Scholar data. Draws from the same index as traditional Google Search.

**Layer 2 — Live Retrieval (RAG)**
When users ask questions that benefit from fresh information, the AI queries a live search index:

| AI Platform | Live Search Backend | Alignment with Backend |
|-------------|--------------------|-----------------------|
| ChatGPT (with browsing) | Microsoft Bing | 87% citation alignment with Bing top results |
| Claude (with web search) | Brave Search | 86.7% alignment with Brave organic results |
| Perplexity | Own index + multiple sources | Fresh content heavily favoured |
| Google AI Overviews | Google Search index | Draws directly from Google's index |

**Practical implication:** To appear in AI recommendations, you need to be both (a) present in training data through wide third-party coverage, and (b) ranking well in Bing and Brave Search for relevant queries, since these power live retrieval for ChatGPT and Claude respectively.

### OpenAI's Crawlers (2026 Data)
OpenAI operates three crawlers:
1. **GPTBot** — crawls sites for training data. 3.6x more requests than Googlebot as of early 2026.
2. **ChatGPT-User** — real-time retrieval when users ask questions requiring current web data.
3. **OAI-SearchBot** — indexes content for search within ChatGPT.

To allow GPTBot: ensure your robots.txt does not block it, and that your site is publicly accessible.

### Does ChatGPT Actually Browse Live Sites?

Yes, but only when browsing is enabled (Plus/Pro/Enterprise users by default). The retrieval crawler fetches live pages in real time. However, the majority of casual queries use training data only. For B2B research queries — which are more common among informed users — browsing is more likely to be triggered.

**Key finding:** 44% of ChatGPT citations are drawn from the first third of a page's content. Put your most citable content — specific claims, stats, named expertise — near the top.

---

## 2. Which Sources Do AI Tools Trust Most?

### Citation Frequency by Platform (Aggregate Data, 2026)

| Source Type | ChatGPT | Perplexity | Claude | Google AI |
|-------------|---------|------------|--------|-----------|
| Wikipedia | Very high (47.9% of citations) | Moderate | High | High |
| Reddit | Moderate | Very high (46.7%) | Low | High |
| LinkedIn | Moderate | Moderate | Moderate | Moderate |
| YouTube | High | High | Low | High |
| Industry directories (Clutch, G2) | Very high | Very high | Moderate | High |
| News/press coverage | High | High | High | High |
| Brand websites | Low (6-15%) | Low | Low | Moderate |

**Critical finding:** 85.5–94% of AI citations come from earned media and third-party sources. Brand websites are rarely cited directly. This is the single most important insight for GEO strategy.

### For Agency/Consulting Queries Specifically:
- **Clutch.co commands 84.5% of citations** when AI tools recommend agencies — near-total dominance in agency discovery.
- Perplexity specifically crawls Clutch for agency recommendation queries.
- Agencies with 3+ Clutch reviews and published case studies appear in **3x more AI recommendation queries**.

---

## 3. GEO Best Practices — What's Actually Working

### Content Structures That Get Referenced

Based on the original Princeton GEO study (arxiv.org/pdf/2311.09735) and subsequent empirical research:

**Highest-impact content tactics (ranked by citation lift):**
1. **Expert quotations** — +41% visibility boost
2. **Statistics and specific data** — +32% boost
3. **Authoritative source citations within your content** — +30% boost
4. **FAQ format** — highest citation format for generative engines; maps directly to how users query AI
5. **Comparison content** — "X vs Y" formats perform strongly
6. **Answer-first structure** — lead with the direct answer, follow with supporting detail

**Structural elements that increase citation likelihood:**
- Clear heading hierarchy (H1 → H2 → H3)
- Short paragraphs (3-4 sentences)
- Bullet points and numbered lists
- HTML tables for comparisons
- Definition blocks for technical terms

LLMs are **28-40% more likely to cite content with clear formatting** (hierarchical headings, bullets, tables) compared to equivalent prose.

### Schema Markup — It Does Help

This is not just theoretical:
- **71% of pages cited by ChatGPT include structured data** (schema markup)
- **65% of pages cited by Google AI Mode include it**
- Pages with schema markup are **2-4x more likely to appear in Google AI Overviews**
- Pages with FAQ, HowTo, or QAPage schema appear **20-30% more often** in AI-generated summaries

**Most valuable schema types for Appdraft:**
- `Organization` — establishes entity clearly (name, location, founding date, services)
- `LocalBusiness` — critical for "London" / "UK" queries
- `FAQ` — maps Q&A content directly to AI query format
- `Service` — describes specific services (Salesforce implementation, support, etc.)
- `Review` / `AggregateRating` — surfaces your AppExchange/Clutch ratings
- `Article` — for blog content with author and date
- `BreadcrumbList` — helps AI understand site structure

### Brand Mentions vs. Backlinks

**Brand mentions are now 3x more influential than backlinks for AI citation.**

- LLMs treat brands as "entities" — they learn who you are through consistent co-occurrence of your name with relevant terms across many sources.
- An unlinked mention of "Appdraft" on Reddit alongside "Salesforce London" teaches the model your entity and context.
- A high-authority guest post backlink from a sponsored placement carries less weight than an authentic unlinked discussion mentioning your brand.
- **Brands appearing consistently across 4+ non-affiliated platforms are 2.8x more likely to appear in ChatGPT responses.**
- **Mentions on Quora and Reddit alone correlate with 4x higher citation likelihood.**
- **Third-party review profiles (G2, Clutch, Trustpilot) increase citation chances by 3x.**

---

## 4. Perplexity Specifically — The B2B Research Engine

Perplexity processes 780M+ monthly queries and is heavily used for B2B research. It uses a RAG-based retrieval system with its own index.

### How Perplexity Selects Sources

Perplexity has a **two-stage citation process:**

**Stage 1 — Source Selection:** The page must be retrieved from Perplexity's index for the query. Factors:
- Content freshness (strong preference for content updated within 6 months)
- Topical relevance and specificity
- Domain authority signals
- Structural clarity (clear headings, lists, tables)

**Stage 2 — Answer Absorption:** The specific claim or passage must be absorbed into the generated answer. Factors:
- Extractable, quotable content (specific claims, stats, named entities)
- Consistent entity mentions across multiple sources
- Content that directly answers the question format

### Perplexity Citation Pattern
- 46.7% of Perplexity's top citations are from Reddit — nearly 2x more than Wikipedia
- 82% citation rate for content that is less than 30 days old
- Strongly favours community-driven, discussion-based content over formal editorial

### How to Get Cited in Perplexity
1. Ensure Perplexity can crawl your site (check your robots.txt; Perplexity uses its own bot)
2. Have a strong Clutch profile (Perplexity crawls Clutch specifically for agency/service queries)
3. Create answer-first content pages targeting specific B2B research queries
4. Participate in or encourage brand mentions in Reddit discussions related to Salesforce
5. Publish fresh content regularly (Perplexity strongly penalises stale content)

---

## 5. Practical Tactics Verified to Work

### Review Platforms — Do AI Tools Pull From These?

**Yes — with major platform differences:**

| Platform | AI Crawl Access | Citation Strength | Notes |
|----------|----------------|------------------|-------|
| Clutch.co | Full access (no training restriction) | Very high — 84.5% of agency citations | Most important for services |
| G2 | Allows search access, prohibits training | High — ~50 review threshold for confident citation | B2B software focus |
| Trustpilot | Full access | Moderate-high | Consumer + B2B |
| Capterra | Full access | Moderate | |
| AppExchange | Full access | High for Salesforce queries | Perplexity actively cites it |
| Gartner | Restricts training | Lower | |

**Specific finding on AppExchange:** Perplexity actively cites AppExchange and G2 category pages for Salesforce-related queries. Having a strong AppExchange presence with verified reviews is a direct citation signal for Salesforce-specific AI queries.

**G2 review threshold:** Models cite vendors confidently by name only after approximately 50 reviews. Below this threshold, your profile may exist but not generate AI citation signal.

### "Best Of" Lists and Comparison Articles

Third-party media coverage makes brands **5x more likely to be cited** by AI engines. Specifically:

- Being listed in "top Salesforce consultants in the UK" articles on sites with domain authority is essential
- The site ranking the article in Bing and Brave is what ultimately matters (since these power ChatGPT and Claude live retrieval)
- A single placement on a high-authority directory site (Clutch, IT Firm, GoodFirms, DesignRush) can drive disproportionate AI citation

### LinkedIn Company Page

LinkedIn articles and company pages are consistently cited by multiple AI platforms. Specific actions:
- Complete your LinkedIn company profile fully (all fields, description using natural language descriptions of services + location)
- Publish LinkedIn articles (not just posts) with educational content about Salesforce implementations
- LinkedIn articles are indexed by Google, Bing, and Brave — so they enter the retrieval layer
- Entity consistency: ensure your company name, location, and service descriptions match exactly across LinkedIn, your website, Google Business Profile, and Clutch

### Press Releases and News Coverage

**Important nuance from 2026 research:**
- Syndicated press releases on wire services account for only **0.04% of all AI citations**
- But placements that get picked up by actual editorial outlets do generate citations
- PRNewswire as a domain leads with 799 AI citations over 30 days — but this is the aggregated content of real news, not the press releases themselves
- The play is: use press releases to seed coverage that gets picked up by indexed trade publications

**Most cited publication types for B2B/professional services:**
- Trade press in your vertical (Salesforce-specific publications, IT/tech trade press)
- Forbes (owns 6.93% of ChatGPT citations; ranked 5th overall)
- Domain-specific review and comparison sites

**The Trade Press AI Index (2026)** found that trade publications are being "reranked" by AI retrieval layers — being cited in specialist press (e.g., Salesforce Ben, CRM Magazine, Computer Weekly for UK audiences) now has direct AI citation value.

---

## 6. Case Studies — Verified Results

### B2B Software Company: Zero to 40% Citation Rate
A B2B software company went from zero AI visibility to being recommended in 40% of relevant ChatGPT queries within 90 days by:
1. Adding FAQ schema to all service pages
2. Publishing comparison content ("X vs competitor" format)
3. Building Clutch reviews to 15+ with case studies
4. Getting 3 editorial mentions in trade publications

### Mentimeter (SaaS Platform)
One of the first B2B companies to document large-scale AI search conversion data. Strategy:
- Optimized help documentation and use-case pages for AI extraction
- Focused on answering specific questions SaaS buyers ask AI assistants
- Structured comparison content for category queries

### Outdoor Retailer (E-commerce)
- Implemented product schema markup across entire catalog
- Created detailed buying guides for specific use cases
- Result: 95% increase in traffic from Shopping AI features, 156% revenue growth from AI-sourced channels within 3 months

### Generic B2B Professional Services Pattern (from Seer Interactive)
- Structured GEO implementations achieve up to **37% visibility increases** in AI-generated responses
- Optimized content can exceed **40% improvement rates**
- Timeline: Structural optimisations (schema, formatting) impact citations within 30-60 days; fastest gains come from adding statistics and structured answers to existing high-performing content within 30-45 days

---

## 7. What Anthropic and OpenAI Train On — Getting Into the Corpus

### OpenAI Training Data (ChatGPT)
- **Common Crawl** — the primary source; 250+ billion pages crawled monthly since 2008
- **Wikipedia** — extensively used for factual grounding
- **Books** (Books1, Books2 datasets)
- **WebText** (Reddit-curated links)
- **Licensed data** from publishers and data providers
- **OpenAI's own crawls** via GPTBot (which now crawls 3.6x more than Googlebot)

**How to get into GPT's training data:**
1. Ensure GPTBot is not blocked in your robots.txt
2. Be on a site that Common Crawl indexes (any publicly accessible site with inbound links will be crawled)
3. Have your brand mentioned on sites that are heavily represented in the corpus: Wikipedia, Reddit, major news outlets, industry publications
4. The key is **frequency of co-occurrence** — your brand name appearing alongside "Salesforce London", "Salesforce UK partner", "Salesforce implementation" across many independent sources

**Common Crawl accessibility:** A newly published page can appear in Common Crawl within hours if the site has established crawl priority. Common Crawl runs monthly crawl cycles.

### Anthropic Training Data (Claude)
- **The Pile** (open dataset: CommonCrawl, GitHub, Wikipedia, Stack Exchange, PubMed, HackerNews, OpenWebText, ArXiv, etc.)
- **Common Crawl** (directly, with quality filtering)
- **Non-public third-party data** (licensed)
- **User data** (from users who have opted in)
- **Anthropic's own web crawl** (respecting robots.txt)

**Claude's search backend is Brave Search** — so Brave Search rankings directly determine what Claude surfaces in live queries. Brave's index is smaller than Google/Bing but values quality over quantity, and respects user-privacy signals.

**How to get cited by Claude:**
1. Rank in Brave Search for target queries (standard SEO applies)
2. Use clean semantic HTML with clear structure — "less noise around content means Claude can extract and cite it more efficiently"
3. Use academic-style citations and formal language in your content
4. Short paragraphs with clear headings — Claude prefers these for summarisation

### The Common Crawl Entry Point — Practical Steps
Since Common Crawl underpins both GPT and Claude training:
1. **Do not block CCBot in robots.txt** (Common Crawl's crawler)
2. Ensure your site is indexed by major search engines (inbound links help discovery)
3. Publish content on platforms that are heavily crawled: LinkedIn Articles, Medium, Substack, GitHub
4. Get mentions on Reddit, Quora, and Hacker News — these are in Common Crawl and also specifically referenced in AI training datasets

---

## 8. Appdraft-Specific Action Plan

### Immediate (0-30 days) — Technical Foundation

**Schema Markup Implementation:**
- Add `Organization` schema: name, URL, logo, founding date, address (London, UK), description, sameAs links to LinkedIn, Clutch, AppExchange
- Add `LocalBusiness` schema targeting UK/London service area
- Add `Service` schema for each service page (Implementation, Support, Health Checks, Custom Development)
- Add `FAQ` schema to each service page (5-8 Q&As per page, targeting natural language queries)
- Add `AggregateRating` schema pulling from AppExchange/Clutch reviews
- Add `Article` schema with author and datePublished to all blog posts

**Content Structure Audit:**
- Ensure first 200 words of each service page contain a direct, citable answer to the core query ("Appdraft is a UK-based Salesforce consultancy specialising in...")
- Add statistics to each service page (130+ projects, 15+ years, 5.0 rating)
- Add comparison tables where relevant (e.g., implementation approaches, service tiers)
- Add FAQ sections explicitly targeting queries like "who are the best Salesforce consultants in London?"

### Short-term (30-90 days) — Review and Directory Presence

**Clutch Profile — Highest Priority:**
- Create/optimise Clutch profile completely (Clutch commands 84.5% of agency citations in AI)
- Target 10-15 verified reviews minimum; 3+ case studies published
- Categories: Salesforce CRM Consulting, CRM Consulting & SI, UK
- Ensure profile is updated within the last 30 days (Perplexity favours fresh content)

**AppExchange Reviews:**
- AppExchange is actively cited by Perplexity for Salesforce partner queries
- Encourage existing customers to leave AppExchange reviews
- Ensure your partner listing describes your London/UK location explicitly

**Other Directories:**
- GoodFirms (Salesforce consulting category)
- DesignRush (UK CRM consultants)
- IT Firms
- Ensure **entity consistency** across all: same company name, address, phone, service descriptions

**G2 Profile:**
- Less critical for services than Clutch, but a complete G2 profile adds to the "4+ platform" threshold that improves citation rates

### Medium-term (90-180 days) — Earned Media and Authority Building

**Trade Press Coverage — Highest ROI for Training Data:**

Target publications with confirmed AI citation authority:
- **Salesforce Ben** (highly cited for Salesforce-specific queries)
- **CRM Magazine** / Destination CRM
- **Computer Weekly** (UK tech press, high domain authority)
- **IT Pro** (UK)
- **Diginomica** (UK B2B tech, strong editorial)
- **The Drum** (UK marketing/tech)

Tactics:
- Pitch guest articles: "What UK businesses need to know about Salesforce implementation in 2026"
- Offer expert commentary on industry trends for journalist roundups
- Respond to HARO/Connectively requests for Salesforce/CRM expertise
- Publish original data/research that trade press can cite (e.g., survey of UK Salesforce adoption patterns)

**Reddit Presence (Perplexity):**
- Perplexity draws 46.7% of citations from Reddit
- Be active in: r/salesforce, r/CRM, r/msp, r/consulting
- Answer questions helpfully with genuine expertise; mention Appdraft naturally when relevant
- Do not spam — Reddit detects and penalises promotional content; authentic answers only
- Encourage satisfied clients to mention Appdraft in relevant discussions

**LinkedIn Articles (not just posts):**
- Publish long-form LinkedIn Articles (not status updates) on Salesforce implementation topics
- LinkedIn articles are indexed by Google, Bing, and Brave
- Format: answer-first, with headers, bullet points, specific data
- Target: 2-4 articles/month, each targeting a specific query ("Salesforce implementation costs UK", "how to choose a Salesforce partner", etc.)

### Ongoing — Content Strategy for AI Citation

**Create "AI-Citation-First" Content:**

For each core query you want to appear in, create a dedicated page or blog post that:
1. Has the query as the H1 headline ("Who are the best Salesforce consultants in London?")
2. Provides a direct, quotable answer in the first 100 words
3. Uses specific data (years of experience, number of projects, certifications)
4. Includes FAQ schema
5. Links to your Clutch profile, AppExchange listing, and case studies

**Content Types with Highest AI Citation Rates:**
1. Comparison articles (Clutch vs competitor analysis, "Salesforce vs HubSpot for [industry]")
2. How-to guides with numbered steps (AI loves extractable lists)
3. Statistics roundups with original data from your own project experience
4. Glossary/definition pages for Salesforce terminology
5. Industry-specific use cases ("Salesforce for UK financial services")

**Frequency and Freshness:**
- Perplexity's 82% citation rate for content <30 days old means regular updates matter
- Update existing pages with new data quarterly at minimum
- Date-stamp content and use `dateModified` in Article schema

---

## 9. Monitoring AI Visibility

**Tools to track whether you're being cited:**

1. **Manual testing** — Ask ChatGPT, Claude, Perplexity, and Google AI Overviews your target queries weekly. Screenshot results.
2. **Brandwatch / Mentionlytics** — Monitor brand mentions including in AI-generated contexts
3. **Profound** (tryprofound.com) — Purpose-built GEO monitoring; tracks AI citations
4. **Evertune** — AI visibility tracking
5. **Scrunch** — AEO/GEO platform

**Target queries to monitor for Appdraft:**
- "best Salesforce consultants in London"
- "Salesforce implementation partner UK"
- "Salesforce support partner UK"
- "who does Salesforce consulting in London"
- "Salesforce partner for [specific cloud] UK"
- "Appdraft" (brand name — should appear in training data results)

---

## 10. Key Numbers to Remember

| Metric | Data |
|--------|------|
| % of AI citations from earned media (not brand sites) | 85.5–94% |
| Clutch's share of agency citations in ChatGPT | 84.5% |
| Citation boost from adding statistics | +32% |
| Citation boost from adding expert quotes | +41% |
| Citation boost from adding authoritative source references | +30% |
| Citation boost from clear formatting (headings/lists) | +28–40% |
| % of ChatGPT citations drawn from first third of content | 44% |
| Citation multiplier for 4+ non-affiliated platform presence | 2.8x |
| Reddit/Quora mention correlation with citation rate | 4x higher |
| Review platform profile (G2/Clutch/Trustpilot) citation effect | 3x higher |
| Third-party media coverage citation multiplier | 5x |
| Schema markup pages vs non-schema in AI Overviews | 2-4x more likely |
| Overlap between top Google rankings and AI-cited sources | <20% (was 70%) |

---

## Open Questions / Areas Needing Verification

1. **AppExchange-specific citation strength** — The data shows Perplexity cites AppExchange for Salesforce queries, but the exact citation frequency for _partner consulting listings_ (vs ISV app listings) is unclear. Testing needed.
2. **Clutch UK specifically** — The 84.5% agency citation figure is from US-centric research. UK-specific Salesforce partner queries may have different patterns. Worth testing directly in ChatGPT and Perplexity.
3. **Training data recency** — Claude's training cutoff is March 2025. Content published after that date will only appear via live retrieval (Brave Search). This makes Brave Search ranking particularly important for Appdraft's short-term strategy.
4. **Brave Search optimization** — Brave Search uses a quality-first index. Its SEO signals are similar to Google but with greater emphasis on privacy and non-commercial content. Limited specific data on Brave-specific optimisation tactics.

---

## Sources

### Academic Research
- [GEO: Generative Engine Optimization (Princeton/CMU, 2023)](https://arxiv.org/html/2311.09735v3)
- [Generative Engine Optimization (arxiv 2025)](https://arxiv.org/html/2509.08919v1)
- [Beyond Retrieval: Confidence Decay in GEO](https://arxiv.org/pdf/2604.03656)
- [Position: Risks of GEO in the Era of LLMs (TechRxiv)](https://www.techrxiv.org/doi/full/10.36227/techrxiv.176620816.64043115/v1)

### GEO Practitioner Guides
- [Backlinko: Generative Engine Optimization](https://backlinko.com/generative-engine-optimization-geo)
- [Firebrand: GEO Best Practices for 2026](https://www.firebrand.marketing/2025/12/geo-best-practices-2026/)
- [First Page Sage: The GEO Guide](https://firstpagesage.com/seo-blog/the-generative-engine-optimization-geo-guide/)
- [ConnorKimball: 32 GEO Strategies](https://connorkimball.com/blog/best-generative-engine-optimization-geo-strategies/)
- [Profound: 10-step GEO Framework](https://www.tryprofound.com/resources/articles/generative-engine-optimization-geo-guide-2025)

### Citation and Source Research
- [5W Research: 85.5% AI Citations from Earned Media](https://www.prnewswire.com/news-releases/85-5-of-ai-citations-come-from-earned-media--not-brand-websites-5w-releases-ai-and-the-israeli-brand-mapping-the-new-discovery-funnel-302771336.html)
- [5W: AI Platform Citation Source Index 2026](https://www.prnewswire.com/news-releases/5w-releases-ai-platform-citation-source-index-2026-the-50-websites-that-now-decide-what-brands-are-visible-inside-chatgpt-claude-perplexity-gemini-and-google-ai-overviews-302759804.html)
- [Review Platform Citation Analysis (Hall)](https://usehall.com/guides/review-platform-ai-citation-analysis)
- [AI Search Engines Cite Reddit, YouTube, LinkedIn Most (SEL)](https://searchengineland.com/ai-search-engines-cite-reddit-youtube-and-linkedin-most-study-473138)
- [ChatGPT Citations: 44% From First Third of Content (ALM Corp)](https://almcorp.com/blog/chatgpt-citations-study-44-percent-first-third-content/)

### Brand Mentions vs Backlinks
- [Brand Mentions 3x More Important Than Backlinks (Hallam)](https://hallam.agency/blog/brand-mentions-are-now-3x-more-important-than-backlinks-for-ai-search/)
- [Brand Mentions vs Citations vs Backlinks for LLM Discoverability](https://keyword.com/blog/brand-mentions-vs-citations-vs-backlinks-for-llm-discoverability/)

### Platform-Specific Guides
- [How Perplexity Selects Sources (AuthorityTech)](https://authoritytech.io/blog/how-perplexity-selects-sources-algorithm-2026)
- [How to Get Cited in Perplexity (AuthorityTech)](https://authoritytech.io/blog/how-to-get-cited-in-perplexity-ai-2026)
- [B2B Perplexity Citation Guide (AnswerManiac)](https://www.answermaniac.ai/blog/perplexity-citations-b2b-guide)
- [Claude Search Source Selection (IsAgentReady)](https://isagentready.com/en/blog/how-claude-selects-sources-to-cite)
- [Claude AI Optimization (Stackmatix)](https://www.stackmatix.com/blog/claude-ai-optimization)
- [How to Get Cited in Claude (Stridec)](https://www.stridec.com/blog/how-to-get-cited-in-claude/)
- [ChatGPT, Claude, Perplexity Citation Differences (DiscoveredLabs)](https://discoveredlabs.com/blog/chatgpt-claude-perplexity-and-google-ai-overviews-how-each-platform-cites-sources-differently)

### Schema and Technical
- [Schema Markup for AI Citations (Averi)](https://www.averi.ai/blog/schema-markup-for-ai-citations-the-technical-implementation-guide)
- [Schema Markup AI Citation Engine (AuthorityTech)](https://authoritytech.io/curated/schema-markup-ai-citation-engine-geo-tactical-guide)
- [Structured Data for GEO (Digidop)](https://www.digidop.com/blog/structured-data-secret-weapon-seo)

### Training Data and Crawling
- [Where Does ChatGPT Get Its Data (Searchable)](https://www.searchable.com/blog/where-does-chatgpt-get-its-data)
- [How OpenAI Crawls Your Website (Daydream)](https://www.withdaydream.com/library/how-openai-crawls-and-indexes-your-website)
- [ChatGPT Crawls 3.6x More Than Googlebot (SEJ)](https://www.searchenginejournal.com/chatgpt-googlebot-crawl-data-alliai-spa/570885/)
- [What Claude Is Trained On (Tygart Media)](https://tygartmedia.com/what-is-claude-trained-on-2/)
- [Anthropic Transparency Report 2025](https://crfm.stanford.edu/fmti/December-2025/company-reports/Anthropic_FinalReport_FMTI2025.html)
- [Common Crawl](https://commoncrawl.org/)

### Case Studies
- [GEO Case Studies: Leading Brands and Startups (MaximusLabs)](https://www.maximuslabs.ai/generative-engine-optimization/geo-case-studies-success-stories)
- [Real-World GEO Examples (AlphaP)](https://alphap.tech/generative-engine-optimisation-geo-real-world-examples/)
- [Seer Interactive: GEO Case Studies](https://www.seerinteractive.com/insights/strategies-to-battle-against-ai-visibility-case-studies-promising-your-c-level-clone)
- [AEO Success Stories (Stackmatix)](https://www.stackmatix.com/blog/aeo-success-stories-case-studies)

### B2B and Agency-Specific
- [B2B Perplexity and ChatGPT Citation Benchmarks (Averi)](https://www.averi.ai/how-to/chatgpt-vs.-perplexity-vs.-google-ai-mode-the-b2b-saas-citation-benchmarks-report-(2026))
- [Get Recommended by ChatGPT and Perplexity (UpRango)](https://uprango.com/how-to-get-your-brand-recommended-by-chatgpt-perplexity-and-google-ai-in-2026/)
- [GEO by Industry (GetAICited)](https://www.getaicited.co/resources/geo-by-industry)
- [Clutch: 84.5% Agency Citation Dominance (UsseHall)](https://usehall.com/guides/review-platform-ai-citation-analysis)
