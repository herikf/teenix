import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/teenix/",
  css: {
    postcss: "./postcss.config.js", // 👈 força o uso
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), "index.html"),
        checkout: resolve(process.cwd(), "checkout.html"),
        pedidos: resolve(process.cwd(), "pedidos.html"),
      },
    },
  },
});