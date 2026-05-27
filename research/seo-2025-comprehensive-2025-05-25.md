# SEO in 2025: Comprehensive Research Report
**Purpose:** Strategic SEO planning for Appdraft — UK-based Salesforce consultancy
**Date:** 25 May 2025
**Confidence:** High — sourced from SEMrush, Ahrefs, Search Engine Land, Search Engine Journal, Google Search Central

---

## Executive Summary

Google's 2024–2025 algorithm period has been the most disruptive since Panda/Penguin. The March 2024 core update permanently folded the Helpful Content System into core ranking, meaning content quality is now evaluated in every update, not separately. The clearest winners are specialist sites with deep topical authority, original data, and verifiable human expertise. The clearest losers are content farms, aggregators, and any site that optimised for search engines rather than humans.

For a Salesforce consultancy like Appdraft, the strategic implication is strong: genuine expertise expressed through well-structured content, with a focus on building topical authority around Salesforce implementation in the UK/specific industries, is now the most defensible SEO position available.

---

## 1. Google's Current Ranking Factors (2025)

### E-E-A-T: The Dominant Framework

Google evaluates all content through E-E-A-T: **Experience, Expertise, Authoritativeness, Trustworthiness**. The additional "E" (Experience) was added in December 2022 and has become progressively more important — Google's March 2026 core update amplified it further.

**What "Experience" means in practice:**
- Content must demonstrate that the author has actually *done* the thing they're describing
- Specific details, real outcomes, named project examples, and measurable results all signal experience
- Generic "here's how Salesforce works" content now loses to "here's what we learned implementing Sales Cloud for a 50-person UK logistics firm"

**Practical E-E-A-T tactics for a B2B services site:**
- **Author pages** with verified credentials, certifications (Salesforce certifications are explicitly credible), LinkedIn links, and photo
- **Case studies** with specific client context, challenges, and outcomes — not just "we helped a client improve efficiency"
- **About page** with team bios, certifications count (Salesforce certs are verifiable), years of experience, and named consultants
- **Client reviews** structured with attribution — the more specific and verifiable, the better
- **Proprietary data** — even a small survey (50+ respondents) creates original statistics only your site can source
- **Consistent author bylines** across content — "Appdraft Team" is weaker than named consultants
- Display Salesforce Partner badge, AppExchange rating (5.0), and project count (130+) prominently on key pages

---

### Core Web Vitals (2025 Thresholds)

INP replaced FID as a metric in March 2024. Current thresholds (75th percentile of real user data):

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| **LCP** (Largest Contentful Paint) | ≤ 2.5s | 2.6–4.0s | > 4.0s |
| **INP** (Interaction to Next Paint) | ≤ 200ms | 201–500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | ≤ 0.1 | 0.1–0.25 | > 0.25 |

**Ranking impact:** Sites meeting all three thresholds see an 8–15% visibility boost. Core Web Vitals account for approximately 10–15% of ranking signals. Only 62% of mobile pages currently achieve a good LCP — making it the hardest threshold and the biggest opportunity.

**Note for Appdraft:** Next.js with Cloudflare Pages is well-positioned for CWV. Priority is LCP (hero images/fonts) and INP (interactive components). Use Google Search Console's "Core Web Vitals" report and PageSpeed Insights for real-user data.

---

### Content Depth vs. Freshness

Both matter but in different ways:

- **Depth** is the stronger long-term signal for competitive queries. Pillar pages (3,000–5,000 words) covering a topic comprehensively outrank shorter content in most B2B service SERPs.
- **Freshness** is critical for AI Overviews: content under 3 months old is 3x more likely to be cited. Regular updates to existing pages (adding new examples, current stats, revised sections) signal freshness without needing new URLs.
- **Information gain** is the emerging concept — Google rewards content that adds *new* information to the web, not just restated existing knowledge. Original case studies, survey data, and unique insights (things only Appdraft knows from doing 130+ projects) have a significant advantage.

---

### Topical Authority

Topical authority is now one of the highest-leverage SEO investments. Google's Knowledge Graph tracks which sites comprehensively cover specific subjects, rewarding those with breadth + depth + consistency.

**How it works:**
- A **pillar page** covers a broad topic (e.g., "Salesforce Implementation UK") at ~3,000–5,000 words
- **Cluster pages** (15–30 articles) each target a specific sub-question or angle within that topic
- All cluster pages link back to the pillar; related cluster pages cross-link to each other
- The pillar's authority accumulates from the cluster, not just its own content

