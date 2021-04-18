// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a login command --
import 'cypress-file-upload';
    Cypress.Commands.add("login", (userid, password) => 
    { 
        cy.visit(Cypress.env('URL'),{'timeout':15000})
        cy.get('#txtUsername').type(userid)
        cy.get('#txtPassword').type(password)
        cy.get('input[type="submit"]').click()
    })

    Cypress.Commands.add("Form_fill",(email,ordernum,msg) =>
    {
        cy.get('#id_contact').select('2')
        cy.get('#email').type(email)
        cy.get('#id_order').type(ordernum)
        cy.get('#message').type(msg)


    })

    Cypress.Commands.add("Add_random_product",function()
    {

        cy.get('.sf-with-ul').contains('Dresses').click({force:true})
        cy.get('.product-container').its('length').then(function($rndm)
        {
            const any_product =Cypress._.random(0,$rndm-1)
            cy.get('.product-container').eq(any_product).find('.product_img_link').click({force:true})

        })

    })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
