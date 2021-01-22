package kajima.newnhswebsite.pom_pages;

import static org.testng.Assert.assertEquals;

import java.io.IOException;
import java.lang.reflect.Array;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import kajima.newnhswebsite.base.TestBase;
import kajima.newnhswebsite.utils.TestUtils;




public class HomePage extends TestBase {
	
	List<WebElement> activeLinks;
	
	//Page Factory or OR
	
	@FindBy(tagName = "a")
	List<WebElement> linklist;
	
	@FindBy(tagName = "img")
	List<WebElement> imglist;
	
	@FindBy(xpath = "(//button[@data-testid='roomTypeButton'])[2]")
	WebElement srchRoomTypesFld1;
	
	@FindBy(xpath = "//span[@class = 'room-types__label']")
	WebElement popupOpn;
	
	@FindBy(xpath = "//span[text() = 'Minor operations']")
	WebElement clncalOpn1;
	
	@FindBy(xpath = "//span[text() = 'Examination room']")
	WebElement clncalOpn3;
	
	@FindBy(xpath = "//span[text() = 'Treatment']")
	WebElement clncalOpn2;
	
	@FindBy(xpath = "//span[text() = 'Consulting']")
	WebElement clncalOpn4;
	
	@FindBy(xpath = "//span[text() = 'Counselling']")
	WebElement nonClncalOpn1;
	
	@FindBy(xpath = "//span[text() = 'Group room']")
	WebElement nonClncalOpn2;
	
	@FindBy(xpath = "//span[text() = 'Meetings']")
	WebElement nonClncalOpn3;
	
	@FindBy(xpath = "//span[text() = 'Offices']")
	WebElement nonClncalOpn4;
	
	@FindBy(xpath = "//p[@class='banner__intro']/following-sibling::form/div[@class='form__field']//div[@class='location']")
	WebElement srchLocationFld;
	
	@FindBy(xpath = "(//button[contains(.,'Find a room')])[2]")
	static
	WebElement fndRoomBtn;
	
	@FindBy(xpath = "//li[@class='location__search-result']//button[@class = 'location__search-result__button']")
	List<WebElement> locDropDownOpn;
	
//	@FindBy(xpath = "//li[@class='location__search-result']//button[@data-testid = 'locationsEl' and contains(text(),'orpington')]")
	//WebElement locDropDownRslt;
	
	@FindBy(xpath = "//button[contains(.,'London')]")
	WebElement locDropDownRslt1;
	
	@FindBy(xpath = "//button[contains(.,'Orpington Health & Wellbeing Centre')]")
	WebElement locDropDownRslt2;
	
	@FindBy(xpath = "//a[@href = '/faq' and text() = 'Help']")
	WebElement helpLink;
	
	@FindBy(xpath = "//li[@class = 'header__nav-item']//div[@class = 'dropdown']")
	WebElement myAccDropDown;
	
	@FindBy (xpath = "//a[text() = 'Bookings']")
	WebElement myAccDropDownBooking;
	
	@FindBy (xpath = "//a[@class = 'sub-nav__links--active']")
	WebElement myAccAllPgVal;
	
	@FindBy (xpath = "//a[text() = 'Account']")
	WebElement myAccDropDownAccount;
	
	@FindBy (xpath = "//div[@class = 'header__logo header__logo--sticky']")
	WebElement homePageImageIcon;
	
	@FindBy (xpath = "//a[text() = 'Logout']")
	WebElement MyAccDropDownlogOut;
	
	@FindBy (xpath = "//h1[text() = 'Welcome back, please log in']")
	WebElement logOutPageVal;
	
	@FindBy (xpath = "//a[text() = 'Basket']")
	WebElement basketLink;
	
	@FindBy(xpath = "//path[contains(@fill,'#959595')]")
	List<WebElement> heart;
	
	@FindBy(xpath = "//div[@class='room-types__inner']/label")
	List<WebElement> roomTypesGrid;
	
	@FindBy(xpath="//div[@class='room-types__inner']/label[@class='room-types__option room-types__option--clinical']")
	List<WebElement> roomTypesClinical;
	
	@FindBy(xpath="//div[@class='room-types__inner']/label[@class='room-types__option']")
	List<WebElement> roomTypesNonClinical;
	
	
	
	
	
		
	//Initialise the Page objects - To initialize all the above webelements of the pagefactory .Below is the constructor
		public HomePage() 
		{
		PageFactory.initElements(driver ,this);
        // We can also write in a below way to initialise elements, instead of this we can use "PageFactory.initElements(driver, HomePage.class);"	
		}
		
		//Actions	
		public void verifyHomePage()
		{
			String hpTitle = driver.getTitle();
			System.out.println("You are on "+ hpTitle );	
		}
		
		public void verifyBrokenLinksImagesOnHp() throws MalformedURLException, IOException {
		 
		 TestUtils.verifyHomePagelinksnImages();
	 	}
	 
