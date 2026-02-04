#!/usr/bin/env node

/**
 * Unsplash Image Search for Blog Posts
 *
 * Usage: node lib/unsplash-search.js "search query"
 *
 * Returns formatted URLs ready to paste into postImages objects
 */

const UNSPLASH_ACCESS_KEY = '-0wmlSz4WU09ly34acBS3swaOcd-VIPPJwXmFXkH3S8';

async function searchUnsplash(query, count = 5) {
  const url = new URL('https://api.unsplash.com/search/photos');
  url.searchParams.set('query', query);
  url.searchParams.set('per_page', count.toString());
  url.searchParams.set('orientation', 'landscape'); // Better for blog featured images

  const response = await fetch(url.toString(), {
    headers: {
      'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Unsplash API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.results;
}

async function main() {
  const query = process.argv.slice(2).join(' ');

  if (!query) {
    console.log('Usage: node lib/unsplash-search.js "search query"');
    console.log('');
    console.log('Examples:');
    console.log('  node lib/unsplash-search.js "salesforce crm"');
    console.log('  node lib/unsplash-search.js "business technology"');
    console.log('  node lib/unsplash-search.js "office team meeting"');
    process.exit(1);
  }

  console.log(`\nSearching Unsplash for: "${query}"\n`);
  console.log('─'.repeat(60));

  try {
    const photos = await searchUnsplash(query);

    if (photos.length === 0) {
      console.log('No results found. Try a different search term.');
      process.exit(0);
    }

    photos.forEach((photo, index) => {
      const blogUrl = `${photo.urls.raw}&w=800&q=80`;

      console.log(`\n${index + 1}. ${photo.description || photo.alt_description || 'No description'}`);
      console.log(`   Photo by: ${photo.user.name} (@${photo.user.username})`);
      console.log(`   Likes: ${photo.likes}`);
      console.log(`\n   URL for blog:`);
      console.log(`   '${blogUrl}'`);
      console.log('');
    });

    console.log('─'.repeat(60));
    console.log('\nCopy the URL and add to postImages in:');
    console.log('  - app/insights/page.tsx');
    console.log('  - app/blog/[slug]/page.tsx');
    console.log('');

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
