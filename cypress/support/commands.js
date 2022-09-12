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
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add('login',()=> {
    cy.get('#txt-username')
      .type('John Doe')

    cy.get('#txt-password')
      .type('ThisIsNotAPassword')

    cy.get('#btn-login')
      .click()
})

Cypress.Commands.add('logout', ()=> {
    cy.contains('Logout').click()
})

Cypress.Commands.add('selectFacility',(facilityName)=> {
    cy.get('#combo_facility')
      .select(facilityName)

    cy.get('#combo_facility').then((element) => {
        if(element.text().includes(facilityName))
            return  true;
        else
            throw new Error("Displayed text is not the selected one")
    })
})

Cypress.Commands.add('selectHealthcareProgram', (healthcareProgram)=> {
    cy.get('label[class="radio-inline"]').each((element, index, list) => {
        if(element.text().includes(healthcareProgram))
        cy.wrap(element).click()
    })
})

Cypress.Commands.add('selectDay', (date)=> {
    cy.get('div[class="datepicker-days"] table[class="table-condensed"]').contains(date).click()
})


Cypress.Commands.add('enterText',(text)=> {
    cy.get('#txt_comment').type(text)

    cy.get('#txt_comment').then((element) => {
        if(element.text().includes(text))
            return  true;
        else {
            cy.log(text)
           // throw new Error("Displayed text is not the entered one")
        }    
    })
})

Cypress.Commands.add('confirmAppointment', (facilityName,healthcareProgram,day)=> {
    cy.get('#facility').should('contain',facilityName)
    cy.get('#program').should('contain',healthcareProgram)
    cy.get('#visit_date').should('contain',day)
})




















//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })