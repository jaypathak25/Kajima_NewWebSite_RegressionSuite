package kajima.newnhswebsite.pom_pages;

import java.util.List;

import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import kajima.newnhswebsite.base.TestBase;

public class BookingWidget extends TestBase {
	
	
	@FindBy(xpath = "//div[@class='block__title']//h3[@data-testid='title']")
	WebElement bookWidgetTitle;
	
	@FindBy(xpath = "//button[text() = 'Clear all']")
	WebElement bookWidgetClearAll;
	
	@FindBy(xpath = "//div[@class = 'block__inner']//p[@data-testid = 'description']")
	WebElement bookWidgetEmptyTxt;
	
	@FindBy(xpath = "//div[@class = 'field__input']//input[@name = 'bookingDate']")
	WebElement bookWidgetDatePicker;
	
	@FindBy(xpath = "//*[@class = 'favourites__title-text' and text() = 'Your saved properties']")
	WebElement favPropTtle;
	
	@FindBy(xpath = "//*[@class = 'favourites__inner favourites__inner--empty']//p[text() = 'Your saved properties will show here']")
	WebElement favPropEmptyTxt;
	
	@FindBy(xpath = "//*[@class = 'favourites__title-text' and text() = 'Your saved rooms']")
	WebElement favRoomTtle;
	
	@FindBy(xpath = "//*[@class = 'favourites__inner favourites__inner--empty']//p[text() = 'Your saved rooms will show here']")
	WebElement favRoomEmptyTxt;
	
	@FindBy(xpath = "//span[@class = 'button button--small' and text() = 'Remove']")
	List<WebElement> removeAddedRoomsLink1;
	
	@FindBy(xpath = "//h4[@class = 'favourite__title']")
	List<WebElement> favPropTxt;
	
	@FindBy(xpath = "//div[@class = 'favourite__inner']//button[@class = 'favourite__remove']")
	List<WebElement> removeBinBtn;
	
	public BookingWidget() 
	{
	PageFactory.initElements(driver ,this);	
	}
	
	public void verifyEmptyBookingWidget() {
		String bookWidTtle = bookWidgetTitle.getText();
		System.out.println("Title of the widget is " + bookWidTtle);
		Assert.assertEquals(bookWidTtle, "YOUR BOOKING");
		
		 String bookWidgetTxt = bookWidgetEmptyTxt.getText();
		 System.out.println("Text on the widget is "+ bookWidgetTxt);
		 Assert.assertEquals(bookWidgetTxt, "Add rooms to start your booking.");
		 		
		System.out.println("Empty Booking Widget is displaying as expected");
		
	}
	
	public void verifyBookingWidget() {
		if (bookWidgetDatePicker.isDisplayed()) {
			System.out.println("Room has been added to Booking widget successfully");
		}else {
			System.out.println("ERROR : Something wrong with Booking widget, please check");
		}
	}
	
	public void clickClearAllLink() throws InterruptedException {
		bookWidgetClearAll.click();
		String bookWidgetTxt = bookWidgetEmptyTxt.getText();
		System.out.println("Text on the widget is "+ bookWidgetTxt);
		Thread.sleep(10000);
		if(bookWidgetTxt.equals("Add rooms to start your booking.")) {
			System.out.println("Booking Widget has been cleared successfully");
		}else{
			System.out.println("ERROR Booking Widget NOT is displaying as expected");
		}
	}
	
	public void verifySavedPropWidgets() {	
		try{
		    if(favPropEmptyTxt!=null && favPropEmptyTxt.isDisplayed()){
		    	System.out.println("You saved properties widget is empty");
		    }
		}catch(Exception e){
		    System.out.println("Your saved property widget is not empty");
		}
		finally { 	
			for(int i=0;i<favPropTxt.size();i++) 
				{
				System.out.println("Name of the Property/Room saved as favourite is : "+ favPropTxt.get(i).getText());
				}
			}
		 }

	
	public void verifySavedRoomsWidgets() {
		try{
		    if(favRoomEmptyTxt!=null && favRoomEmptyTxt.isDisplayed()){
		    	System.out.println("You saved Room widget is empty");
		    }
		}catch(Exception e){
		    System.out.println("Your saved room widget is not empty");
		}
	}
	
	public void removeAllAddedRooms() {
		for(int j=0;j<=removeAddedRoomsLink1.size();j++) {
			removeAddedRoomsLink1.get(j).click();	
		}
	}
	
	public void verifyFavouriteWidgets() {
		try{
		    if(favPropEmptyTxt!=null && favPropEmptyTxt.isDisplayed()){
		    	System.out.println("You saved properties widget is empty");
		    }
		}catch(Exception e){
		    System.out.println("Your saved property widget is not empty");
		}
		
		try{
		    if(favRoomEmptyTxt!=null && favRoomEmptyTxt.isDisplayed()){
		    	System.out.println("You saved Room widget is empty");
		    }
		}catch(Exception e){
		    System.out.println("Your saved room widget is not empty");
		}
	}
	
	public void clickRemoveBinBtn() {

		System.out.println("!!!!!!!!!!!!!!!! "+ removeBinBtn.size());
		 for(int k=0;k<removeBinBtn.size();k++) {
		   removeBinBtn.get(k).click();

		 }
	  }	
	}