	 	public void clickLinksnImagesnBackOnHp() {
		 
		 TestUtils.clickLinksnImagesnBack();
	 	}
		
		public void verifySearchPanel_RoomTypes_hp() {
			
			String fld1Txt = srchRoomTypesFld1.getText();
			System.out.println("first search field as a dropdown labelled as " + fld1Txt);
			Assert.assertEquals(fld1Txt, "Select room type");	
		}
		
		public void clickFirstSearchField() {
			srchRoomTypesFld1.click();
		}
		
		public void verifyPopUpGrid() {
			int noOfRoomTypesOpn = roomTypesGrid.size();
			Assert.assertTrue(noOfRoomTypesOpn==8);
			
			int noOfClinicalRoomTypesOpn = roomTypesClinical.size();
			Assert.assertTrue(noOfClinicalRoomTypesOpn==4);
			
			int noOfNonClinicalRoomTypesOpn = roomTypesNonClinical.size();
			Assert.assertTrue(noOfNonClinicalRoomTypesOpn==4);

		}
		
		public void selectSingleOpn() throws InterruptedException {
			clncalOpn3.click();
		//	srchLocationFld.click();
			Thread.sleep(2000);
			String slctdSingleOpn = srchRoomTypesFld1.getText();
			System.out.println("Option selected labelled as " + slctdSingleOpn);
			Assert.assertEquals(slctdSingleOpn, "Examination room");	
		}
		
		public void selectSingleOpnWithNoRslt() throws InterruptedException {
			clncalOpn1.click();
			srchLocationFld.click();
			Thread.sleep(2000);
			String slctdSingleOpn = srchRoomTypesFld1.getText();
			System.out.println("Option selected labelled as " + slctdSingleOpn);
			Assert.assertEquals(slctdSingleOpn, "Minor operations");
			Thread.sleep(3000);
		}
		
		public void selectNonClinicalSingleOpn() throws InterruptedException {
			nonClncalOpn4.click();
			srchRoomTypesFld1.click();
			Thread.sleep(2000);
			String slctdSingleOpn = srchRoomTypesFld1.getText();
			System.out.println("Option selected labelled as " + slctdSingleOpn);
			Assert.assertEquals(slctdSingleOpn, "Offices");
			Thread.sleep(3000);
			srchLocationFld.click();
		}
	
		
		public void selectMultipleOpn() {
			clncalOpn3.click();
			clncalOpn1.click();
			clncalOpn4.click();
			nonClncalOpn2.click();
			nonClncalOpn3.click();	
			srchLocationFld.click();
			String slctmultiOpn = srchRoomTypesFld1.getText();
			System.out.println("Number of Multiple Options selected are " + slctmultiOpn);
		    Assert.assertEquals(slctmultiOpn, "Room types4");		
		}
		
		public static void clkFindRoomBtn() throws InterruptedException {
			Thread.sleep(5000);
			fndRoomBtn.submit();
			Thread.sleep(1000);
		}
			
		public void verifySearchPanel_Location_hp() {		
			String fld2Txt = srchLocationFld.getText();
			System.out.println("Second search field as a free text labelled as " + fld2Txt);	
		}
		
		public void clickSecondSearchFieldLoc() throws InterruptedException {
			Actions actions = new Actions(driver);
			actions.moveToElement(srchLocationFld);
			actions.click();
			actions.sendKeys("Lon");
			actions.build().perform();
			Thread.sleep(2000);
			
		//	srchLocationFld.sendKeys(Keys.TAB);
		//	Thread.sleep(2000);
		//	srchLocationFld.sendKeys(Keys.ENTER);
		//	Thread.sleep(2000);
		
		//	srchLocationFld.click();
		//	Thread.sleep(1000);
		//	srchLocationFld.sendKeys("Lon");
		}
		
		public void clickSecondSearchFieldProp() throws InterruptedException {
			Actions actions = new Actions(driver);
			actions.moveToElement(srchLocationFld);
			actions.click();
			actions.sendKeys("Orpington");
			actions.build().perform();
			Thread.sleep(2000);
			
		}
		
		public void clickSecondSearchFieldNoRslt() throws InterruptedException {
			Actions actions = new Actions(driver);
			actions.moveToElement(srchLocationFld);
			actions.click();
			actions.sendKeys("northampton");
			actions.build().perform();
			Thread.sleep(2000);
			
		}
			
			
		
		public void selectDropDownOpn() throws InterruptedException {	
			int aa = locDropDownOpn.size();
			System.out.println("Location drop down displays with " + aa + " matching results");
			for(int i = 0;i<aa;i++) 
			{
				System.out.println("Results display in the dropdown are as follows " + locDropDownOpn.get(i).getText());
				//locDropDownOpn.get(i).click();
			}	
			locDropDownRslt1.click();
			Thread.sleep(1000);
			
		}	
		
