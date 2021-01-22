package kajima.newnhswebsite.pom_pages;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.awt.Window;
import java.io.IOException;
import java.lang.reflect.Array;
import java.net.MalformedURLException;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import kajima.newnhswebsite.base.TestBase;
import kajima.newnhswebsite.utils.TestUtils;

public class SearchResultPage extends TestBase {
	
	int noofrooms;
	
	@FindBy(xpath = "//h3[@class = 'search-results__info']//span")
	WebElement srchRsltLocn;
	
	@FindBy(xpath = "//h3[@class = 'search-results__info']//span[contains(text(),'Room')]")
	WebElement srchRsltRooms;
	
	@FindBy(xpath = "//h3[@class = 'search-results__info']//span[contains(text(),'Propert')]")
	WebElement srchRsltProps;
	
	@FindBy(xpath = "//h2[@class = 'search-results__heading']")
	WebElement resultScrnName;
	
	@FindBy(xpath = "//div[@class='search-results']//h3")
	WebElement srchResults;
	
	@FindBy(xpath="//div[@class='search-results']//h3/span[1]")
	WebElement srchResults1;
	
	@FindBy(xpath="//div[@class='search-results']//h3/span[2]")
	WebElement srchResults2;
	
	@FindBy(xpath="//div[@class='search-results']//h3/span[3]")
	WebElement srchResults3;
	
	@FindBy(xpath="//div[@class='venue__info']/h3/a")
	List<WebElement> noOfProps;
	
	@FindBy(xpath="//div[@class='space-list-item__details']/h3/a")
	List<WebElement> noOfRooms;
	
	@FindBy(xpath = "//a[@data-testid = 'registerLink' and text() = 'Register Now']")
	WebElement regNowLink;
	
	@FindBy(xpath = "//h1[contains(text(),'register for a nhs open space account')]")
	WebElement regisPageTxt;
	
	@FindBy(xpath = "//li[@class='form-progress__step form-progress__step--1 form-progress__step--active']/span[@class='form-progress__step-no']")
	WebElement userDetails_progressBarStepNo;
	
	@FindBy(xpath = "//li[@class='form-progress__step form-progress__step--1 form-progress__step--active']/span[@class='form-progress__step-title']")
	WebElement userDetails_progressBarStepTitle;
	
	@FindBy(xpath = "//div[@class = 'switch__label' and @data-testid = 'switchLabel']")
	WebElement mapView;
	
	@FindBy(xpath = "//span[@class = 'switch__text']")
	WebElement mapViewDefault;
	
	@FindBy(xpath = "//p[@class = 'search-map__text']")
	WebElement mapSrcnTxt;
	
	@FindBy(xpath="//div[@class='space-list-item__booking']/div/span[@class='price__help']")
	WebElement nonLoggedInSrchScrnToolTip;
	
	@FindBy(xpath = "//button[@data-testid = 'addToBookingButton']")
	WebElement addBookbtn;
	
	@FindBy(xpath = "//button[@class = 'modal__close']")
	WebElement clsYourBookPopUp;
	
	@FindBy(xpath = "//div[@class = 'modal__title']/h2[@class = 'modal__title-text']")
	WebElement yourBookPopUpTitle;
	
	@FindBy(xpath = "//h2[text()='Your Booking']//parent::div//following-sibling::div/div/a[@class='button button--primary']")
	WebElement yourBookPopUpRegBtn;
	
	@FindBy(xpath = "//h2[text()='Your Booking']//parent::div//following-sibling::div/div/a[@class='button button--secondary']")
	WebElement yourBookPopUpLognBtn;

	@FindBy(xpath = "//div[@class='login__content']//h1")
	WebElement loginPgText;
	
	@FindBy(xpath = "//select[@data-testid = 'sortField']")
	WebElement sortDropDown;
	
	@FindBy(xpath = "//button[text() = 'Hide rooms']")
	List<WebElement> hideRoomsLinks;
	
	@FindBy(xpath = "//button[text() = 'Show rooms']")
	List<WebElement> showRoomsLinks;
	
	@FindBy(xpath = "//div[@class='venue__info']//a[contains(@href,'propertie')]")
	List<WebElement> propNameLinks;
	
	@FindBy(xpath = "//*[@class = 'space-list-item__details__name']//a[contains(.,'room')]")
	List<WebElement> roomNameLinks;
	
	@FindBy(xpath = "//a[@class = 'space-list-item__room_pricing' and @href = '/users/sign_in']")
	List<WebElement> viewPricingLinks;
	
	@FindBy(xpath = "//div[@class='pager']/button[text()= 'Load more']")
	List<WebElement> loadMoreBtn;
	
