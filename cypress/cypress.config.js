// Cypress 10+ (com defineConfig)
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    supportFile: false,
    viewportWidth: 1280,
    viewportHeight: 800,
    video: true,
    screenshotOnRunFailure: true,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    experimentalSessionSupport: true, // Ativa o suporte a sessão
    clearCookies: false, // Impede que os cookies sejam limpos entre os testes
  },
});
