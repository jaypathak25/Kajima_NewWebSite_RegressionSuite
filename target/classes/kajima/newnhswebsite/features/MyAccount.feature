#Author : Jay Pathak
#Comment: New NHS website  - Logged In - My Accounts regression 
Feature:  My Accounts scenarios 

#User Story : As a Logged in user i should be able to select all the options from the My Accounts dropdown and navigate to relevant screens 


Background:
    Given User opens browser and enters the New NHS Pre Prod URL
    Then User navigate to the homepage and Login
    Then Select My Accounts drop down available on the HomePage
      		
@Test1
Scenario: Logged In User -  Select My accounts dropdown and validate the list of options available
     Then verify all the options available in the drop down list 
     And user quit the browser
     
@Test2
Scenario: Logged In User -  Select All the list of options available in My accounts drop down
     Then Select all the options available in the drop down list one by one and validate the screen
     And user quit the browser

    