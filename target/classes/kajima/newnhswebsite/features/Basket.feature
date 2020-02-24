#Author : Jay Pathak
#Comment: New NHS website  - Logged In - Basket screen regression 
Feature:  Basket screen scenarios 

#User Story : As a Logged in user i should be able to navigate to screen and perform different actions 

Background:
    Given User opens browser and enters the New NHS Pre Prod URL
    Then User navigate to homepage and Login
    Then Select Basket link available on the HomePage
      		
@Test1
Scenario: Logged In User -  verify the option Back to browsing and select the link 
     Then verify the option Back to browsing and select the link  
     And user quit the browser
     
@Test2
Scenario: Logged In User -  verify the option search for rooms and select the button
     Then verify the option search for rooms and select the button
     And user quit the browser

    