import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/AboutMe.dev/", 
});

server: {
  host: true,
  port: 3000
}
