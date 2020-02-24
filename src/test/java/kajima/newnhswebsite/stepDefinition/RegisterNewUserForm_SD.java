package kajima.newnhswebsite.stepDefinition;

import kajima.newnhswebsite.base.TestBase;
import kajima.newnhswebsite.pom_pages.Basket;
import kajima.newnhswebsite.pom_pages.BookingWidget;
import kajima.newnhswebsite.pom_pages.HelpAndContactUs;
import kajima.newnhswebsite.pom_pages.HomePage;
import kajima.newnhswebsite.pom_pages.LoginPage;
import kajima.newnhswebsite.pom_pages.SearchResultPage;

public class RegisterNewUserForm_SD extends TestBase {
	
	HomePage home_page;
	LoginPage login_page;
	Basket basket_page;
	SearchResultPage search_result_page;
	BookingWidget booking_widget_page;
	HelpAndContactUs help_and_contact_us;
	
	//Created a constructor of the class to initiate the object of page classes
	public RegisterNewUserForm_SD() {
		home_page =  new HomePage();	
		login_page =  new LoginPage();	
		basket_page = new Basket();
		search_result_page = new SearchResultPage();
		booking_widget_page =  new BookingWidget();	
		help_and_contact_us =  new HelpAndContactUs();	
	}

}
