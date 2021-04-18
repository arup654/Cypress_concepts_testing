///<reference types="Cypress"/>

describe('Select product and add to the cart verification',function()
{
    
    it('Should ensure that a random product is added to the cart',function()
    
    {
        cy.clearLocalStorage()
        cy.visit('http://automationpractice.com/index.php')
        cy.Add_random_product()
        cy.get('h1').contains('Dress').should('be.visible')
        cy.get('.icon-plus').click()
        cy.get('#group_1').select('2')
        cy.get('#add_to_cart').click()
        cy.get('.layer_cart_product > h2').should('contain','Product successfully added to your shopping cart')
        cy.get('.btn.btn-default.button.button-medium').click()
        cy.get('#cart_title').then(function($textcont)
        {
            const txt_msg=$textcont.text()
            expect(txt_msg).to.contain('Shopping-cart summary')

        })
         cy.get('#cart_summary>tbody>tr>td:nth-child(4)').find('.price').eq(1)
        .then(function(textprice){

            var total_cost=0
            const value_text =textprice.text()
            var result=value_text.substr(1,5)
            result=result.trim()
            var computed_total=result*2
            cy.log(computed_total) 
             cy.get('#cart_summary>tbody>tr>td:nth-child(6)').invoke('text')
             .then(function(value_txt)
             {
            //cy.get('.cart_total>.price')
               var amount=value_txt.$textcont
                var value_total =amount.substr(1,4)
                cy.log(value_total)
                
                
                
            })
        })

        
            

        


        //cy.get('[title="View my shopping cart"]').invoke('show').trigger('mouseover')






    })









})