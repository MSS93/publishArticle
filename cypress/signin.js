class SignInPage {
  getEmailError() {
    return cy.get('[type="email"]');
  }

  getPasswordError() {
    return cy.get('[type="password"]');
  }

  fillEmail(value) {
    const field = cy.get('[type="email"]');
    field.clear();
    field.type(value);
    
    return this;
  }
  fillPassword(value) {
    const field = cy.get('[type="password"]');
    field.clear();
    field.type(value);
    
    return this;
  }
  
  submit() {
    const button = cy.get('[type="submit"]');
    button.click();
  }
}

export default SignInPage;