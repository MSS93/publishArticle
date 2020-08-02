class SignInPage {

  fillEmail(value) {
    cy.get('[type="email"]').clear().type(value);  
    return this;
  }

  fillPassword(value) {
    const field = cy.get('[type="password"]').clear().type(value); 
    return this;
  }
  
  clickOnSignIn() {
    cy.contains('button', 'Sign in').click();
  }
}

export default SignInPage;