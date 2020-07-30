
import HomePage from '../examples/homePage';

describe('Publish Article', () => {
  it('going to home page', () => {
    const home = new HomePage();
    home.visit();

    const signIn = home.goToSignIn();
  });
  const home = new HomePage();
  it('should sign in with correct credentials', () => {
    home.visit();

    const signIn = home.goToSignIn();

    signIn
      .fillEmail('mohammed.sa893@gmail.com')
      .fillPassword('12312378')
      .submit();

  });
  
  it('should fill all requires fields', () => {
	cy.wait(2000) 

    const publishAr = home.goToPublishPage();

    publishAr
      .fillTitle('Article from Mohammed Saleh')
      .fillDesc('This is for test')
	  .fillBody('For testing purposes')
      .submit();
  });

});














