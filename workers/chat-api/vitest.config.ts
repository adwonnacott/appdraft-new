import { defineConfig } from 'vitest/config';

// The worker imports widget.js as text (a wrangler Text rule). Mirror that here so tests can
// import the worker without running the browser script.
export default defineConfig({
  plugins: [{
    name: 'widget-as-text',
    enforce: 'pre',
    transform(code, id) {
      if (id.endsWith('/src/widget.js')) return { code: `export default ${JSON.stringify(code)};`, map: null };
    },
  }],
  test: { include: ['test/**/*.test.ts'] },
});
