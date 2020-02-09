package kajima.newnhswebsite.pom_pages;

import static org.testng.Assert.assertEquals;

import java.io.IOException;
import java.lang.reflect.Array;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import kajima.newnhswebsite.base.TestBase;
import kajima.newnhswebsite.utils.TestUtils;




public class HomePage extends TestBase 
{
	
	List<WebElement> activeLinks;
	
	//Page Factory or OR
	
	@FindBy(tagName = "a")
	List<WebElement> linklist;
	
	@FindBy(tagName = "img")
	List<WebElement> imglist;
	
	@FindBy(xpath = "//button[@class = 'button button--block button--dropdown button--room-types']")
	WebElement srchRoomTypesFld1;
	
	@FindBy(xpath = "//span[@class = 'room-types__label']")
	WebElement popupOpn;
	
	@FindBy(xpath = "//span[text() = 'Minor operations']")
	WebElement clncalOpn1;
	
	@FindBy(xpath = "//span[text() = 'Examination']")
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
	
	@FindBy(name = "location")
	WebElement srchLocationFld2;
	
	@FindBy(xpath = "//button[@class = 'button button--secondary']")
	WebElement fndRoomBtn;
	
	@FindBy(xpath = "//li[@class='location__search-result']//button[@class = 'location__search-result__button']")
	List<WebElement> locDropDownOpn;
	
	@FindBy(xpath = "//button[@data-testid = 'locationsEl']")
	WebElement locDropDownRslt;

		
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
			Assert.assertEquals(fld1Txt, "Select room types");	
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
			srchLocationFld2.click();
			String slctdSingleOpn = srchRoomTypesFld1.getText();
			System.out.println("Option selected labelled as " + slctdSingleOpn);
			Assert.assertEquals(slctdSingleOpn, "Examination");	
		}
		
		public void selectMultipleOpn() {
			clncalOpn3.click();
			clncalOpn1.click();
			clncalOpn4.click();
			nonClncalOpn2.click();
			nonClncalOpn3.click();	
			srchLocationFld2.click();
			String slctmultiOpn = srchRoomTypesFld1.getText();
			System.out.println("Number of Multiple Options selected are " + slctmultiOpn);
		    Assert.assertEquals(slctmultiOpn, "Room types 4");		
		}
		
		public void clkFindRoomBtn() {
			fndRoomBtn.submit();	
		}
			
		public void verifySearchPanel_Location_hp() {		
			String fld2Txt = srchLocationFld2.getText();
			System.out.println("Second search field as a free text labelled as Location " );	
		}
		
		public void clickSecondSearchField() {
			srchLocationFld2.click();
			srchLocationFld2.sendKeys("Lon");
		}
		
		public void selectDropDownOpn() {	
			int aa = locDropDownOpn.size();
			System.out.println("Location drop down displays with " + aa + " matching results");
			for(int i = 0;i<aa;i++) 
			{
				System.out.println("Results display in the dropdown are as follows " + locDropDownOpn.get(i).getText());	
			}	
			locDropDownRslt.sendKeys("Northampton (1 Property)");
		}	
}

