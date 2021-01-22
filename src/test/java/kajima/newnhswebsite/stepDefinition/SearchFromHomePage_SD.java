package kajima.newnhswebsite.stepDefinition;

import java.io.IOException;
import java.net.MalformedURLException;

import org.testng.annotations.AfterTest;
import org.testng.annotations.Test;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import kajima.newnhswebsite.base.TestBase;
import kajima.newnhswebsite.pom_pages.Basket;
import kajima.newnhswebsite.pom_pages.BookingWidget;
import kajima.newnhswebsite.pom_pages.HomePage;
import kajima.newnhswebsite.pom_pages.LoginPage;
import kajima.newnhswebsite.pom_pages.SearchResultPage;
import kajima.newnhswebsite.utils.TestUtils;

public class SearchFromHomePage_SD extends TestBase {
	

	HomePage home_page;
	LoginPage login_page;
	Basket basket_page;
	SearchResultPage search_result_page;
	BookingWidget booking_widget_page;
	
	//Created a constructor of the class to initiate the object of page classes
	public SearchFromHomePage_SD() {
		home_page =  new HomePage();	
		login_page =  new LoginPage();	
		basket_page = new Basket();
		search_result_page = new SearchResultPage();
		booking_widget_page =  new BookingWidget();	
	}
	
	//**************Pre condition (Below Given and When condition are common for all the Tests)*****************
	
	@When("^User have gone to the homepage on a desktop device$")
	public void i_have_gone_to_the_homepage_on_a_desktop_device(){
		home_page.verifyHomePage();
	}

	//*****************HomePage - To ensure links/images are responding successfully and none of them are broken**************************
	@Test(priority=1)
	@Then("^User check all the link & Image URLs, with http connection api and get the response$")
    public void i_click_on_the_link_one_by_one() throws MalformedURLException, IOException {
		 home_page.verifyBrokenLinksImagesOnHp();
    }
	
	//*****************HomePage  - Click all the links/images, navigate to relevant screen and Navigate back to Home screen***************
    @Test(priority=2)
	@Then("^User expect to click all the Home page links/images one by one User navigate back to Home screen$")
	public void i_expect_to_click_all_the_Home_page_links_and_images_one_by_one() throws MalformedURLException, IOException {
	      home_page.clickLinksnImagesnBackOnHp();
	}

    
    //************************Home Page - Search results by not selecting any search criteria and click Find a Room button**************
    @Test(priority=3)
    @Then("^Click Find a Room button without entering Room type or Location$")
    public void click_Find_a_Room_button_without_entereing_Room_type_or_Location() throws InterruptedException{
    	home_page.clkFindRoomBtn();
    }

    @Then("^User navigates to search result screen and verify the result$")
    public void user_navigates_to_search_result_screen_and_verify_the_result() throws InterruptedException {
    	 search_result_page.verifySearchRsltPage();
         search_result_page.verifySearchResult();
    }
    
    //******************HomePage - Home Page - Search results by selecting only different Clinical and Non Clinical Room Types************
    @Test(priority=4)
    @Then("^user expect to see the first search field as a dropdown labelled as “Select room type”$")
    public void user_expect_to_see_the_first_search_field_as_a_dropdown_labelled_as_Select_room_type() {
    	home_page.verifySearchPanel_RoomTypes_hp();
    }

    @Then("^User Clicks on 'Select Room Types' field to ensure that it is displaying 2x4 grid of the rooms types$")
    public void user_Clicks_on_Select_Room_Types_field_to_ensure_that_it_is_displaying_x_grid_of_the_rooms_types(){
    	home_page.clickFirstSearchField();
    }

    @Then("^User expect the order to be in Row1 & Row2 as per the acceptance Criteria$")
    public void user_expect_the_order_to_be_in_Row_Row_as_per_the_acceptance_Criteria() {
    	home_page.verifyPopUpGrid();
    }

    @Then("^User clicks on a single room type and click apply to ensure that pop up is closed and the name of the room selected in the dropdown field$")
    public void user_clicks_on_a_single_room_type_and_ensure_that_pop_up_is_closed() throws InterruptedException {
    	home_page.selectSingleOpn();
    }

    @Then("^User clicks again on 'Select Room Types' field to ensure that it is displaying 2x4 grid of the rooms types$")
    public void user_clicks_again_on_Select_Room_Types_field_to_ensure_that_it_is_displaying_x_grid_of_the_rooms_types() {
    	home_page.clickFirstSearchField(); 	
    }

    @Then("^clicks on two or more room types and ensure that the number of rooms selected to show in the dropdown fields$")
    public void clicks_on_two_or_more_room_types() {
    	home_page.selectMultipleOpn();
    }

    @Then("^Click Find a Room button to navigates to result screen and verify the search results$")
    public void click_Find_a_Room_button_to_navigates_to_result_screen_and_verify_the_search_results() throws Throwable {
    	home_page.clkFindRoomBtn();
    	search_result_page.verifySearchRsltPage();
    	search_result_page.verifySearchResult();
    }
    
