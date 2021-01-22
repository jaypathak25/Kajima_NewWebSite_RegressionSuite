#Author : Jay Pathak
#Comment: New NHS website  - Registration regression 
Feature:  Registration scenarios 

#User Story : As a user i want to be able to register new user for the new clients and for the xisting clients using the registration link 



Background:
    Given User opens browser and enters the New NHS Pre Prod URL
    When User have gone to the homepage on desktop
    Then user clicks on the Register link 
    
        
@Test4
Scenario: Register - New user for the new client by adding large volume of services 
 #   Then User enters the user details and continue
 #   Then User enters the company details and continue
 #  Then User added the large volume of services on service details and click submit for approval button
    Then User validate the confirmation screen
   Then user quit the browser
    
@Test1
Scenario: Register - New user for the new client
    Then User fills the user details form by entering all the mandatory fields and continue
    Then User fills the company details form by entering new company details and continue
    Then User added the different services on service details and click submit for approval button
    Then User validate the confirmation screen for newly created user 
    Then user quit the browser
    
@Test2
Scenario: Register - New user for the existing client
 #   Then User completes the user details form by entering all the mandatory fields and continue
  #  Then User selects the existing company and continue
  #  Then User selects the different services on service details and click submit for approval button
  #  Then User validate the confirmation screen for newly created user for the existing client
  #  Then user quit the browser
    
@Test3
Scenario: Register - New user for the existing client without selecting the services 
#    Then User completes the user details form by entering all the fields and continue
#    Then User selects the existing company and click continue
#    Then User do not select any service from the list of services and click submit for approval button
#    Then User validate the confirmation message for the newly created user for existing client
#    Then user quit the browser

    

    