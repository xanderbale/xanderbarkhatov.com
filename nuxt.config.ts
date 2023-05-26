export default defineNuxtConfig({
  modules: [
    "@nuxt/image-edge",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@vue-macros/nuxt",
    "nuxt-icon",
    "nuxt-headlessui",
    "nuxt-vercel-analytics",
  ],
  runtimeConfig: {
    githubToken: "",
  },
  image: {
    screens: {
      profile: 400,
      project: 640,
    },
  },
  routeRules: {
    "/": {
      prerender: true,
    },
    "/projects": {
      prerender: true,
    },
    "/oss": {
      prerender: true,
      isr: 86400,
    },
  },
});
