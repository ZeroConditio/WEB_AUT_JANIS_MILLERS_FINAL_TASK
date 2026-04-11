import { basePage } from "./basePage";
export class registrationPage extends basePage{
    static get url(){
        return '/automation-practice-form';
    }

    static get nameField(){
        return cy.get('#firstName');
    }

    static get lastField(){
        return cy.get('#lastName');
    }

    static get emailField(){
        return cy.get('#userEmail');
    }

    static get genderRadio(){
        return cy.get('#gender-radio-1');
    }

    static get phoneField(){
        return cy.get('#userNumber');
    }

    static get dobField(){
        return cy.get('#dateOfBirthInput');
    }

    static get monthSelect(){
        return cy.get('.react-datepicker__month-select');
    }

    static monthOption(){
        // return cy.contains('.react-datepicker__month-select', month);
        cy.get('react-datepicker__month-select');
    }

    static get subjectField(){
        return cy.get('#subjectsContainer');
    }

    static get hobbiesCheckbox(){
        return cy.get('#hobbies-checkbox-3');
    }

    static get pictureUpload(){
        return cy.get('#uploadPicture');
    }

    static get addressField(){
        return cy.get('#currentAddress');
    }

    static get stateSelect(){
        return cy.get('#state');
    }

    static get citySelect(){
        return cy.get('#city');
    }

    static get submitButton(){
        return cy.get('#submit');
    }    
}