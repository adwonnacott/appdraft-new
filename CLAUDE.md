# Appdraft Website - Design Guidelines

## Content Rules

**Never fabricate content.** All copy, FAQs, pricing, timelines, statistics, and claims must come from Adam or existing site content — not invented. This includes:
- Pricing figures or ranges
- Project timelines
- Service descriptions or scope
- Any factual claim about Appdraft's services

**Before proposing content changes**, ask the questions needed to write accurately. For FAQs: ask what the real answers are. For pricing: ask if it should be shown and what the figures are. For timelines: ask what's typical. Do not guess or use industry averages as if they are Appdraft's own.

**Validate content with Adam before writing it to any file.** Propose the copy in chat, get approval, then implement.

## Writing Style

- **British English only** — use British spelling throughout (e.g. "prioritised" not "prioritized", "organisation" not "organization", "licence" not "license" as a noun)
- **No em dashes** — never use — in copy. Use a comma, full stop, or restructure the sentence instead.

## Brand Colors

Use these exact hex values with Tailwind's arbitrary value syntax `bg-[#hex]`:

| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Teal) | `#19779b` | Buttons, links, headlines, interactive elements |
| Primary Hover | `#14698c` | Hover states for primary elements |
| Accent (Coral) | `#f25c54` | Emphasis, alerts, highlights |
| Background | `#f7f9fb` | Page background |
| Text | `#1f2d3d` | Body text |
| Text Muted | `#6b778c` | Secondary text |
| Border | `#dce3ea` | Subtle borders |
| Logo | `#0b3d52` | Logo color (dark teal) |

### Using Colors in Components

```tsx
// Buttons - use arbitrary values for reliability
className="bg-[#19779b] hover:bg-[#14698c] text-white"

// Text colors - can use Tailwind semantic classes
className="text-gray-900"  // Primary text
className="text-gray-600"  // Secondary text
```

## Typography

- **Font**: Inter (from Google Fonts)
- **Monospace**: JetBrains Mono (for code)
- Keep headlines bold and impactful
- Body text should be readable with good line height (`leading-relaxed`)

## Design Principles

### Light Theme
- Clean, professional aesthetic inspired by Stripe.com
- White cards on light gray backgrounds (`bg-slate-50`, `bg-white`)
- Subtle shadows (`shadow-card`, `shadow-card-hover`)
- Avoid harsh contrasts

### Cards & Components
- Rounded corners: `rounded-2xl` for cards, `rounded-xl` for buttons
- Borders: `border border-gray-100`
- Hover effects: lift with shadow increase, subtle scale
- Use `GlowCard` component for interactive cursor-following glow

### Animations
- Keep animations subtle and purposeful
- Use `transition-all duration-300` for smooth interactions
- Typewriter effect for hero headline
- Scroll reveal for content sections
- No jarring or distracting movements

### Backgrounds
- `GradientMesh` component for animated gradient backgrounds
- Use cyan/teal pastels: `['#cffafe', '#ccfbf1', '#e0f2fe', '#f0fdfa']`
- Subtle dot patterns for texture
- Blurred gradient orbs for depth

## Component Patterns

### Buttons
```tsx
// Primary CTA
<Link
  href="/contact"
  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#19779b] hover:bg-[#14698c] rounded-xl transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
>
  Button Text
  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1">...</svg>
</Link>

// Secondary/Outline
<Link
  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
>
```

### Section Headers
```tsx
<p className="text-[#19779b] font-semibold tracking-wide uppercase text-sm mb-4">Section Label</p>
<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Main Heading</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
  Supporting description text
</p>
```

### Cards
```tsx
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300">
  {/* Card content */}
</div>
```

## Logo Files

Located in `/public/appdraft-wordmark/`:
- `appdraft-wordmark-colour.svg` - For light backgrounds (header)
- `appdraft-wordmark-white.svg` - For dark backgrounds (footer)
- `appdraft-wordmark-dark.svg` - Dark version

## Content Guidelines

- Match original appdraft.com content exactly
- No fabricated testimonials or case studies
- Use real AppExchange reviews
- Stats: 130+ projects, 15+ years, 5.0 rating
- Tone: Professional, helpful, practical

## Tailwind 4 Notes

Custom colors defined in `@theme` block may not work reliably. Use arbitrary values:
- `bg-[#19779b]` instead of `bg-appdraft-primary`
- `text-[#19779b]` instead of `text-appdraft-primary`
- `hover:bg-[#14698c]` instead of `hover:bg-appdraft-primary-hover`

## Key Components

| Component | Location | Purpose |
|-----------|----------|---------|
| GradientMesh | `components/ui/GradientMesh.tsx` | Animated gradient backgrounds |
| GlowCard | `components/ui/GlowCard.tsx` | Cards with cursor-following glow |
| TypewriterText | `components/ui/TypewriterText.tsx` | Animated typing effect |
| ScrollReveal | `components/ui/ScrollReveal.tsx` | Scroll-triggered animations |
| CountUp | `components/ui/CountUp.tsx` | Animated number counting |

