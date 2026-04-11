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
                email: 'JohnDoe@email.com',
                mobile: '0123456789',
                subject: 'Economics',
                day: '28',
                month: 'Feb',
                year: '1930'

            }

            // Registration page
            registrationPage.nameField.type(info.name);
            registrationPage.lastField.type(info.last);
            registrationPage.emailField.type(info.email);
            registrationPage.genderRadio.click();
            registrationPage.phoneField.type(info.mobile);
            registrationPage.dobField.click().type('{selectall}').type(info.day + ' ' + info.month + ' ' + info.year).type('{enter}');


            registrationPage.subjectField.type(info.subject).press(Cypress.Keyboard.Keys.ENTER);
            // registrationPage.submitButton.click();
            // registrationPage.closeButton.click();

        });
    });





});