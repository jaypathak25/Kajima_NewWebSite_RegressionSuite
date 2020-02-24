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
import kajima.newnhswebsite.pom_pages.SearchResultPage;

public class MyAccount_SD extends TestBase {
	
	HomePage home_page;
	LoginPage login_page;
	Basket basket_page;
	SearchResultPage search_result_page;
	BookingWidget booking_widget_page;
	HelpAndContactUs help_and_contact_us;
	
	//Created a constructor of the class to initiate the object of page classes
	public MyAccount_SD() {
		home_page =  new HomePage();	
		login_page =  new LoginPage();	
		basket_page = new Basket();
		search_result_page = new SearchResultPage();
		booking_widget_page =  new BookingWidget();	
		help_and_contact_us =  new HelpAndContactUs();	
	}
		
		
		
//**************Pre condition (Below Given and When condition are common for all the Tests)*****************

		@Then("^User navigate to the homepage and Login$")
		public void User_navigate_to_the_homepage_and_Login() {
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

	    
		//***********************************After test method************************************************//
		@AfterTest
		@Then("^close the browser$") 
		public void close_the_browser() {
		driver.quit(); 
		}
	}


