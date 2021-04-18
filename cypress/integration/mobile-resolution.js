///<reference types='Cypress'/>
describe('To test on diffrent types of mobile',function()
{
    context('Mobile header details',function(){

        const phone_sizes =['iphone-6', 'iphone-5','iphone-7']
        phone_sizes.forEach(function(size)
        
        {
            it(`verify the visibility of the ribbon data in screensize: ${size}`,function()
        {
            
            cy.viewport(size) 
            cy.visit('http://automationpractice.com/index.php')
            cy.get('.sf-menu').should('not.be.visible')
            cy.get('.cat-title').click()
            cy.get('#block_top_menu').should('be.visible')

    })






        })
    })
    

})
