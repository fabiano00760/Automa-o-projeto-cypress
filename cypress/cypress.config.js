const { defineConfig } = require("cypress");
module.exports = {
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/', // URL de exemplo
    supportFile: false,
    viewportWidth: 1280, // Largura da tela do navegador
    viewportHeight: 800, // Altura da tela do navegador
    video: true,  // Se você deseja gravar os testes
    screenshotOnRunFailure: true, // Tirar screenshot em caso de falha
    retries: {
      runMode: 2, // Tentativas de rerun de testes no modo de execução
      openMode: 0, // Sem retries no modo aberto (interativo)
    },
  },
};