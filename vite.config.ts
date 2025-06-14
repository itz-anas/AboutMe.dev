import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/AboutMe.dev-master/", // <-- match your GitHub repo name
});
