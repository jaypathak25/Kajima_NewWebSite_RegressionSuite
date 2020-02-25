package kajima.newnhswebsite.pom_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import kajima.newnhswebsite.base.TestBase;

public class RoomDetailsPage extends TestBase {
	
	
	@FindBy (xpath = "//*[@class = 'rooms__heading--first']//h1")
	WebElement roomNameTitle;
	
	@FindBy(xpath = "//button[@class ='slick-arrow slick-next']")
	WebElement galForwardArrow;
	
	@FindBy(xpath = "//button[@class = 'slick-arrow slick-prev']")
	WebElement galPreviousArrow;
	
	
	public RoomDetailsPage() 
	{
	PageFactory.initElements(driver ,this);	
	}
	
	public void verifyRoomNameTitle() {
		String roomTitle = roomNameTitle.getText();
		System.out.println("You are on " + roomTitle + " details page");
	}
	
	public void verifynClickGalleryArrows() throws InterruptedException {
		Thread.sleep(10000);
		if(galForwardArrow.isDisplayed()) {
			System.out.println("Forward Arrow is displayed");
			galForwardArrow.click();
		}else {
			System.out.println("Forward Arrow is NOT displayed");
		}
		Thread.sleep(10000);
		if(galPreviousArrow.isDisplayed()) {
			System.out.println("Previous Arrow is displayed");
			galPreviousArrow.click();
		}else {
			System.out.println("Previous Arrow is NOT displayed");
		}
	}

}
