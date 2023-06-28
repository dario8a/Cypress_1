/// <reference types="cypress"/>
import { LoginPage } from "../support/pages/loginPage";
import { HomePage } from "../support/pages/homePage";
import { ProductsPage } from "../support/pages/productsPage";
import { ShoppingCartPage } from "../support/pages/shoppingCartPage";

describe ("pre-entrega", () => {
    let credenciales;
    let products;
    const loginPage = new LoginPage;
    const homePage = new HomePage;
    const productsPage = new ProductsPage;
    const shoppingCartPage = new ShoppingCartPage;

    before("before",() => {
        cy.fixture("credenciales").then(login =>{
            credenciales = login;
        })
        cy.fixture("products").then(items =>{
            products = items;
        })

    });

    it("test", () => {
        cy.log("login with valid credentials");
        cy.visit('/');
        loginPage.goToLogin();
        loginPage.typeUser(credenciales.usuario);
        loginPage.typePassword(credenciales.contraseña);
        loginPage.clickLogin();
        homePage.goToOnlineShop();
        productsPage.addToCart(products.redCap.nombre);
        productsPage.addToCart(products.whiteShoes.nombre);
        productsPage.goToShoppingCart();
        shoppingCartPage.verifyNameAndPrice(products.redCap.nombre,products.redCap.precio);
        shoppingCartPage.verifyNameAndPrice(products.whiteShoes.nombre,products.whiteShoes.precio);
        shoppingCartPage.clickShowTotalPrice();
        shoppingCartPage.verifyTotalPrice();
    });
});