package kajima.newnhswebsite.pom_pages;

import java.util.List;
import java.util.UUID;

import org.apache.commons.lang3.RandomStringUtils;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.github.javafaker.Faker;

import kajima.newnhswebsite.base.TestBase;

public class MyAccounts extends TestBase {
	
	
	@FindBy (xpath = "//button[@data-testid = 'addPaymentMethodBtn']")
	WebElement addNewPayMethodBtn;
	
	@FindBy(xpath = "//a[contains(.,'close')]")
	WebElement closeBtnOnNewPayPopUp;
	
	@FindBy(xpath = "//*[@data-testid = 'paymentMethodForm']//form/h2")
	WebElement newPayMethodFormTitle;
	
	@FindBy(xpath = "//button[text()='Continue']")
	WebElement newPayMethodFormContinueBtn;
	
	@FindBy(xpath = "//*[@for = 'payment_method_card']")
	WebElement newPayMethodFormPayCardrb;
	
	@FindBy(xpath = "//*[@for = 'payment_method_mandate']")
	WebElement newPayMethodFormddrb;
	
	@FindBy(xpath = "//button[text()='Go Back']")
	WebElement payMethodFormGoBackBtn;

	@FindBy(id = "name")
	WebElement ddNameField;
	
	@FindBy(xpath = "//*[@for = 'service_level_organisation']")
	WebElement orgDirectDebitrb;
	
	@FindBy(xpath = "//a[text() = 'Terms and Conditions']")
	WebElement termsNCondLink;
	
	@FindBy(xpath = "//input[@name = 'client_service_ids[]']")
	List<WebElement> servicesCheckBox;
	

	
	public MyAccounts() 
	{
	PageFactory.initElements(driver ,this);	
	}
	
	public void clickAddNewPayMethodBtn() {
		addNewPayMethodBtn.click();
	}
	
	public void clickCloseOnAddNewPayMethodBtn() throws InterruptedException {
		if(closeBtnOnNewPayPopUp.isEnabled())
		{
		System.out.println("Close option displays on the New payment method pop up");
		Thread.sleep(10000);
		closeBtnOnNewPayPopUp.click();
		}
	}
	
	public void verifyNewPayMethodFormPopUp() throws InterruptedException {
		if(newPayMethodFormTitle.isDisplayed() && newPayMethodFormContinueBtn.isDisplayed() 
				&& newPayMethodFormPayCardrb.isDisplayed() && newPayMethodFormddrb.isDisplayed() )
		{
		System.out.println("Add new payments method pop up displays with all the correct options available");
		}
	}
	
	public void selectGoBackBtn() {
		payMethodFormGoBackBtn.click();
	}
	
	public void selectPayCardJourney() throws InterruptedException {
		newPayMethodFormPayCardrb.click();
		newPayMethodFormContinueBtn.click();
	}
	
	public void selectDirectDebitJourney() throws InterruptedException {
		newPayMethodFormddrb.click();
		newPayMethodFormContinueBtn.click();
	}
	
	public void ClickpayMethodFormContinueBtn() {
		newPayMethodFormContinueBtn.click();	
	}
	
	public void ClickTermsAndCondLink() {
		termsNCondLink.click();	
	}
	
	// random string of length 8 composed of alphabetic characters 
	//String s = RandomStringUtils.randomAlphabetic(8); 

	// random string of length 8 composed of alphabetic characters and numbers
	//String s = RandomStringUtils.randomAlphanumeric(8); 
	
	public void enterName() {
		Faker faker =  new Faker();
		String name = faker.name().name();
		if(ddNameField.isDisplayed()) {
			
		ddNameField.sendKeys(name);
		System.out.println("NAME FIELD IS ENTERED CORRECTLY");
		}
	}
	
	public void selectOrgDDRadioBtn() {
		orgDirectDebitrb.click();
		
	}
	
	public void selectServiceChkBox() {
		int noOfServices = servicesCheckBox.size();
		System.out.println("Number of services on the screen are "+ noOfServices);
		for(WebElement servcheckbox : servicesCheckBox) {
			servcheckbox.click();
		}
	}
	
	
	
	
	

}
