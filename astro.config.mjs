// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://evidencefinality.com",
  trailingSlash: "ignore",

  integrations: [
    starlight({
      title: "Evidence Finality",
      description:
        "A reference definition of evidence finality as an irreversible state in evidence systems.",

      // ✅ 完整主题覆盖（与 THE SPACE AS 一致）
      plugins: [starlightThemeFlexoki()],

      // 🟡 现在可以不建这个文件；将来需要再加
      // customCss: ["./src/styles/custom.css"],

      sidebar: [
        { label: "Definition", link: "/" },
      ],
    }),

    // ✅ 定义站也建议直接开 sitemap
    sitemap(),
  ],
});
