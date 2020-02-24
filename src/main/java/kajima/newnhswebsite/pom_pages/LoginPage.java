package kajima.newnhswebsite.pom_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import kajima.newnhswebsite.base.TestBase;

public class LoginPage extends TestBase {
	
	
	 @FindBy(xpath = "//a[@class = 'button header__button--login']") 
	 WebElement loginBtn;
	  
	  @FindBy(xpath = "//input[@id = 'user_email']") 
	  WebElement entrEmail;
	  
	  @FindBy(xpath = "//input[@id = 'user_password']") 
	  WebElement entrPswd;
	  
	  @FindBy(xpath = "//input[@name = 'commit']") 
	  WebElement submtLoginBtn;
	   
	  public LoginPage() 
	  { 
		  PageFactory.initElements(driver ,this); 
	  }
	    
	  public void loginToApp() { 
		 loginBtn.click();
	     entrEmail.sendKeys("r.gellar@example.com"); 
	     entrPswd.sendKeys("123456");
	     submtLoginBtn.click(); 
	  }
}
	  
	  
