package kajima.newnhswebsite.pom_pages;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.awt.Window;
import java.io.IOException;
import java.lang.reflect.Array;
import java.net.MalformedURLException;
import java.util.List;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
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
	
	@FindBy(xpath = "//button[@class = 'modal__close']")
	WebElement clsYourBookPopUp;
	
	@FindBy(xpath = "//div[@class = 'modal__title']/h2[@class = 'modal__title-text']")
	WebElement yourBookPopUpTitle;
	
	@FindBy(xpath = "//a[text() = 'Register']")
	WebElement yourBookPopUpRegBtn;
	
	@FindBy(xpath = "//a[text() = 'Login']")
	WebElement yourBookPopUpLognBtn;

	@FindBy(xpath = "//div[id = 'banner-content']//h1")
	WebElement loginPgText;
	
	@FindBy(xpath = "//select[@data-testid = 'sortField']")
	WebElement sortDropDown;
	
	@FindBy(xpath = "//button[text() = 'Hide rooms']")
	List<WebElement> hideRoomsLinks;
	
	@FindBy(xpath = "//button[text() = 'Show rooms']")
	List<WebElement> showRoomsLinks;
	
	@FindBy(xpath = "//a[contains(@href,'properties')]")
	List<WebElement> propNameLinks;
	
	@FindBy(xpath = "//a[contains(@href,'rooms')]")
	List<WebElement> roomNameLinks;
	
	@FindBy(xpath = "//a[@class = 'space-list-item__room_pricing' and @href = '/users/sign_in']")
	List<WebElement> viewPricingLinks;
	
	
	
	
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
		//TestUtils.verifyHomePagelinksnImages();
	}
	
	public void clickLinksnImagesnBackOnSrchRsltPg() {
		//TestUtils.clickLinksnImagesnBack();
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
		System.out.println("TEXT: "+ maptxt);
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
		 else { System.out.println("ERROR : Add booking button is missing");
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
		
		public void clickRegBtnOnPopUp() throws InterruptedException {	
			Thread.sleep(500);
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
		
		public void getSortDropDownText() {
			String sortddtxt = sortDropDown.getText();
			System.out.println("Sorting dropdown deafult option showing as " + sortddtxt);
			
		}
		
		public boolean verifyDefaultHideRoomsLinks() {		
			boolean result = false;
		    try {
		        WebDriverWait wait = new WebDriverWait(driver, 5);
		        wait.until(ExpectedConditions.visibilityOfAllElements(hideRoomsLinks));
		        System.out.println("Default hiderooms option is visible");
		        result = true;
		    } catch (Exception e){
		    	Assert.assertTrue(result,"ERROR : Default hiderooms option is not visible");
		        result = false;
		    }
		   return result;
		}
		
		public boolean verifyShowRoomsLinks() {		
			boolean result = false;
		    try {
		        WebDriverWait wait = new WebDriverWait(driver, 5);
		        wait.until(ExpectedConditions.visibilityOfAllElements(showRoomsLinks));
		        System.out.println("Show rooms option is visible correctly when clicked Hide rooms link");
		        result = true;
		    } catch (Exception e){
		    	Assert.assertTrue(result,"ERROR : Show rooms option is not visible when clicked Hide room link");
		        result = false;
		    }
		   return result;
		}
		
		
		public void clickHideRoomsLinks(){
			for(WebElement hideRoomstxt : hideRoomsLinks ) {
				hideRoomstxt.click();
			}	
		}
		
		public void clickShowRoomsLinks(){
			((JavascriptExecutor) driver).executeScript("window.scrollTo(document.body.scrollHeight, 0)");
			
			for(WebElement showRoomstxt : showRoomsLinks ) {
				showRoomstxt.click();
			}
		}
		
		public void clickPropNameLinks() throws InterruptedException {
			int oo = propNameLinks.size();
			System.out.println("Number of properties found on the search result screens are" + oo);
			
			for(int i = 0;i<oo;i++) {
				if (propNameLinks.get(i).getAttribute("href")!=null && (!propNameLinks.get(i).getAttribute("href").contains("javascript"))) ;
				}
		
	//	List<WebElement> = 
			
			for(WebElement PropName : propNameLinks) {
				try {
					PropName.click();
				}
				catch(org.openqa.selenium.StaleElementReferenceException ex)
				{
					PropName.click();
				}
				Thread.sleep(500);
				driver.navigate().back();
			}	
			
		//}

		 //for(int i=0;i<linklist.size();i++) {
			// if(linklist.get(i).getAttribute("href")!=null && (!linklist.get(i).getAttribute("href").contains("javascript"))) 
			 //{
			 //activeLinks.add(linklist.get(i));
			 //} 
			 // get the size of active link lists 
			 }
		
		public void clickRoomNameLinks() throws InterruptedException {
			for(WebElement RoomName : roomNameLinks) {
				try {
					RoomName.click();
				}
				catch(org.openqa.selenium.StaleElementReferenceException ex)
				{
					RoomName.click();
				}
				Thread.sleep(500);
				driver.navigate().back();
			}		
		}
		
		public void clickViewPriceLinks() throws InterruptedException {
			for(WebElement viewPrice : viewPricingLinks) {
				try {
					viewPrice.click();
				}
				catch(org.openqa.selenium.StaleElementReferenceException ex)
				{
					viewPrice.click();
				}
				Thread.sleep(500);
				driver.navigate().back();
			}		
		}

}





		
		 
	

