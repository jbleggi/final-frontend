describe('Tea Time App homepage view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('loads main page component', () =>{
    cy.get('section.main-page').should('be.visible');
  })

  it('loads header component', () => {
    cy.get('header').contains('Tea Time')

    cy.get('img.app-logo').should('be.visible')
  })

  it('loads welcome component', () => {
    cy.get('.main-welcome').should('be.visible')
    cy.get('h2').contains('Welcome, Shop Owner!')
    cy.get('h3').contains('Select a subscription below to see more details.')
  })

  it('loads filter component', () => {
    cy.get('.filter-component').should('be.visible')
  })

  it('loads subscription container', () => {
    cy.get('.subscription-container').should('be.visible')
  })

  it('loads subscription cards', () => {
    cy.get('.subscription-card').should('be.visible')
  })

  it('loads footer', () =>{
    cy.get('footer').should('be.visible')

  })
  
})