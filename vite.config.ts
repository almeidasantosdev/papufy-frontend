import path from "node:path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// URL pública já documentada em .env.example. A Vercel sobrescreve se VITE_API_URL estiver definida.
const DEFAULT_API_URL = "https://papufy-backend.onrender.com";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const fromEnv = env.VITE_API_URL?.trim() ?? "";
  const apiUrl = fromEnv || DEFAULT_API_URL;

  if (!apiUrl.startsWith("https://")) {
    throw new Error("VITE_API_URL deve ser HTTPS (URL do Render).");
  }
  if (/localhost|127\.0\.0\.1/i.test(apiUrl)) {
    throw new Error("VITE_API_URL não pode ser localhost — projeto só produção.");
  }

  // O Vite lê process.env depois deste arquivo. Sem isso, o bundle fica sem a URL padrão.
  // No dev o browser chama o próprio Vite; o proxy abaixo chega na API (CORS não libera localhost).
  if (mode === "development") {
    process.env.VITE_API_URL = "";
    process.env.VITE_WS_URL = "";
  } else if (!fromEnv) {
    process.env.VITE_API_URL = DEFAULT_API_URL;
  }

  const proxyPrefixes = [
    "/auth",
    "/listings",
    "/user",
    "/jobs",
    "/chat",
    "/payments",
    "/geo",
    "/ws",
  ];

  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [react(), tailwindcss()],
    server:
      mode === "development"
        ? {
            proxy: Object.fromEntries(
              proxyPrefixes.map((prefix) => [
                prefix,
                {
                  target: prefix === "/ws" ? apiUrl.replace(/^https/, "wss") : apiUrl,
                  changeOrigin: true,
                  secure: true,
                  ws: prefix === "/ws",
                },
              ])
            ),
          }
        : undefined,
    build: {
      outDir: "dist",
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes("node_modules")) return;
            if (
              id.includes("react-router") ||
              id.includes("react-dom") ||
              id.includes("/react/")
            ) {
              return "vendor-react";
            }
          },
        },
      },
    },
  };
});
