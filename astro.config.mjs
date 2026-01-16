// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeFlexoki from 'starlight-theme-flexoki';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thespaceas.com',
  integrations: [
    starlight({
      title: 'THE SPACE AS',
      plugins: [starlightThemeFlexoki()],
      customCss: ['./src/styles/custom.css'],

      // 可选：如果你想首页直接是 /starthere
      // 如果你希望首页是 docs 根目录的 index.mdx，则删掉这一行
      // defaultFrontmatter: { },

      sidebar: [
        {
          label: 'About',
          items: [
            { label: 'About', slug: 'index' }, // 指向 src/content/docs/index.mdx
            { label: 'Reading Guide', slug: 'starthere' },
            { label: 'Principles', slug: 'principles' },
            { label: 'Credits & Build', slug: 'colophon' },
          ],
        },

        { label: 'Foundations', autogenerate: { directory: 'foundations' } },
        { label: 'Mechanisms', autogenerate: { directory: 'mechanisms' } },
        { label: 'Conditions', autogenerate: { directory: 'conditions' } },
      ],
    }),
    sitemap(),
  ],
});

