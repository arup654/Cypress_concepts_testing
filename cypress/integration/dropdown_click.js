///<reference types="Cypress"/>
describe('latest design dropdown verification',function()

{
    it('Should select the dropdown items',function()
    
    {

        cy.visit('https://symptomate.com/diagnosis/#0-66',{timeout:9000})
        cy.get('.languages').contains('English').click({force:true})
        

    })

    it("should navigate to the next page",function(){

        cy.get('.btn.btn-primary.btn-next.hidden-print.ng-binding').should('be.enabled').click({force: true})
        cy.get('.checkbox-label').click()
        cy.get('#cky-btn-accept').click()
        cy.wait(3000)
        cy.get('.btn.btn-primary.btn-next.hidden-print.ng-binding').click({force: true})
        cy.get('#plan_self_care').click({force: true})
        cy.get('.btn.btn-primary.btn-next.hidden-print.ng-binding').click({force:true})
        cy.wait(1000)
        cy.get('input[value="direct"]').parent().invoke('show',{force:true}).trigger('mouseover',{force:true}).dblclick({force:true})
        //cy.get('.direct > span').contains('Myself').dblclick({force:true})
        //cy.get('input[value="direct"]').parent().then(function($textvalue){

            //if
                //($textvalue.text()=="Myself")
               // cy.wrap($textvalue).invoke('show',{force:true}).trigger('mouseover',{force:true}).dblclick({force:true})
            
        //})
        cy.get('input[value="male"]').parent().invoke('show',{force:true}).trigger('click',{force:true}).dblclick({force:true})
      // cy.get('label[class="direct"]').trigger('mouseover',{force:true}).check({force:true})
        //cy.get('.placeholder').eq(0).click({force:true})
        //cy.get('.slider-input').invoke('val',36,{force:true}).trigger('change',{force:true})
        //cy.get('.tooltip-inner').should('have.text',36)
        

    })

})