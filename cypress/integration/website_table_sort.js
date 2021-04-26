///<reference types ='Cypress' />





describe('Sorting the web table',function()
{
    it('visit the webtable and sort',function()
    {

        cy.visit('https://datatables.net/examples/basic_init/table_sorting.html')
        cy.get('#example>tbody>tr').its('length').should('be.gte',3)
        cy.get('#example>tbody>tr:eq(0)>td').its('length').should('be.gte',6)
        cy.get('#example>thead')
        .contains('Age').dblclick()
        cy.get('.sorting_desc').should('be.visible')
        cy.get('#example>tbody > tr > :nth-child(4)')
        .then(function(age)
        {

            const age_values= age
            .toArray()
        
            .map($e1=> parseInt($e1.textContent))// 
            
            
            expect(age_values).to.be.sorted({descending:true})
            cy.log(age_values)
            // This is chai assertion(to avoid using loadash method _.sortBy())


        })



    })
}
)
