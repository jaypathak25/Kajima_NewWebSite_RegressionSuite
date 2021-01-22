package kajima.newnhswebsite.pom_pages;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import com.github.javafaker.Faker;

import kajima.newnhswebsite.base.TestBase;

public class BookingWidget extends TestBase {
	
	public String fname;
	public String lname;
	
	
	@FindBy(xpath = "//div[@class='block__title']//h3[@data-testid='title']")
	WebElement bookWidgetTitle;
	
	@FindBy(xpath = "//button[text() = 'Clear all']")
	WebElement bookWidgetClearAll;
	
	@FindBy(xpath = "//div[@class = 'block__inner']//p[@data-testid = 'description']")
	WebElement bookWidgetEmptyTxt;
	
	@FindBy(xpath = "//div[@id = 'quickBook']//input[@name = 'bookingDate']")
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
	
	@FindBy(xpath = "//*[contains(@fill,'#e8edee')]")
	List<WebElement> removeBinBtn1;
	
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
	
	@FindBy(xpath = "//div[@class='field__input']/input[@id='firstName']")
	WebElement addNewHostPopUpFirstNameFld;
	
	@FindBy(xpath = "//div[@class='field__input']/input[@id='lastName']")
	WebElement addNewHostPopUpLastNameFld;
	
	@FindBy(xpath = "//div[@class='field__input']/input[@id='email']")
	WebElement addNewHostPopUpEmailFld;
	
	@FindBy(xpath = "//div[@class='field__input']/input[@id='telephone']")
	WebElement addNewHostPopUpPhoneNoFld;
	
	@FindBy(xpath = "//button[@type = 'submit' and text() = 'Add host to booking']")
	WebElement addHostToBookingBtn;
	
	@FindBy(xpath = "//div[@class = 'field__wrapper']//div[@class=' css-nhk1ie']/div[@class=' css-kni2dw']")
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
	
	@FindBy(xpath="//div[@class='booking-slots']//li")
	WebElement bookingSlots;
	
	@FindBy(xpath="//h4[@class='clinical-indicator clinical-indicator--non-clinical']/parent::div/h3/a/ancestor::div[@class='space-list-item__details-container']//div/button[text()='Add to Booking']")
	WebElement nonclicnicalRoomsAddBtn;
	
	@FindBy(xpath="//h4[@class='clinical-indicator clinical-indicator--clinical']/parent::div/h3/a/ancestor::div[@class='space-list-item__details-container']//div/button[text()='Add to Booking']")
	WebElement clicnicalRoomsAddBtn;
	
	@FindBy(xpath="//div[@data-testid='modalDialog']/button[@Class='modal__close']/i")
	WebElement closeServClashPopUp;
	
	@FindBy(xpath="//div[@data-testid='modalDialog']/div/div/a")
	WebElement okayServClashPopUp;
	
	@FindBy(xpath="//div[@data-testid='modalDialog']/div/h2")
	WebElement titleServClashPopUp;
	
	@FindBy(xpath="//div[@data-testid='modalDialog']/div/p")
	WebElement MsgServClashPopUp;
	
	@FindBy(xpath="//div[@data-testid='modalDialog']/div/div/button")
	WebElement okayMaxRoomsPopUp;
	
	@FindBy(xpath="//div[@class='timeslot-widget__slot-inner']/span")
	WebElement availabilityCheckerNonClinical;
	
	@FindBy(xpath="//div[@class='quick-book__clash-alert']/p")
	WebElement clashMsg;
	
	@FindBy(xpath="//div[@class='quick-book__clash-alert']/a")
	WebElement clashGoToAdvbtn;
	
	@FindBy(xpath="//div[@class='block__submit']/button")
	WebElement addToBasketBtn;
	
	@FindBy(xpath="//li[@class='booking-slot']/button")
	List<WebElement> timeSlots;
	
	
	
	
	
	
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
		JavascriptExecutor jse = (JavascriptExecutor)driver;

