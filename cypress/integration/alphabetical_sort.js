///<reference types="Cypress" />

describe('Sorting the web table',function()
{
    it('visit the webtable and sort the strings',function()
    {
        cy.visit('https://datatables.net/examples/basic_init/table_sorting.html')
        cy.get('#example>tbody>tr').its('length').should('be.gte',3)
        cy.get('#example>tbody>tr:eq(0)>td').its('length').should('be.gte',6)
        cy.get('#example>thead')
        .contains('Name').dblclick() // double click to sort in descending order
        cy.get('#example>tbody>tr>:nth-child(1)')
        .then(function(name)
        {
            const name_list = name
         .toArray()
           .map($e1=> $e1.innerText)
           expect(name_list).to.be.sorted({descending:true}) //will  verify that array is in descending sort
           cy.log(name_list)


         })





     })


})