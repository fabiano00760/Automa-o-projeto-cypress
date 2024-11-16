// loginPage.spec.js - Teste usando Page Object

import RegisterPage from '../support/pages/RegisterPage';

describe('loginPage', () => {
  let generatedCredentials = [];
  const registerPage = new RegisterPage();

  beforeEach(() => {
    // Carregar os dados existentes, se houver, para evitar sobrescrever
    cy.readFile('cypress/fixtures/generatedCredentials.json').then((credentials) => {
      generatedCredentials = credentials || [];
    });
    registerPage.visit(); // Visita a página inicial usando a Page Object
  });

  it('Create an Account', () => {
    // Gerar um e-mail único com base no timestamp atual
    const email = `user_${Date.now()}@gmail.com`;
    const password = 'Admin123@'; // Senha fixa ou você pode gerar uma senha também, se necessário

    // Adiciona o e-mail e a senha gerados à lista
    generatedCredentials.push({ email, password });

    registerPage.clickCreateAccount(); // Clica em "Create an Account"
    registerPage.fillForm('Fabiano', 'Silva', email, password); // Preenche o formulário
    registerPage.submit(); // Submete o formulário

    // Verificar se a mensagem de sucesso é exibida
    registerPage.verifySuccessMessage();

    // Salvar os e-mails e senhas gerados em um arquivo JSON
    cy.writeFile('cypress/fixtures/generatedCredentials.json', generatedCredentials);
  });

  after(() => {
    // Log para visualizar os e-mails e senhas gerados
    cy.log('Credenciais geradas:', generatedCredentials);
  });
});
