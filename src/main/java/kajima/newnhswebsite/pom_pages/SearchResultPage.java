package kajima.newnhswebsite.pom_pages;

import static org.testng.Assert.assertEquals;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import kajima.newnhswebsite.base.TestBase;
import kajima.newnhswebsite.utils.TestUtils;

public class SearchResultPage extends TestBase {
	
	@FindBy(xpath = "//h3[@class = 'search-results__info']//span")
	WebElement srchRsltLocn;
	
	@FindBy(xpath = "//h3[@class = 'search-results__info']//span[contains(text(),'Room')]")
	WebElement srchRsltRooms;
	
	@FindBy(xpath = "//h3[@class = 'search-results__info']//span[contains(text(),'Propert')]")
	WebElement srchRsltProps;
	
	@FindBy(xpath = "//h2[@class = 'search-results__heading']")
	WebElement resultScrnName;
	
	@FindBy(xpath = "//*[@id=\"searchResults\"]//h3")
	WebElement srchResults;
	
	@FindBy(xpath = "//a[@data-testid = 'registerLink' and text() = 'Register Now']")
	WebElement regNowLink;
	
	@FindBy(xpath = "//h1[contains(text(),'register for a nhs open space account')]")
	WebElement regisPageTxt;
	
	@FindBy(xpath = "//div[@class = 'switch__label' and @data-testid = 'switchLabel']")
	WebElement mapView;
	
	@FindBy(xpath = "//span[@class = 'switch__text']")
	WebElement mapViewDefault;
	
	@FindBy(xpath = "//p[@class = 'search-map__text']")
	WebElement mapSrcnTxt;
	
	@FindBy(xpath = "//button[@data-testid = 'addToBookingButton']")
	WebElement addBookbtn;
	
	@FindBy(xpath = "//div[@class = 'ReactModal__Content ReactModal__Content--after-open modal modal--small']//div[@class = 'modal__inner']/a[@class = 'modal__close']")
	WebElement clsYourBookPopUp;
	
	@FindBy(xpath = "//div[@class = 'ReactModal__Content ReactModal__Content--after-open modal modal--small']//div[@class = 'modal__inner']/h2[@class = 'modal__title']")
	WebElement yourBookPopUpTitle;
	
	@FindBy(xpath = "//div[@class = 'ReactModal__Content ReactModal__Content--after-open modal modal--small']//div[@class = 'modal__button_group modal__button_group--centered']/a[text() = 'Register']")
	WebElement yourBookPopUpRegBtn;
	
	@FindBy(xpath = "//div[@class = 'ReactModal__Content ReactModal__Content--after-open modal modal--small']//div[@class = 'modal__button_group modal__button_group--centered']/a[text() = 'Login']")
	WebElement yourBookPopUpLognBtn;

	@FindBy(id = "banner-content")
	WebElement loginPgText;
	
	
	
	public SearchResultPage() {
	PageFactory.initElements(driver ,this);
	}

	public void verifySearchResult() throws InterruptedException {
		Thread.sleep(1000);
		String srchRslt = srchResults.getText();
		System.out.println("Search Result contains Location and number of Rooms/Properties as "+ srchRslt);

		//	if (rsltLocn !=null) {
		//System.out.println("Search Result contains Location as " + rsltLocn + " and Rooms/properties found are " +rsltRooms + " and " + rsltProps );
		//}else
		//{
		//System.out.println("Rooms/properties found are " + rsltRooms + " and " + rsltProps );
		//}
	}
	
	public void verifySearchRsltPage() {	
		String scrnName = resultScrnName.getText();
		System.out.println("You are On "+ scrnName + " page");
	}
	
	public void verifyBrokenLinksImagesOnSrchRsltPg() throws MalformedURLException, IOException {
		TestUtils.verifyHomePagelinksnImages();
	}
	
	public void clickLinksnImagesnBackOnSrchRsltPg() {
		TestUtils.clickLinksnImagesnBack();
	}
	
	public void clickRegisNowBtn() {
		 regNowLink.click();
	}
	
	public void verifyNewRegScreen() {
		String regisScrn = regisPageTxt.getText();
		
		System.out.println(regisScrn);
		
		if (regisScrn !=null) {
			System.out.println("You are on new register screen");
		}
		else
		{
			System.out.println("ERROR : You are on incorrect screen");
		}
	}
	
	public void verifyDefaultMapView() {
		String mview = mapView.getText();
	    if (mview.equals("Map View")) {
			System.out.println("New Map view option available");	
		}else 
		{
			System.out.println("ERROR : New Map view option is missing");	
		}
		
		String dmview = mapViewDefault.getText();
		Assert.assertEquals(dmview, "OFF");
	}
	
	public void switchMapView() {
		mapViewDefault.click();
	}
	
	public void verifyMapScreen() {
		String maptxt = mapSrcnTxt.getText();
		if (maptxt !=null) {
			System.out.println("You are on new Map view screen");
		}
		else 
		{
			System.out.println("ERROR : You are on incorrect screen");
		}
	}
	public void verifyMapViewOff() {
		
		String dmview = mapViewDefault.getText();
		 if (dmview.equals("OFF")) {
				System.out.println("You are back to Search result screen and Map view is now OFF");	
			}else 
			{
				System.out.println("ERROR : Map view could not turned off correctly");	
			}
		
		Assert.assertEquals(dmview, "OFF");
		
		
	}
		public void verifyAddBookbtn() {
		
		 if(addBookbtn.isDisplayed()) 
		 { 
		 System.out.println("You are on Search result screen and Add to Booking button is available"); 
		 }
		 else { System.out.println("ERROR : Map view could not turned off correctly");
		 }
	}
		
		public void clickAddBookBtn() {
			addBookbtn.click();
			
		}
		public void closePopUp() {
			clsYourBookPopUp.click();
		}
		
		public void verifyPopUpTitle() {
			String pUpTitl = yourBookPopUpTitle.getText();
			System.out.println("Pop Up Title is displayed as "+ pUpTitl);
			Assert.assertEquals(pUpTitl, "YOUR BOOKING");
		}
		
		public void verifyPopUpBtns() {
			 if(yourBookPopUpRegBtn.isDisplayed()) 
			 { 
			 System.out.println("REGISTER Button is displayed on Pop up"); 
			 }
			 else { System.out.println("ERROR : REGISTER Button is missing on Pop up");
			 }
			 
			 if(yourBookPopUpLognBtn.isDisplayed()) 
			 { 
			 System.out.println("LOGIN Button is displayed on Pop up"); 
			 }
			 else { System.out.println("ERROR : LOGIN Button is missing on Pop up");
			 }	
		}
		
		public void clickRegBtnOnPopUp() {	
			yourBookPopUpRegBtn.click();
		}
		
		public void clickLogBtnOnPopUp() {	
		yourBookPopUpLognBtn.click();
		String lgnTxt = loginPgText.getText();
		System.out.println("^%^%^%^%^%^%^%% "+ lgnTxt);
		 if (lgnTxt.equals("Welcome back, please log in")) {
				System.out.println("You are on LOGIN Page");	
			}else 
			{
				System.out.println("ERROR : Login page is broken");	
			}
		
		
		}
		
		 
		
}
	

