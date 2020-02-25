package kajima.newnhswebsite.stepDefinition;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import kajima.newnhswebsite.base.TestBase;
import kajima.newnhswebsite.pom_pages.Basket;
import kajima.newnhswebsite.pom_pages.BookingWidget;
import kajima.newnhswebsite.pom_pages.HelpAndContactUs;
import kajima.newnhswebsite.pom_pages.HomePage;
import kajima.newnhswebsite.pom_pages.LoginPage;
import kajima.newnhswebsite.pom_pages.RoomDetailsPage;
import kajima.newnhswebsite.pom_pages.SearchResultPage;

public class RoomDetails_SD extends TestBase{
	HomePage home_page;
	LoginPage login_page;
	Basket basket_page;
	SearchResultPage search_result_page;
	BookingWidget booking_widget_page;
	HelpAndContactUs help_and_contact_us;
	RoomDetailsPage room_details_page;
	
	//Created a constructor of the class to initiate the object of page classes
	public RoomDetails_SD() {
		home_page =  new HomePage();	
		login_page =  new LoginPage();	
		basket_page = new Basket();
		search_result_page = new SearchResultPage();
		booking_widget_page =  new BookingWidget();	
		help_and_contact_us =  new HelpAndContactUs();	
		room_details_page = new RoomDetailsPage();
		
	}
	
	
//**************Pre condition (Below Given and When condition are common for all the Tests)**********************************

	@When("^User navigate to the homepage$")
	public void User_navigate_to_the_homepage(){
		home_page.verifyHomePage();
	}
	
	
//****************Scenario: From Search Result Page navigate to Room details page and verify screen**********************************	
	@Then("^User navigate to search result page$")
	public void user_navigate_to_search_result_page() throws InterruptedException {
	    home_page.filterResultByRoomType();
	    search_result_page.verifySearchRsltPage();
	}

	@Then("^User clicks Room name link$")
	public void user_clicks_Room_name_link()  {
		search_result_page.clickfirstRoomLink();
	}

	@Then("^user verifies Room details page$")
	public void user_verifies_Room_details_page() {
		room_details_page.verifyRoomNameTitle();
	}
	
//****************Scenario: From Search Result Page navigate to Room details page and verify screen**********************************
	@Then("^User navigate to search result page and clicks Room name link$")
	public void User_navigate_to_search_result_page_and_clicks_Room_name_link() throws InterruptedException {
		home_page.filterResultByRoomType();
		search_result_page.clickfirstRoomLink();
		room_details_page.verifyRoomNameTitle();
	}

	@Then("^user clicks property name link and verify the property page$")
	public void user_clicks_property_name_link_and_verify_the_property_page() throws InterruptedException  {
		search_result_page.clickPropNameLinks();
	}

//****************Scenario: From Search Result Page navigate to Room details page and click view Image forward/Previous arrows************
	@Then("^User navigate to Room details page from search result screen$")
	public void User_navigate_to_Room_details_page_from_search_result_screen() throws InterruptedException {
		home_page.filterResultByRoomType();
		search_result_page.clickfirstRoomLink();
	}

	@Then("^user clicks Forward/Previous view image arrows on gallery widget$")
	public void user_clicks_ForwardPrevious_view_image_arrows_on_gallery_widget() throws InterruptedException  {
		room_details_page.verifynClickGalleryArrows();
	}


}
