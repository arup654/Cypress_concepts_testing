function getText(byclassName) {
    return new Promise((resolve, reject) => {
        cy.get(byclassName).invoke('text')
            .then(campaign => {
                cy.log('campaign', campaign);
                resolve(campaign);
            });
    });
}

it('finds the role', function () {
    cy.visit('www.google.com');

    return getText('.myClass').then(elementText => {
        cy.log('campaign', elementText);

        expect(elementText).to.equal(2);
    });
})