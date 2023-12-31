const url = 'https://google.com'
const search_box = '[name="q"]'

class googlePage {
  static visit() {
    cy.visit(url);
  }

  static titleMacth(title) {
    cy.title().should('include', title)
  }

  static searchWord(keyword) {
    cy.get(search_box).type(keyword).type('{enter}');
    cy.wait(1000)
    // cy.get(search_box).type('https://github.com/nathan-rivera{enter}');

    //cy.get('[name="btnK"]').click({multiple: true})    
  }
}

export default googlePage;