    //***************************Scenario: Home Page - Search results by selecting Room Types - Non clinical*****************
    @Test(priority = 5)
    @Then("^clicks on One or more Non clinical room types and ensure that the number of rooms selected to show in the dropdown fields$")
    public void clicks_on_One_or_more_Non_clinical_room_types_and_ensure_that_the_number_of_rooms_selected_to_show_in_the_dropdown_fields() throws InterruptedException{
    	home_page.clickFirstSearchField();
    	home_page.selectNonClinicalSingleOpn();
    //	home_page.clickFirstSearchField();
    }
    
    
    @Then("^Click Find a Room button and navigates to result screen to verify the search results$")
    public void click_Find_a_Room_button_and_navigates_to_result_screen_to_verify_the_search_results() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    	home_page.clkFindRoomBtn();
    	search_result_page.verifySearchRsltPage();
    	search_result_page.verifyNonclinicalSearchResult();
    	
    }
    
    
    //***************************Scenario: Home Page - Search results by selecting Room Types - clinical*****************
    @Test(priority = 6)
    @Then("^clicks on One or more clinical room types and ensure that the number of rooms selected to show in the dropdown fields$")
    public void clicks_on_One_or_more_clinical_room_types_and_ensure_that_the_number_of_rooms_selected_to_show_in_the_dropdown_fields() throws InterruptedException{
    	home_page.clickFirstSearchField();
    	home_page.selectSingleOpn();
    }

    @Then("^Click Find a Room button and verify the search results$")
    public void Click_Find_a_Room_button_and_verify_the_search_results() throws InterruptedException{
    	home_page.clkFindRoomBtn();
    	search_result_page.verifySearchRsltPage();
    	search_result_page.verifyclinicalSearchResult();
    }

    
    //***************************Home Page - Search results by selecting only Location criteria*******************
    @Test(priority = 7)
    @Then("^User expect to see the Second search field as a free Text field labelled as 'Location'$")
    public void user_expect_to_see_the_Second_search_field_as_a_free_Text_field_labelled_as1(){
    	home_page.verifySearchPanel_Location_hp();
    }

    @Then("^User clicks on 'Location' field and enter the location name$")
    public void User_clicks_on_Location_field_and_enter_the_location_name() throws InterruptedException{
    	home_page.clickSecondSearchFieldLoc();
    	home_page.selectDropDownOpn();
    }

    
    @Then("^press Find a Room button and User navigates to result screen and verify the search result$")
    public void press_Find_a_Room_button_and_User_navigates_to_result_screen_and_verify_the_search_result() throws InterruptedException{
    	home_page.clkFindRoomBtn();
        search_result_page.verifySearchRsltPage();
        search_result_page.verifySearchResult();
    }
    
    
    //***************************Scenario: Home Page - Search results by entering only property name*******************
    @Test(priority = 8)
    @Then("^User clicks on 'Location' field and enter the property name$")
    public void User_clicks_on_Location_field_and_enter_the_property_name(){
    	home_page.verifySearchPanel_Location_hp();
    }

    @Then("^User expect a dropdown to appear displaying upto '5' matched results and allow user to select2$")
    public void user_expect_a_dropdown_to_appear_displaying_upto_matched_results_and_allow_user_to_select2() throws InterruptedException{
    	home_page.clickSecondSearchFieldProp();
    	home_page.selectDropDownPropOpn();
    }
    
    @Then("^Select Find a Room button and User navigates to result screen and verify the result$")
    public void Select_Find_a_Room_button_and_user_navigates_to_result_screen_and_verify_the_result() throws InterruptedException{
    	home_page.clkFindRoomBtn();
        search_result_page.verifySearchRsltPage();
        search_result_page.verifySearchResult();
    }
    


    //*********************Home Page - Search results by selecting both Room types and Location and click Find a Room button************
    @Test(priority=9)
    @Then("^User selects Room type and Location and click find a Room button and verify the result$")
    public void user_selects_Room_type_and_Location() throws InterruptedException {
    	home_page.clickFirstSearchField();
    	home_page.selectSingleOpn();
    	home_page.clickSecondSearchFieldLoc();
    	home_page.selectDropDownOpn();
    	home_page.clkFindRoomBtn();
      	search_result_page.verifySearchRsltPage();
        search_result_page.verifySearchResult();
    }
    
    
    //*********************Scenario: Home Page - Search results by selecting Room types which do not have any property in the DB************
    @Test(priority=10)
    @Then("User selects Room type which has no result and click find a Room button and verify the result$")
    public void user_selects_Room_type_which_has_no_result_and_click_find_a_room_buttonm() throws InterruptedException {
    	home_page.clickFirstSearchField();
    	home_page.selectSingleOpnWithNoRslt();
    	home_page.clkFindRoomBtn();
      	search_result_page.verifySearchRsltPage();
        search_result_page.verifySearchResult();
    }
    
    
    //*********************Scenario: Home Page - Search results by entering random location or property name which do not have any property in the DB************
    @Test(priority=11)
    @Then("^User enters random location or property name which has no result and click find a Room button and User navigates to result screen and verify the result$")
    public void User_enters_random_location_or_property_name_which_has_no_result_and_click_find_a_Room_button() throws InterruptedException {
    	home_page.clickSecondSearchFieldNoRslt();
   // 	home_page.selectSingleOpn();
    //	home_page.clickSecondSearchField();
    //	home_page.selectDropDownOpn();
    	home_page.clkFindRoomBtn();
      	search_result_page.verifySearchRsltPage();
        search_result_page.verifySearchResult();
    }
   
    
}
