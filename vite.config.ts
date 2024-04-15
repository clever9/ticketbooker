import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "ticketbooker.io",
    port: 2345,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
