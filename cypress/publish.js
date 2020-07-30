class SignInPage {
  getEmailError() {
    return cy.get('[type="email"]');
  }

  getPasswordError() {
    return cy.get('[type="password"]');
  }

  fillTitle(value) {
    const field = cy.get('[placeholder="Article Title"]');
    field.clear();
    field.type(value);
    
    return this;
  }
  fillDesc(value) {
    const field = cy.get(`[placeholder="What's this article about?"]`);
    field.clear();
    field.type(value);
    
    return this;
  } 
  fillBody(value) {
    const field = cy.get('[placeholder="Write your article (in markdown)"');
    field.clear();
    field.type(value);
    
    return this;
  }
  
  submit() {
    const button = cy.get('[type="button"]');
    button.click();
  }
}

export default SignInPage;