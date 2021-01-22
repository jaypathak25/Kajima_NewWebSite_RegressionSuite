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
	}

	@When("^User verifies the booking widget$")
	public void user_verifies_the_booking_widget() {
		booking_widget_page.verifyEmptyBookingWidget();
	}

//	@Then("^User add the booking to the booking widget$")
//	public void user_add_the_booking_to_the_booking_widget() {
	//	search_result_page.clickAddBookBtn();
//	}
	
	
//*********************Booking widget - verify message on the timeslot when no service and date selected********************************************
	@Test(priority = 1)
	@Then("^User verifies the message on the timeslot when no service and date selected$")
	public void User_verifies_the_message_on_the_timeslot_when_no_service_and_date_selected() {
		search_result_page.clickAddBookBtn();
		booking_widget_page.verifyTimeSlotMsg();

	}
	
//*********************Scenario: Booking widget - Clear all the added booking********************************************
	@Test(priority = 2)
	@Then("^User click the Clear all link and verify that Booking widget cleared off successfully$")
	public void user_click_the_Clear_all_link_and_verify_that_Booking_widget_cleared_off_successfully() throws InterruptedException {
		search_result_page.clickAddBookBtn();
		booking_widget_page.clickClearAllLink();
	}

//*****************************Scenario: Booking widget - Click remove next to added rooms in the booking widget**********
	@Test(priority = 3)
	@Then("^User click the remove button displays next to Room name$")
	public void user_click_the_remove_button_displays_next_to_Room_name() {
		search_result_page.clickAddBookBtn();
		booking_widget_page.removeAllAddedRooms();

	}

	@Then("^user verifies that room has been removed successfully$")
	public void user_verifies_that_room_has_been_removed_successfully() {
		booking_widget_page.verifyEmptyBookingWidget();
		System.out.println("Room has been removed successfully");

	}

//************************Booking widget - Click Add new host link and Close Add new host Popup********************
	  @Test(priority = 4)  
	  @Then("^User click the Add new host link$") 
	  public void user_click_the_Add_new_host_link() {
		  search_result_page.clickAddBookBtn();
		  booking_widget_page.clickAddNewHostLink(); 
	  }
	  
	  @Then("^User closes the pop up by clicking X on the pop up$") 
	  public void User_closes_the_pop_up_by_clicking_X_on_the_pop_up() {
		  booking_widget_page.verifyNewHostPopUp();
		  booking_widget_page.clickNewHostCloseOnPopUp();
	  }
	  
	  @Then("^user again click add new host link and enters all the mandatory fields and click Add host to booking button$")
	  public void User_enters_all_the_mandatory_fields_and_click_Add_host_to_booking_button() throws InterruptedException  {
		  booking_widget_page.clickAddNewHostLink(); 
		  booking_widget_page.fillNewHostForm();

	  }
	  
	  @Then("^User navigates back to Booking widget and verify the select host drop down$")
	  public void User_navigates_back_to_Booking_widget_and_verify_the_select_host_drop_down()  {
		  booking_widget_page.verifyHostDropDown();
	//	  booking_widget_page.selectCalDates();
		  
	//	  booking_widget_page.selectStartTime();
	//	  booking_widget_page.selectEndTime();
	  }
	  
//=======================Scenario: Booking widget - Add non clinical room to the booking widget and verify the field=======================
	  
	  
	  @Then("^User added non clinical rooms to the booking widget and verify the fields$")
	  public void user_added_non_clinical_rooms_to_the_booking_widget_and_verify_the_fields() throws InterruptedException  {
		  booking_widget_page.addNonClinicalRoomsInBookingWidget();
		  booking_widget_page.verifyFieldsForNonClinicalRooms();

	  }

	  @Then("^User select the manatory fields like services, times, host and validate the availability$")
	  public void user_select_the_manatory_fields_like_services_times_host_and_validate_the_availability() throws InterruptedException  {
		  booking_widget_page.selectStartTime();
		  booking_widget_page.selectEndTime();
		  booking_widget_page.checkNonClinicalRoomAvailibility();

	  }
	  
