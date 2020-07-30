import Header from '../cypress/header';
import SignInPage from '../cypress/signin';
import PublishPage from '../cypress/publish';

class HomePage {
  constructor() {
    this.header = new Header();
  }
  
  visit() {
    cy.visit('https://demo.productionready.io/#/')
  }
  
  goToSignIn() {
    const link = this.header.getSignInLink();
    link.click();

    const signIn = new SignInPage();
    return signIn;
  }
  
  goToPublishPage() {
    const link = this.header.getPublishLink();
    link.click();

    const publish = new PublishPage();
    return publish;
  }
}

export default HomePage;