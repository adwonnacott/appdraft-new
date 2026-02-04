/**
 * Blog Content Utilities
 * Processes WordPress block content into clean, well-formatted HTML
 */

/**
 * Converts YouTube URLs to embedded iframes
 */
function embedYouTubeVideos(content: string): string {
  // Match various YouTube URL formats
  const youtubePatterns = [
    // Standard YouTube URLs
    /https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)(?:[^\s<]*)?/g,
    // Short YouTube URLs
    /https?:\/\/youtu\.be\/([a-zA-Z0-9_-]+)(?:[^\s<]*)?/g,
  ];

  let processed = content;

  youtubePatterns.forEach((pattern) => {
    processed = processed.replace(pattern, (match, videoId) => {
      return `<div class="video-embed"><iframe src="https://www.youtube.com/embed/${videoId}" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
    });
  });

  return processed;
}

/**
 * Cleans up WordPress block comments and formats content for display
 */
export function processWordPressContent(content: string): string {
  let processed = content;

  // Remove all WordPress block comments
  processed = processed.replace(/<!-- \/?wp:[^>]+ -->/g, '');

  // Remove WordPress embed wrapper elements (but keep the URL inside)
  processed = processed.replace(/<figure[^>]*class="[^"]*wp-block-embed[^"]*"[^>]*>[\s\S]*?<div[^>]*class="wp-block-embed__wrapper"[^>]*>\s*/g, '');
  processed = processed.replace(/\s*<\/div>\s*<\/figure>/g, '');

  // Convert YouTube URLs to embedded iframes
  processed = embedYouTubeVideos(processed);

  // Clean up extra whitespace between elements
  processed = processed.replace(/\n{3,}/g, '\n\n');

  // Add proper spacing around headings
  processed = processed.replace(/<h2>/g, '<h2 class="blog-heading-2">');
  processed = processed.replace(/<h3>/g, '<h3 class="blog-heading-3">');

  // Style lists properly
  processed = processed.replace(/<ul>/g, '<ul class="blog-list">');
  processed = processed.replace(/<ol>/g, '<ol class="blog-list-ordered">');

  // Style blockquotes
  processed = processed.replace(/<blockquote>/g, '<blockquote class="blog-quote">');

  // Add drop cap to first paragraph (optional - uncomment if desired)
  // processed = processed.replace(/<p>([A-Z])/, '<p class="first-para"><span class="drop-cap">$1</span>');

  return processed.trim();
}

/**
 * Extracts a reading time estimate from content
 */
export function getReadingTime(content: string): number {
  // Strip HTML tags
  const text = content.replace(/<[^>]*>/g, '');
  // Count words (rough estimate)
  const words = text.split(/\s+/).length;
  // Average reading speed: 200 words per minute
  return Math.ceil(words / 200);
}

/**
 * Generates a table of contents from headings
 */
export function generateTableOfContents(content: string): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = [];
  const regex = /<h([23])[^>]*>([^<]+)<\/h[23]>/g;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2].trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    headings.push({ id, text, level });
  }

  return headings;
}

/**
 * Adds IDs to headings for anchor linking
 */
export function addHeadingIds(content: string): string {
  return content.replace(/<h([23])([^>]*)>([^<]+)<\/h([23])>/g, (match, level, attrs, text) => {
    const id = text.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
  });
}
