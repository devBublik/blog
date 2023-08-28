// @ts-nocheck
import { defineNuxtConfig } from "nuxt";
import dsv from "@rollup/plugin-dsv";
import pugPlugin from "vite-plugin-pug";

export default defineNuxtConfig({
  css: ["@/assets/scss/main.scss"],
  vite: {
    plugins: [dsv(), pugPlugin()],
  },
  modules: ["@nuxtjs/svg-sprite", "@nuxtjs/svg"],
  svgSprite: {
    input: "~/assets/sprite/svg/",
  },
  build: {
    transpile: ["swiper"],
  },
  mode: "static",
  router: {
    base: "https://github.com/devBublik",
  },
});
