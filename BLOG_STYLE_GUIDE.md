# Appdraft Blog Style Guide

## Overview

This guide documents the styling conventions and best practices for blog posts on the Appdraft website.

---

## Content Structure

### Hero Section
- Featured image displayed prominently below the title
- Category badge + date shown
- Clear reading time indicator (auto-calculated)

### Article Layout
- Max width: 768px (3xl) for comfortable reading
- Generous white space between sections
- First paragraph styled larger as introduction

---

## Typography

### Headings
- **H2**: Major section breaks, includes bottom border separator
- **H3**: Subsections within major sections
- All headings automatically get anchor IDs for linking

### Body Text
- Font size: 17px
- Line height: 1.9 for optimal readability
- Color: Gray-600 (#4a5568)
- First paragraph: Larger (1.25rem) intro text

### Links
- Color: Brand teal (#19779b)
- Underlined with subtle decoration
- Hover: Darker teal with solid underline

---

## Lists

### Unordered Lists
- Custom teal bullet points (8px circles)
- 2rem left padding
- 1rem bottom margin per item

### Ordered Lists
- Numbered circles with gradient background
- Numbers centered in 2rem circle
- More prominent visual hierarchy

---

## Blockquotes

Style:
- Left border: 4px solid brand teal
- Background: Gradient from teal/8% to teal/2%
- Rounded right corners
- Slightly larger text (1.125rem)

Usage:
```html
<blockquote>
  <p>Quote text here.</p>
</blockquote>
```

---

## Images

- Auto-centered with max-width
- Rounded corners (1rem)
- Subtle shadow for depth
- 2.5rem vertical margin

### WordPress Media Blocks
- Grid layout for media + text combinations
- Responsive: stacks on mobile
- Background: Gray-50

---

## Special Blocks

### File Downloads
```html
<div class="wp-block-file">
  <a href="/path/to/file.pdf">Document Title</a>
  <a class="wp-block-file__button" download>Download</a>
</div>
```
Styling:
- Gradient background
- Teal border accent
- Prominent download button

### Tables
- Full width
- Zebra striping on hover
- Header row with gray background
- Clean borders

### Code
- Inline: Gray background, monospace font
- Blocks: Dark background, rounded corners, horizontal scroll

---

## Colors

| Element | Color | Hex |
|---------|-------|-----|
| Body text | Gray 600 | #4a5568 |
| Headings | Gray 900 | #111827 |
| Links | Brand Teal | #19779b |
| Link hover | Darker Teal | #14698c |
| Bullets | Brand Teal | #19779b |
| Blockquote border | Brand Teal | #19779b |
| HR gradient | Gray 300 | #e5e7eb |

---

## Writing Guidelines

### Tone
- Professional but approachable
- Clear and concise
- Avoid jargon where possible

### Structure
1. Start with a compelling introduction
2. Break content into logical sections with H2s
3. Use H3s for subsections
4. Include relevant examples
5. End with a call-to-action

### Length
- Aim for 800-2000 words
- Reading time displayed automatically
- Break long posts with images/quotes

### SEO
- Descriptive H2 headings
- Internal links to related content
- Clear meta description (excerpt field)

---

## Technical Implementation

### Files
- `lib/blog-utils.ts` - Content processing utilities
- `app/globals.css` - Blog content styles (`.blog-content`)
- `app/blog/[slug]/page.tsx` - Blog post template

### Content Processing
The `processWordPressContent()` function:
1. Removes WordPress block comments
2. Cleans up extra whitespace
3. Adds proper CSS classes

### Adding New Posts
1. Add entry to `app/blog/posts.json`
2. Add featured image to `postImages` map in:
   - `app/insights/page.tsx`
   - `app/blog/[slug]/page.tsx`
3. Content can include HTML markup

---

## Checklist for New Posts

- [ ] Title is clear and descriptive
- [ ] Excerpt summarizes the content
- [ ] Featured image added to both files
- [ ] Content uses proper heading hierarchy
- [ ] Links use full URLs or relative paths
- [ ] Images have alt text
- [ ] Category is set correctly
- [ ] Author info is accurate
