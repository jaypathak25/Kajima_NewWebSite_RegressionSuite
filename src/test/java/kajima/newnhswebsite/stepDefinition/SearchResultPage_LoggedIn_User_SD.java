package kajima.newnhswebsite.stepDefinition;

import org.testng.annotations.Test;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import kajima.newnhswebsite.base.TestBase;
import kajima.newnhswebsite.pom_pages.Basket;
import kajima.newnhswebsite.pom_pages.BookingWidget;
import kajima.newnhswebsite.pom_pages.HelpAndContactUs;
import kajima.newnhswebsite.pom_pages.HomePage;
import kajima.newnhswebsite.pom_pages.LoginPage;
import kajima.newnhswebsite.pom_pages.SearchResultPage;

public class SearchResultPage_LoggedIn_User_SD extends TestBase {
	
	HomePage home_page;
	LoginPage login_page;
	Basket basket_page;
	SearchResultPage search_result_page;
	BookingWidget booking_widget_page;
	HelpAndContactUs help_and_contact_us;
	
	//Created a constructor of the class to initiate the object of page classes
	public SearchResultPage_LoggedIn_User_SD() {
		home_page =  new HomePage();	
		login_page =  new LoginPage();	
		basket_page = new Basket();
		search_result_page = new SearchResultPage();
		booking_widget_page =  new BookingWidget();	
		help_and_contact_us =  new HelpAndContactUs();	
	}
	
	
	//**************Pre condition (Below Given and When condition are common for all the Tests)********************************

	@When("^User have gone to the homepage and login$")
	public void User_have_gone_to_the_homepage_and_login() throws InterruptedException{
		home_page.verifyHomePage();
		login_page.loginToApp();
	}
	
	@Then("^User searched the property by clicking on Find a Room button$")
	public void User_searched_the_property_by_clicking_on_Find_a_Room_button() throws InterruptedException{
	//    home_page.enterSearchCriteria();
	    Thread.sleep(2000);
		home_page.clkFindRoomBtn();
		Thread.sleep(1000);
		search_result_page.verifySearchRsltPage();
	}
	

//*****************Scenario: Booking widget - Click the Heart and save properties/Rooms to the favourite widgets and verify the widget*******************
		@Test(priority = 1)
		
		@Then("^verify Your saved properties/rooms section on the screen$")
		public void verify_Your_saved_propertiesrooms_section_on_the_screen() {
			booking_widget_page.verifyFavPropnRoomsWidgets();
			
		}
		
		@Then("^User select the heart toggle available on the search result screen$")
		public void User_select_the_heart_toggle_available_on_the_search_result_screen() throws InterruptedException {
			booking_widget_page.clickSaveSpacesToggle();		
			
		}
			
		@Then("^User verifies that Properties/Rooms have been saved successfully$")
		public void User_verifies_that_PropertiesRooms_have_been_saved_successfully() {
			booking_widget_page.verifyFavPropnRoomsWidgets();
		
		}
		
		
	//********************Scenario: Booking widget - Click the Heart and Remove save properties/Rooms to the favourite widgets and verify the widget*******
		@Test(priority = 2)
			
		@Then("^verify Your saved properties/rooms widget on the screen$")
		public void verify_Your_saved_propertiesrooms_widget_on_the_screen() {
			booking_widget_page.verifyFavPropnRoomsWidgets();
		}
			
		@Then("^User Deselect the heart toggle available on the search result screen$")
		public void User_Deselect_the_heart_toggle_available_on_the_search_result_screen() throws InterruptedException {
			booking_widget_page.clickRemoveSpacesToggle();
		}
				
		@Then("^User verifies that Properties/Rooms have been removed successfully$")
		public void User_verifies_that_PropertiesRooms_have_been_removed_successfully() {			
			booking_widget_page.verifyFavPropnRoomsWidgets();
		}
		
		

	//*****************Scenario: Booking widget - Click Bin Icon to Remove all saved properties/Rooms from the favourite widgets***********
		@Test(priority = 3)
		@Then("^User verify the Favourite widget and remove the saved properties/rooms by clicking the Bin Icon$")
		public void User_verify_the_Favourite_widget_and_remove_the_saved_propertiesrooms_by_clicking_the_BinIocn() throws InterruptedException {
			booking_widget_page.verifyFavPropnRoomsWidgets();
			booking_widget_page.saveFewRoomsnProp();
			booking_widget_page.verifyFavPropnRoomsWidgets();
			booking_widget_page.clickRemoveBinBtn();	
		}
			
		@Then("^User verifies the favourite widgets again$")
		public void User_verifies_the_favourite_widgets_again() {
			booking_widget_page.verifyFavPropnRoomsWidgets();	
		}
		
		
	//**************************Scenario : Non Logged in user - Search Result Page - Select/DeSelect Map view******************************************
		
		@Test(priority=4)
		@Then("^User verify that as a logged in user the Map view option is available$")
		public void user_verify_that_as_a_logged_in_user_the_Map_view_option_is_available(){
			search_result_page.verifyDefaultMapView();
		}

