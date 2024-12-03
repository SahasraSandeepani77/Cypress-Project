
///<reference types="Cypress"/>

 describe("Web Application", function()
 {
    it ("Web Application Automation",function()
 
    {
         // Open the web site //
            cy.visit('https://www.wasi.lk/')
            cy.wait(3000)

               /*Assertions - Check if the web page is entered*/
                cy.url().should('include','wasi')
                cy.url().should('eq','https://www.wasi.lk/')
                cy.url().should('contain','wasi')
                cy.title().should('eq','Online Shopping Sri Lanka: Bicycles, Phones, Electronics & Laptops | Wasi.lk')
                cy.title().should('include','Online Shopping Sri Lanka: Bicycles, Phones, Electronics & Laptops') 


         //To register and login, click the button to go to the respective page.//
            cy.get(".login-text").click()
            cy.wait(2000)

               /*Assertions are placed on the register and login page*/
                cy.title().should('eq','My Account | Wasi.lk | Best Prices In Sri Lanka')
                cy.title().should('include','My Account')
                cy.title().should('contain','Account')
                
         //   
 
         /* Rejister part 

            cy.get('.tabs-nav').click()   //clicking the register part// 
            cy.get("[placeholder=Username]").type('Sahasra_Sandeepani')

               Assertions are placed on the UserName

                 cy.get('[placeholder=Username]').should('have.value','Sahasra_Sandeepani')
                 cy.get('[placeholder=Username').should('have.length', 1)
            cy.wait(2000) 

               Assertions are placed on the Email

            cy.get('#reg_email').type('COHNDISM222F-005@student.nibm.lk')//
                 cy.get('#reg_email').should('have.value','COHNDISM222F-005@student.nibm.lk')
                 cy.get('#reg_email').should('have.length', 1)
            cy.wait(2000) 

               Assertions are placed on the Password

            cy.get('#reg_password').type('create password')
                 cy.get('#reg_password').should('have.value','create password')

               Click on Rejister Button
             cy.get('[value="Register"]').click()     
             cy.wait(1000) */
             
          
                   
         // Login Part //
          cy.get(".login-text").click()                            

            cy.get('#username').type('Sahasra_Sandeepani')//      
               /*Assertions are placed on the UserName*/
                 cy.get('#username').should('have.value','Sahasra_Sandeepani')
            cy.wait(2000)
  
            cy.get("#password").type('create passwords')   //Assertions- cy.get('#password').should('contain','create password')//
            
            
               /*Assertions are placed on Log in button*/
                 cy.get('[value="Log in"]').should('contain','Log in')
            cy.get('[value="Log in"]').click()

               /*Assertions - Check if the login is successful*/
                 cy.get('.account-name').should('contain','Sahasra_Sandeepani')
             

         // Select the a item//
            cy.get('.header-extras > .product-extra-search > .products-search > .psearch-content > .search-wrapper > .search-field')
            .type('Apple watch new')
               /*Assertions are placed on Product Name*/
                cy.get('.header-extras > .product-extra-search > .products-search > .psearch-content > .search-wrapper > .search-field')
                .should('have.value','Apple watch new')
                 
             cy.wait(2000)
               
             //Click on the first product//
            cy.get('[src="https://www.wasi.lk/wp-content/uploads/2023/10/Apple-Watch-Series-9-45MM-433x325-1-100x100.jpg"]').click()
            cy.wait(2000)

                /*Assertions are placed on Add to cart button*/
                  cy.get('.single_add_to_cart_button').should('contain','Add to cart')
            // Click on the Add to Cart Button//      
            cy.get('.single_add_to_cart_button').click() 
            cy.wait(2000)
                                  
                                  
            cy.get('#icon-cart-contents > .icon-bag2').click()

                /*Assertions - Check if the item was added*/
                 cy.get('.woocommerce-cart-form__cart-item > .product-name > a').should('contain','Apple Watch Series 9 45MM')
            cy.wait(4000)       
                   
            // Click on the Checkout Button
            cy.get('.checkout-button').click()
                /*Assertions - Check if redirected to the  checkout page*/
                  cy.get('.entry-title').should('have.text','Checkout')


         // Extra Part - Remove the Item //
             /*
             
             cy.get('#icon-cart-contents > .icon-bag2').click()
             cy.wait(3000)
             cy.get('[aria-label=Remove] ').click()
             */

            })        

   
 }
 )