		public void selectDropDownPropOpn() throws InterruptedException {	
			int aa = locDropDownOpn.size();
			System.out.println("Location drop down displays with " + aa + " matching results");
			for(int i = 0;i<aa;i++) 
			{
				System.out.println("Results display in the dropdown are as follows " + locDropDownOpn.get(i).getText());
				//locDropDownOpn.get(i).click();
			}	
			locDropDownRslt2.click();
			Thread.sleep(1000);
			
		}
		
		
		 public void enterSearchCriteria() throws InterruptedException {
			   WebDriverWait wait = new WebDriverWait(driver, 100);
			    WebElement LocationElement = wait.until(ExpectedConditions.elementToBeClickable(srchLocationFld));
			     LocationElement.click();
			     LocationElement.sendKeys("orpington");		
			     
			     int aa = locDropDownOpn.size();
					System.out.println("Location drop down displays with " + aa + " matching results");
					for(int i = 0;i<aa;i++) 
					{
						System.out.println("Results display in the dropdown are as follows " + locDropDownOpn.get(i).getText());
					}	
					
			//	locDropDownRslt.click();
					Thread.sleep(1000);
		}
		 
		 public void clickHelpLink() {
			 helpLink.click();		 
		 }
		 
		 public void slectFavHeart() {
			 int heartSize = heart.size();
			 System.out.println("number of HEARTS "+ heartSize );
		 }
		 public void verifyMyAccDropDown() {
			 String myaccTxt = myAccDropDown.getText();
			 System.out.println("DropDown name is " + myaccTxt);
			 Assert.assertEquals(myaccTxt, "My Account");	 
		 }
		 
		 public void verifyMyAccddOpns() throws InterruptedException {
			 Actions action = new Actions(driver);
			 action.moveToElement(myAccDropDown).build().perform();
		     Thread.sleep(10000);
			 String bookingOpn = myAccDropDownBooking.getText();
			 String accountOpn = myAccDropDownAccount.getText();
			 String logOutOpn = MyAccDropDownlogOut.getText();
			 Assert.assertEquals(bookingOpn, "Bookings");
			 Assert.assertEquals(accountOpn, "Account");
			 Assert.assertEquals(logOutOpn, "Logout");
			 
			 System.out.println("Options available in My account dropdown are " + bookingOpn + " , " + accountOpn + " & " + logOutOpn );
			 
		 }
		 
		 public void slctddBooking() throws InterruptedException {
			 Actions action = new Actions(driver);
			 action.moveToElement(myAccDropDown).build().perform();
		     Thread.sleep(10000);
		    
		     
			 myAccDropDownBooking.click();
		
		    Thread.sleep(10000); 
		    String mybookingTxt = myAccAllPgVal.getText();
		    Assert.assertEquals(mybookingTxt, "BOOKINGS");
		 
		    if(myAccAllPgVal.isDisplayed()) {
		    	System.out.println("You are on My Bookings screen");
		    }else 
		    {
		    	System.out.println("ERROR : You are NOT on My Bookings screen");
		    }	 
		}
		 
		 public void homePageIcon() {
			 homePageImageIcon.click();
		 }
		 
		 public void slctddAccount() throws InterruptedException {
			 Actions action = new Actions(driver);
			 action.moveToElement(myAccDropDown).build().perform();
		     Thread.sleep(10000);
		     myAccDropDownAccount.click();
		
		    Thread.sleep(10000); 
		    String myAccAllPgTxt = myAccAllPgVal.getText();
		    Assert.assertEquals(myAccAllPgTxt, "ACCOUNT");
		 
		    if(myAccAllPgVal.isDisplayed()) {
		    	System.out.println("You are on My Account screen");
		    }else 
		    {
		    	System.out.println("ERROR : You are NOT on My Account screen");
		    }	 
		}
		 
		 public void slctddLogOut() throws InterruptedException {
			 Actions action = new Actions(driver);
			 action.moveToElement(myAccDropDown).build().perform();
		     Thread.sleep(10000);
		     MyAccDropDownlogOut.click();
		
		    String logOutPgTxt = logOutPageVal.getText();
		    Assert.assertEquals(logOutPgTxt, "Welcome back, please log in");
		 
		    if(logOutPageVal.isDisplayed()) {
		    	System.out.println("You are Logged Out successfully");
		    }else 
		    {
		    	System.out.println("ERROR : You are NOT Logged Out successfully");
		    }	 
		}
	
		 public void slectBasketLink() {
			 basketLink.click();
			 
		 }
		 
		 public void filterResultByRoomType() throws InterruptedException {
			 srchRoomTypesFld1.click();
			 clncalOpn3.click();
			 fndRoomBtn.submit();
			 Thread.sleep(1000); 
		 }
		 
		 
		 
		 
}

