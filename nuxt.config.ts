// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@nuxt/scripts",
    "@nuxt/test-utils",
  ],
  css: ["~/assets/css/main.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: true,
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  icon: {
    size: "24px",
    provider: "none",
    customCollections: [
      {
        prefix: "icon",
        dir: "./assets/icons",
      },
    ],
    mode: "svg",
  },
});
