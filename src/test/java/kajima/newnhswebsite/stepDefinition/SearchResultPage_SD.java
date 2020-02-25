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
import kajima.newnhswebsite.utils.TestUtils;

public class SearchResultPage_SD extends TestBase {
	
	HomePage home_page;
	LoginPage login_page;
	Basket basket_page;
	SearchResultPage search_result_page;
	BookingWidget booking_widget_page;
	HelpAndContactUs help_and_contact_us;
	
	//Created a constructor of the class to initiate the object of page classes
	public SearchResultPage_SD() {
		home_page =  new HomePage();	
		login_page =  new LoginPage();	
		basket_page = new Basket();
		search_result_page = new SearchResultPage();
		booking_widget_page =  new BookingWidget();	
		help_and_contact_us =  new HelpAndContactUs();	
	}
	
	
	//**************Pre condition (Below Given and When condition are common for all the Tests)********************************

	@When("^User have gone to the homepage$")
	public void User_have_gone_to_the_homepage(){
		home_page.verifyHomePage();
	}
	
	@Then("^User enters the search criteria and clicks on Find a Room button$")
	public void User_enters_the_search_criteria_and_clicks_on_Find_a_Room_button() throws InterruptedException{
	    home_page.enterSearchCriteria();
	    Thread.sleep(20000);
		home_page.clkFindRoomBtn();	
		Thread.sleep(10000);
	}
	
	//******************Search Result Page - To ensure links/images are responding successfully and none of them are broken********
	//@Test(priority=1)
	//@Then("^User check all the link & Image URLs with http connection api and get the response$")
	//public void i_click_on_the_link_onebyone() throws MalformedURLException, IOException{
		//search_result_page.verifyBrokenLinksImagesOnSrchRsltPg();
	//}
	
	//**************Search Result Page - Click all the links/images, navigate to relevant screen and then Navigate back to previous screen****
	@Test(priority=2)
	@Then("^User expect to click all the Search Results page links/images one by one and click back$")
	public void user_expect_to_click_all_the_Search_Results_page_links_images_one_by_one_and_click_back() throws InterruptedException {
	//	Thread.sleep(3000);
		//search_result_page.clickLinksnImagesnBackOnSrchRsltPg();
	}
	
	//******************Non Logged in user  - Search Result Page - Click Register Now button on your booking widget**********
	@Test(priority=3)
	@Then("^User selects Register Now orange button$")
	public void user_selects_Register_Now_orange_button() {
		search_result_page.clickRegisNowBtn();

	}

	@Then("^User navigates to New Register screens$")
	public void user_navigates_to_New_Register_screens() {
		search_result_page.verifyNewRegScreen();
	}
	
	//**************************Scenario : Non Logged in user - Search Result Page - Select/DeSelect Map view******************************************
	
	@Test(priority=4)
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
	
	@Test(priority=5)
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
	@Test(priority=6)
	@Then("^User verify that the Add to Booking button is available$")
	public void User_verify_that_the_Add_to_Booking_button_is_available() throws InterruptedException {
		Thread.sleep(3000);
		search_result_page.verifyAddBookbtn();
	}
	
	@Then("^Clicks on Add to booking button$")
	public void Clicks_on_Add_to_booking_button() throws InterruptedException {
		Thread.sleep(3000);
		search_result_page.clickAddBookBtn();
		
		//search_result_page.clickRegBtnOnPopUp();
		//search_result_page.clickLogBtnOnPopUp();
	}

	@Then("^User Clicks on REGISTER button$")
	public void User_Clicks_on_REGISTER_Button() throws InterruptedException {
		search_result_page.clickRegBtnOnPopUp();
		search_result_page.verifyNewRegScreen();
	}
	
	//****************Scenario: Non Logged in user - Search Result Page - Click Add to Booking button and click LOGIN*******
	@Test(priority=7)
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
	
	@Then("^User Clicks on LOGIN button$")
	public void User_Clicks_on_LOGIN_Button() {
		search_result_page.clickLogBtnOnPopUp();	
	}
	
