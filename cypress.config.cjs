/* eslint-disable */

const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const {
  addCucumberPreprocessorPlugin,
} = require('@badeball/cypress-cucumber-preprocessor');
const {
  createEsbuildPlugin,
} = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on('file:preprocessor', bundler);

      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: [
      // E2E-filer Cypress letar efter som standard
      'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
      // Tillägg för Cucumber
      'cypress/e2e/**/*.feature',
    ],
    supportFile: 'cypress/support/e2e.ts', // Specify a single support file for E2E
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    supportFile: 'cypress/support/component.ts', // Specify a single support file for component tests
  },
});
