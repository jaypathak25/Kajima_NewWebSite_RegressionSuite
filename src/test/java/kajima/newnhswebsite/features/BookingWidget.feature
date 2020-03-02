#Author: Jay Pathak
#Comment: New NHS website  - Booking widget scenarios
Feature: Booking Widget scenarios

#User Story : As a user i want to be able to add/Remove properties/rooms in the booking widget,Save/remove the favourite properties/Rooms,Clear booking etc
 

Background:
Given User opens browser and enters the New NHS Pre Prod URL
Then User navigate to homepage and Login as primary user
When User search the properties/Rooms from the home page and navigate to search result page
And User verifies the booking widget
Then User add the booking to the booking widget 


@Test1
Scenario: Booking widget - Clear all the added booking 
   And User verifies the booking added to the widget
   Then User click the Clear all link and verify that Booking widget cleared off successfully
   And user quit the browser
    
@Test2
Scenario: Booking widget - Click remove next to added rooms in the booking widget
    Then User click the remove button displays next to Room name
    And user verifies that room has been removed successfully
    And user quit the browser

@Test3
Scenario: Booking widget - verify Your saved properties section on the screen
    Then verify Your saved properties section on the screen
    And user quit the browser
    
@Test4
Scenario: Booking widget - verify Your saved rooms section on the screen
    Then verify Your saved rooms section on the screen
    And user quit the browser
    
@Test5
Scenario: Booking widget - Remove all saved properties/Rooms from the favourite widgets
    Then User verify the Favourite widget and remove the saved properties/rooms
    And User verifies the favourite widgets again
    And user quit the browser
    
@Test6
Scenario: Booking widget - Add save properties/Rooms to the favourite widgets
		Then User select the heart toggle available on the search result screen 
		And User verifies that Properties/Rooms have been saved successfully
		And user quit the browser 
		
#@Test7
#Scenario: Booking widget - Click Add new host link and Close Add new host Popup

	#	Then User selects the Add new host link
#		And User clicks X on the pop up
	#	And user quit the browser

		
@Test8
Scenario: Booking widget - Click Add new host and verify Select host drop down
		Then User click the Add new host link
		And User enters all the mandatory fields and click Add host to booking button
		And User navigates back to Booking widget and verify the select host drop down
	#	And user quit the browser
		