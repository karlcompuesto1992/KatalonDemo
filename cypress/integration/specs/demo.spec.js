/// <reference types="cypress"/>

import appointmentForm from '../pages/appointmentForm'
import confirmationPage from '../pages/confirmationPage'
import landingPage from '../pages/landingPage'

describe("Automation Test", ()=> {

    before(function(){
        cy.visit('/')
    })

    it("User navigates the Site", ()=> {

        const AppointmentForm = new appointmentForm()
        const ConfirmationPage = new confirmationPage()
        const LandingPage = new landingPage()

        // Navigate to site and check if it loads properly
        LandingPage
            .verifyLandingPage()

        // User successfully Logs-in
        LandingPage
            .goToLoginPage()
            .login()


        // User creates an Appointment
        AppointmentForm
            .getFacilityDropdown()
            .selectFacility('Hongkong CURA Healthcare Center')

        AppointmentForm
            .getReadmissionCheckbox()
            .check()
            .should('be.checked')

        AppointmentForm
            .getHealthcareProgramRadioButton()
            .selectHealthcareProgram('Medicaid')

        AppointmentForm
            .getDatePicker()
            .click()
            .selectDay('30')
        
        AppointmentForm
            .getCommentBox()
            .enterText('The quick brown fox jumps over the lazy dog')
       
        AppointmentForm
            .getBookAppointmentButton()
            .click()


        // Confirm if Appointment was successfully created
        ConfirmationPage
            .verifyConfirmPage()
            .confirmAppointment('Hongkong CURA Healthcare Center','Medicaid','30')
        
        // Users successfully Logs-out
        LandingPage
            .getMenuToggle()
            .logout()

    })

})