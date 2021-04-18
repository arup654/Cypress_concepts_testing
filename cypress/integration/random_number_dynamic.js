///<reference types='Cypress'/>
describe('Visist the website and click on random checkbox out of all available',function()
{
    it('verify the checkbox selected randomly is checked',function()
    {

        const rand_number =function(number)
        {
            return Math.round(Math.random()* (number-1))
        }
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').contains('Women').click()
        //cy.get('#layered_category_4').check()
        cy.get('.checkbox').its('length').then(function($countbox){

            const length_box = rand_number($countbox);
            cy.get('.checkbox').eq(length_box).check().parent().should('have.class','checked')

        })


    })

})
