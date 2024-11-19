import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import compress from 'astro-compress';
import react from '@astrojs/react';
import astrowind from './vendor/integration';
import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://astro-homepage.netlify.app',
  base: '/astro-homepage',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1024,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'framer-motion': ['framer-motion'],
          },
        },
      },
    },
    ssr: {
      noExternal: ['@astrojs/*'],
    },
    optimizeDeps: {
      exclude: ['@astrojs/*'],
    },
    define: {
      'process.env.PUBLIC_GOOGLE_SITE_ID': JSON.stringify(process.env.PUBLIC_GOOGLE_SITE_ID),
      'process.env.PUBLIC_GOOGLE_TAGS': JSON.stringify(process.env.PUBLIC_GOOGLE_TAGS),
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },

  integrations: [
    react({
      include: ['**/react/*', '**/ui/*.tsx', '**/ui/*.jsx'],
    }),
    tailwind({
      applyBaseStyles: false,
      config: {
        applyBaseStyles: false,
        future: {
          purgeLayersByDefault: true,
        },
        experimental: {
          optimizeUniversalDefaults: true,
        },
      },
    }),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),
    astrowind({
      config: './src/config.yaml',
    }),
  ],

  image: {
    domains: ['cdn.pixabay.com'],
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },
});
