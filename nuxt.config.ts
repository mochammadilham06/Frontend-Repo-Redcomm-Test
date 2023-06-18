// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Redcomm - Frontend",
      meta: [{ name: "description", content: "Description" }],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  runtimeConfig: {
    apiSecret: "",
    public: {
      API_BASE: "",
    },
  },
});
