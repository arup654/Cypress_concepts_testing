///<reference types= "Cypress" />
describe('online shop URL',function()
{

before(function(){

    cy.fixture('testdata').then(function(inputdata){

        this.inputdata = inputdata;

    })

})

it('Should verify the successful login',function()
{
    cy.visit(Cypress.env('URL'),{'timeout':15000})
    cy.url().should('contain','login')
    cy.get('input[type="submit"]').should('be.enabled')
    cy.login(this.inputdata.Username,this.inputdata.Password)
    cy.url().should('include','dashboard')
    cy.get('#welcome').then(function(textval)
    {
        const textvl = textval.text()
        expect(textvl).to.contain('Welcome Paul')
    })
    cy.get('#menu_recruitment_viewRecruitmentModule').contains('Recruitment')
        .trigger('mouseover')
        .get('#menu_recruitment_viewCandidates').click({force:true})
        //cy.get('#candidateSearch_jobTitle').select(this.inputdata.CandidateType)
        cy.get('#candidateSearch_jobTitle>').each(($e1,index,$list)=>
        {
                
                if ($e1.text().includes(this.inputdata.CandidateType))
                {
                cy.get('#candidateSearch_jobTitle').select(this.inputdata.CandidateType)
                }
            

        })
})

    it('Should validate the recruitment',function()
    {
        

    })




})