//===================Scenario: Booking widget - Add clinical room to the booking widget and verify the field==============================

	  @Then("^User added clinical rooms to the booking widget and verify the fields$")
	  public void user_added_clinical_rooms_to_the_booking_widget_and_verify_the_fields()  {
		  booking_widget_page.addClinicalRoomsInBookingWidget();
		  booking_widget_page.verifyFieldsForClinicalRooms();
		  booking_widget_page.verifyTimeSlot();

	  }

	  @Then("^User select the manatory fields like services, timeslots, host and validate the availability$")
	  public void user_select_the_manatory_fields_like_services_timeslots_host_and_validate_the_availability() throws InterruptedException  {
		  booking_widget_page.checkClinicalRoomAvailibility();

	  }
	  
//====================Scenario: Booking widget - Add non clinical room to the booking widget and verify Services in the dropdown==========

	  @Then("^User added non clinical rooms,selects clinical service and verify the availability$")
	  public void user_added_non_clinical_rooms_selects_clinical_service_and_verify_the_availability()  {
		  booking_widget_page.addNonClinicalRoomsInBookingWidget();
		  booking_widget_page.selectClinicalServices();
		  booking_widget_page.selectStartTime();
		  booking_widget_page.selectEndTime();
		  
	  }

	  @Then("^User added non clinical rooms,selects non clinical service and verify the availability$")
	  public void user_added_non_clinical_rooms_selects_non_clinical_service_and_verify_the_availability() throws InterruptedException  {
		  booking_widget_page.clickClearAllLink();
		  booking_widget_page.addNonClinicalRoomsInBookingWidget();
		  booking_widget_page.selectNonClinicalServices();
		  booking_widget_page.selectStartTime();
		  booking_widget_page.selectEndTime();

	  }
	  
//========================Scenario: Booking widget - Add clinical room to the booking widget and verify Services in the dropdown==========

	  @Then("^User added clinical rooms,selects clinical service and verify the availability$")
	  public void user_added_clinical_rooms_selects_clinical_service_and_verify_the_availability()  {
		  booking_widget_page.addClinicalRoomsInBookingWidget();
		  booking_widget_page.selectClinicalServices();
		  booking_widget_page.verifyTimeSlot();

	  }

	  @Then("^User added clinical rooms and verify that non clinical services are disabled$")
	  public void user_added_clinical_rooms_and_verify_that_non_clinical_services_are_disabled()  {
		  booking_widget_page.addClinicalRoomsInBookingWidget();
		  booking_widget_page.selectNonClinicalServices();

	  }
	  
//=======================Booking widget - Add Non clinical room, select non clinical service and verify service clash message when trying to add clinical rooms===========

	  @Then("^User added non clinical rooms,selects non clinical service$")
	  public void user_added_non_clinical_rooms_selects_non_clinical_service() throws InterruptedException  {
		  booking_widget_page.clickClearAllLink();
		  booking_widget_page.addNonClinicalRoomsInBookingWidget();
		  booking_widget_page.selectNonClinicalServices();

	  }

	  @Then("^User click add to booking button for clinical room and verify the service clash message pop up$")
	  public void user_click_add_to_booking_button_for_clinical_room_and_verify_the_message_pop_up() throws InterruptedException  {
		  booking_widget_page.addClinicalRoomsInBookingWidget();
		  booking_widget_page.verifyServiceClashMsgPopUps();
		  booking_widget_page.clickClearAllLink();
		  

	  }
	  
//======================Scenario: Booking widget - add mixture of clinical and non clinical rooms, verify limit and the finally verify availability===========

	  @Then("^User added mixture of tota five clinical and non clinical rooms and verify the message when tried to add the sixth room$")
	  public void user_added_mixture_of_tota_five_clinical_and_non_clinical_rooms_and_verify_the_message_when_tried_to_add_the_sixth_room()  {
		  booking_widget_page.addNonClinicalRoomsInBookingWidget();
		  booking_widget_page.addClinicalRoomsInBookingWidget();
		  booking_widget_page.addClinicalRoomsInBookingWidget();
		  booking_widget_page.addClinicalRoomsInBookingWidget();
		  booking_widget_page.addNonClinicalRoomsInBookingWidget();
		  booking_widget_page.verifyMaxRoomsMsgPopUps();

	  }

	  @Then("^User added maximum upto five rooms, select ther mandatory fields, check availability and verify add to basket button$")
	  public void user_added_maximum_upto_five_rooms_select_ther_mandatory_fields_check_availability_and_verify_add_to_basket_page()  {

	  }
	  
}
