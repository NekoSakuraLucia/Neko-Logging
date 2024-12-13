import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["cjs"],
    outDir: "dist/cjs",
    dts: false,
    sourcemap: true,
    clean: true,
  },
  {
    entry: ["src/index.ts"],
    format: ["esm"],
    outDir: "dist/esm",
    dts: false,
    sourcemap: true,
    clean: false, // Don't delete the dist because another file has already been created.
  },
  {
    entry: ["src/index.ts"],
    format: ["cjs"],
    outDir: "dist/types",
    dts: true,
    sourcemap: false,
    clean: false,
  },
]);
