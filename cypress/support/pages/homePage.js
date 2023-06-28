export class HomePage {

    goToToDoList(){
        cy.get('#todolistlink').click();
    }

    goToWaits(){
        cy.get('#waitslink').click();
    }

    goToAlerts(){
        cy.get('#alertslink').click();
    }

    goToFormUtils(){
        cy.get('#formutilslink').click();
    }

    goToFormUtils(){
        cy.get('#formutilslink').click();
    }

    goToOnlineShop(){
        cy.get('#onlineshoplink').click();
    }

    goToFileUpload(){
        cy.get('#fileuploadlink').click();
    }

}