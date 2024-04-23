/// <reference types='vitest' />
import {nxViteTsPaths} from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import {defineConfig, splitVendorChunkPlugin} from 'vite';

const basePath = '/cypress-failing-occasionally';

export default defineConfig({
  root: __dirname,
  cacheDir: './node_modules/.vite/.',

  // Where the application and its resources will be served from
  base: basePath,

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4200,
    host: 'localhost',
  },

  plugins: [react(),nxViteTsPaths(),splitVendorChunkPlugin()],

  build: {
    outDir: './dist/.',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
      sourceMap: true,
    },
    sourcemap: true,

  },

  css: {
    devSourcemap: true,
  },

  test: {
    globals: true,
    cache: {
      dir: './node_modules/.vitest',
    },
    environment: 'jsdom',
    passWithNoTests: true,
    setupFiles: ['./src/utils/setup-tests-after-env.ts'],
    include: ['src/**/*.spec.{js,ts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './coverage/.',
      provider: 'v8',
    },
  },
});
