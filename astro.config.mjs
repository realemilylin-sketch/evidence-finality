// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeFlexoki from 'starlight-theme-flexoki';

export default defineConfig({
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
      { label: 'About', slug: 'index' },       // 关键：指向 src/content/docs/index.mdx
      { label: 'Start here', slug: 'starthere' },
      { label: 'Principles', slug: 'principles' },
      { label: 'Colophon', slug: 'colophon' },
    ],
        },

        // 自动生成目录：目录名必须与 src/content/docs/ 下的文件夹一致
        { label: 'Foundations', autogenerate: { directory: 'foundations' } },
        { label: 'Mechanisms', autogenerate: { directory: 'mechanisms' } },
        { label: 'Conditions', autogenerate: { directory: 'conditions' } },

        // 如果你还想展示 guides/reference，取消注释即可
        // { label: 'Guides', autogenerate: { directory: 'guides' } },
        // { label: 'Reference', autogenerate: { directory: 'reference' } },
      ],
    }),
  ],
});