	@FindBy(xpath="//div[@class='space-list-item__details']/h3[@class='space-list-item__details__name']")
	List<WebElement> roomName;
	
	@FindBy(xpath="/html/body/div[1]/div/main/section/div/div/div[1]/div/div[3]/div/div/div/div/div[1]/div[3]/div/div[3]/div[2]/img")
	WebElement roomPin;
	
	@FindBy(xpath="//button[@class='button button--block button--dropdown' and text()='Property']")
	WebElement propertyFilter;
	
	@FindBy(xpath="//input[@type='checkbox']")
	WebElement propertLink;
	
	@FindBy(xpath="//button[text()='Apply']")
	WebElement filterApply;
	
	@FindBy(xpath="//div[@class='search-map__venue-content']/h2/a")
	WebElement propLinkOnCallOutBox;
	
	@FindBy(xpath="//div[@class='space-list-item__booking']/button")
	WebElement addToBookingBtnUnderneath;
	
	@FindBy(xpath="//ul[@class='venue__spaces']/li/div//h3/a")
	WebElement roomLinkUnderneath;
	
	
	
	
	
	public SearchResultPage() {
	PageFactory.initElements(driver ,this);
	}

	public void verifySearchResult() throws InterruptedException {
		Thread.sleep(1000);
		String srchRslt = srchResults.getText();
		System.out.println("Search Result contains Location and number of Rooms/Properties as "+ srchRslt);
		
	}
	
	public void verifyNonclinicalSearchResult() throws InterruptedException {
		Thread.sleep(1000);
		String srchRslt = srchResults.getText();
		System.out.println("Search Result contains Location and number of Rooms/Properties as "+ srchRslt);
		String roomName= driver.findElement(By.xpath("//div[@class='space-list-item__details']/h3[@class='space-list-item__details__name']/a")).getText();
		System.out.println("Room name found is " + roomName);
		Thread.sleep(3000);
		Assert.assertTrue(roomName.contains("Office"));
		
	}
	
