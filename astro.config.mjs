// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import UnoCSS from 'unocss/astro'
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import sectionize from "@hbsnow/rehype-sectionize";
import { remarkReadingTime } from './src/remarks/plugins/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(
        {
            syntaxHighlight: 'shiki',
            shikiConfig: { theme: 'dracula' },
            rehypePlugins:[[rehypeAutolinkHeadings, { behavior: 'append' }],sectionize],
            remarkPlugins: [remarkReadingTime]
        }
    ), sitemap(), UnoCSS(
        {
            injectReset: true
        }
    ),
],
    markdown: {
        shikiConfig: {
            // Choose from Shiki's built-in themes (or add your own)
            // https://shiki.style/themes
            wrap:true,
            themes: {
                "dark":"github-dark",
                "light":"github-dark"
            }
        },
    }
});
