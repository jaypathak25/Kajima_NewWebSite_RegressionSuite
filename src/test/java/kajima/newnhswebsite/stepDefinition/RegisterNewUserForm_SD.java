package kajima.newnhswebsite.stepDefinition;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import kajima.newnhswebsite.base.TestBase;
import kajima.newnhswebsite.pom_pages.Basket;
import kajima.newnhswebsite.pom_pages.BookingWidget;
import kajima.newnhswebsite.pom_pages.HelpAndContactUs;
import kajima.newnhswebsite.pom_pages.HomePage;
import kajima.newnhswebsite.pom_pages.LoginPage;
import kajima.newnhswebsite.pom_pages.RegisterNewUserForm;
import kajima.newnhswebsite.pom_pages.SearchResultPage;

public class RegisterNewUserForm_SD extends TestBase {
	
	HomePage home_page;
	LoginPage login_page;
	Basket basket_page;
	SearchResultPage search_result_page;
	BookingWidget booking_widget_page;
	HelpAndContactUs help_and_contact_us;
	RegisterNewUserForm register_new_user_form;
	
	//Created a constructor of the class to initiate the object of page classes
	public RegisterNewUserForm_SD() {
		home_page =  new HomePage();	
		login_page =  new LoginPage();	
		basket_page = new Basket();
		search_result_page = new SearchResultPage();
		booking_widget_page =  new BookingWidget();	
		help_and_contact_us =  new HelpAndContactUs();
		register_new_user_form =  new RegisterNewUserForm();
	}
	
	//**************Pre condition (Below Given and condition are common for all the Tests)********************************

	@When("^User have gone to the homepage on desktop$")
	public void User_have_gone_to_the_homepage_on_desktop(){
		home_page.verifyHomePage();
	}
	
	
	@Then("^user clicks on the Register link$")
	public void user_clicks_on_the_Register_link() throws InterruptedException {
		register_new_user_form.verifyClickRegisterBtn();
	}
	

	//**********************Scenario: Register - New user for the new client**********************************************

	@Then("^User fills the user details form by entering all the mandatory fields and continue$")
	public void user_fills_the_user_details_form_by_entering_all_the_mandatory_fields_and_continue() {
		register_new_user_form.verify_EnterUserDetails();
	}

	@Then("^User fills the company details form by entering new company details and continue$")
	public void user_fills_the_company_details_form_by_entering_new_company_details_and_continue() throws InterruptedException {
		register_new_user_form.verify_EnterNewCompanyDetails();
	}

	@Then("^User added the different services on service details and click submit for approval button$")
	public void user_added_the_different_services_on_service_details_and_click_submit_for_approval_button() throws InterruptedException {
		register_new_user_form.verify_addServices();
	}

	@Then("^User validate the confirmation screen for newly created user$")
	public void user_validate_the_confirmation_screen_for_newly_created_user() {
		register_new_user_form.verify_confirmationScrn();
	}
	

	//**********************Scenario: Register - New user for the existing client**********************************************

	@Then("^User completes the user details form by entering all the mandatory fields and continue$")
	public void user_completes_the_user_details_form_by_entering_all_the_mandatory_fields_and_continue(){
		register_new_user_form.verify_EnterUserDetails();
	}

	@Then("^User selects the existing company and continue$")
	public void user_selects_the_existing_company_and_continue() throws InterruptedException {
		register_new_user_form.verify_EnterExitingCompanyDetails();
	}

	@Then("^User selects the different services on service details and click submit for approval button$")
	public void user_selects_the_different_services_on_service_details_and_click_submit_for_approval_button() {
		register_new_user_form.verify_selectServices();
	}

	@Then("^User validate the confirmation screen for newly created user for the existing client$")
	public void user_validate_the_confirmation_screen_for_newly_created_user_for_the_existing_client() {
		register_new_user_form.verify_confirmationScrn();
	}
	
	//******************Scenario: Register - New user for the existing client without selecting the services*******************

	@Then("^User completes the user details form by entering all the fields and continue$")
	public void user_completes_the_user_details_form_by_entering_all_the_fields_and_continue() {
		register_new_user_form.verify_EnterUserDetails();
	}

	@Then("^User selects the existing company and click continue$")
	public void user_selects_the_existing_company_and_click_continue() throws InterruptedException{
		register_new_user_form.verify_EnterExitingCompanyDetails();
	}

	@Then("^User do not select any service from the list of services and click submit for approval button$")
	public void user_do_not_select_any_service_from_the_list_of_services_and_click_submit_for_approval_button()  {
		register_new_user_form.servDetails_submitForAppBtn.click();
	}

	@Then("^User validate the confirmation message for the newly created user for existing client$")
	public void user_validate_the_confirmation_message_for_the_newly_created_user_for_existing_client()  {
		register_new_user_form.verify_confirmationScrn();
	}
	
	
	//**********************Register - New user for the new client by adding large volume of services**************************

	@Then("^User enters the user details and continue$")
	public void user_enters_the_user_details_and_continue() {
		register_new_user_form.verify_EnterUserDetails();
	}

	@Then("^User enters the company details and continue$")
	public void user_enters_the_company_details_and_continue() throws InterruptedException {
		register_new_user_form.verify_EnterNewCompanyDetails();
	}

	@Then("^User added the large volume of services on service details and click submit for approval button$")
	public void user_added_the_large_volume_of_services_on_service_details_and_click_submit_for_approval_button() {
		register_new_user_form.verify_addLargeVolOfServices();
	}

	@Then("^User validate the confirmation screen$")
	public void user_validate_the_confirmation_screen() {
		register_new_user_form.verify_confirmationScrn();
	}
	//*****************************************************************************************************************************

}
