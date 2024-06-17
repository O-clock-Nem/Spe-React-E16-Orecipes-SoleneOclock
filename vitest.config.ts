/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // on va executer nos tests dans une environnement qui ressemble au navigateur avec un DOM
    environment: 'jsdom',
    // le fichier de _setup_ qui sera exécuté avant de lancer les tests// fournira plus d'options à notre _expect_,// voire simulera un serveur pour nos requêtes HTTP…
    setupFiles: './src/tests/setup.ts',
  },
});
