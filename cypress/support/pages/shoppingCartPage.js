export class ShoppingCartPage {

    verifyNameAndPrice (nombre,precio) {
        cy.contains(nombre).should("exist");
        cy.contains(nombre).siblings(`[name="${precio}"]`).should("exist");
    }

    clickShowTotalPrice () {
        cy.contains("button","Show total price").click();
    }

    verifyTotalPrice () {
        cy.get('#price > b').should("contain",40);
    }

}