**Measured outcomes:** Content clusters drive 30% more organic traffic and hold rankings 2.5x longer than standalone pages (HireGrowth 2025 analysis). Google's June 2025 core update explicitly reinforced topical authority over legacy domain-level metrics.

**For Appdraft, suggested topic clusters:**
1. Salesforce Implementation (UK) — pillar + cluster: Sales Cloud, Service Cloud, Experience Cloud, Field Service, Marketing Cloud, Agentforce
2. Salesforce Managed Support — pillar + cluster: what's included, cost, vs in-house, response times
3. Salesforce for [Industry] — one cluster per industry (charities, professional services, manufacturing, etc.)
4. Salesforce Health Check — pillar + cluster: what it covers, when you need it, common findings

---

### Internal Linking Strategy

Internal linking directly feeds topical authority. Key principles for 2025:

- **Hub-and-spoke**: All cluster pages link to their pillar. The pillar links to all cluster pages.
- **Lateral links**: Cluster pages link to related cluster pages in adjacent topics (not just upward to pillar)
- **Anchor text**: Use descriptive keyword-rich anchor text (not "click here" or "read more")
- **Link from high-authority pages**: New pages gain authority faster when linked from your most-visited, highest-ranking existing pages
- **Breadcrumbs**: Important for navigational clarity and schema (use BreadcrumbList schema)

---

### Backlink Quality Signals

**Backlinks are still essential** — they remain one of Google's top three signals. But the quality bar has risen dramatically.

**What works in 2025:**
- Editorial links from relevant industry publications (Salesforce ecosystem blogs, UK tech press, CRM industry sites)
- Digital PR: data-led campaigns, expert commentary for journalists — 48.6% of SEO professionals now rate digital PR as the most effective tactic
- Partner/ecosystem links: Salesforce's own AppExchange listing, partner directory pages
- Thought leadership in specialist publications (Salesforce Ben, Salesforce Weekly, IT sector press)
- Links earned through original research/data (the kind other sites cite as sources)

