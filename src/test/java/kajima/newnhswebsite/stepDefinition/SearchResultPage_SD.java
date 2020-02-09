package kajima.newnhswebsite.stepDefinition;

import java.io.IOException;
import java.net.MalformedURLException;

import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import kajima.newnhswebsite.base.TestBase;
import kajima.newnhswebsite.pom_pages.HomePage;
import kajima.newnhswebsite.pom_pages.SearchResultPage;
import kajima.newnhswebsite.utils.TestUtils;

public class SearchResultPage_SD extends TestBase {
	
	HomePage home_page;
	SearchResultPage search_result_page;
	TestUtils testutils;
	
	
	//**************Pre condition (Below Given and When condition are common for all the Tests)********************************
	@BeforeTest
	@Given("^User opens browser and enters New NHS PreProd URL$")
	public void user_opens_browser_and_enters_New_NHS_PreProd_URL(){
		TestBase.intialisation();
		home_page =  new HomePage();	
		search_result_page = new SearchResultPage();	
		testutils = new TestUtils();	
	}

	@When("^User have gone to the homepage$")
	public void User_have_gone_to_the_homepage(){
		home_page.verifyHomePage();
	}
	
	@Then("^User clicks on 'Find a Room' button$")
	public void User_clicks_on_Find_a_Room_button(){
		home_page.clkFindRoomBtn();	
	}
	
	//******************Search Result Page - To ensure links/images are responding successfully and none of them are broken********
	@Test
	@Then("^User check all the link & Image URLs with http connection api and get the response$")
	public void i_click_on_the_link_onebyone() throws MalformedURLException, IOException{
		search_result_page.verifyBrokenLinksImagesOnSrchRsltPg();
	}
	
	//**************Search Result Page - Click all the links/images, navigate to relevant screen and then Navigate back to previous screen****
	@Test
	@Then("^User expect to click all the Search Results page links/images one by one and click back$")
	public void user_expect_to_click_all_the_Search_Results_page_links_images_one_by_one_and_click_back() throws InterruptedException {
		Thread.sleep(3000);
		search_result_page.clickLinksnImagesnBackOnSrchRsltPg();
	}
	
	//******************Non Logged in user  - Search Result Page - Click Register Now button on your booking widget**********
	@Test
	@Then("^User selects Register Now orange button$")
	public void user_selects_Register_Now_orange_button() {
		search_result_page.clickRegisNowBtn();

	}

	@Then("^User navigates to New Register screens$")
	public void user_navigates_to_New_Register_screens() {
		search_result_page.verifyNewRegScreen();
	}
	
	//**************************Scenario : Non Logged in user - Search Result Page - Select/DeSelect Map view******************************************
	
	@Test
	@Then("^User verify that the Map view option is available$")
	public void user_verify_that_the_Map_view_option_is_available(){
		search_result_page.verifyDefaultMapView();
	}

	@Then("^User Switch on the Map view$")
	public void user_Switch_on_the_Map_view() {
		search_result_page.switchMapView();
	}

	@Then("^User verify Map view screen$")
	public void user_verify_Map_view_screen() {
		search_result_page.verifyMapScreen();
	}

	@Then("^User Switch off the Map view and verify$")
	public void user_Switch_off_the_Map_view_and_verify() throws InterruptedException {
		Thread.sleep(2000);
		search_result_page.switchMapView();
		Thread.sleep(2000);
		search_result_page.verifyMapViewOff();	
	}
	
	//*************************Scenario: Non Logged in user - Search Result Page - Click Add to Booking button and verify**********
	
	@Test
	@Then("^User verify that the Add to Booking button is present$")
	public void user_verify_that_the_Add_to_Booking_button_is_present() throws InterruptedException {
		Thread.sleep(3000);
		search_result_page.verifyAddBookbtn();
	}

	@Then("^User Clicks Add to booking button$")
	public void user_Clicks_Add_to_booking_button() throws InterruptedException {
		Thread.sleep(3000);
		search_result_page.clickAddBookBtn();
		Thread.sleep(3000);
		//search_result_page.clickRegBtnOnPopUp();
		//search_result_page.clickLogBtnOnPopUp();
	}
	
	@Then("^User verify that Pop up appears with title YOUR BOOKING$")
	public void User_verify_that_Pop_up_appears_with_title_YOUR_BOOKING() {
		search_result_page.verifyPopUpTitle();
	}
			
			
	@Then("^User verify that Pop up appears with REGISTER and LOGIN button$")
	public void User_verify_that_Pop_up_appears_with_REGISTER_and_LOGIN_button() {
		search_result_page.verifyPopUpBtns();	
	}
	
	@Then("^User close the Pop Up to navigate back to search results screen$")
	public void User_close_the_Pop_Up_to_navigate_back_to_search_results_screen() {
		search_result_page.closePopUp();	
	}
	
	//****************Scenario: Non Logged in user - Search Result Page - Click Add to Booking button and click REGISTER****
	@Test
	@Then("^User verify that the Add to Booking button is available$")
	public void User_verify_that_the_Add_to_Booking_button_is_available() throws InterruptedException {
		Thread.sleep(3000);
		search_result_page.verifyAddBookbtn();
	}
	
	@Then("^Clicks on Add to booking button$")
	public void Clicks_on_Add_to_booking_button() throws InterruptedException {
		Thread.sleep(3000);
		search_result_page.clickAddBookBtn();
		Thread.sleep(3000);
		//search_result_page.clickRegBtnOnPopUp();
		//search_result_page.clickLogBtnOnPopUp();
	}

	@Then("^User Clicks on REGISTER Button$")
	public void User_Clicks_on_REGISTER_Button() {
		search_result_page.clickRegBtnOnPopUp();	
	}
	
	//****************Scenario: Non Logged in user - Search Result Page - Click Add to Booking button and click LOGIN*******
	@Test
	@Then("^Verify that the Add to Booking button is available$")
	public void Verify_that_Add_to_Booking_button_is_available() throws InterruptedException {
		Thread.sleep(3000);
		search_result_page.verifyAddBookbtn();
	}

	@Then("^User Clicks on Add to booking button$")
	public void User_clicks_on_Add_to_booking_button() throws InterruptedException {
		Thread.sleep(3000);
		search_result_page.clickAddBookBtn();
		Thread.sleep(3000);	
	}
	
	@Then("^User Clicks on LOGIN Button$")
	public void User_Clicks_on_LOGIN_Button() {
		search_result_page.clickLogBtnOnPopUp();	
	}
}
