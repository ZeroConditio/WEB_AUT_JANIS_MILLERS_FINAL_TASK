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

    static get genderRadio(){
        return cy.get('#gender-radio-1');
    }

    static get phoneField(){
        return cy.get('#userNumber');
    }

    static get subjectField(){
        return cy.get('#subjectsContainer');
    }

    static get submitButton(){
        return cy.get('#submit');
    }
    
    static get closeButton(){
        return cy.get('#closeLargeModal');
    }
    
}