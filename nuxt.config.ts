// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/test-utils/module",
    "nuxt-headlessui",
  ],
  headlessui: {
    prefix: "Headless",
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
