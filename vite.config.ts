import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: resolve(__dirname, "./public"),
  plugins: [
    react(),
    dts({
      include: [resolve(__dirname, "./index.tsx")],
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "./index.tsx"),
      name: 'PomodoroTimer',
      formats: ['es', 'umd'],
      fileName: (format) => `pomodoro-timer.${format === 'es' ? 'js' : 'umd.js'}`,
    },
    outDir: resolve(__dirname, "./dist"),
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: (assetInfo) => {
          return assetInfo.name === 'style.css' ? 'pomodoro-timer.css' : assetInfo.name || '';
        }
      },
    },
    cssCodeSplit: true,
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]__[hash:base64:5]'
    }
  }
}); 