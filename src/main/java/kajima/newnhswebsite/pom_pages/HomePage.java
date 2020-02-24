package kajima.newnhswebsite.pom_pages;

import static org.testng.Assert.assertEquals;

import java.io.IOException;
import java.lang.reflect.Array;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.util.List;
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
	
	@FindBy(xpath = "(//input[@name='location'])[2]")
	WebElement srchLocationFld;
	
	@FindBy(xpath = "//button[@class = 'button button--secondary']")
	WebElement fndRoomBtn;
	
	@FindBy(xpath = "//li[@class='location__search-result']//button[@class = 'location__search-result__button']")
	List<WebElement> locDropDownOpn;
	
//	@FindBy(xpath = "//li[@class='location__search-result']//button[@data-testid = 'locationsEl' and contains(text(),'orpington')]")
	//WebElement locDropDownRslt;
	
	@FindBy(xpath = "//li[contains(.,'Orpington Health & Wellbeing Centre, Orpington')]")
	WebElement locDropDownRslt;
	
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
		 
		// TestUtils.verifyHomePagelinksnImages();
	 	}
	 
	 	public void clickLinksnImagesnBackOnHp() {
		 
	//	 TestUtils.clickLinksnImagesnBack();
	 	}
		
		public void verifySearchPanel_RoomTypes_hp() {
			
			String fld1Txt = srchRoomTypesFld1.getText();
			System.out.println("first search field as a dropdown labelled as " + fld1Txt);
			Assert.assertEquals(fld1Txt, "Select room Types");	
		}
		
		public void clickFirstSearchField() {
			srchRoomTypesFld1.click();
		}
		
		public void verifyPopUpGrid() {
			String firstRoomName = popupOpn.getText();
			System.out.println("The first Room Type is appearing with name " + firstRoomName);
			Assert.assertEquals(firstRoomName, "MINOR OPERATIONS");	
		}
		
		public void selectSingleOpn() {
			clncalOpn3.click();
			srchLocationFld.click();
			String slctdSingleOpn = srchRoomTypesFld1.getText();
			System.out.println("Option selected labelled as " + slctdSingleOpn);
			Assert.assertEquals(slctdSingleOpn, "Examination room");	
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
		    Assert.assertEquals(slctmultiOpn, "Room types 4");		
		}
		
		public void clkFindRoomBtn() throws InterruptedException {
			Thread.sleep(1000);
			fndRoomBtn.submit();	
		}
			
		public void verifySearchPanel_Location_hp() {		
			String fld2Txt = srchLocationFld.getText();
			System.out.println("Second search field as a free text labelled as Location " );	
		}
		
		public void clickSecondSearchField() throws InterruptedException {
			srchLocationFld.click();
			Thread.sleep(1000);
			srchLocationFld.sendKeys("Lon");
		}
		
		public void selectDropDownOpn() throws InterruptedException {	
			int aa = locDropDownOpn.size();
			System.out.println("Location drop down displays with " + aa + " matching results");
			for(int i = 0;i<aa;i++) 
			{
				System.out.println("Results display in the dropdown are as follows " + locDropDownOpn.get(i).getText());
				//locDropDownOpn.get(i).click();
			}	
			locDropDownRslt.click();
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
					
				locDropDownRslt.click();
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
			 
			 System.out.println("Options available in My account dropdown are " + bookingOpn + " , " + accountOpn + " & " + logOutOpn );
			 
		 }
		 
		 public void slctddBooking() throws InterruptedException {
			 Actions action = new Actions(driver);
			 action.moveToElement(myAccDropDown).build().perform();
		     Thread.sleep(10000);
		    
		     
			 myAccDropDownBooking.click();
		
		    Thread.sleep(10000); 
		    String mybookingTxt = myAccAllPgVal.getText();
		    System.out.println("@@@@@@@@@@@ " + mybookingTxt);
		 
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
		    System.out.println("@@@@@@@@@@@ " + myAccAllPgTxt);
		 
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
		    System.out.println("@@@@@@@@@@@ " + logOutPgTxt);
		 
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
		 
		 
		 
		 
}

