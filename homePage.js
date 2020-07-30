import Header from '../examples/header';
import SignInPage from '../examples/signin';
import PublishPage from '../examples/publish';

class HomePage {
  constructor() {
    this.header = new Header();
  }
  
  visit() {
    cy.visit('https://demo.productionready.io/#/')
  }
  
  getUserAvatar() {
    return cy.get('[data-testid=UserAvatar]');
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