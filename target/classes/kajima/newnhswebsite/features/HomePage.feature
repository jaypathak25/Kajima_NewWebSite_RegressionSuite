#Author: Jay Pathak
#Feature: List of scenarios.
#Comment: New NHS website  - Home Page Regression 
#User Story : As a user i want to be able to check/select all the Weblements like 
#links, images , buttons , Drop downs, radio buttons and text fields available on home page and able to perform search
Feature: Search Rooms/Properties from the Home Page and check all available elements 

Background:
    Given User opens browser and enters New NHS Pre Prod URL
    When User have gone to the homepage on a desktop device
    
@Smoke @Regression
Scenario: HomePage - To ensure links/images are responding successfully and none of them are broken

    Then User check all the link & Image URLs, with http connection api and get the response
    Then User closes the browser
    
@Regression
Scenario: Home Page - Click all the links/images, navigate to relevant screen and Navigate back to Home screen

    Then User expect to click all the Home page links/images one by one User navigate back to Home screen
    Then User closes the browser
    
@HomePage3
Scenario: Home Page - Search results by selecting only different Clinical and Non Clinical Room Types

    Then user expect to see the first search field as a dropdown labelled as “Select room type”
    Then User Clicks on 'Select Room Types' field to ensure that it is displaying 2x4 grid of the rooms types
    Then User expect the order to be in Row-1 & Row-2 as per the acceptance Criteria
	  Then User clicks on a single room type and click apply to ensure that pop up is closed and the name of the room selected in the dropdown field
    Then User clicks again on 'Select Room Types' field to ensure that it is displaying 2x4 grid of the rooms types
    And clicks on two or more room types and ensure that the number of rooms selected to show in the dropdown fields
    And Click Find a Room button
    Then User navigates to result screen and verify the search results
    Then User closes the browser
    
@HomePage4
Scenario: Home Page - Search results by selecting only Location criteria

   Then User expect to see the Second search field as a free Text field labelled as 'Location'
   And User clicks on 'Location' field and able to enter Postcode, location or propertyname 
   And User expect a dropdown to appear displaying upto '5' matched results and allow user to select
   And Select Find a Room button
   And User navigates to result screen and verify the search result
   Then User closes the browser
    
@HomePage5
Scenario: Home Page - Search results by not selecting any search criteria and click Find a Room button

   Then Click Find a Room button without entering Room type or Location
   Then User navigates to search result screen and verify the result 
   Then User closes the browser
    
@HomePage6
Scenario: Home Page - Search results by selecting both Room types and Location and click Find a Room button

    Then User selects Room type and Location and click find a Room button
    Then User navigates to result screen and verify the result 
    Then User closes the browser
    
    

 