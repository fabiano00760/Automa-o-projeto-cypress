/// <reference types="cypress" />

context('Consultas', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/querying')
  })

  // A consulta mais comumente usada é 'cy.get()', você pode
  // pensar nisso como o '$' no jQuery

  it('cy.get() - consultar elementos DOM', () => {
    // https://on.cypress.io/get

    cy.get('#query-btn').should('contain', 'Button')

    cy.get('.query-btn').should('contain', 'Button')

    cy.get('#querying .well>button:first').should('contain', 'Button')
    //              ↲
    // Use seletores CSS como no jQuery

    cy.get('[data-test-id="test-example"]').should('have.class', 'example')

    // 'cy.get()' retorna um objeto jQuery, você pode obter seu atributo
    // invocando o método `.attr()`
    cy.get('[data-test-id="test-example"]')
      .invoke('attr', 'data-test-id')
      .should('equal', 'test-example')

    // ou você pode obter a propriedade CSS do elemento
    cy.get('[data-test-id="test-example"]')
      .invoke('css', 'position')
      .should('equal', 'static')

    // ou usar asserções diretamente durante 'cy.get()'
    // https://on.cypress.io/assertions
    cy.get('[data-test-id="test-example"]')
      .should('have.attr', 'data-test-id', 'test-example')
      .and('have.css', 'position', 'static')
  })

  it('cy.contains() - consultar elementos DOM com conteúdo correspondente', () => {
    // https://on.cypress.io/contains
    cy.get('.query-list')
      .contains('bananas')
      .should('have.class', 'third')

    // podemos passar uma expressão regular para `.contains()`
    cy.get('.query-list')
      .contains(/^b\w+/)
      .should('have.class', 'third')

    cy.get('.query-list')
      .contains('apples')
      .should('have.class', 'first')

    // passando um seletor para contains irá
    // retornar o seletor que contém o texto
    cy.get('#querying')
      .contains('ul', 'oranges')
      .should('have.class', 'query-list')

    cy.get('.query-button')
      .contains('Save Form')
      .should('have.class', 'btn')
  })

  it('.within() - consultar elementos DOM dentro de um elemento específico', () => {
    // https://on.cypress.io/within
    cy.get('.query-form').within(() => {
      cy.get('input:first').should('have.attr', 'placeholder', 'Email')
      cy.get('input:last').should('have.attr', 'placeholder', 'Password')
    })
  })

  it('cy.root() - consultar o elemento DOM raiz', () => {
    // https://on.cypress.io/root

    // Por padrão, a raiz é o documento
    cy.root().should('match', 'html')

    cy.get('.query-ul').within(() => {
      // Dentro deste "within", a raiz agora é o elemento ul DOM
      cy.root().should('have.class', 'query-ul')
    })
  })

  it('melhores práticas - selecionando elementos', () => {
    // https://on.cypress.io/best-practices#Selecionando-Elementos
    cy.get('[data-cy=best-practices-selecting-elements]').within(() => {
      // Pior - muito genérico, sem contexto
      cy.get('button').click()

      // Ruim. Acoplado ao estilo. Altamente sujeito a mudanças.
      cy.get('.btn.btn-large').click()

      // Médio. Acoplado ao atributo `name`, que tem semântica HTML.
      cy.get('[name=submission]').click()

      // Melhor. Mas ainda acoplado ao estilo ou ouvintes de evento JS.
      cy.get('#main').click()

      // Levemente melhor. Usa um ID, mas também garante que o elemento
      // tenha um atributo ARIA role
      cy.get('#main[role=button]').click()

      // Muito melhor. Mas ainda acoplado ao conteúdo do texto, que pode mudar.
      cy.contains('Submit').click()

      // Melhor. Isolado de todas as mudanças.
      cy.get('[data-cy=submit]').click()
    })
  })
})
