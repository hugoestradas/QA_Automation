import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";

describe('Test', function() {
    before(function (){
        // runs once before all tests in the block
        cy.fixture('example').then(function (data){
            this.data = data
        })
    })
    it('My FirstTest case', function (){
        const homePage = new HomePage()
        const productPage = new ProductPage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        homePage.getEditBox().type(this.data.name)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', 2)
        homePage.getEntrepreneur().should('be.disabled')

        Cypress.config('defaultCommandTimeout', 8000)

        homePage.getShopTab().click()

        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        });

        productPage.checkOutButton().click()
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()

        productPage.checkOutButton().click()

    })
})