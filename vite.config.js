import { defineConfig } from "vite"
import { resolve } from "path"
import solid from "vite-plugin-solid"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [solid()],
  base: "./",
  build: {
    target: "chrome95",
    sourcemap: true,
    outDir: "graphics",
    rollupOptions: {
      input: {
        break: resolve(__dirname, "break.html"),
        game: resolve(__dirname, "game.html"),
      },
    },
  },
})
