import { defineConfig } from "astro/config";
import { fileURLToPath, URL } from "url";
import vue from "@astrojs/vue";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://thirty33.github.io',
  base: 'travel-agent-ui',
  publicDir: "public",
  integrations: [
    vue({
      jsx: true,
      // appEntrypoint: "/src/pages/_app",
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
