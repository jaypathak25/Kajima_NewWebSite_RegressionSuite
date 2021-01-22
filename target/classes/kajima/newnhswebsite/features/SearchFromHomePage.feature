
#Author: Jay Pathak
#Comment: New NHS website  - Search Result Page Regression 
Feature: Search Result page scenarios

#User Story : As a user i should be able to see search result page, verify my search results, perform new search, able to navigate through all the links/images/buttons etc
#also i should be able to apply different filters to refine my search .
#i should be able to toggle my views  


Background:
    Given User opens browser and enters the New NHS Pre Prod URL
    When User have gone to the homepage
  #  Then User enters the search criteria and clicks on Find a Room button
 
#@Test1
#Scenario: Search Result Page - To ensure links/images are responding successfully and none of them are broken
#    Then User check all the link & Image URLs, with http connection api and get the response
 #   And user quit the browser
    
#@Test2
#Scenario: Search Result Page - Click all the links/images, navigate to relevant screen and then Navigate back to previous screen
 #   Then User expect to click all the Search Results page links/images one by one and click back
  #  And user quit the browser

@Test3
Scenario: Home Page - Search results by not selecting any search criteria and click Find a Room button
   Then Click Find a Room button without entering Room type or Location
   Then User navigates to search result screen and verify the result 
   Then user quit the browser

@Test4
Scenario: Home Page - verify Search parameter room type and check different Clinical and Non Clinical Room Types
    Then user expect to see the first search field as a dropdown labelled as “Select room type”
    Then User Clicks on 'Select Room Types' field to ensure that it is displaying 2x4 grid of the rooms types
    Then User expect the order to be in Row1 & Row2 as per the acceptance Criteria
	  Then User clicks on a single room type and click apply to ensure that pop up is closed and the name of the room selected in the dropdown field
    Then User clicks again on 'Select Room Types' field to ensure that it is displaying 2x4 grid of the rooms types
    And clicks on two or more room types and ensure that the number of rooms selected to show in the dropdown fields
    And Click Find a Room button to navigates to result screen and verify the search results
    Then user quit the browser
    
@Test5
Scenario: Home Page - Search results by selecting Room Types - Non clinical
    Then clicks on One or more Non clinical room types and ensure that the number of rooms selected to show in the dropdown fields
    And Click Find a Room button and navigates to result screen to verify the search results
    Then user quit the browser
    
@Test6
Scenario: Home Page - Search results by selecting Room Types - clinical
    Then clicks on One or more clinical room types and ensure that the number of rooms selected to show in the dropdown fields
    And Click Find a Room button and verify the search results
    Then user quit the browser
    
@Test7
Scenario: Home Page - Search results by selecting only Location criteria
   Then User expect to see the Second search field as a free Text field labelled as 'Location'
   And User clicks on 'Location' field and enter the location name
   And press Find a Room button and User navigates to result screen and verify the search result
   Then user quit the browser
   
@Test8
Scenario: Home Page - Search results by entering only property name
   Then User clicks on 'Location' field and enter the property name
   And User expect a dropdown to appear displaying upto '5' matched results and allow user to select2
   And Select Find a Room button and User navigates to result screen and verify the result
   Then user quit the browser
    
@Test9
Scenario: Home Page - Search results by selecting both Room types and Location and click Find a Room button
    Then User selects Room type and Location and click find a Room button and verify the result 
    Then user quit the browser
    
@Test10
Scenario: Home Page - Search results by selecting Room types which do not have any property in the DB
    Then User selects Room type which has no result and click find a Room button and verify the result 
    Then user quit the browser
       
@Test11
Scenario: Home Page - Search results by entering random location or property name which do not have any property in the DB
    Then User enters random location or property name which has no result and click find a Room button and User navigates to result screen and verify the result 
    Then user quit the browser







   