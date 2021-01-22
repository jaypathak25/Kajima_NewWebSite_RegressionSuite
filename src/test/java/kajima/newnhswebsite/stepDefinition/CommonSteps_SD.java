package kajima.newnhswebsite.stepDefinition;

import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.BeforeTest;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import kajima.newnhswebsite.base.TestBase;
import kajima.newnhswebsite.pom_pages.Basket;
import kajima.newnhswebsite.pom_pages.BookingWidget;
import kajima.newnhswebsite.pom_pages.HomePage;
import kajima.newnhswebsite.pom_pages.LoginPage;
import kajima.newnhswebsite.pom_pages.SearchResultPage;


public class Commonsteps_SD extends TestBase  {
	

	
	
	
	//*********************Before test method*********************************************
	@BeforeClass
	@Given("^User opens browser and enters the New NHS Pre Prod URL$")
	public void user_opens_browser_and_enters_the_New_NHS_Pre_Prod_URL(){
		TestBase.intialisation();
	}
	
	
	//***********************************After test method************************************************//
	@AfterClass
	@Then("^user quit the browser$")
	public void user_quit_the_browser() {
		driver.quit(); 

	}

}
