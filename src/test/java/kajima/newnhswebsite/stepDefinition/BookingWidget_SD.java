package kajima.newnhswebsite.stepDefinition;


import org.testng.annotations.Test;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import kajima.newnhswebsite.base.TestBase;
import kajima.newnhswebsite.pom_pages.Basket;
import kajima.newnhswebsite.pom_pages.BookingWidget;
import kajima.newnhswebsite.pom_pages.HomePage;
import kajima.newnhswebsite.pom_pages.LoginPage;
import kajima.newnhswebsite.pom_pages.SearchResultPage;


public class BookingWidget_SD extends TestBase {
	
	HomePage home_page;
	LoginPage login_page;
	Basket basket_page;
	SearchResultPage search_result_page;
	BookingWidget booking_widget_page;
	
	//Created a constructor of the class to initiate the object of page classes
	public BookingWidget_SD() {
		home_page =  new HomePage();	
		login_page =  new LoginPage();	
		basket_page = new Basket();
		search_result_page = new SearchResultPage();
		booking_widget_page =  new BookingWidget();	
	}
	
	
	//**************Pre condition (Below Given and When condition are common for all the Tests)*****************
	@Then("^User navigate to homepage and Login as primary user$")
	public void User_navigate_to_homepage_and_Login_as_primary_user() throws InterruptedException {
		home_page.verifyHomePage();
		login_page.loginToApp();
	}
	
	@When("^User search the properties/Rooms from the home page and navigate to search result page$")
	public void user_search_the_properties_Rooms_from_the_home_page_and_navigate_to_search_result_page() throws InterruptedException {
		// home_page.selectMultipleOpn();
		// home_page.enterSearchCriteria();
		login_page.clickAddToBookingCond();
		search_result_page.verifySearchRsltPage();
		home_page.slectFavHeart();
	}

	@When("^User verifies the booking widget$")
	public void user_verifies_the_booking_widget() {
		booking_widget_page.verifyEmptyBookingWidget();
	}

	@Then("^User add the booking to the booking widget$")
	public void user_add_the_booking_to_the_booking_widget() {
		search_result_page.clickAddBookBtn();
	}
	
//*********************Scenario: Booking widget - Clear all the added booking********************************************
	@Test(priority = 1)
	@Then("^User verifies the booking added to the widget$")
	public void user_verifies_the_booking_added_to_the_widget() {
		booking_widget_page.verifyBookingWidget();

	}

	@Then("^User click the Clear all link and verify that Booking widget cleared off successfully$")
	public void user_click_the_Clear_all_link_and_verify_that_Booking_widget_cleared_off_successfully() throws InterruptedException {
		booking_widget_page.clickClearAllLink();
	}

//*****************************Scenario: Booking widget - Click remove next to added rooms in the booking widget**********
	@Test(priority = 2)
	@Then("^User click the remove button displays next to Room name$")
	public void user_click_the_remove_button_displays_next_to_Room_name() {
		booking_widget_page.removeAllAddedRooms();

	}

	@Then("^user verifies that room has been removed successfully$")
	public void user_verifies_that_room_has_been_removed_successfully() {
		booking_widget_page.verifyEmptyBookingWidget();
		System.out.println("Room has been removed successfully");

	}
	

//*****************Scenario: Booking widget - Click Bin Icon to Remove all saved properties/Rooms from the favourite widgets***********
	@Test(priority = 3)
	@Then("^User verify the Favourite widget and remove the saved properties/rooms by clicking the Bin Icon$")
	public void User_verify_the_Favourite_widget_and_remove_the_saved_propertiesrooms_by_clicking_the_BinIocn() throws InterruptedException {
		booking_widget_page.verifyFavPropnRoomsWidgets();
		booking_widget_page.clickSaveSpacesToggle();
		booking_widget_page.verifyFavPropnRoomsWidgets();
		booking_widget_page.clickRemoveBinBtn();	
	}
	
	@Then("^User verifies the favourite widgets again$")
	public void User_verifies_the_favourite_widgets_again() {
		booking_widget_page.verifyFavPropnRoomsWidgets();	
	}

//*****************Scenario: Booking widget - Click the Heart and save properties/Rooms to the favourite widgets and verify the widget*******************
	@Test(priority = 4)
	
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
	@Test(priority = 5)
		
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
	
//************************Booking widget - Click Add new host link and Close Add new host Popup********************
	  @Test(priority = 6)  
	  @Then("^User selects the Add new host link$") 
	  public void user_selects_the_Add_new_host_link() {
	  booking_widget_page.clickAddNewHostLink(); 
	  }
	  
	  @Then("^User clicks X on the pop up$")
	  public void user_clicks_X_on_the_pop_up() throws Throwable {
		  booking_widget_page.verifyNewHostPopUp();
		  booking_widget_page.clickNewHostCloseOnPopUp();
	  }
	
//************************Booking widget - Click Add new host link and Close Add new host Popup********************
	  @Test(priority = 7)  
	  @Then("^User click the Add new host link$") 
	  public void user_click_the_Add_new_host_link() {
	  booking_widget_page.clickAddNewHostLink(); 
	  }
	  
	  @Then("^User enters all the mandatory fields and click Add host to booking button$")
	  public void User_enters_all_the_mandatory_fields_and_click_Add_host_to_booking_button() throws Throwable {
		  booking_widget_page.verifyNewHostPopUp();
		  booking_widget_page.fillNewHostForm();
	  }
	  
	  @Then("^User navigates back to Booking widget and verify the select host drop down$")
	  public void User_navigates_back_to_Booking_widget_and_verify_the_select_host_drop_down() throws Throwable {
		  booking_widget_page.verifyHostDropDown();
		  booking_widget_page.selectCalDates();
		  booking_widget_page.selectServices();
		  booking_widget_page.selectStartTime();
		  booking_widget_page.selectEndTime();
	  }
	  
}
