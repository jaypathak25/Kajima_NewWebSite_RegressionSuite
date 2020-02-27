package kajima.newnhswebsite.stepDefinition;

import java.io.IOException;
import java.net.MalformedURLException;

import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import kajima.newnhswebsite.base.TestBase;
import kajima.newnhswebsite.pom_pages.Basket;
import kajima.newnhswebsite.pom_pages.BookingWidget;
import kajima.newnhswebsite.pom_pages.HelpAndContactUs;
import kajima.newnhswebsite.pom_pages.HomePage;
import kajima.newnhswebsite.pom_pages.LoginPage;
import kajima.newnhswebsite.pom_pages.MyAccounts;
import kajima.newnhswebsite.pom_pages.SearchResultPage;

public class MyAccount_SD extends TestBase {
	
	HomePage home_page;
	LoginPage login_page;
	Basket basket_page;
	SearchResultPage search_result_page;
	BookingWidget booking_widget_page;
	HelpAndContactUs help_and_contact_us;
	MyAccounts my_accounts;
	
	//Created a constructor of the class to initiate the object of page classes
	public MyAccount_SD() {
		home_page =  new HomePage();	
		login_page =  new LoginPage();	
		basket_page = new Basket();
		search_result_page = new SearchResultPage();
		booking_widget_page =  new BookingWidget();	
		help_and_contact_us =  new HelpAndContactUs();	
		my_accounts =  new MyAccounts();
		
	}
		
		
		
//**************Pre condition (Below Given and When condition are common for all the Tests)*****************

		@Then("^User navigate to the homepage and Login$")
		public void User_navigate_to_the_homepage_and_Login() throws InterruptedException {
			home_page.verifyHomePage();
			login_page.loginToApp();
		}
	
		@Then("^Select My Accounts drop down available on the HomePage$")
		public void select_My_Accounts_drop_down_available_on_the_HomePage()  {
			home_page.verifyMyAccDropDown();
		}

//*********************Scenario: Logged In User -  Select My accounts dropdown and validate the list of options available************

		@Test(priority=1)
		@Then("^verify all the options available in the drop down list$")
		public void verify_all_the_options_available_in_the_drop_down_list() throws InterruptedException {
			home_page.verifyMyAccddOpns();
		}
		
//*********************Scenario: Logged In User -  Select All the list of options available in My accounts drop down************

		@Test(priority=2)
		@Then("^Select all the options available in the drop down list one by one and validate the screen$")
		public void Select_all_the_options_available_in_the_drop_down_list_one_by_one_and_validate_the_screen() throws InterruptedException {	
				
			 home_page.slctddBooking(); 
			 home_page.homePageIcon();
			 home_page.slctddAccount(); 
			 home_page.homePageIcon();
			 home_page.slctddLogOut();	 
		}
		
//*********************Scenario: Logged In User - Select 'Account' from My accounts drop down and click the ADD NEW button************

		@Test(priority=3)
		@Then("^Select Account options available in the drop down list and verifies the screen$")
		public void Select_Account_options_available_in_the_drop_down_list_and_verifies_the_screen() throws InterruptedException {	
			 home_page.slctddAccount(); 
		}
		
		@Then("^Select ADD NEW button$")
		public void Select_ADD_NEW_button() throws InterruptedException {
			my_accounts.clickAddNewPayMethodBtn();
		}
		
		@Then("^User verifies Add new payments screen$")
		public void User_verifies_Add_new_payments_screen() throws InterruptedException {	
			my_accounts.verifyNewPayMethodFormPopUp();
		}
		

//*********************Scenario: Logged In User - Navigate to Account, click Add New button and click close************

		@Test(priority=4)
		@Then("^Select Account in the drop down list and verifies the screen$")
		public void Select_Account_in_the_drop_down_list_and_verifies_the_screen() throws InterruptedException {	
			 home_page.slctddAccount(); 
		}
				
		@Then("^Select ADD NEW button on the screen$")
		public void Select_ADD_NEW_button_on_the_screen() throws InterruptedException {
		     my_accounts.clickAddNewPayMethodBtn();
		}
				
		@Then("^User close the New payments popup$")
		public void User_close_the_New_payments_popup() throws InterruptedException {
			my_accounts.clickCloseOnAddNewPayMethodBtn();	
		}
		
//*************Logged In User - Add New payment method Pop up -  Verify Go back Link*****************************************
		
		@Test(priority=5)
		@Then("^Select Account in the drop down list$")
		public void Select_Account_in_the_drop_down_list() throws InterruptedException {	
			 home_page.slctddAccount();
		}
				
