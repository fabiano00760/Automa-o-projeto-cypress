describe('login', () => {
    let generatedCredentials = [];  // Variável para armazenar as credenciais carregadas

    beforeEach(() => {
        // Navegar até a página inicial do Magento
        cy.visit('https://magento.softwaretestingboard.com/');

        // Carregar as credenciais salvas do arquivo JSON (caso existam)
        cy.readFile('cypress/fixtures/generatedCredentials.json', { failOnStatusCode: false }).then((credentials) => {
            // Se o arquivo existe e contém credenciais, carrega as credenciais
            generatedCredentials = credentials || [];
        });
    });

    it('Login com a última credencial gerada', () => {
        // Verificar se existem credenciais salvas no arquivo JSON
        expect(generatedCredentials).to.have.length.greaterThan(0, 'Deve haver credenciais geradas para realizar o login');

        // Pegar a última credencial gerada
        const { email, password } = generatedCredentials[generatedCredentials.length - 1]; // Pega a última credencial

        // Acessar a página de login
        cy.contains('Sign In').click();

        // Preencher os campos de login com o e-mail e senha salvos
        cy.get('input[id="email"]').first().type(email); // Garante que o primeiro campo será usado
        cy.get('input[id="pass"]').first().type(password); // Garante que o primeiro campo será usado

        cy.contains('button', 'Sign In').click(); // Clicar no botão "Sign In"

        // Verificar se o login foi bem-sucedido
        // Aqui você pode ajustar para validar um elemento visível após o login
        cy.contains('Welcome, Fabiano Silva! ').should('be.visible'); // Exemplo de uma mensagem ou elemento que aparece após o login
    });
});
