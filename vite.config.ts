import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/AboutMe.dev/", // ✅ GitHub repo name (case-sensitive)
  server: {
    host: true,
    port: 3000,
  },
});
