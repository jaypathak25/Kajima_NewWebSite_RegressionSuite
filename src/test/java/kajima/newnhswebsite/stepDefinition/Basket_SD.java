package kajima.newnhswebsite.stepDefinition;

import org.testng.annotations.AfterTest;
import org.testng.annotations.Test;

import cucumber.api.java.en.Then;
import kajima.newnhswebsite.base.TestBase;
import kajima.newnhswebsite.pom_pages.Basket;
import kajima.newnhswebsite.pom_pages.BookingWidget;
import kajima.newnhswebsite.pom_pages.HomePage;
import kajima.newnhswebsite.pom_pages.LoginPage;
import kajima.newnhswebsite.pom_pages.SearchResultPage;



public class Basket_SD extends TestBase {
	
	HomePage home_page;
	LoginPage login_page;
	Basket basket_page;
	SearchResultPage search_result_page;
	BookingWidget booking_widget_page;
	
	//Created a constructor of the class to initiate the object of page classes
	public Basket_SD() {
		home_page =  new HomePage();	
		login_page =  new LoginPage();	
		basket_page = new Basket();
		search_result_page = new SearchResultPage();
		booking_widget_page =  new BookingWidget();	
	}
	

	//**************Pre condition (Below Given and When condition are common for all the Tests)*****************	

	
	@Then("^User navigate to homepage and Login$")
	public void User_navigate_to_homepage_and_Login$() throws InterruptedException {
		home_page.verifyHomePage();
		login_page.loginToApp();
	}

	@Then("^Select Basket link available on the HomePage$")
	public void select_Basket_link_available_on_the_HomePage() throws InterruptedException {
		Thread.sleep(10000);
		home_page.slectBasketLink();	  
		basket_page.verifyBsktScrn();
		basket_page.verifyBsktContent();
	}

	//**************************Logged In User -  verify the option Back to browsing and select the link********************
	@Then("^verify the option Back to browsing and select the link$")
	public void verify_the_option_Back_to_browsing_and_select_the_link() throws InterruptedException {
		basket_page.clkBckToBrowLink();
		Thread.sleep(10000);
		search_result_page.verifySearchRsltPage();

	}
	
	//**************************Logged In User -  verify the option search for rooms and select the button*****************

	@Then("^verify the option search for rooms and select the button$")
	public void verify_the_option_search_for_rooms_and_select_the_button() throws InterruptedException {
		basket_page.clkSrchForRoomsButton();
		Thread.sleep(10000);
		search_result_page.verifySearchRsltPage();
	}
	
	
	//***********************************After test method************************************************//
	@AfterTest
	@Then("^close browser$") 
	public void close_browser() {
	driver.quit(); 
	}

}
