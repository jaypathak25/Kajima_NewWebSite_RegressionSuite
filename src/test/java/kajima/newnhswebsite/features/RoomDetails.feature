#Author: Jay Pathak
#Comment: New NHS website  - Room details Page Regression 
Feature: Room Details screen scenarios

#User Story : As a user i should be able to navigate to Room details page and perform different actions like view gallery, click property link etc


Background:
    Given User opens browser and enters the New NHS Pre Prod URL
    When User navigate to the homepage
   

@Test1
Scenario: From Search Result Page navigate to Room details page and verify screen
    Then User navigate to search result page
    Then User clicks Room name link 
    Then user verifies Room details page
    And user quit the browser
    
@Test2
Scenario: From Search Result Page navigate to Room details page and click property name link available on the screen
    Then User navigate to search result page and clicks Room name link 
    Then user clicks property name link and verify the property page
  	And user quit the browser
  	
@Test3
Scenario: From Search Result Page navigate to Room details page and click view Image forward/Previous arrows
    Then User navigate to Room details page from search result screen 
    Then user clicks Forward/Previous view image arrows on gallery widget
    And user quit the browser