package kajima.newnhswebsite.pom_pages;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import com.github.javafaker.Faker;

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
	
	@FindBy(xpath = "//button[@class = 'button button--small' and text() = 'Remove']")
	List<WebElement> removeAddedRoomsLink1;
	
	@FindBy(xpath = "//h4[@class = 'favourite__title']")
	List<WebElement> favPropTxt;
	
	@FindBy(xpath = "//div[@class = 'favourite__inner']//button[@class = 'favourite__remove']")
	List<WebElement> removeBinBtn;
	
	@FindBy(xpath = "//*[contains(@fill,'#959595')]")
	List<WebElement> saveSpacesToggle;
	
	@FindBy(xpath = "//*[contains(@fill,'#7bbb54')]")
	List<WebElement> removeSpacesToggle;
	
	@FindBy(xpath = "//a[text() = 'Add new host']")
	WebElement addNewHostLink;
	
	@FindBy(xpath = "//*[@class = 'modal__title-text' and text() = 'Add new host']")
	WebElement addNewHostPopUpText;
	
	@FindBy(xpath = "//button[@class = 'modal__close' and @data-testid = 'modalCloseIcon']")
	WebElement addNewHostPopUpCloseIcon;
	
	@FindBy(id = "first_name")
	WebElement addNewHostPopUpFirstNameFld;
	
	@FindBy(id = "last_name")
	WebElement addNewHostPopUpLastNameFld;
	
	@FindBy(id = "email")
	WebElement addNewHostPopUpEmailFld;
	
	@FindBy(id = "telephone")
	WebElement addNewHostPopUpPhoneNoFld;
	
	@FindBy(xpath = "//button[@type = 'submit' and text() = 'Add host to booking']")
	WebElement addHostToBookingBtn;
	
	@FindBy(xpath = "//*[@class = ' css-iirpvk-SingleValue']")
	WebElement newCreatedHost;
	
	@FindBy(xpath = "//input[@name = 'bookingDate']")
	WebElement Calpopup;
	
	@FindBy(xpath = "//div[contains(@class,'current-month')]")
	WebElement currentCalMonth;
	
	@FindBy(xpath = "//button[text() = 'Next Month']")
	WebElement navNextMonth;
	
	@FindBy(xpath = "//div[contains(@class,'react-datepicker__day react-datepicker__day') and @aria-disabled = 'false']")
	List<WebElement> allActiveDates;
	
	@FindBy(xpath = "//select[@name = 'service-type']")
	WebElement serviceDropDown;
	
	@FindBy(xpath = "//select[@name = 'startTime']")
	WebElement startTimedd;
	
	@FindBy(xpath = "//select[@name = 'startTime']")
	WebElement endTimedd;
	
	
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
	
	public void verifyFavPropnRoomsWidgets() {	
		
		//Verify save properties widget code
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
		
		//Verify save rooms widget code
		
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
	
	public void clickRemoveBinBtn() {

		System.out.println("!!!!!!!!!!!!!!!! "+ removeBinBtn.size());
		   
		   for(WebElement binIcon : removeBinBtn ) {
			   binIcon.click();
		   }
	  }	
	
	public void clickSaveSpacesToggle() throws InterruptedException {
		Thread.sleep(1000);
		((JavascriptExecutor) driver).executeScript("window.scrollTo(document.body.scrollHeight, 0)");

        int noOfHearts = saveSpacesToggle.size();
	    System.out.println("Total number of Hearts on the screens are "+noOfHearts );
	    
		  for(WebElement saveHrts : saveSpacesToggle ) {
			  saveHrts.click();
		  }
	}
	
	public void clickRemoveSpacesToggle() {
		((JavascriptExecutor) driver).executeScript("window.scrollTo(document.body.scrollHeight, 0)");
		  int noOfHearts1 = removeSpacesToggle.size();
		  System.out.println("Total number of Hearts on the screens are "+noOfHearts1);
		  
		  for(WebElement removeHrts : removeSpacesToggle ) {
		  removeHrts.click();
		  }
	 }
	
	public void clickAddNewHostLink() {
		addNewHostLink.click();
	}
	
	public void clickNewHostCloseOnPopUp() {
		addNewHostPopUpCloseIcon.click();
	}
	
	public void verifyNewHostPopUp() {
		String popUpTitle = addNewHostPopUpText.getText();
		Assert.assertEquals(popUpTitle, "ADD NEW HOST");
	}
	
	public void fillNewHostForm() {
		Faker faker = new Faker();
		String fname = faker.name().firstName();
		addNewHostPopUpFirstNameFld.sendKeys(fname);
		String lname = faker.name().lastName();
		addNewHostPopUpLastNameFld.sendKeys(lname);
		addNewHostPopUpEmailFld.sendKeys(fname +"@test.com");
		String teleph = faker.phoneNumber().phoneNumber();
		addNewHostPopUpPhoneNoFld.sendKeys(teleph);
		
		addHostToBookingBtn.click();
	}
	
	public void verifyHostDropDown() {
		String hostselected = newCreatedHost.getText();
		System.out.println("$$$$$$$$$$4 "+ hostselected);
	}
	
	public void selectCalDates() throws InterruptedException {

		Calpopup.click();
		
		for(WebElement alldates:allActiveDates)
		{
			String reqdate=alldates.getText();
			if(reqdate.equalsIgnoreCase("1"))
			{
				alldates.click();
				break;
			}
		}	
	 }
	
	public void selectServices() {
		Select select = new Select(serviceDropDown);
		select.selectByIndex(1);
	}
	
	public void selectStartTime() {
		Select select1 =  new Select(startTimedd);
		select1.selectByVisibleText("11:30");
	}
	
	public void selectEndTime() {
		Select select1 =  new Select(endTimedd);
		select1.selectByVisibleText("12:30");
	}
	
 }


