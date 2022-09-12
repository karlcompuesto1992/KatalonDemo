class confirmationPage {

    verifyConfirmPage() {
        return cy.get('h2').should('contain.text','Appointment Confirmation')
    }

} 
export default confirmationPage;