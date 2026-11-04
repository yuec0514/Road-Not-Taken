import {defineConfig} from 'vite';
export default defineConfig({base:'./',build:{assetsInlineLimit:100000,rollupOptions:{input:'src/app.ts',output:{format:'iife',inlineDynamicImports:true,entryFileNames:'assets/entry-[hash].js',assetFileNames:'assets/[name][extname]'}}}});
