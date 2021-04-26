///<reference types="Cypress"/>
describe('Verify the dynamic content in the website',function()
{
    it('should select the hover and validate the selection',function(){

        const title_text='Buy Organic Vegetables, Fruits & Groceries in mumbai | Zama Organics'
        cy.visit('https://www.zamaorganics.com/')
        cy.wait(5000)
        cy.title().should('contain',title_text)
        cy.get('.level-top').contains('Spices').invoke('show').trigger('mouseover')
        cy.contains('Whole Spices').click({force:true})
        cy.get('.item.product.product-item').its('length').should('equal',12)
        cy.whole_spice_product_select(2)
        cy.get('.counter-number').should('contain',2)













    })

}
)