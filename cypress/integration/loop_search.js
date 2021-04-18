///<reference types="Cypress" />
const search_data =require('../fixtures/search_data.json')
describe('Visit the website and verify search string',function()
{
    it('verify the valid and invalid search',function()
    {

        cy.visit('http://automationpractice.com/index.php')
        cy.get('.img-responsive').eq(0).should('be.visible')
        //cy.fixture('search_data').then(function(searchkey)
        
            
            search_data.forEach(function(input)
                    {
                         /* const product=input.product
                         const returnedvalue=input.returnedvalue */
                         const {product,returnedvalue}=input
                        cy.get('#search_query_top').type(product)
                        cy.get('button[name="submit_search"]').click()
                        cy.contains(returnedvalue).should('be.visible')
                        cy.get('#search_query_top').clear()


                    })


        
      /*   const inputs=[{product:'Dress',returnedvalue:'Sort by'},
                    {product:'xxTT<L',returnedvalue:'No results'},
                    {product:' ',returnedvalue:'No results'}] */
                    
                  /*   inputs.forEach(function(input)
                    {
                         const {product,returnedvalue}=input
                        cy.get('#search_query_top').type(product)
                        cy.get('button[name="submit_search"]').click()
                        cy.contains(returnedvalue).should('be.visible')
                        cy.get('#search_query_top').clear()


                    }) */

   
   
    }
    )
})

