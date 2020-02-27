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

@Test3
Scenario: Logged In User - Select 'Account' from My accounts drop down and click the ADD NEW button
     Then Select Account options available in the drop down list and verifies the screen
     Then Select ADD NEW button
     And User verifies Add new payments screen
  	 And user quit the browser
  	 
@Test4
Scenario: Logged In User - Navigate to Account, click Add New button and click close
     Then Select Account in the drop down list and verifies the screen
     Then Select ADD NEW button on the screen
     And User close the New payments popup
  	 And user quit the browser
  	 
@Test5
Scenario: Logged In User - Add New payment method Pop up -  Verify Go back Link
     Then Select Account in the drop down list
     Then Select ADD NEW button option
     Then User selects Register a payment card radio button and click Continue  
     Then User selects Go back button
     Then User selects Setup a direct debit radio button and click Continue
     Then User selects Go back button again
  	 And user quit the browser
  	 
@Test6
Scenario: Logged In User - Add new payment popup and verify Register a payment card journey
     Then Select Account in the drop down list and select ADD NEW button option
     And User selects Register a payment card radio button and press continue button
     And user quit the browser
     
@Test7
Scenario: Logged In User - Add new payment popup and verify setup a direct debit journey -  Organisation DD
     Then Select Account in the drop down list and select ADD NEW button
     Then User selects setup a direct debit radio button and press continue button
     Then User enters the mandate name and select Organisation direct debit option
     Then selects Terms and Condition Link 
     And Click Continue button 
    # And user quit the browser
@Test8
Scenario: Logged In User - Add new payment popup and verify setup a direct debit journey -  Selected services DD
     Then Navigate to accounts page and click Add new option 
     Then User selects setup direct debit radio option and press continue
     Then User enters the mandate name and select required services from the list
     Then select Terms and Condition Link displayed on the screen
     And select Continue button
   #  And user quit the browser
     
     

       