**What's dead or penalised:**
- Mass guest post farms (Google's Link Spam Update explicitly targets these)
- Paid links from unrelated sites
- Blog comment spam, forum spam
- Exact match anchor text manipulation
- Reciprocal link schemes

**Key shift post-HCU:** Contextual relevance now matters as much as domain authority. A link from a DA 40 Salesforce-specific blog is likely worth more than a link from a DA 70 generic marketing blog.

---

### Google AI Overviews: Traffic Impact and Optimisation

This is the most significant structural change to organic search since mobile.

**Traffic impact data (2025):**
- AI Overviews appear on ~48% of all queries (as of March 2026, up from 16% at start of 2025)
- Organic CTR drops 61% (from 1.76% to 0.61%) when an AI Overview appears — Seer Interactive September 2025
- Ahrefs reports 58% lower average CTR for top-ranking pages when AI Overviews appear
- **BUT:** Brands *cited* in AI Overviews earn 35% more organic clicks and 91% more paid clicks

**What AI Overviews cite:**
- 88% of queries triggering AIO are informational — "how-to" and definitional content is most affected
- Transactional and commercial queries (pricing, comparisons, "best X for Y") have much lower AIO rates (3–4%) — this is where Appdraft should focus
- Freshness matters: content < 3 months old is 3x more likely to be cited
- Bullet-pointed and structured content: 40–61% of AIOs contain bullet points or step-by-step lists
- Short, clear answers (≈40 words) near the top of sections are preferred for citation
- Strong E-E-A-T and entity signals increase citation probability
- FAQ schema on pages significantly increases AIO citation rate

**Strategic implication for Appdraft:** "How does Salesforce work" type content will increasingly be consumed without clicks. Focus effort on commercial-intent content ("salesforce implementation costs UK", "salesforce consultants for charities", "salesforce health check what's included") — these are protected from AIO cannibalisation and closer to conversion intent.

---

### Schema/Structured Data for B2B Services

Schema is now a dual-purpose asset: it helps both traditional rankings and AI citation engines (ChatGPT, Perplexity, Gemini, Google AIO).

**Priority schema types for Appdraft:**

| Schema Type | Priority | Why |
|-------------|----------|-----|
| **Organization** | Critical | Establishes entity identity — name, address, logo, founding date, social profiles |
| **Service** | Critical | Defines each service offering — name, provider, service type, area served |
| **FAQPage** | High | One of the highest-impact, lowest-effort schema types. Directly feeds AIO citations |
| **Article / BlogPosting** | High | Sites with good Article schema see 2–3x higher AI citation rates |
| **BreadcrumbList** | High | Navigation clarity for Google; also aids in sitelinks |
| **LocalBusiness** | Medium | For London/UK location signals if targeting location queries |
| **Review / AggregateRating** | Medium | Showcase the 5.0 AppExchange rating in schema |
| **Person** | Medium | Author credibility for blog/insight content |

**Key stat:** Content with proper schema markup shows 30–40% higher AI visibility and is cited 3x more frequently by generative engines.

---

## 2. What's Changed in 2024–2025

### The Helpful Content Update: What Actually Happened

The March 2024 core update permanently merged the Helpful Content System into Google's core algorithm. This is no longer a periodic separate signal — it is baked into every ranking decision.

**What got hit hardest:**
- Sites generating content at scale primarily for SEO (even human-written but lacking real insight)
- Sites with high topical breadth but low depth — "covering" 200 topics superficially
- AI-generated content with no expertise layer, no original perspective, no verifiable authorship
- Sites targeting search intent rather than answering real questions humans would ask
- Aggregators and directories (Reddit and Indeed both dropped significantly in March 2025 update; direct providers gained)

**Pattern from March 2025 core update (SEL data):**
- "Domains owning the product or service tended to gain, while aggregators or discussion platforms tended to lose"
- YouTube -567 visibility points; Reddit -64; Instagram -48
- Finance queries: highest volatility in top 5 (YMYL content under intense scrutiny)

### What's Dead

| Tactic | Status |
|--------|--------|
| Keyword stuffing | Dead — now a spam signal |
| Thin 300–500 word pages | Dead — consolidate into comprehensive "Power Pages" |
| Exact match domains as shortcut | Dead — brand trust now overrides domain name |
| Low-quality guest posts (link farms) | Dead and penalisable |
| Paid links / link schemes | Dead and penalisable |
| AI-spun content without expert oversight | Dead — often penalised at scale |
| "Publish and pray" without topical depth | Dead — needs cluster strategy |
| Keyword-optimised titles with no content quality | Dead — CTR + engagement now feeds back into rankings |

### What's Alive and Strengthened

- Original research and proprietary data
- Named expert authors with verifiable credentials
- Deep, comprehensive content that covers an entire topic (not just the query)
- Structured content that answers questions concisely (for AIO optimisation)
- Digital PR for link earning
- Technical quality (CWV, structured data, crawlability)
- Topical authority through content clusters

---

## 3. Local SEO for B2B Services

### How It Differs from Local Retail

B2B local SEO has important differences:

- **No physical footfall** — there's no Google Maps pack for "salesforce consultants london" (no local 3-pack for this query type). This is unlike a restaurant or plumber.
- **Decision journey is longer** — B2B buyers research for weeks/months; they won't convert from a single local search
- **Service area matters more than address** — you need to signal you serve London/UK, not that you're physically located at a specific address
- **Reviews are less prominent** but still valuable for trust signals

### What Works for B2B Location-Based Queries

**For "salesforce consultants london" / "salesforce consulting UK":**

1. **Location landing pages** — Dedicated pages for major cities/regions (London, Manchester, nationwide UK) with genuine content about serving those areas — not thin duplicate pages. These pages need: local client examples, understanding of local market, service area schema.

2. **Google Business Profile** — Still worth maintaining even for B2B, as it signals local entity legitimacy. Include: correct category, services list, London address/area, consistent NAP (Name, Address, Phone) across web.

3. **Local content signals** — Mention of UK clients, UK regulations (GDPR, UK-specific Salesforce compliance), UK Salesforce community involvement. References to UK office locations or team.

4. **NAP consistency** — Business name, address, phone number consistent across website, GBP, LinkedIn, Companies House (verifiable UK entity signal).

5. **UK-specific backlinks** — Links from UK business directories (not low-quality ones), UK Salesforce community, UK tech press. UK domains (.co.uk) carry local signal.

6. **AppExchange presence** — Salesforce's own partner directory is a trusted, high-authority signal for "salesforce consultants UK" queries. Ensure the listing is fully populated.

### SERP Landscape for "Salesforce Consultants London"

Based on current search results, these are the types of sites ranking:

**Directories/Lists (significant presence):**
- Clutch.co
- Goodfirms
- Sortlist.co.uk
- CRM.consulting
- SuperbCompanies
- SaaSGuru

**Independent consultancies ranking organically:**
- Simpala (simpala.co.uk) — UK-specific, well-optimised
- Nebula Consulting — established since 2012, strong domain
- Advanced Cloud Solutions — domain-specific content
- NCS London — has "London" in domain/brand

**The directoy problem:** Directories like Clutch and Goodfirms are essentially impossible to outrank for very competitive head terms ("salesforce consultants london"). The strategic response is:

1. **Get listed on all major directories** — a listing on Clutch, Goodfirms, Sortlist, CRM.consulting is both a citation/backlink AND a presence in those results
2. **Target long-tail and specific queries** where directories don't dominate: "salesforce implementation for charities UK", "salesforce health check service UK", "salesforce managed support london", industry-specific terms
3. **Build topical authority** in a niche the directories can't fill — the directories list firms but can't rank for in-depth content about specific Salesforce use cases

---

## 4. Competitive Search Landscape

### What Dominates for "Salesforce Consultants UK"

Based on SERP analysis:

**Tier 1 — Almost impossible to displace:**
- Clutch.co, Goodfirms, Sortlist, Capterra — directory sites with massive domain authority and thousands of reviews
- Salesforce's own AppExchange — highest authority source

**Tier 2 — Established mid-size agencies:**
- Nebula Consulting, Simpala, Pracedo — all UK-specific, have been building topical authority for years
- These rank because: UK-specific content, verified Salesforce partnership, multiple landing pages per service, case studies, team pages

**Tier 3 — Enterprise players mentioned but less visible organically:**
- Cognizant, Accenture, Deloitte — rank for enterprise terms but not necessarily for SME-focused UK queries
- Their content is too broad/generic for specialist queries

**How Appdraft breaks in:**

1. **Get on all directories immediately** — Clutch profile with reviews is a quick win both for presence in directory SERPs and for trust signals on the Appdraft site

2. **Target the long tail** — "salesforce implementation for [specific industry] UK", "salesforce health check london", "salesforce admin support UK". These have lower competition and higher commercial intent.

3. **Dominate a niche** — Appdraft's stats (130+ projects, 5.0 rating, 15+ years) support a credible specialisation claim. Content strategy built around a specific vertical (e.g., "Salesforce for UK charities and nonprofits") can reach top 3 within 6–12 months.

4. **Publish what the directories can't** — Directories list companies; they can't publish case studies, technical guides, comparison content, or "what does Salesforce implementation cost in 2025 UK" style guides. This is Appdraft's content advantage.

5. **Niche websites see 53% more user engagement** — deeper specialist content performs better than broad agency sites for both engagement metrics and rankings.

---

## 5. Content Strategy: What Formats Rank in 2025

### Formats with Strongest Ranking Performance for B2B Services

**Long-form pillar pages (2,000–5,000 words):**
- Still the dominant format for competitive B2B queries
- Must be genuinely comprehensive, not padded
- Include: definition, process/methodology, considerations, costs, examples, FAQs
- Keyword targeting: head term + semantic variants throughout

**Comparison pages:**
- High commercial intent, lower AIO cannibalisation
- Examples: "Salesforce vs Dynamics 365", "Salesforce implementation in-house vs consultant", "Salesforce managed support vs dedicated hire"
- These sit at the decision stage and are prime conversion content

**Pricing/cost guides:**
- "How much does Salesforce implementation cost in the UK" — extremely high commercial intent
- Rare that agencies publish real figures; publishing even ranges creates a strong trust signal and captures high-intent searches
- Google's September 2024 "helpful content" guidance specifically cited pricing transparency as a trust signal

**Case studies:**
- Essential for E-E-A-T — they prove real experience
- Format for SEO: include a descriptive title with industry + outcome ("How We Helped a London Charity Migrate to Salesforce Nonprofit Success Pack"), specific metrics, challenges, and what was done
- These are also strong AI citation targets when they contain specific claims and data

**FAQ-format content:**
- Works well for informational queries and is the highest-leverage schema type
- Structure pages with H2/H3 question-format headings followed by concise 40-word answers, then expanded explanation
- This structure feeds both featured snippets and AI Overviews

**Thought leadership / original insights:**
- "What we've learned from 130 Salesforce implementations" — impossible for anyone else to replicate
- Performs well for E-E-A-T signals, earns links, drives direct traffic

**Industry-specific pages:**
- "Salesforce for UK Charities", "Salesforce for Professional Services UK"
- These outperform generic service pages because they speak directly to a searcher's context
- Lower head competition than generic terms, higher conversion rate

### Content Formats with Lower ROI in 2025

- Generic "what is Salesforce" educational content — dominated by Salesforce itself and large media sites
- Thin news posts without original commentary
- Content that just restates what Salesforce's own help documentation says
- Listicles without depth (e.g., "10 reasons to use Salesforce")

---

## 6. Key Action Items for Appdraft

### Immediate (Month 1)
- [ ] Audit and fix Core Web Vitals — especially LCP on mobile
- [ ] Add Organization, Service, FAQPage, and BreadcrumbList schema sitewide
- [ ] Create detailed author bios for all named consultants (with certifications)
- [ ] Claim/complete Clutch, Goodfirms, Sortlist profiles — gather reviews
- [ ] Add FAQ sections to all service pages (structured with FAQPage schema)
- [ ] Ensure Google Business Profile is complete and accurate

### Short Term (Months 2–3)
- [ ] Build out one complete topic cluster: pick highest-priority (e.g., Salesforce Implementation UK as pillar, with 8–12 cluster pages covering sub-topics)
- [ ] Publish at least 2 case studies with specific industry, challenge, and quantified outcome
- [ ] Create a "Salesforce Implementation Cost UK" pricing guide page
- [ ] Add internal linking structure across existing service pages

### Medium Term (Months 4–6)
- [ ] Start digital PR outreach — Salesforce ecosystem publications, UK charity sector press, UK CRM/tech publications
- [ ] Build out 2–3 industry-specific landing pages with full content
- [ ] Create comparison pages (Salesforce vs. alternatives, in-house vs consultant)
- [ ] Target AppExchange listing optimisation — ensure all fields populated, reviews requested

---

## Sources

- [Search Engine Land: Google Algorithm Updates 2025 in Review](https://searchengineland.com/google-algorithm-updates-2025-in-review-3-core-updates-and-1-spam-update-466450)
- [Search Engine Land: March 2025 Core Update Complete](https://searchengineland.com/google-march-2025-core-update-rollout-is-now-complete-453364)
- [Search Engine Land: AI Overviews Drive Drop in Organic CTR](https://searchengineland.com/google-ai-overviews-drive-drop-organic-paid-ctr-464212)
- [Seer Interactive: AIO Impact on CTR September 2025](https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-september-2025-update)
- [Ahrefs: AI Overviews Reduce Clicks by 58%](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/)
- [SEMrush: AI Overviews Study 2025](https://www.semrush.com/blog/semrush-ai-overviews-study/)
- [Search Engine Journal: AI Overviews Cut Organic Clicks 38%](https://www.searchenginejournal.com/ai-overviews-cut-organic-clicks-38-field-study-finds/573145/)
- [Search Engine Journal: Core Update Winners and Losers](https://www.searchenginejournal.com/seo-pulse-new-ai-search-links-core-update-winners-and-losers/574314/)
- [Google Search Central: Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [Google Search Central: AI Features and Your Website](https://developers.google.com/search/docs/appearance/ai-features)
- [Search Engine Journal: E-E-A-T How to Demonstrate It](https://www.searchenginejournal.com/google-e-e-a-t-how-to-demonstrate-first-hand-experience/474446/)
- [Search Engine Land: Topic Clusters Guide](https://searchengineland.com/guide/topic-clusters)
- [Amsive: HCU What Happened and What Changed 2024](https://www.amsive.com/insights/seo/googles-helpful-content-update-ranking-system-what-happened-and-what-changed-in-2024/)
- [IvanHub: Schema Markup for B2B SaaS](https://ivanhub.co.uk/insights/schema-markup-b2b-saas-structured-data)
- [Exposure Ninja: Google Ranking Factors 2025](https://exposureninja.com/blog/google-ranking-factors/)
- [WordStream: 7 Most Important SEO Ranking Factors 2025](https://www.wordstream.com/blog/seo-ranking-factors-2025)
- [Backlinko: Local SEO Guide](https://backlinko.com/local-seo-guide)
- [Clutch: Top Salesforce Consultants London](https://clutch.co/it-services/salesforce/uk/england/london)
- [Flow Agency: State of Backlinks 2025](https://www.flow-agency.com/blog/backlinks-trends/)
- [Single Grain: Google AI Overviews Ultimate Guide 2025](https://www.singlegrain.com/search-everywhere-optimization/google-ai-overviews-the-ultimate-guide-to-ranking-in-2025/)
- [Digital Bloom: 2025 Organic Traffic Crisis Report](https://thedigitalbloom.com/learn/2025-organic-traffic-crisis-analysis-report/)

---

*Saved to research/ for persistent reference. Last updated: 25 May 2025.*
