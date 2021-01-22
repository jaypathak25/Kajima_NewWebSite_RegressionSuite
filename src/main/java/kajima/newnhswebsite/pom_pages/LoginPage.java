package kajima.newnhswebsite.pom_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import kajima.newnhswebsite.base.TestBase;

public class LoginPage extends TestBase {
	
	
	 @FindBy(xpath = "//li[@class='header__nav-item']/a[@href = '/sign-in' and contains(.,'Sign in')]") 
	 WebElement loginBtn;
	  
	  @FindBy(xpath = "//input[@id = 'email']") 
	  WebElement entrEmail;
	  
	  @FindBy(xpath = "//input[@id = 'password']") 
	  WebElement entrPswd;
	  
	  @FindBy(xpath = "//input[@value = 'Sign in']") 
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
			 Thread.sleep(2000);
			 loginBtn.click(); 
			 Thread.sleep(2000);
		 }if (entrEmail.isDisplayed()) {
			 Thread.sleep(2000);
			 entrEmail.sendKeys("newbooker@example.com");
		 }if(entrPswd.isDisplayed()) {
			 Thread.sleep(2000);
			 entrPswd.sendKeys("Dqt8zHME");
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
	  
	  
