describe('cadastro', () => {
    // Lista para armazenar os e-mails e senhas gerados
    let generatedCredentials = [];

    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/what-is-new.html');

    });

    it('Create an Account', () => {
        // Gerar um e-mail único com base no timestamp atual
        const email = `user_${Date.now()}@gmail.com`;
        const password = 'Admin123@'; // Senha fixa ou você pode gerar uma senha também, se necessário

        // Adiciona o e-mail e a senha gerados à lista
        generatedCredentials.push({ email, password });

        // Preencher os campos de cadastro com os dados
        cy.contains("What's New").click();
        // Verificar se a mensagem de sucesso é exibida
        cy.contains("What's New").should('be.visible');
        // Passar o mouse sobre o produto para exibir o botão "Adicionar ao Carrinho"
        cy.get('img[alt="Wayfarer Messenger Bag"')  // Seleciona o item de produto (ajuste o seletor conforme necessário)
                    .trigger('mouseover')
                    .click();  // Simula o hover sobre o item
         // Verifica se o botão de adicionar ao carrinho está visível
         cy.contains('Add to Cart')  // Ajuste o seletor para o botão de adicionar ao carrinho
         .click();  // Clica no botão para adicionar ao carrinho
         // Espera o carrinho ser atualizado (caso necessário, se for assíncrono)
         cy.wait(1000); // Ajuste o tempo de espera ou use um comando mais preciso, como .should()
         cy.contains('Add to Cart')
         .scrollIntoView() // Rola até o elemento se necessário
         .trigger('mouseover'); // Simula o hover
          // Rola a tela para o topo para acessar o menu do carrinho
          cy.get('.minicart-wrapper') // Seletor para o menu de carrinho (ajuste conforme necessário)
          .scrollIntoView({ offset: { top: -100, left: 0 } }) // Rola até o carrinho
          .should('be.visible'); // Verifica se o carrinho está visível

          cy.get('span.counter-number')
               .should('be.visible')  // Verifica se o elemento está visível
               .click();  // Clica no elemento
          cy.get('#top-cart-btn-checkout')
            .should('be.visible')
            .click();

          // Espera por 2 segundos para garantir que a próxima ação foi processada
          cy.wait(2000);

          // Verifica se a URL mudou para a página de checkout
          cy.url().should('include', '/checkout');


    });
});
