import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["iraldev.my.id"],
    host: true,
    port: 3000,
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url.endsWith(".apk")) {
          res.setHeader(
            "Content-Type",
            "application/vnd.android.package-archive"
          );
        }

        res.setHeader("X-Frame-Options", "DENY");
        res.setHeader(
          "Content-Security-Policy",
          "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none';"
        );
        next();
      });
    },
  },
});
