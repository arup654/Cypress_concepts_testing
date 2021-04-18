///<reference types= "Cypress" />
const { _ } = Cypress



describe('Validate the table sort',function()
{
it('Should validate the sorting of the table ',function()
{

    cy.visit('tabledata.html')
    cy.get('#myGrid')
    cy.get('[role=rowgroup] .ag-row').its('length').should('be.gte',2)
    cy.contains('.ag-header-cell-label', 'Price').click()
    cy.contains('.ag-header-cell-label', 'Price')
      .find('[ref=eSortAsc]').should('be.visible')
      cy.get('[col-id=price].ag-cell').should('have.length.gte',3)
      .then(function(prices) 
        {
            const sort_prices = prices
            .toArray()
            
            .map($e1 =>parseFloat($e1.textContent) )
            //const row_sorted =$e2.parentElement.attributes['row-index'].value
           
           expect(sort_prices).not.to.be.sorted()
           })

           const cellsToPriceObjects = ($cells) => {
            return _.map($cells, ($cell) => {
              return {
                price: Number($cell.textContent),
                rowIndex: Number($cell.parentElement.attributes['row-index'].value),
              }
              cy.log(rowIndex)
            })
          }

           cy.get('[col-id=price].ag-cell')
           .then(cellsToPriceObjects)
           .then((prices) => {
             console.table(prices)
             const sorted = _.sortBy(prices, 'rowIndex')

             // extract just the price numbers and check if they are sorted
             const justPrices = _.map(sorted, 'price')
         
             const sortedPrices = _.sortBy(justPrices)
         
             expect(justPrices, 'cells are sorted 📈').to.deep.equal(sortedPrices)
     
             // TODO confirm prices are sorted
           })
})


})



