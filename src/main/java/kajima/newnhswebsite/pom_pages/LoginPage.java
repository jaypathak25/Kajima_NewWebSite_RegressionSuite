package kajima.newnhswebsite.pom_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import kajima.newnhswebsite.base.TestBase;

public class LoginPage extends TestBase {
	
	
	 @FindBy(xpath = "//a[contains(.,'Login')]") 
	 WebElement loginBtn;
	  
	  @FindBy(xpath = "//input[@id = 'user_email']") 
	  WebElement entrEmail;
	  
	  @FindBy(xpath = "//input[@id = 'user_password']") 
	  WebElement entrPswd;
	  
	  @FindBy(xpath = "//input[@name = 'commit']") 
	  WebElement submtLoginBtn;
	  
	  @FindBy (xpath = "//a[text() = 'Basket']")
	  WebElement basketLink;
	  
	  @FindBy(xpath = "//li[@class = 'header__nav-item']//div[@class = 'dropdown']")
	  WebElement myAccDropDown;
	   
	  public LoginPage() 
	  { 
		  PageFactory.initElements(driver ,this); 
	  }
	    
	  public void loginToApp() throws InterruptedException { 
		 if(loginBtn.isDisplayed()) {
			 loginBtn.click(); 
		 }if (entrEmail.isDisplayed()) {
			 Thread.sleep(2000);
			 entrEmail.sendKeys("r.gellar@example.com");
		 }if(entrPswd.isDisplayed()) {
			 Thread.sleep(2000);
			 entrPswd.sendKeys("123456");
		 }if(submtLoginBtn.isDisplayed()) {
			 Thread.sleep(2000);
			 submtLoginBtn.click(); 
		 }if(basketLink.isDisplayed() && myAccDropDown.isDisplayed() ) {
			   System.out.println("You are logged in successfully");
		  }	  
	  }
	  
	  public void clickAddToBookingCond() throws InterruptedException  {
		  if(basketLink.isDisplayed() && myAccDropDown.isDisplayed() ) {
			  HomePage.clkFindRoomBtn();
		  }else {
			  loginBtn.click();
		  }
		  
	  }
}
	  
	  
