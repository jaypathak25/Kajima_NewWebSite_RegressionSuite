package kajima.newnhswebsite.pom_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import kajima.newnhswebsite.base.TestBase;

public class HelpAndContactUs extends TestBase {
	
	@FindBy(xpath = "//*[text() = 'FAQs']")
	WebElement helpSrnText;
	
	
	@FindBy(xpath = "//a[@href = '/contact' and text() = 'Contact us']")
	WebElement contactUsLnk;
	
	@FindBy(name  = "organisation_enquiry[name]")
	WebElement enqNameFld;
	
	@FindBy(name  = "organisation_enquiry[email]")
	WebElement enqEmailFld;
	
	@FindBy(name  = "organisation_enquiry[phone]")
	WebElement enqPhnFld;
	
	@FindBy (name = "organisation_enquiry[message]")
	WebElement enqMsgFld;
	
	@FindBy (xpath = "//input[@type = 'submit' and @name = 'commit']")
	WebElement enqSubmitBtn;
	
	@FindBy (xpath = "//div[@class = 'error_messages']//ul/li")
	WebElement enqErrorMsg;
	
	@FindBy (xpath = "//a[text() = 'FAQ & Help Centre']")
	WebElement helpReturnLink;
	
	@FindBy(xpath = "//*[text() = 'Contact Us']")
	WebElement contactUsSrnTxt;
	
	@FindBy(id = "user_email")
	WebElement mailTrapEmail;
	
	@FindBy(id = "user_password")
	WebElement mailTrapPswd;
	
	@FindBy(xpath = "//input[@type = 'submit' and @name  = 'commit']")
	WebElement mailTraplogin;
	
	@FindBy(xpath = "//a[@title = 'Demo inbox']")
	WebElement demoInboxLink;
	
	@FindBy(xpath = "//input[@name = 'quick_filter']")
	WebElement searchInMailTrap;
	
	
	
	
	
	
	
	
	public HelpAndContactUs() 
	{
	PageFactory.initElements(driver ,this);	
	}
	
	
	public void valHelpScrn() {
		String hlptxt = helpSrnText.getText();
		System.out.println("@@@@@@@@@@@@@@@ "+ hlptxt );
		Assert.assertEquals(hlptxt, "FAQs");
	}
	
	public void clkContactUsLnk() {
		contactUsLnk.click();
	}
	
	public void clkEnqSubmitBtn() throws InterruptedException {
		Thread.sleep(1000);
		enqSubmitBtn.click();
	}
	
	public void valContactUsScrn() {
		String conUstxt = contactUsSrnTxt.getText();
		System.out.println("@@@@@@@@@@@@@@@ "+ conUstxt );
		Assert.assertEquals(conUstxt, "Contact Us");
	}
	
	public void valErrorMsgOnConUsScrn() {
		String ErrMsg = enqErrorMsg.getText();
		System.out.println("Validation error occur as "+ ErrMsg);
	}
	
	public void completeEnqForm(String name1, String email1, String phone1, String msg1) throws InterruptedException {
		Thread.sleep(10000);
		enqNameFld.sendKeys(name1);
		enqEmailFld.sendKeys(email1);
		enqPhnFld.sendKeys(phone1);
		enqMsgFld.sendKeys(msg1);
	}
	
	public void validateEnqInMailTrap() {
		driver.get("https://mailtrap.io/inboxes");
		mailTrapEmail.sendKeys("Roderick_bull@hotmail.com");
		mailTrapPswd.sendKeys("Billben1");
		mailTraplogin.click();
		demoInboxLink.click();
		searchInMailTrap.sendKeys("enquiry");
	}
	
	public void returnToHelpPage() {
		helpReturnLink.click();
				
	}
	
	

}
