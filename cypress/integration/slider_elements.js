describe('Validate the slidervalue',function()
{

    it('Should assert the slider value corectly',function()
    {
        cy.visit('https://demoqa.com/slider')
        cy.get('input[type="range"]').then(function($el){
            $el[0].stepUp(15)
             })
             .trigger('change')
        cy.get('#sliderValue').should('have.value',40)

    })

})
describe('Validate the checkbox selection',function()
{
    before(function()
    {

       cy.visit('https://demoqa.com/checkbox') 
    })
    it('should select the checkboxes correctly',function()
    {
        cy.get('.rct-collapse > .rct-icon').click()
        cy.get('.rct-title').contains('Home').click()
        cy.get('.rct-icon.rct-icon-expand-open').click()
        cy.get('.rct-title').contains('Notes').click()

        cy.get('#tree-node-desktop').click()
    })


})