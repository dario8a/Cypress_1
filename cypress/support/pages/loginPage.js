export class LoginPage {

    goToLogin(){
        cy.get("#registertoggle").dblclick();
    }

    typeUser(usuario){
        cy.get("#user").type(usuario);
    }

    typePassword(contraseña){
        cy.get("#pass").type(contraseña);
    }

    clickLogin(contraseña){
        cy.get("#submitForm").click();
    }
}