	public void verifyclinicalSearchResult() throws InterruptedException {
		Thread.sleep(1000);
		String srchRslt = srchResults.getText();
		System.out.println("Search Result contains Location and number of Rooms/Properties as "+ srchRslt);
		String roomName= driver.findElement(By.xpath("//div[@class='space-list-item__details']/h3[@class='space-list-item__details__name']/a")).getText();
		System.out.println("Room name found is " + roomName);
		Thread.sleep(3000);
		Assert.assertTrue(roomName.contains("Examination"));
		
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
	
	public void checkToolTip() {
		if(nonLoggedInSrchScrnToolTip.isDisplayed()) {
			Actions a = new Actions(driver);
		      a.moveToElement(nonLoggedInSrchScrnToolTip).perform();
		}else
		{
			System.out.println("Tool tip is missing");
		
		}
			
	}
	
	public void verifyNewRegScreen() {
		
			String stepNo1 = userDetails_progressBarStepNo.getText();
			System.out.println("ttt" + stepNo1);
			Assert.assertTrue(stepNo1.equals("1"));
			String stepTtle1 = userDetails_progressBarStepTitle.getText();
			System.out.println("eeeee" + stepTtle1);
			Assert.assertTrue(stepTtle1.equals("USER DETAILS"));
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
		Assert.assertEquals(maptxt, "Select a property on the map to view the list of rooms available");
	}
	
	public void selectPropertyPinOnMap() {
		roomPin.click();
	//	Assert.assertFalse(mapSrcnTxt.isEnabled());
	//	Assert.assertNull(mapSrcnTxt);
		
	}
	
	//=============================================
	
	public void selectPropertyFromFilter() throws InterruptedException {
		Thread.sleep(2000);
		propertyFilter.click();
		Thread.sleep(2000);
		propertLink.click();
		Thread.sleep(2000);
		filterApply.click();
		Thread.sleep(2000);
		String filterPropRslt = driver.findElement(By.xpath("//div[@class='search-results']//h3/span[2]")).getText();
		System.out.println("Search Result showing " + filterPropRslt + " after applying filter");
		Assert.assertEquals(filterPropRslt, "1 Property");	
		
	}
	
	public void clickPropertyLinkOnCallOutBox() {
		
		
		String propLinkName = propLinkOnCallOutBox.getText();
		System.out.println("Property link name on call out box is " +propLinkName);
		propLinkOnCallOutBox.click();
		String propName = driver.findElement(By.xpath("//div[@class='venues__heading']/h1")).getText();
		System.out.println("Property name on property screen is " +propName);
		Assert.assertEquals(propLinkName, propName);
		
	}
	
	public void clickRoomLinkUnderneath() {
		String roomLinkName = roomLinkUnderneath.getText();
		System.out.println("Property link name on call out box is " +roomLinkName);
		
		roomLinkUnderneath.click();
		
		String roomName = driver.findElement(By.xpath("//div[@class='rooms__heading']//h1")).getText();
		System.out.println("Room name on room details screen is " +roomName);
		
		Assert.assertEquals(roomLinkName, roomName);
		
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
		 String addbtn = addBookbtn.getText();
		 System.out.println("button name is " + addbtn);
		 Assert.assertEquals(addbtn, "ADD TO BOOKING");
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
			
			String btnReg= yourBookPopUpRegBtn.getText();
			Assert.assertEquals(btnReg, "REGISTER");
			
			String btnLogn= yourBookPopUpLognBtn.getText();
			Assert.assertEquals(btnLogn, "LOGIN");
			
		}
		
		public void clickRegBtnOnPopUp() throws InterruptedException {	
			Thread.sleep(500);
			yourBookPopUpRegBtn.click();
		}
		
		public void clickLogBtnOnPopUp() {	
		yourBookPopUpLognBtn.click();
		String lgnTxt = loginPgText.getText();
		Assert.assertEquals(lgnTxt,"Sign in to your account");
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
			int noofprops = propNameLinks.size();
			System.out.println("Number of properties on the search screen are "+ noofprops);
			
			for(int i= 0;i<propNameLinks.size();i++) {
				System.out.println(propNameLinks.get(i).getText());
				propNameLinks.get(i).click();
				Thread.sleep(3000);
			String propName = driver.findElement(By.xpath("//div[@class='venues__heading']/h1")).getText();
			System.out.println("Property name on property screen is " +propName);
			String propTtle = driver.getTitle();
			System.out.println("Property title on property screen is " +propTtle);
			Assert.assertEquals(propName, propTtle);
				driver.navigate().back();
				Thread.sleep(5000);
			}
		}
		
		public void clickRoomNameLinks() throws InterruptedException {
			noofrooms = roomNameLinks.size();
			System.out.println("NO OF rooms ON THE PAGE "+ noofrooms);
			
			for(int i= 0;i<(noofrooms-(noofrooms-1));i++) {
				System.out.println(roomNameLinks.get(i).getText());
				roomNameLinks.get(i).click();
				Thread.sleep(3000);
				String roomName = driver.findElement(By.xpath("//div[@class='rooms__heading']//h1")).getText();
				System.out.println("Room name on room details screen is " +roomName);
				String roomTtle = driver.getTitle();
				System.out.println("Room title on room details screen is " +roomTtle);
				Assert.assertEquals(roomName, roomTtle);
	
				driver.navigate().back();
				Thread.sleep(5000);
			}
		}
		
		public void clickViewPriceLinks() throws InterruptedException {
			int nooflinks = viewPricingLinks.size();
			System.out.println("NO OF LINKS ON THE PAGE "+ nooflinks);
			
			for(int i= 0;i<(viewPricingLinks.size()-60);i++) {
				viewPricingLinks.get(i).click();
				Thread.sleep(5000);
				driver.navigate().back();
				Thread.sleep(10000);
			}
		}
		
		//public void clickLoadMoreBtn() throws InterruptedException{	
		//	try {
		//	    while(loadMoreBtn.isEnabled()) {
		//	    	 loadMoreBtn.click();
		//	    	 Thread.sleep(2000);
		//	    }
		//	} catch (NoSuchElementException e) {
		//		System.out.println("NO MORE PROPERTY IS AVAILABLE FOR DISPLAY");
		//	}	
		//}
		
		public void clickLoadMoreLink() throws InterruptedException {

			
			if(!loadMoreBtn.isEmpty()) {
			((JavascriptExecutor) driver).executeScript("window.scrollTo(document.body.scrollHeight, 0)");
			for(WebElement loadmore : loadMoreBtn) {
				System.out.println("Load more button is displayed");
				int noofprops = propNameLinks.size();
				System.out.println("Number of properties on the search screen are "+ noofprops);
				
				loadmore.click();
				Thread.sleep(2000);
				int noofprops2 = propNameLinks.size();
				System.out.println("Number of properties on the search screen are "+ noofprops2);
				Assert.assertNotEquals(noofprops, noofprops2);
				}	
			}else {
				System.out.println("Load more button is NOT displayed");
			}
		}
		
		public void clickfirstRoomLink() {
			noofrooms = roomNameLinks.size();
			for(int i= 0;i<(noofrooms-(noofrooms-1));i++) {
			System.out.println(roomNameLinks.get(i).getText());
		    roomNameLinks.get(i).click();	 
		  }	
		}
}
				




		
		 
	

