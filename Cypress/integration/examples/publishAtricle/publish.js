class PublishPage {

  fillTitle(value) {
    const field = cy.get('[placeholder="Article Title"]').clear().type(value);
    return this;
  }

  fillDesc(value) {
    cy.get(`[placeholder="What's this article about?"]`).clear().type(value);    
    return this;
  } 

  fillBody(value) {
    cy.get('[placeholder="Write your article (in markdown)"').clear().type(value);    
    return this;
  }

  fillTag(value) {
    cy.get('[placeholder="Enter tags"').clear().type(value);    
    return this;
  }

  clickOnPublish() {
    cy.contains('button', 'Publish Article').click();
  }
}

export default PublishPage;