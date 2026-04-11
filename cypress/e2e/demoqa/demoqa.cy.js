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
                year: '1930',
                picture: 'uploadImage.jpg',
                address: 'street name 123, City',
                state: 'NCR',
                city: 'Delhi'
            }

            // Registration page
            registrationPage.nameField.type(info.name);
            registrationPage.lastField.type(info.last);
            registrationPage.emailField.type(info.email);
            registrationPage.genderRadio.click();
            registrationPage.phoneField.type(info.mobile);
            registrationPage.dobField.click().type('{selectall}').type(info.day + ' ' + info.month + ' ' + info.year).type('{enter}');
            registrationPage.subjectField.type(info.subject).press(Cypress.Keyboard.Keys.ENTER);
            registrationPage.hobbiesCheckbox.click();
            registrationPage.pictureUpload.selectFile('cypress/files/' + info.picture);
            registrationPage.addressField.type(info.address);
            registrationPage.stateSelect.click().type(info.state + '{enter}');
            registrationPage.citySelect.click().type(info.city + '{enter}');
            // registrationPage.submitButton.click();
            // registrationPage.closeButton.click();

        });
    });





});