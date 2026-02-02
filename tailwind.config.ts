import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Appdraft brand colors
        'appdraft': {
          primary: '#19779b',
          'primary-hover': '#14698c',
          accent: '#f25c54',
          background: '#f7f9fb',
          border: '#dce3ea',
          text: '#1f2d3d',
          'text-muted': '#6b778c',
          logo: '#0b3d52',
        },
        // Keep blue-600 as alias to primary for existing components
        blue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#19779b', // Match brand primary
          600: '#19779b', // Match brand primary
          700: '#14698c', // Match brand primary-hover
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
