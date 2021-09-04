/// <reference types="cypress" />

describe('Lottery app', () => {
  it('Prova Cypress', () => {
    cy.visit('http://localhost:3000/')

    cy.get('.sign-up > a').click()

    cy.get('#name').type('Pedro Henrique')

    cy.get('#email').type('pedro.dedeus@luby.software')

    cy.get('#password').type('123456')

    cy.get('.registration').click()

    cy.get('footer > button').click()

    cy.get('#email').type('pedro.dedeus@luby.software')

    cy.get('#password').type('123456')

    cy.get('span').click()

    cy.get('.sc-hHEiqL > a').click()

    cy.get('.kBZQQN').click()

    for (let i = 0; i < 7; i++) {
      cy.get('.generic-btn > :nth-child(1)').click()

      cy.get('.add-cart > button').click()
    }

    cy.get('.grid-cart-button-save > span').click()

    cy.get('footer > button').scrollIntoView().should('be.visible').click()
  })
})
