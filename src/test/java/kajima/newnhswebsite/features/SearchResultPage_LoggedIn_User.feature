#Author: Jay Pathak
#Comment: New NHS website  - Logged in user search result screen 
Feature: Logged in users - Search Result page scenarios

#User Story : As a user i want to be able to add/Remove properties/rooms in the booking widget,Save/remove the favourite properties/Rooms,Clear booking etc
 

Background:

    Given User opens browser and enters the New NHS Pre Prod URL
    When User have gone to the homepage and login
    Then User searched the property by clicking on Find a Room button
    
    
@Test1
Scenario: Logged in user - Search Result Page - Select/DeSelect Map view
    And User verify that as a logged in user the Map view option is available
    Then User Switch on the Map and verify Map view screen
    Then User turn off the Map view and verify
    And user quit the browser
    
@Test2
Scenario: Logged in user - Search Result Page - verify Hide/show rooms links and click
		Then User verifies the default Hide rooms options and selects the Hide rooms link and verify the result
		Then User verifies the show rooms option on the page and selects the show rooms link and verify the result
		And user quit the browser
     
@Test3
Scenario: Logged in user - Search Result Page - Click Property Name link
		Then User clicks the property name link on the search result screen,verify the property details screen and navigate back to search screen 
		And user quit the browser

@Test4
Scenario: Logged in user - Search Result Page - Click Room Name link
		Then User clicks the Room name link on the search result screen,verify the Room details page and navigate back to result page
		And user quit the browser

@Test5
Scenario: Logged in user - Search Result Page - Click Load more link
		Then User clicks the Load more Link on the screen
		And user quit the browser
    
@Test6
Scenario: Booking widget - Click the Heart and save properties/Rooms to the favourite widgets and verify the widget
		Then verify Your saved properties/rooms section on the screen
		Then User select the heart toggle available on the search result screen 
   	And User verifies that Properties/Rooms have been saved successfully
		And user quit the browser 
	
@Test7
Scenario: Booking widget - Click the Heart and Remove save properties/Rooms to the favourite widgets and verify the widget
  	Then verify Your saved properties/rooms widget on the screen
	  Then User Deselect the heart toggle available on the search result screen 
    And User verifies that Properties/Rooms have been removed successfully  
    And user quit the browser 
    
@Test8
Scenario: Booking widget - Click Bin Icon to Remove all saved properties/Rooms from the favourite widgets
    Then User verify the Favourite widget and remove the saved properties/rooms by clicking the Bin Icon
    And User verifies the favourite widgets again
    And user quit the browser
		
@Test9
Scenario: Logged in user - Search Result Page – Select property pin on the Map and verify property rooms section and click add to basket button
    Then User Switch on Map view clicks the property pin on map
    And user verify the rooms section underneath the map and User clicks add to basket button
    And user quit the browser
  	  
@Test10
Scenario: Logged in user - Search Result Page – Select property pin on the Map and Click property link on the property details call out box
    Then User Switch to the Map view and click the property pin on the map
    And user verify the property details callout box, click the property link and verify the property details page
    And user quit the browser
    
@Test11
Scenario: Logged in user - Search Result Page – Select property pin on the Map and click rooms link displaying on room list underneath the map view
    Then User Switch to Map view and clicks the property pin dispaying on the map
    And user verify the rooms section underneath the map and clicks the room link and verify details
    And user quit the browser

