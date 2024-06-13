import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

// setup as the root sources of code & components
const root = resolve(__dirname, "src");
const pwd = resolve(__dirname);
export default defineConfig({
  plugins: [react()],
  /*
   * Setup the server:
   *              + port: 8000
   *              + host: 127.0.0.1
   */
  server: {
    host: "127.0.0.1",
    port: 3000,
    strictPort: true,
    //open: true //auto open the browser uncommemt this line if wanted to use it
    proxy: {
      "/create_user/": "http://127.0.0.1:8000/user",
      "/login/": "http://127.0.0.1:8000/user",
      "/token/validate/": "http://127.0.0.1:8000/api",
    },
  },
  resolve: {
    /*
     * Make the "import" alias.
     * usage: import ... from "css/file.css".
     */
    alias: [
      { find: "@", replacement: root },
      
      //assets part
      { find: "css", replacement: resolve(root, "assets", "css") },
      { find: "img", replacement: resolve(root, "public", "image") },
      //components part
      { find: "component", replacement: resolve(root, "components") },
      { find: "auth", replacement: resolve(root, "components","auth") },
      { find: "common", replacement: resolve(root, "components","common") },
      { find: "landing", replacement: resolve(root, "components","landing") },
      //page part
      { find: "page", replacement: resolve(root, "page") },
      { find: "secret", replacement: resolve(root, "page", "secret") },
      { find: "layout", replacement: resolve(root, "layout") },
      //worker part
      { find: "ui", replacement: resolve(root, "lib", "ui") },
      { find: "util", replacement: resolve(root, "lib", "utils") },
      { find: "service", replacement: resolve(root, "lib", "services") },
      //route
      { find: "route", replacement: resolve(root, "route") },
      
    ],
  },
  base: "/frontend-financial-app",
  build: {
    /*
     * This is build options.
     * Summmary:
     *        + out directory: docs.
     *        + target js is esnext.
     *        + css/js/media/font file name will be "public" directory
     * Custumize feature:
     *        + you can customize the file name with special name.
     *        + if you want build multiple page, dont forgot add the "file name" in "input" key.
     */
    outDir: resolve(__dirname, "docs"),
    assetsDir: resolve(__dirname, "public"),
    target: "esnext",
    emptyOutDir: true,
    rollupOptions: {
      input: ["./index.html"],
      output: {
        entryFileNames: "public/js/[name]-[hash].js",
        chunkFileNames: "public/js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const { name } = assetInfo;
          const extType = name.split(".").pop();
          const mediaExtensions = [
            "png",
            "jpe?g",
            "gif",
            "svg",
            "webp",
            "webm",
            "mp3",
          ];
          const cssExtensions = ["css"];
          const fontExtensions = ["woff", "woff2", "eot", "ttf", "otf"];

          if (new RegExp(`\\.(${mediaExtensions.join("|")})$`).test(name)) {
            return `public/media/[name]-[hash].${extType}`;
          }
          if (new RegExp(`\\.(${cssExtensions.join("|")})$`).test(name)) {
            return `public/css/[name]-[hash].${extType}`;
          }
          if (new RegExp(`\\.(${fontExtensions.join("|")})$`).test(name)) {
            return `public/fonts/[name]-[hash].${extType}`;
          }
          return `[name]-[hash].${extType}`;
        },
      },
    },
  },
  envDir: resolve(pwd, "env"),

});
