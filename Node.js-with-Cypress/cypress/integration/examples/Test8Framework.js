describe('Test', function() {
    before(function (){
        // runs once before all tests in the block
        cy.fixture('example').then(function (data){
            this.data = data
        })
    })
    it('My FirstTest case', function (){
       cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlenght','2')
        cy.get('#inlineRadio3')
    })
})
