package kajima.newnhswebsite.pom_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import kajima.newnhswebsite.base.TestBase;

public class Basket extends TestBase {
	
	
	@FindBy (xpath = "//a[text() = 'Back to browsing']")
	WebElement bckToBrowLink;
	
	@FindBy (xpath = "//a[text() = 'Search for rooms']")
	WebElement srchForRoomsBtn;
	
	@FindBy (xpath = "//div[@class = 'basket__heading']//h2")
	WebElement basketScrnName;
	
	@FindBy (xpath = "//div[@class = 'basket__heading']//h4")
	WebElement basketContentInfo;
	
	public Basket() 
	{
	PageFactory.initElements(driver ,this);	
	}
	
	public void verifyBsktScrn() {
		String bskttxt = basketScrnName.getText();
		System.out.println("Title of the screen is " + bskttxt);
		if(basketScrnName.isDisplayed()) {
			System.out.println("You are on basket screen");
		} else {
			System.out.println("You are on Incorrect screen");
		}	
	}
	
	public void verifyBsktContent() {
		String bsktcon = basketContentInfo.getText();
		System.out.println(bsktcon);	
	}
	
	public void clkBckToBrowLink() {

		if(bckToBrowLink.isDisplayed()) {
			bckToBrowLink.click();
			
		} else {
			System.out.println("Back to Browsing Link is not available");
		}	
	}
	
	public void clkSrchForRoomsButton() {

		if(srchForRoomsBtn.isDisplayed()) {
			srchForRoomsBtn.click();
			
		} else {
			System.out.println("Search for Rooms button is not available");
		}	
	}
		
		
		

}
