import path from "path";

import { defineConfig, build as viteBuild } from "vite";

import react from "@vitejs/plugin-react";

build();

async function build() {
  viteBuild(
    defineConfig({
      plugins: [react()],
      build: {
        sourcemap: true,
        lib: {
          entry: path.resolve(
            __dirname,
            "../src/scenes/Services/web-component"
          ),
          fileName: () => "services.js",
          formats: ["iife"],
          name: "services",
        },
        outDir: path.resolve(__dirname, "../public/mfe"),
      },
      define: {
        "process.env.NODE_ENV": JSON.stringify("production"),
      },
    })
  );
}
