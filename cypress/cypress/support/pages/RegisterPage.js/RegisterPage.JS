// RegisterPage.js - Page Object

class RegisterPage {
  visit() {
    cy.visit('https://magento.softwaretestingboard.com/');
  }

  clickCreateAccount() {
    cy.contains('Create an Account').click();
  }

  fillForm(firstName, lastName, email, password) {
    cy.get('input[id="firstname"]').type(firstName);
    cy.get('input[id="lastname"]').type(lastName);
    cy.get('input[id="email_address"]').type(email);
    cy.get('input[id="password"]').type(password);
    cy.get('input[id="password-confirmation"]').type(password);
  }

  submit() {
    cy.contains('button', 'Create an Account').click();
  }

  verifySuccessMessage() {
    cy.contains('Thank you for registering with Main Website Store.').should('be.visible');
  }
}

export default RegisterPage;
