///<reference types ="Cypress"/>
describe('Authentication of the website',function()

{
    it('Should visit the correct URL',function()
    {

        cy.visit(Cypress.env('URL1'),{timeout:7000})
        cy.url().should('include','toscrape')
        cy.injectAxe()
        cy.checkA11y()

    })
})