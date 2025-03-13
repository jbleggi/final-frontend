describe('subscription detail user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('loads subscription cards', () => {
    cy.get('.subscription-card').should('be.visible')
  })

  it('can select a subscription card to nav to detail page', () => {
    cy.get('.subscription-card').first().click()

    cy.url().should('include', '/subscriptions/')
    cy.get('.subscription-info').should('be.visible')
    cy.get('.items-container').should('be.visible')
    cy.get('.customer-container').should('be.visible')
  })

  it('can navigate back to main when clicking on logo', () => {
    cy.get('img.app-logo').click();
    cy.url().should('eq', 'http://localhost:5173/');
  })

})