import { registrationPage } from "../pageObjects/registrationPage";

describe('Final Assignment', () => {
    context('Practice Form', () => {
        beforeEach(() => {
            cy.visit('');
        });
        it('Registration', () => {
            const info = {
                name: 'John',
                last: 'Doe',
                mobile: '0123456789',
                subject: 'Economics'
            }

            // Registration page
            registrationPage.nameField.type(info.name);
            registrationPage.lastField.type(info.last);
            registrationPage.genderRadio.click();
            registrationPage.phoneField.type(info.mobile);
            registrationPage.subjectField.type(info.subject).press(Cypress.Keyboard.Keys.ENTER);
            registrationPage.submitButton.click();
            registrationPage.closeButton.click();

        });
    });





});