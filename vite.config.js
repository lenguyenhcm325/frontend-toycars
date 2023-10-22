import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 8080,
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  ...(process.env.NODE_ENV === "development"
    ? {
        define: {
          global: {},
        },
      }
    : {}),
  resolve: {
    alias: {
      ...(process.env.NODE_ENV !== "development"
        ? {
            "./runtimeConfig": "./runtimeConfig.browser", //fix production build
          }
        : {}),
    },
  },
});
