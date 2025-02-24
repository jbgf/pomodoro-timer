import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

// 创建一个检查插件
const cssCheckPlugin: Plugin = {
  name: 'css-check',
  writeBundle(options, bundle) {
    console.log('Build output files:', Object.keys(bundle));
    const jsFiles = Object.keys(bundle).filter(file => file.endsWith('.js'));
    jsFiles.forEach(file => {
      const content = (bundle[file] as any).code || '';
      const hasCssImport = content.includes('pomodoro-timer.css');
      console.log(`${file} ${hasCssImport ? 'includes' : 'does not include'} CSS import`);
    });
  }
};

// 添加 CSS 注入插件
const cssInjectionPlugin: Plugin = {
  name: 'css-injection',
  generateBundle(options, bundle) {
    const cssFileName = 'pomodoro-timer.css';
    const jsFiles = Object.keys(bundle).filter(file => file.endsWith('.js'));

    jsFiles.forEach(file => {
      const chunk = bundle[file] as any;
      const cssImport = `import './${cssFileName}';`;
      chunk.code = cssImport + '\n' + chunk.code;
    });
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: resolve(__dirname, "./public"),
  plugins: [
    react(),
    dts({
      include: [
        resolve(__dirname, "./index.tsx"),
        resolve(__dirname, "./types/**/*")
      ],
      rollupTypes: true,
    }),
    cssInjectionPlugin,
    cssCheckPlugin
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
          if (assetInfo.name === 'style.css') {
            return 'pomodoro-timer.css';
          }
          return assetInfo.name || '';
        },
        entryFileNames: (chunkInfo) => {
          return `pomodoro-timer${chunkInfo.name === 'index' ? '' : `.${chunkInfo.name}`}.js`;
        }
      },
    },
    cssCodeSplit: false,
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]__[hash:base64:5]'
    }
  }
}); 