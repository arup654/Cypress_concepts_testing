///<reference types="Cypress" />

import 'cypress-file-upload'

describe('Verify the form submit on contact us',function()
{
    const filePath="uploadfile.txt"
    it('should upload the text file and submit the form',function()
    {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#contact-link').click()
        cy.url().should('include','controller=contact')
        cy.Form_fill('abc@xyz.com','231144','send command')
        cy.get('.filename').should('contain','No file selected')
        cy.fixture('uploadfile.txt','base64').then(function(fileContent)
        {
            cy.get('#fileUpload').attachFile(
            {
                fileContent,
                filename:'uploadfile.txt',
                mimeType:'text'
                }
                
            )
        
        

        cy.get('.filename').should('contain', 'uploadfile.txt')
        cy.get("#submitMessage").click()


    })

})

})