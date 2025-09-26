import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

console.log(path.resolve(__dirname, "/src/").concat("\\"));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "module-resolver",
            {
              root: ["./src"],
              extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
              alias: {
                "@navigation": "./src/navigation",
                "@scenes": "./src/scenes",
                "@components": "./src/components",
                "@hooks": "./src/hooks",
                "@utils": "./src/utils",
                "@assets": "./src/assets",
                "@config": "./src/config",
                "@store": "./src/store",
                "@services": "./src/services",
                "@types": "./src/types",
              },
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src".concat("\\")),
      },
    ],
  },
});
