import image from "@astrojs/image";
import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";
import preprocess from "svelte-preprocess";

// https://astro.build/config
export default defineConfig({
  integrations: [
    image(),
    svelte({
      preprocess: [
        preprocess({
          postcss: true,
        }),
      ],
    }),
  ],
});