	//*************Scenario: Non Logged in user - Search Result Page - verify Sorting filter******************************** 
	@Test(priority=8)
	@Then("^verify that the default sorting selected is with distance when search by property name$")
	public void verify_that_the_default_sorting_selected_is_with_distance_when_search_by_property_name(){
		search_result_page.getSortDropDownText();
	}

	@Then("^User ensure that Property name heading displayed with distance in miles$")
	public void user_ensure_that_Property_name_heading_displayed_with_distance_in_miles() {

	}

	@Then("^User clicks on Homepage Image and navigate back to Home page$")
	public void user_clicks_on_Homepage_Image_and_navigate_back_to_Home_page() {

	}

	@Then("^clicks on Find a Room button and navigate to search result screen$")
	public void clicks_on_Find_a_Room_button_and_navigate_to_search_result_screen() {

	}

	@Then("^verify that the default sorting selected is by property name in ascending alphabatical order$")
	public void verify_that_the_default_sorting_selected_is_by_property_name_in_ascending_alphabatical_order() {

	}

	@Then("^User selects the Sorting drop down and selects the option by property name in ascending alphabatical order$")
	public void user_selects_the_Sorting_drop_down_and_selects_the_option_by_property_name_in_ascending_alphabatical_order()  {

	}
	
//****************************Non Logged in user - Search Result Page - verify Hide rooms links and click**********
	@Test(priority=9)
	@Then("^User verifies the default Hide rooms options$")
	public void User_verifies_the_default_Hide_rooms_options(){
		search_result_page.verifyDefaultHideRoomsLinks();
	
	}

	@Then("^User selects the Hide rooms link and verify the result$")
	public void User_selects_the_Hide_rooms_link_and_verify_the_result() {
		search_result_page.clickHideRoomsLinks();

	}
	
	@Then("^User verifies the show rooms option on the page$")
	public void User_verifies_the_show_rooms_option_on_the_page() {
		search_result_page.verifyShowRoomsLinks();

	}
	
	@Then("^User selects the show rooms link and verify the result$")
	public void User_selects_the_show_rooms_link_and_verify_the_result() {
		search_result_page.clickShowRoomsLinks();
		search_result_page.verifyDefaultHideRoomsLinks();

	}
	
	
//***********************Non Logged in user - Search Result Page - Click Property Name link********************
		@Test(priority=10)
		@Then("^User clicks the property name link on the search result page$")
		public void User_clicks_the_property_name_link_on_the_search_result_page() throws InterruptedException{
			search_result_page.clickPropNameLinks();	
		}

		@Then("^User verifies the property details page$")
		public void User_verifies_the_property_details_page() {
			
		}
		
		@Then("^User navigate back to search result page$")
		public void User_navigate_back_to_search_result_page() {

		}
		
//***********************Non Logged in user - Search Result Page - Click Room Name link********************
		@Test(priority=11)
		@Then("^User clicks the Room name link on the search result page$")
		public void User_clicks_the_Room_name_link_on_the_search_result_page() throws InterruptedException {
			search_result_page.clickRoomNameLinks();
			
		}

		@Then("^User verifies the Room details page$")
		public void User_verifies_the_Room_details_page() {
			
		}
		
		@Then("^User navigate back to result page$")
		public void User_navigate_back_to_result_page() {

		}
		
//***********************Non Logged in user - Search Result Page - Click Login to view pricing link********************
		@Test(priority=12)
		@Then("^User clicks the Login to view pricing link on the search result page$")
		public void User_clicks_the_Login_to_view_pricing_link_on_the_search_result_page() throws InterruptedException {
			search_result_page.clickViewPriceLinks();
					
		}

		@Then("^User verifies the Login page$")
		public void User_verifies_the_Login_page() {
					
		}
				
		@Then("^User navigate back to searchresult page$")
		public void User_navigate_back_to_searchresult_page() {

		}
		
//***********************Non Logged in user - Search Result Page - Click Load more link********************
		@Test(priority=13)
		@Then("^User clicks the Load more button on the screen$")
		public void User_clicks_the_Load_more_button_on_the_screen() throws InterruptedException {
			search_result_page.clickLoadMoreBtn();
		}
}
