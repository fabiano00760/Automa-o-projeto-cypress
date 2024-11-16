// ***********************************************
// Este exemplo de commands.js mostra como você
// pode criar vários comandos personalizados e sobrescrever
// comandos existentes.
//
// Para exemplos mais completos de comandos personalizados,
// leia mais aqui:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- Este é um comando principal --
// Cypress.Commands.add('login', (email, senha) => { ... })
//
//
//
// -- Este é um comando filho --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
//
// -- Este é um comando duplo --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
//
// -- Isso irá sobrescrever um comando existente --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