		@Then("^User Switch on the Map and verify Map view screen$")
		public void user_Switch_on_the_Map_and_verify_map_view_screen() {
			search_result_page.switchMapView();
		}

		@Then("^User turn off the Map view and verify$")
		public void user_verify_Map_view_screen_and_verify() throws InterruptedException {
			search_result_page.verifyMapScreen();
			Thread.sleep(2000);
			search_result_page.switchMapView();
			Thread.sleep(2000);
			search_result_page.verifyMapViewOff();
			
		}

		
	//****************************Logged in user - Search Result Page - verify Hide rooms links and click**********
		@Test(priority=5)
		@Then("^User verifies the default Hide rooms options and selects the Hide rooms link and verify the result$")
		public void User_verifies_the_default_Hide_rooms_options_and_selects_the_Hide_rooms_link_and_verify_the_result(){
			search_result_page.verifyDefaultHideRoomsLinks();
			search_result_page.clickHideRoomsLinks();
		
		}
		
		@Then("^User verifies the show rooms option on the page and selects the show rooms link and verify the result$")
		public void User_verifies_the_show_rooms_option_on_the_page_and_selects_the_show_rooms_link_and_verify_the_result() {
			search_result_page.verifyShowRoomsLinks();
			search_result_page.clickShowRoomsLinks();
			search_result_page.verifyDefaultHideRoomsLinks();

		}
		
		
	//***********************Logged in user - Search Result Page - Click Property Name link********************
			@Test(priority=6)
			@Then("^User clicks the property name link on the search result screen,verify the property details screen and navigate back to search screen$")
			public void User_clicks_the_property_name_link_on_the_search_result_page_and_verify() throws InterruptedException{
				search_result_page.clickPropNameLinks();	
			}

			
	//***********************Logged in user - Search Result Page - Click Room Name link********************
			@Test(priority=7)
			@Then("^User clicks the Room name link on the search result screen,verify the Room details page and navigate back to result page$")
			public void User_clicks_the_Room_name_link_on_the_search_result_screen_and_verify() throws InterruptedException {
				search_result_page.clickRoomNameLinks();
				
			}
			
	//***********************Logged in user - Search Result Page - Click Load more link********************
			@Test(priority=8)
			@Then("^User clicks the Load more Link on the screen$")
			public void User_clicks_the_Load_more_Link_on_the_screen() throws InterruptedException {
				search_result_page.clickLoadMoreLink();
			}
		
			

//**********************Logged in user - Search Result Page – Select property pin on the Map and verify property rooms section and click add to basket button*****************************************
		
			
			@Test(priority=9)
			@Then("^User Switch on Map view clicks the property pin on map$")
			public void User_Switch_on_Map_view_clicks_the_property_pin_on_the_map() throws InterruptedException{
				search_result_page.switchMapView();
				search_result_page.verifyMapScreen();
				search_result_page.selectPropertyFromFilter();
				search_result_page.selectPropertyPinOnMap();
			}


			@Then("^user verify the rooms section underneath the map and User clicks add to basket button$")
			public void user_verify_the_rooms_section_underneath_the_map_and_User_clicks_add_to_basket_button() throws InterruptedException {
				search_result_page.verifyAddBookbtn();
				search_result_page.clickAddBookBtn();
				booking_widget_page.verifyTimeSlotMsg();
			//	search_result_page.verifyPopUpTitle();
			//	search_result_page.verifyPopUpBtns();

			}

			
	//******************Logged in user - Search Result Page – Select property pin on the Map and Click property link on the property details call out box******************************************
			
			@Test(priority=10)
			@Then("^User Switch to the Map view and click the property pin on the map$")
			public void User_Switch_to_the_Map_view_and_click_the_property_pin_on_the_map() throws InterruptedException{
				search_result_page.switchMapView();
				search_result_page.verifyMapScreen();
				search_result_page.selectPropertyFromFilter();
				search_result_page.selectPropertyPinOnMap();
			}


			@Then("^user verify the property details callout box, click the property link and verify the property details page$")
			public void user_verify_the_property_details_call_out_box_click_the_property_link_and_verify_the_property_details_page() {
				search_result_page.clickPropertyLinkOnCallOutBox();
				
			}
			
			
	//****************Logged in user - Search Result Page – Select property pin on the Map and click rooms link displaying on room list underneath the map view******************************************
			
			@Test(priority=11)
			@Then("^User Switch to Map view and clicks the property pin dispaying on the map$")
			public void User_Switch_on_Map_view_and_clicks_the_property_pin_displaying_on_the_map() throws InterruptedException{
				search_result_page.switchMapView();
				search_result_page.verifyMapScreen();
				search_result_page.selectPropertyFromFilter();
				search_result_page.selectPropertyPinOnMap();
			}

			@Then("^user verify the rooms section underneath the map and clicks the room link and verify details$")
			public void user_verify_the_rooms_section_underneath_the_map_and_clicks_the_room_link_and_verify_details() {
				search_result_page.clickRoomLinkUnderneath();

			}
}
