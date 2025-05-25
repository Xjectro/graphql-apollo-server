import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/"],
  outDir: "dist",
  format: ["cjs"],
  dts: false,
  clean: true,
  sourcemap: true,
  target: "node18",
  minify: false,
  splitting: false,
  shims: false,
  bundle: true,
  platform: "node",
});
