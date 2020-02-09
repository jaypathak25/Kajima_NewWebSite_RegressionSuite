#Author: Jay Pathak
#Feature: List of scenarios.
#Comment: New NHS website  - Search Result Page Regression 
Feature: Verify all the search results and navigate through all the available options

#User Story : As a user i should be able to see search result page, verify my search results, perform new search, able to navigate through all the links/images/buttons etc
#also i should be able to apply different filters to refine my search .
#i should be able to toggle my views  


Background:
    Given User opens browser and enters New NHS PreProd URL
    When User have gone to the homepage
    Then User clicks on 'Find a Room' button
    
#@Test1
#Scenario: Search Result Page - To ensure links/images are responding successfully and none of them are broken


   # Then User check all the link & Image URLs, with http connection api and get the response
    #Then User closes the browser
    
#@Test2
#Scenario: Search Result Page - Click all the links/images, navigate to relevant screen and then Navigate back to previous screen


   # Then User expect to click all the Search Results page links/images one by one and click back
    #Then User closes the browser
     
#@Test3
#Scenario: Non Logged in user  - Search Result Page - Click Register Now button on your booking widget


   # Then User selects Register Now orange button
   # And User navigates to New Register screens
   # Then User closes the browser
   
#@Test4
#Scenario: Non Logged in user - Search Result Page - Select/DeSelect Map view
 

 #   And User verify that the Map view option is available
  #  Then User Switch on the Map view
   # And User verify Map view screen
    #Then User Switch off the Map view and verify
    
#@Test5
#Scenario: Non Logged in user - Search Result Page - Click Add to Booking button and verify
 

  #   And User verify that the Add to Booking button is present 
   #  Then User Clicks Add to booking button
    # And User verify that Pop up appears with title YOUR BOOKING
    # And User verify that Pop up appears with REGISTER and LOGIN button
    # And User close the Pop Up to navigate back to search results screen
     
#@Test6
#Scenario: Non Logged in user - Search Result Page - Click Add to Booking button and click REGISTER
 

 #    And User verify that the Add to Booking button is available 
  #   Then Clicks on Add to booking button
   #  And User Clicks on REGISTER Button
    
     
@Test7
Scenario: Non Logged in user - Search Result Page - Click Add to Booking button and click LOGIN
 
     And Verify that the Add to Booking button is available 
     Then User Clicks on Add to booking button
     And User Clicks on LOGIN Button
    
    
    
    

    

 