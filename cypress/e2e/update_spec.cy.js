describe('update subscription status user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/subscriptions/4');
  });

  it('can click edit button to change status', () => {
    cy.get('.button-edit').contains('Edit Status').click()
    cy.get('input').click()
    cy.get('.button-save').click()  
  })

  it('can click cancel button to exit change status', () => {
    cy.get('.button-edit').contains('Edit Status').click()
    cy.get('input').click()
    cy.get('.button-cancel').click()  
  })
})