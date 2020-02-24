package kajima.newnhswebsite.stepDefinition;

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

public class HelpAndContactUs_SD extends TestBase {
	
	
	HomePage home_page;
	LoginPage login_page;
	Basket basket_page;
	SearchResultPage search_result_page;
	BookingWidget booking_widget_page;
	HelpAndContactUs help_and_contact_us;
	
	//Created a constructor of the class to initiate the object of page classes
	public HelpAndContactUs_SD() {
		home_page =  new HomePage();	
		login_page =  new LoginPage();	
		basket_page = new Basket();
		search_result_page = new SearchResultPage();
		booking_widget_page =  new BookingWidget();	
		help_and_contact_us =  new HelpAndContactUs();	
	}
	 
	 
//**************Pre condition (Below Given and When condition are common for all the Tests)*****************
@BeforeTest


		@When("^User have gone to homepage$")
		public void User_have_gone_to_the_homepage(){
			home_page.verifyHomePage();
		}
		
		
		@Then("^User clicks on Help link displays on the home page$")
		public void user_clicks_on_Help_link_displays_on_the_home_page(){
			home_page.clickHelpLink();
		}

//***********************Scenario: Help Page - To ensure links/images are responding successfully and none of them are broken***************************	
		
	//@Test(priority=1)
	//@Then("^User check all the link & Image URLs, with http connection api and get the response$")
	//public void User_check_all_the_link_Image_URLs_with_http_connection_api_and_get_the_response() {
		//}
		
//***********************Scenario: Help Page - Click Contact Us link and Send a query ********************************************************************
		
	@Test(priority=2)
	@Then("^User verify help screen and click on Contact Us page and navigate to Query form screen$")
	public void user_click_on_Contact_Us_page_and_navigate_to_Query_form_screen() {
		help_and_contact_us.valHelpScrn();
		help_and_contact_us.clkContactUsLnk();
		help_and_contact_us.valContactUsScrn();
	}

	@Then("^User  perform the basic validation for the available text fields$")
	public void user_perform_the_basic_validation_for_the_available_text_fields() throws InterruptedException {
		help_and_contact_us.clkEnqSubmitBtn();
	    help_and_contact_us.valErrorMsgOnConUsScrn();
	}
	
	@Then("^User enters \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\" and click Submit$")
	public void user_enters_and_click_Submit(String name, String Email, String Phone, String Message) throws InterruptedException {
		help_and_contact_us.completeEnqForm(name, Email, Phone, Message);
		help_and_contact_us.clkEnqSubmitBtn();
	}

	@Then("^User opens the Mail trap to check that Query has been recieved$")
	public void user_opens_the_Mail_trap_to_check_that_Query_has_been_recieved() {
		help_and_contact_us.validateEnqInMailTrap();
	}


//**********************Contact Us Page - Click FAQ & Help Centre link*********************************************
	@Test(priority=3)
	@Then("^Navigate to Enquiry form page$")
	public void navigate_to_Enquiry_form_page() {
		help_and_contact_us.clkContactUsLnk();
		help_and_contact_us.valContactUsScrn();
	}

	@Then("^click on FAQ & Help Centre link$")
	public void click_on_FAQ_Help_Centre_link() {
		help_and_contact_us.returnToHelpPage();
		help_and_contact_us.valHelpScrn();
	}
	
//***********************************After test method************************************************//
	@AfterTest
	@Then("^User close browser$") 
	public void User_closes_browser() {
	driver.quit(); 
	}

}
