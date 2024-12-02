describe('template spec', () => {
  it('passes', () => {
    cy.visit('www.google.com.br')
    cy.get('#APjFqb').type("Celular{enter}")
    cy.get('#platop0').click()
  })
  
})