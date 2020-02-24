#Author : Jay Pathak
#Comment: New NHS website  - Help and Contact Us Page Regression 
Feature:  Help and Contact Us scenarios 

#User Story : As a user i should be able to navigate to see Help Page and check all the available Frequently asked questions and thier related answers.
#Also i should be able to navigate to Contact Us page and able to send my queries


Background:
    Given User opens browser and enters the New NHS Pre Prod URL
    When User have gone to homepage
    Then User clicks on Help link displays on the home page
    
#@Test1
#Scenario: Help Page - To ensure links/images are responding successfully and none of them are broken
 #   And User check all the link & Image URLs, with http connection api and get the response
  #  user quit the browser
    
@Test2
Scenario Outline: Help Page - Click Contact Us link and Send a query 

    Then User verify help screen and click on Contact Us page and navigate to Query form screen
    Then User  perform the basic validation for the available text fields 
    Then User enters "<name>""<Email>""<Phone>""<Message>" and click Submit
    Then User opens the Mail trap to check that Query has been recieved 
    Then user quit the browser
    
    Examples: 
    | name  | Email  | Phone | Message |
	  | AUTO | AUTO@TEST.COM | 07459615019 | This is Automated Message |
		
		
@Test3
Scenario: Contact Us Page - Click FAQ & Help Centre link

     Then Navigate to Enquiry form page
     And click on FAQ & Help Centre link
     Then user quit the browser

    