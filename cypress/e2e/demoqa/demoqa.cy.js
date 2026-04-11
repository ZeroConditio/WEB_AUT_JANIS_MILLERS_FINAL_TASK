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
                hobbies: 'Music',
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
            registrationPage.submitButton.click();

            // Validate data
            function validateTable(label, correctLabel){
                cy.contains('td', label).next().should('have.text', correctLabel);
            }

            validateTable('Student Name', info.name + ' ' + info.last);
            validateTable('Student Email', info.email);
            validateTable('Gender', 'Male');
            validateTable('Mobile', info.mobile);
            validateTable('Date of Birth', info.day + ' February,' + info.year);
            validateTable('Subjects', info.subject);
            validateTable('Hobbies', info.hobbies);
            validateTable('Picture', info.picture);
            validateTable('Address', info.address);
            validateTable('State and City', info.state + ' ' + info.city);
        });
    });
});