		jse.executeScript("scroll(250, 0)"); // if the element is on top.

	//	jse.executeScript("scroll(0, 250)"); // if the element is on bottom.
		bookWidgetClearAll.click();
		String bookWidgetTxt = bookWidgetEmptyTxt.getText();
		System.out.println("Text on the widget is "+ bookWidgetTxt);
		Thread.sleep(10000);
		 Assert.assertEquals(bookWidgetTxt, "Add rooms to start your booking.");
	}
	
	public void verifyTimeSlotMsg() {
		String timeStMsg = driver.findElement(By.xpath("//div[@class = 'booking-slots']/div/span")).getText();
		Assert.assertEquals(timeStMsg, "Please select a Service Type and a Date.");
		System.out.println("Message on the timeslot is displaying as expected when no service and date selected");
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
			//for(int i=0;i<favPropTxt.size();i++) 
				//{
				//System.out.println("Name of the Property/Room saved as favourite is : "+ favPropTxt.get(i).getText());
				//}
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
	
	public void clickRemoveBinBtn() throws InterruptedException {
		Thread.sleep(500);
		System.out.println("Number of Rooms/Properties saved as favourite are "+ removeBinBtn.size());
		((JavascriptExecutor) driver).executeScript("window.scrollTo(document.body.scrollHeight, 0)");
		  
		   for(WebElement binIcon : removeBinBtn) {
			   binIcon.click();
		   }
		   if(removeBinBtn.isEmpty()) {
			   System.out.println("No Bin icon displayed");
		   }else {
			   driver.navigate().refresh();
			    for(WebElement binIcon : removeBinBtn) {
			   System.out.println("Bin icon displayed");
			   binIcon.click();
			   }  
		   }
	  }	
	
	public void saveFewRoomsnProp() {
		((JavascriptExecutor) driver).executeScript("window.scrollTo(document.body.scrollHeight, 0)");
		for (int k = 0;k<5;k++) {
			saveSpacesToggle.get(k).click();
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
		System.out.println("Title of the HOST pop up is " + popUpTitle );
		Assert.assertEquals(popUpTitle, "ADD NEW HOST");
	}
	
	public void fillNewHostForm() throws InterruptedException {
		Faker faker = new Faker();
		fname = faker.name().firstName();
		addNewHostPopUpFirstNameFld.sendKeys(fname);
		Thread.sleep(1000);
		lname = faker.name().lastName();
		addNewHostPopUpLastNameFld.sendKeys(lname);
		Thread.sleep(1000);
		addNewHostPopUpEmailFld.sendKeys(fname +"@test.com");
		String teleph = faker.phoneNumber().phoneNumber();
		addNewHostPopUpPhoneNoFld.sendKeys(teleph);	
		addHostToBookingBtn.click();
	}
	
	public void verifyHostDropDown() {
		String hostselected = newCreatedHost.getText();
		System.out.println("Select host in the drop down is "+ hostselected);
		Assert.assertTrue(hostselected.contains(fname));
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
	
	public void selectNonClinicalServices() {
		Select select = new Select(serviceDropDown);
		select.selectByVisibleText("Administrative - Bromley CCG");
	}
	
	public void selectClinicalServices() {
		Select select = new Select(serviceDropDown);
		select.selectByVisibleText("Allergy");
	}
	
	public void selectStartTime() {
		Assert.assertTrue(startTimedd.isEnabled());
		Select select1 =  new Select(startTimedd);
		select1.selectByIndex(2);
		System.out.println("Start time is selected");
	}
	
	public void selectEndTime() {
		Assert.assertTrue(endTimedd.isEnabled());
		Select select1 =  new Select(endTimedd);
		select1.selectByIndex(2);
		System.out.println("End time is selected");
	}
	
	public void addNonClinicalRoomsInBookingWidget() {
		nonclicnicalRoomsAddBtn.click();
	}
	
	public void addClinicalRoomsInBookingWidget() {
		clicnicalRoomsAddBtn.click();
	}
	
	public void verifyServiceClashMsgPopUps() {

		String Ttle = titleServClashPopUp.getText();
		System.out.println("Title of the pop up is " + Ttle);
		Assert.assertEquals(Ttle,"YOUR BOOKING");
		
		String popUpTxt = MsgServClashPopUp.getText();
		System.out.println("Text on the Pop up is "+ popUpTxt);
		Assert.assertEquals(popUpTxt,"Non-Clinical services cannot be booked in clinical rooms");
		 		
		String popUpBtnTxt = okayServClashPopUp.getText();
		System.out.println("Text on the button is "+ popUpBtnTxt);
		Assert.assertEquals(popUpBtnTxt,"OK");
		
		
		Actions act =  new Actions(driver);
		act.moveToElement(okayServClashPopUp);
		act.click();
		act.build().perform();
		
	}
	
	public void verifyMaxRoomsMsgPopUps() {

		String Ttle = titleServClashPopUp.getText();
		System.out.println("Title of the Maximum room message pop up is " + Ttle);
		Assert.assertEquals(Ttle,"YOUR BOOKING");
		
		String popUpTxt = MsgServClashPopUp.getText();
		System.out.println("Text on the Maximum room message pop up is "+ popUpTxt);
		Assert.assertEquals(popUpTxt,"The maximum rooms you can have per booking is five. Please add the current bookings to the basket and then add the room again.");
		 		
		String popUpBtnTxt = okayMaxRoomsPopUp.getText();
		System.out.println("Text on the button is "+ popUpBtnTxt);
		Assert.assertEquals(popUpBtnTxt,"OK");
		
		
		Actions act =  new Actions(driver);
		act.moveToElement(okayMaxRoomsPopUp);
		act.click();
		act.build().perform();
		
	}
	
	public void verifyFieldsForNonClinicalRooms() throws InterruptedException {
		Assert.assertTrue(serviceDropDown.isDisplayed());
		Assert.assertTrue(bookWidgetDatePicker.isDisplayed());
	//	verifyTimeSlotMsg();
		selectNonClinicalServices();
		Assert.assertTrue(startTimedd.isDisplayed());
		Assert.assertTrue(endTimedd.isDisplayed());
		
	}
	
	public void verifyFieldsForClinicalRooms() {
		Assert.assertTrue(serviceDropDown.isDisplayed());
		Assert.assertTrue(bookWidgetDatePicker.isDisplayed());
		verifyTimeSlotMsg();
		selectClinicalServices();
		Assert.assertTrue(bookingSlots.isDisplayed());
		Assert.assertTrue(!bookingSlots.getSize().equals(0));	
	}
	
	public void checkNonClinicalRoomAvailibility() throws InterruptedException {
		String MsgGreen = "Reserved";
		String MsgGrey = "Not available";
		String MsgRed = "Time clash";
		String slotMsg = availabilityCheckerNonClinical.getText();
		System.out.println("Message on the availability checker is " + slotMsg);

		if(slotMsg.equalsIgnoreCase(MsgGreen)){
			System.out.println("Non clinical room which is being trying to booked is ready to RESERVE - GREEN");
			clickAddNewHostLink();
			verifyNewHostPopUp();
			fillNewHostForm();
			verifyHostDropDown();
			if(addToBasketBtn.isEnabled()) {
				String btnTxt = addToBasketBtn.getText();
				System.out.println("Enabled button text displays as " + btnTxt);
				Assert.assertTrue(btnTxt.equalsIgnoreCase("Add to Basket"));
			}else {
				System.out.println("Add to basket button is NOT enabled");
			}	
		}else if (slotMsg.equalsIgnoreCase(MsgRed)) {
			System.out.println("Non clinical room which is being trying to booked is ALREADY BOOKED - RED");
			String clshMsg = clashMsg.getText();
			System.out.println("Clash Message displays as " + clshMsg);
			Assert.assertTrue(clshMsg.equalsIgnoreCase("Time slots clash, select another slot or proceed to advanced booking."));
			
			String clshAdvbtn = clashGoToAdvbtn.getText();
			System.out.println("Clash button text displays as " + clshAdvbtn);
			Assert.assertTrue(clshAdvbtn.equalsIgnoreCase("Go to Advanced Booking"));
			
		}else if (slotMsg.equalsIgnoreCase(MsgGrey)) {
			System.out.println("Non clinical room which is being trying to booked is NOT AVAILABLE - GREY");
			String clshMsg = clashMsg.getText();
			System.out.println("Clash Message displays as " + clshMsg);
			Assert.assertTrue(clshMsg.equalsIgnoreCase("Time slots clash, select another slot or proceed to advanced booking."));
			
			String clshAdvbtn = clashGoToAdvbtn.getText();
			System.out.println("Clash button text displays as " + clshAdvbtn);
			Assert.assertTrue(clshAdvbtn.equalsIgnoreCase("Go to Advanced Booking"));
			
		}
		
	}
	
	public void verifyTimeSlot() {
		int noOFSlots = timeSlots.size();
		System.out.println("Numbers of slots available are " + noOFSlots );
		for (int i = 1; i<=noOFSlots;i++) {
			String slotTxt = driver.findElement(By.xpath("//li[@class='booking-slot']["+i+"]/button/span[2]")).getText();
		//	System.out.println("Text displays on the slot is " + slotTxt);
			Assert.assertEquals(slotTxt, "SELECT SLOT");
		}
	}
		
		public void checkClinicalRoomAvailibility() throws InterruptedException {
		String MsgGreen = "Reserved";
		String MsgGrey = "Not available";
		String MsgRed = "Time clash";
		timeSlots.get(0).click();
		Thread.sleep(5000);

		String slotMsg = driver.findElement(By.xpath("//li[@class='booking-slot']/button/span[2]")).getText();
		System.out.println("Message on the availability checker is " + slotMsg);

		if(slotMsg.equalsIgnoreCase(MsgGreen)){
			System.out.println("Slot selected for the clinical room is ready to RESERVE - GREEN");
			clickAddNewHostLink();
			verifyNewHostPopUp();
			fillNewHostForm();
			verifyHostDropDown();
			if(addToBasketBtn.isEnabled()) {
				String btnTxt = addToBasketBtn.getText();
				System.out.println("Enabled button text displays as " + btnTxt);
				Assert.assertTrue(btnTxt.equalsIgnoreCase("Add to Basket"));
			}else {
				System.out.println("Add to basket button is NOT enabled");
			}	
		}else if (slotMsg.equalsIgnoreCase(MsgRed)) {
			System.out.println("Slot selected for the clinical room is ALREADY BOOKED - RED");
			String clshMsg = clashMsg.getText();
			System.out.println("Clash Message displays as " + clshMsg);
			Assert.assertTrue(clshMsg.equalsIgnoreCase("Time slots clash, select another slot or proceed to advanced booking."));
			
			String clshAdvbtn = clashGoToAdvbtn.getText();
			System.out.println("Clash button text displays as " + clshAdvbtn);
			Assert.assertTrue(clshAdvbtn.equalsIgnoreCase("Go to Advanced Booking"));
			
		}else if (slotMsg.equalsIgnoreCase(MsgGrey)) {
			System.out.println("Slot selected for the clinical room is NOT AVAILABLE - GREY");
			String clshMsg = clashMsg.getText();
			System.out.println("Clash Message displays as " + clshMsg);
			Assert.assertTrue(clshMsg.equalsIgnoreCase("Time slots clash, select another slot or proceed to advanced booking."));
			
			String clshAdvbtn = clashGoToAdvbtn.getText();
			System.out.println("Clash button text displays as " + clshAdvbtn);
			Assert.assertTrue(clshAdvbtn.equalsIgnoreCase("Go to Advanced Booking"));
			
		}
		
	}

	
	
 }


