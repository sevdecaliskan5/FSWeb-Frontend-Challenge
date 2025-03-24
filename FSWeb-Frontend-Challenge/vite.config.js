import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/FSWeb-Frontend-Challenge/", // GitHub repo adı, örneğin: '/my-project-name/'
});
