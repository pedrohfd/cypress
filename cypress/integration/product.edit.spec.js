describe('Little Market', () => {
  it('Product edit', () => {
    cy.visit('http://165.227.93.41/lojinha-web')

    cy.get('#usuario').focus().type('admin')

    cy.get('#senha').focus().type('admin')

    cy.get('.btn').click()

    cy.get('[rev="12348"] > .title > a').click()

    cy.get('#produtonome').should('have.value', 'TV SONY')
  })
})
