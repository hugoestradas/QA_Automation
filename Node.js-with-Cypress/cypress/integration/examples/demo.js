import 'cypress-iframe'

describe("Frames Test", function (){
    it('Demo example', function (){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
    })
})
