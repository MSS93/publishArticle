import HomePage from '../publishAtricle/homePage';
import SignInPage from '../publishAtricle/signin';
import PublishPage from '../publishAtricle/publish';
import { Then, When, Before } from "cypress-cucumber-preprocessor/steps"

	const home = new HomePage();
	const publishAr = new PublishPage();
  const signIn = new SignInPage();

  var articleTitle = '';
  const articleDescreption = 'testing';
  const articleBody ='Article test'; 
  const articleTag='tag is optional';
    
  Before(()=>{
    home.goToSignIn();
    signIn
     .fillEmail('mohammed.sa893@gmail.com')
     .fillPassword('12312378')
     .clickOnSignIn();
     cy.url().should("equal", 'https://demo.productionready.io/#/');

  }) 

  // Scenario: the user filled all fields
  Given('the user pressed on new article button', () => { 
	  home.goToPublishPage();
  });
  
  When('article title is set with tag', () => { 
    articleTitle='articlewithtag';
    publishAr.fillTitle(articleTitle);
  });

  When('description is set with tag', () => { 
    publishAr.fillDesc(articleDescreption);
  });

  When('body is set with tag', () => {
    publishAr.fillBody(articleBody);
  });

  When('tag is set with tag', () => { 
    publishAr.fillTag(articleTag);
  });

  When('press on Publish Article button', () => {
    publishAr.clickOnPublish();
  });

  Then('article page should be opened', () => {
    cy.url().should("include", `/article/${articleTitle}`);
  });
  
  // Scenario: the user did not fill tag
  Given('the user pressed on new article button', () => { 
    home.goToPublishPage();
  });
  When('article title is set without tag', () => { 
    articleTitle='articlewithouttag';
    publishAr.fillTitle(articleTitle);
  });

  When('description is set without tag', () => { 
    publishAr.fillDesc(articleDescreption);
  });

  When('body is set without tag', () => {
    publishAr.fillBody(articleBody);
  });

  When('press on Publish Article button', () => {
    publishAr.clickOnPublish();
  });

  Then('article page should be opened without tag', ()  => {
    cy.url().should("include", `/article/${articleTitle}`);
  });

  // Scenario: the user did not fill title
  Given('the user pressed on new article button', () => { 
    home.goToPublishPage();
  });

  When('description is set without title', () => { 
    publishAr.fillDesc(articleDescreption);
  });

  When('body is set without title', () => { 
    publishAr.fillBody(articleBody);
  });
  
  When('press on Publish Article button', () => {
    publishAr.clickOnPublish();
  });

  Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:6000}).should('be.visible');
  });

  // Scenario: the user did not fill description
   Given('the user pressed on new article button', () => { 
    home.goToPublishPage();
  });

  When('title is set without description', () => { 
    articleTitle='no description';
    publishAr.fillTitle(articleTitle);
  });

  When('body is set without description', () => { 
    publishAr.fillBody(articleBody);
  });
  
  When('press on Publish Article button', () => {
    publishAr.clickOnPublish();
  });

  Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:6000}).should('be.visible');
  });
  
// Scenario: the user did not fill body
Given('the user pressed on new article button', () => { 
  home.goToPublishPage();
});

When('title is set without body', () => { 
  articleTitle='no body';
  publishAr.fillTitle(articleTitle);
});

When('description is set without body', () => { 
  publishAr.fillDesc(articleDescreption);
});

When('press on Publish Article button', () => {
  publishAr.clickOnPublish();
});

Then('{string} should be shown', (content) => {
  cy.contains(content, {timeout:6000}).should('be.visible');
});
 





































