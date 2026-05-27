#!/usr/bin/env node

/**
 * Pre-build script: Syncs published blog posts from Supabase into posts.json.
 *
 * Run before building the website:
 *   node scripts/sync-blog-posts.mjs
 *   npm run build
 *   npx wrangler pages deploy out --project-name=appdraft
 *
 * Or use the combined command:
 *   npm run sync-and-build
 *
 * Requires SUPABASE_URL and SUPABASE_ANON_KEY env vars (or reads from .env).
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const POSTS_JSON_PATH = resolve(__dirname, '../app/blog/posts.json');

// Read env vars (support .env file if present)
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables.');
  console.error('Set them in your shell or create a .env file.');
  process.exit(1);
}

async function main() {
  console.log('[sync-blog-posts] Fetching published blog posts from Supabase...');

  // Fetch published blog posts that haven't been deployed yet
  const url = `${SUPABASE_URL}/rest/v1/marketing_posts?post_type=eq.blog&status=eq.published&blog_deployed=eq.false&select=id,title,content,excerpt,category,blog_slug,featured_image_url,author_name,author_role,published_at`;

  const res = await fetch(url, {
    headers: {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });

  if (!res.ok) {
    console.error(`[sync-blog-posts] Supabase request failed: ${res.status} ${res.statusText}`);
    process.exit(1);
  }

  const newPosts = await res.json();

  if (newPosts.length === 0) {
    console.log('[sync-blog-posts] No new posts to sync. posts.json is up to date.');
    return;
  }

  console.log(`[sync-blog-posts] Found ${newPosts.length} new post(s) to add.`);

  // Read existing posts.json
  const existingPosts = JSON.parse(readFileSync(POSTS_JSON_PATH, 'utf-8'));
  const existingSlugs = new Set(existingPosts.map((p) => p.slug));

  let added = 0;

  for (const post of newPosts) {
    if (existingSlugs.has(post.blog_slug)) {
      console.log(`  - Skipping "${post.title}" (slug "${post.blog_slug}" already exists)`);
      continue;
    }

    const newEntry = {
      slug: post.blog_slug,
      title: post.title,
      date: new Date(post.published_at).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      excerpt: post.excerpt || '',
      category: post.category || 'Insights',
      author: {
        name: post.author_name || 'AppDraft Team',
        role: post.author_role || 'Salesforce Experts',
      },
      content: post.content,
    };

    // Add to beginning (newest first)
    existingPosts.unshift(newEntry);
    added++;
    console.log(`  + Added "${post.title}" (/${post.blog_slug})`);
  }

  if (added > 0) {
    // Write updated posts.json
    writeFileSync(POSTS_JSON_PATH, JSON.stringify(existingPosts, null, 2) + '\n');
    console.log(`[sync-blog-posts] Updated posts.json with ${added} new post(s).`);

    // Mark posts as deployed in Supabase
    const deployedIds = newPosts
      .filter((p) => !existingSlugs.has(p.blog_slug))
      .map((p) => p.id);

    if (deployedIds.length > 0) {
      const patchUrl = `${SUPABASE_URL}/rest/v1/marketing_posts?id=in.(${deployedIds.join(',')})`;
      const patchRes = await fetch(patchUrl, {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          blog_deployed: true,
          updated_at: new Date().toISOString(),
        }),
      });

      if (patchRes.ok) {
        console.log(`[sync-blog-posts] Marked ${deployedIds.length} post(s) as deployed in Supabase.`);
      } else {
        console.warn(`[sync-blog-posts] Warning: Failed to mark posts as deployed: ${patchRes.status}`);
      }
    }
  } else {
    console.log('[sync-blog-posts] No new posts added (all slugs already exist).');
  }

  console.log(`[sync-blog-posts] Done. Total posts in posts.json: ${existingPosts.length}`);
}

main().catch((err) => {
  console.error('[sync-blog-posts] Fatal error:', err);
  process.exit(1);
});
