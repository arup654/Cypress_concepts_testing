///<reference types ="Cypress"/>



describe('Cypres internal working',function()
{
    Cypress.Cookies.debug(true,{verbose:false})
    before(function()
    {
        
       cy.visit(Cypress.env('URL'))
       cy.log(Cypress.Cookies)
       


    })

    beforeEach(function()
    {
        Cypress.Cookies.preserveOnce('orangehrm')

    })
    it('verify',function()
    {

        cy.url().should('contain','login')
    })


})