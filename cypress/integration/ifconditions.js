///<reference types="Cypress"/>

describe('if conditions on the wikipedia website',function()
{

it('apply the if condition when wikivoyage exist', function()
{
    cy.visit('https://www.wikipedia.org/',{timeout:7000})
    cy.get('body').then(function($body)
    {
    if ($body.find('[data-jsl10n="wikivoyage.name"]').length>0)
    {   
        cy.log($body.find('[data-jsl10n="wikivoyage.name"]').length)
        cy.get('[data-jsl10n="wikivoyage.name"]').click()
    }
    else
    {
        cy.get('[data-jsl10n="wiktionary.name"]').click()
    } 
        
    })

      
    
    

})






})