import Header from '../publishAtricle/header';
import SignInPage from '../publishAtricle/signin';
import PublishPage from '../publishAtricle/publish';

class HomePage {
  constructor() {
    this.header = new Header();
  }
    
  goToSignIn() {
    cy.visit('https://demo.productionready.io/#/login')
  }
  
  goToPublishPage() {
    this.header.getPublishLink().click();
    return new PublishPage();
  }
}

export default HomePage;