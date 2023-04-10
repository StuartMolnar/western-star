import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()],
  base: './',
  rollupOptions: {
    output: {
      chunkFileNames: 'assets/js/[name]-[hash].js',
      entryFileNames: 'assets/js/[name]-[hash].js',
      
      assetFileNames: ({name}) => {
        if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
            return 'assets/images/[name]-[hash][extname]';
        }
        
        if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]';   
        }

        // default value
        // ref: https://rollupjs.org/guide/en/#outputassetfilenames
        return 'assets/[name]-[hash][extname]';
      },
    },
  }
})
