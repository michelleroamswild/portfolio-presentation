import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    open: true,
    fs: {
      // Allow serving files from symlinked asset folders outside the project root
      strict: false,
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        onboarding: resolve(__dirname, 'onboarding.html'),
        onboardingOld: resolve(__dirname, 'onboarding-old.html'),
        roamswild: resolve(__dirname, 'roamswild.html'),
        roamswildOld: resolve(__dirname, 'roamswild-old.html'),
        realready: resolve(__dirname, 'realready.html'),
        clipquery: resolve(__dirname, 'clipquery.html'),
      },
    },
  },
});
