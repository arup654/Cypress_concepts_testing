///<reference types='Cypress'/>

describe('Using wrap function',function()
{

it('should verufy the wrap method',function()
{

    const raw_val =function()
    {
        return 'Arup Biswas'
    }
    const numadds = function(a,b)
    {
        //let s = a+b
        return a+b
    }
    cy.wrap({s:numadds}).invoke('s',5,5).should('eq',10)
    cy.wrap({name:raw_val}).invoke('name').should('eq','Arup Biswas')
    cy.wrap({amount:10}).should('have.property','amount').and('eq',10)
    cy.wrap({string:'apple'}).should('have.property','string').and('have.string','apple')
})




})