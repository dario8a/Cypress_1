export class ProductsPage {

    addToCart(nombre){
        cy.contains(nombre).siblings("[class='chakra-button css-1p0xaah']").click({force:true});
        cy.get('#closeModal').click();
    }

    goToShoppingCart(){
        cy.xpath("//button[contains(@id,'goShoppingCart')]").click();
    }

}