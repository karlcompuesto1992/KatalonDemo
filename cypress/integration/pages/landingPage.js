class landingPage {

    verifyLandingPage() {
        return cy.get('h1').contains('CURA Healthcare Service')
    }

    goToLoginPage() {
        return cy.get('#btn-make-appointment').click()
    }

    getMenuToggle() {
        return cy.get('#menu-toggle').click()
    }

} 
export default landingPage;