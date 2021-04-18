///<reference types ="Cypress"/>
describe('Authentication of the website',function()

{
    it('Should visit the correct URL',function()
    {

        cy.visit(Cypress.env('URL1'),{timeout:7000})
        cy.url().should('include','toscrape')

    })

    it('Should list the correct number of books',function()
    {
        cy.get('a').contains('Classics').click()
        cy.get('h1').should('include.text','Classics')
        cy.get('.product_pod').its('length').should('eq',19)
        cy.get('.product_pod').each(($e1,index,$list)=>
            {

                if($e1.text().includes('The Secret Garden'))
                {
                    
                    cy.get("button[type='submit']").eq(index).click()
                }
            })
    })

    it('Should validate the price of the book',function()
        {
            cy.get('a').contains('Classics').click()
            cy.get("img[alt='The Secret Garden']").click()
            cy.get('.product_main > .price_color').then(($textprice)=>{

                expect($textprice).to.have.text('£15.08')

            })
            
            


         })

})