## Pages Structure

- `/` - Homepage
- `/services/*` - Implementation, Support, Health Checks, Custom Development
- `/salesforce/*` - Sales Cloud, Service Cloud, Experience Cloud, Field Service, Marketing Cloud, Agentforce
- `/industries/*` - 8 industry pages
- `/why-appdraft` - About page
- `/insights` - Blog listing
- `/blog/*` - Individual blog posts
- `/case-studies` - Case study listing
- `/case-studies/*` - Individual case studies
- `/contact` - Contact page

## Blog Posts

See `BLOG_STYLE_GUIDE.md` for full styling documentation.

### Quick Add: New Blog Post

1. **Add to `app/blog/posts.json`:**
```json
{
  "slug": "your-post-slug",
  "title": "Your Post Title",
  "date": "4 February 2026",
  "excerpt": "Brief description for listing page (1-2 sentences)",
  "category": "Insights",
  "author": "Appdraft Team",
  "content": "<p>Your HTML content here...</p>"
}
```

2. **Add featured image to both files:**
   - `app/insights/page.tsx` - in `postImages` object
   - `app/blog/[slug]/page.tsx` - in `postImages` object

```tsx
'your-post-slug': 'https://images.unsplash.com/photo-XXXXX?w=800&q=80',
```

3. **Build and deploy:**
```bash
npm run build
npx wrangler pages deploy out --project-name=appdraft
```

4. **Submit to Google Search Console** — request indexing for the new blog post URL and the `/insights` listing page via the URL Inspection tool.

### Content Format
- Use HTML in the `content` field
- H2 for major sections, H3 for subsections
- Wrap paragraphs in `<p>` tags
- Lists: `<ul><li>` or `<ol><li>`
- Blockquotes: `<blockquote><p>...</p></blockquote>`

### Image Sources
Use the Unsplash search script to find featured images:

```bash
node lib/unsplash-search.js "search query"
```

Examples:

- `node lib/unsplash-search.js "business technology"`
- `node lib/unsplash-search.js "team collaboration"`
- `node lib/unsplash-search.js "data analytics"`

The script returns formatted URLs ready to paste into `postImages` objects.

## Case Studies

### Quick Add: New Case Study

1. **Add to `app/case-studies/case-studies.json`:**

```json
{
  "slug": "your-case-study-slug",
  "title": "Full case study title",
  "excerpt": "1-2 sentence summary for the listing card",
  "sector": "e.g. Manufacturing, Financial Services, Professional Services",
  "cloud": ["Agentforce", "Sales Cloud"],
  "outcome": "One-line measurable result e.g. '30% of leads qualified out automatically'",
  "image": "https://images.unsplash.com/photo-XXXXX?w=1200&q=80",
  "date": "2025",
  "relatedCloud": "/salesforce/agentforce",
  "relatedCloudLabel": "Salesforce Agentforce Consultants",
  "content": "<h2>...</h2><p>...</p>"
}
```

2. **Add to sitemap** (`public/sitemap.xml`) under the Case Studies block.

3. **Build and deploy:**

```bash
npm run build
npx wrangler pages deploy out --project-name=appdraft
```

4. **Submit to Google Search Console** — always do this after publishing. Use the URL Inspection tool to request indexing for both the new case study URL and the `/case-studies` listing page. Without this, Google may take weeks to find new pages.

### Content Format

- Use HTML in the `content` field
- **H2** for major sections: The client, The challenge, What we built, The result
- **H3** for subsections within a section (e.g. individual features built)
- This hierarchy is critical — H2 and H3 render at different sizes and colours, so using the wrong level breaks the visual structure
- No em dashes, British English only
- Wrap paragraphs in `<p>` tags

### Typography

Case studies use the `.case-study-content` CSS class (defined in `app/globals.css`):

- **H2**: large (`1.5rem`), dark (`#1f2d3d`), bold — major section markers
- **H3**: smaller (`1.0625rem`), teal (`#19779b`), semi-bold — sub-section markers
- Do not use `blog-content` class on case studies — it has heading underlines that do not match the site design

### Image Guidance

- Use `node lib/unsplash-search.js "search query"` to find images
- Avoid images with text overlaid
- Prefer abstract/conceptual images relevant to the work done
- No generic AI stock imagery
- Use `?w=1200&q=80` for case study hero, `?w=800&q=80` for listing cards

### Content Rules for Case Studies

- All facts, outcomes, timelines, and client details must come from the PSA project data or from Adam directly
- Never invent metrics or outcomes
- Anonymise clients unless Adam explicitly confirms they can be named
- Always propose the full case study copy in chat and get approval before writing to any file
