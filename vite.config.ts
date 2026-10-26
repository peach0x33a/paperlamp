import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// The docs app lives in www/; the component library lives in registry/.
// `@/components/ui` and `@/lib` resolve into registry/ so every component file is
// written exactly as it will look after `paperlamp add` copies it into a project.
export default defineConfig({
  root: fileURLToPath(new URL("./www", import.meta.url)),
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@/components/ui": fileURLToPath(new URL("./registry/ui", import.meta.url)),
      "@/lib": fileURLToPath(new URL("./registry/lib", import.meta.url)),
      "@/styles": fileURLToPath(new URL("./registry/styles", import.meta.url)),
      "@docs": fileURLToPath(new URL("./www/src", import.meta.url)),
    },
  },
  server: { port: 5180, strictPort: true, fs: { allow: [".."] } },
  preview: { port: 5180 },
  build: {
    outDir: fileURLToPath(new URL("./dist", import.meta.url)),
    emptyOutDir: true,
  },
});
