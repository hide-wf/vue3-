import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import unocss from "unocss/vite";
import { presetAttributify, presetUno } from "unocss";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import viteCompression from 'vite-plugin-compression';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    unocss({
      presets: [presetAttributify(), presetUno()],
      rules: [["mw", { width: "100vw" }],
    ],
      shortcuts: {
        cc: "flex items-center	",
      },
    }),
    viteCompression({
      threshold: 1,
      deleteOriginFile : true
    }),
 
  ],
});
