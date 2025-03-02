import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "solid", autoCodeSplitting: true }),
    solid({ ssr: true }),
  ],
});