		@Then("^Select ADD NEW button option$")
		public void Select_ADD_NEW_button_option() throws InterruptedException {
			 my_accounts.clickAddNewPayMethodBtn();
		}
				
		@Then("^User selects Register a payment card radio button and click Continue$")
		public void User_selects_Register_a_payment_card_radio_button_and_click_Continue() throws InterruptedException {	
			 my_accounts.selectPayCardJourney();
		}
		
		@Then("^User selects Go back button$")
		public void User_selects_Go_back_button() throws InterruptedException {	
			my_accounts.selectGoBackBtn();
		}
		
		@Then("^User selects Setup a direct debit radio button and click Continue$")
		public void User_selects_Setup_a_direct_debit_radio_button_and_click_Continue() throws InterruptedException {	
			my_accounts.selectDirectDebitJourney();
		}
		
		@Then("^User selects Go back button again$")
		public void User_selects_Go_back_button_again() throws InterruptedException {	
			my_accounts.selectGoBackBtn();
		}
		

//*************Logged In User - Add new payment popup and verify Register a payment card journey****************************
		
		@Test(priority=6)
		@Then("^Select Account in the drop down list and select ADD NEW button option$")
		public void Select_Account_in_the_drop_down_list_and_select_ADD_NEW_button_option() throws InterruptedException {	
			home_page.slctddAccount(); 
			my_accounts.clickAddNewPayMethodBtn();
		}
						
		@Then("^User selects Register a payment card radio button and press continue button$")
		public void User_selects_Register_a_payment_card_radio_button_and_press_continue_button() throws InterruptedException {
			my_accounts.selectPayCardJourney();	
		}
		
//*************Logged In User - Add new payment popup and verify setup a direct debit journey-Organisation DD*****************
		
		@Test(priority=7)
		@Then("^Select Account in the drop down list and select ADD NEW button$")
		public void Select_Account_in_the_drop_down_list_and_select_ADD_NEW_button() throws InterruptedException {	
			home_page.slctddAccount(); 
			my_accounts.clickAddNewPayMethodBtn();	 
		}
						
		@Then("^User selects setup a direct debit radio button and press continue button$")
		public void User_selects_setup_a_direct_debit_radio_button_and_press_continue_button() throws InterruptedException {
			my_accounts.selectDirectDebitJourney();
		}
						
		@Then("^User enters the mandate name and select Organisation direct debit option$")
		public void User_enters_the_mandate_name_and_select_Organisation_direct_debit_option() throws InterruptedException {
			my_accounts.enterName();
			my_accounts.selectOrgDDRadioBtn();

		}
				
		@Then("^selects Terms and Condition Link$")
		public void selects_Terms_and_Condition_Link() throws InterruptedException {
			//my_accounts.ClickTermsAndCondLink();

		}
		
		@Then("^Click Continue button$")
		public void Click_Continue_button() throws InterruptedException {
		//	my_accounts.ClickpayMethodFormContinueBtn();

		}
			
//*********Logged In User - Add new payment popup and verify setup a direct debit journey -  Selected services DD*****************
		
		@Test(priority=8)
		@Then("^Navigate to accounts page and click Add new option$")
		public void Navigate_to_accounts_page_and_click_Add_new_option() throws InterruptedException {	
			home_page.slctddAccount(); 
			my_accounts.clickAddNewPayMethodBtn();				 
		}
								
		@Then("^User selects setup direct debit radio option and press continue$")
		public void User_selects_setup_direct_debit_radio_button_and_press_continue_button() throws InterruptedException {
			my_accounts.selectDirectDebitJourney();			
		}
								
		@Then("^User enters the mandate name and select required services from the list$")
		public void User_enters_the_mandate_name_and_select_required_services_from_the_list() throws InterruptedException {	
			my_accounts.enterName();
			my_accounts.selectServiceChkBox();
		}
						
		@Then("^select Terms and Condition Link displayed on the screen$")
		public void selects_Terms_and_Condition_Link_displayed_on_the_screen() throws InterruptedException {
		//	my_accounts.ClickTermsAndCondLink();

		}
		
		@Then("^select Continue button$")
		public void select_Continue_button() throws InterruptedException {
		//	my_accounts.ClickpayMethodFormContinueBtn();

		}
					
			  
	    
		//***********************************After test method************************************************//
		@AfterTest
		@Then("^close the browser$") 
		public void close_the_browser() {
		driver.quit(); 
		}
	}


