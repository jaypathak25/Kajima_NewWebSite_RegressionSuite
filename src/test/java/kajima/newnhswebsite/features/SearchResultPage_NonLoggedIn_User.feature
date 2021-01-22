
#Author: Jay Pathak
#Comment: New NHS website  - Search Result Page Regression 
Feature: Non logged in users - Search Result page scenarios

#User Story : As a user i should be able to see search result page, verify my search results, perform new search, able to navigate through all the links/images/buttons etc
#also i should be able to apply different filters to refine my search .
#i should be able to toggle my views  


Background:
    Given User opens browser and enters the New NHS Pre Prod URL
    When User have gone to the homepage
    Then User enters the search criteria and clicks on Find a Room button
   

#@Test1
#Scenario: Search Result Page - To ensure links/images are responding successfully and none of them are broken
    #Then User check all the link & Image URLs, with http connection api and get the response
    #And user quit the browser
    
#@Test2
#Scenario: Search Result Page - Click all the links/images, navigate to relevant screen and then Navigate back to previous screen
    #Then User expect to click all the Search Results page links/images one by one and click back
    #And user quit the browser

@Test3
Scenario: Non Logged in user  - Search Result Page - Click Register Now button on your booking widget
    Then User selects Register Now orange button
    And User navigates to New Register screens
    And user quit the browser
   
@Test4
Scenario: Non Logged in user - Search Result Page - Select/DeSelect Map view
    And User verify that the Map view option is available
    Then User Switch on the Map view
    And User verify Map view screen
    Then User Switch off the Map view and verify
    And user quit the browser
    
@Test5
Scenario: Non Logged in user - Search Result Page - Click Add to Booking button and verify
     And User verify that the Add to Booking button is present 
     Then User Clicks Add to booking button
     And User verify that Pop up appears with title YOUR BOOKING
     And User verify that Pop up appears with REGISTER and LOGIN button
     And User close the Pop Up to navigate back to search results screen
     And user quit the browser
     
@Test6
Scenario: Non Logged in user - Search Result Page - Click Add to Booking button and click REGISTER
     And User verify that the Add to Booking button is available 
     Then Clicks on Add to booking button
     And User Clicks on REGISTER button
     And user quit the browser
    
@Test7
Scenario: Non Logged in user - Search Result Page - Click Add to Booking button and click LOGIN
     And Verify that the Add to Booking button is available 
     Then User Clicks on Add to booking button
     And User Clicks on LOGIN button
     And user quit the browser
     
@Test8
Scenario: Non Logged in user - Search Result Page - verify Sorting filter 
     Then verify that the default sorting selected is with distance when search by property name
     And User ensure that Property name heading displayed with distance in miles 
     Then User clicks on Homepage Image and navigate back to Home page
     Then clicks on Find a Room button and navigate to search result screen
     Then verify that the default sorting selected is by property name in ascending alphabatical order 
     Then User selects the Sorting drop down and selects the option by property name in ascending alphabatical order 
     And user quit the browser
     
@Test9
Scenario: Non Logged in user - Search Result Page - verify Hide/show rooms links and click
		Then User verifies the default Hide rooms options 
		Then User selects the Hide rooms link and verify the result
		Then User verifies the show rooms option on the page
		And User selects the show rooms link and verify the result
		And user quit the browser
     
@Test10
Scenario: Non Logged in user - Search Result Page - Click Property Name link
		Then User clicks the property name link on the search result page, verifies the property details screen and navigate back to search screen 
		And user quit the browser

@Test11
Scenario: Non Logged in user - Search Result Page - Click Room Name link
		Then User clicks the Room name link on the search result page,verifies the Room details page and navigate back to result page
		And user quit the browser


@Test12
Scenario: Non Logged in user - Search Result Page - Click Load more link
		Then User clicks the Load more button on the screen
		And user quit the browser
	
@Test13
Scenario: Non Logged in user - Search Result Page – Select property pin on the Map and verify property rooms section and click add to booking widget
    Then User Switch on Map view
    And User clicks the property pin on the map
    And user verify the rooms section underneath the map 
    And User clicks add to basket button
    And user quit the browser
  	  
@Test14
Scenario: Non Logged in user - Search Result Page – Select property pin on the Map and Click property link on the property details call out box
    Then User Switch to the Map view
    And User click the property pin on the map
    And user verify the property details call out box, clicks the property link and verify the property details screen
    And user quit the browser
    
@Test15
Scenario: Non Logged in user - Search Result Page – Select property pin on the Map and click rooms link displaying on room list underneath the map view
    Then User Switch on Map view and clicks the property pin on the map
    And user verify the rooms section underneath the map and clicks the room link and verify
    And user quit the browser
    
#Need to run manually 	
Scenario: Non Logged in user - Search Result Page - verify Sorting filter 
     Then verify that the default sorting selected is with distance when search by property name
     And User ensure that Property name heading displayed with distance in miles 
     Then User clicks on Homepage Image and navigate back to Home page
     Then clicks on Find a Room button and navigate to search result screen
     Then verify that the default sorting selected is by property name in ascending alphabatical order 
     Then User selects the Sorting drop down and selects the option by property name in ascending alphabatical order 
     And user quit the browser
    

		










