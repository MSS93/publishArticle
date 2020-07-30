class Header {
  getSignInLink() {
    return cy.get('[href="#/login"]');
  }
  getPublishLink() {
    return cy.get('[href="#/editor/"]');
  }
}

export default Header;