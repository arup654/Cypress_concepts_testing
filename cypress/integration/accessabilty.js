///<reference types ="Cypress"/>

describe('Authentication of the website',function()


{
    cy.injectAxe()
    it('Should visit the correct URL',function()
    {

        cy.visit(Cypress.env('URL1'),{timeout:7000})
        cy.url().should('include','toscrape')
        cy.checkA11y('.nav > :nth-child(1) > ul > :nth-child(1) > a')
        

    })
})