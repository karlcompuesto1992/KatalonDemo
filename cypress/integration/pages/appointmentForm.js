class appointmentForm {

    getFacilityDropdown() {
        return cy.get('#combo_facility')
    }

    getReadmissionCheckbox() {
        return cy.get('#chk_hospotal_readmission')
    }

    getHealthcareProgramRadioButton() {
        return cy.get('label[class="radio-inline"]')
    }

    getDatePicker() {
        return cy.get('#txt_visit_date')
        
    }

    getCommentBox() {
        return cy.get('#txt_comment')
    }

    getBookAppointmentButton() {
        return cy.get('#btn-book-appointment')
    }

} 
export default appointmentForm;