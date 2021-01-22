package kajima.newnhswebsite.pom_pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import com.github.javafaker.Faker;

import kajima.newnhswebsite.base.TestBase;

public class RegisterNewUserForm extends TestBase{
	
	Faker fake =  new Faker();
	String fname;
	String lname;
	
	
	
	@FindBy(xpath = "//a[@href='' and text()='Register']")
	WebElement register_Link;
	
	@FindBy(id = "firstName")
	WebElement userDetails_fn;
	
	@FindBy(id = "lastName")
	WebElement userDetails_ln;
	
	@FindBy(id = "phoneNumber")
	WebElement userDetails_phn;
	
	@FindBy(id = "mobileNumber")
	WebElement userDetails_mob;
	
	@FindBy(id = "email")
	WebElement userDetails_email;
	
	@FindBy(id = "confirmEmail")
	WebElement userDetails_conEmail;
	
	@FindBy(xpath = "//input[@name='password']")
	WebElement userDetails_pwd;
	
	@FindBy(xpath = "//input[@name='confirmPassword']")
	WebElement userDetails_conPwd;
	
	@FindBy(id = "marketingOptions1")
	WebElement userDetails_marketOpn1;
	
	@FindBy(id = "marketingOptions2")
	WebElement userDetails_marketOpn2;
	
	@FindBy(xpath = "//input[@value='Continue']")
	WebElement userDetails_continueBtn;
	
	@FindBy(xpath = "//li[@class='form-progress__step form-progress__step--1 form-progress__step--active']/span[@class='form-progress__step-no']")
	WebElement userDetails_progressBarStepNo;
	
	@FindBy(xpath = "//li[@class='form-progress__step form-progress__step--1 form-progress__step--active']/span[@class='form-progress__step-title']")
	WebElement userDetails_progressBarStepTitle;
	
	@FindBy(xpath="//button[text()='Back to step 1']")
	WebElement compDetails_backToStep1;
	
	@FindBy(xpath = "//div[@class='companyName__input']")
	WebElement compDetails_compname;
	
	@FindBy(xpath="//div[@class='companyName__indicator companyName__dropdown-indicator css-151a3yk']")
	WebElement compDetails_compnameField;
	
	@FindBy(id = "address1")
	WebElement compDetails_addLine1;
	
	@FindBy(id = "address2")
	WebElement compDetails_addLine2;
	
	@FindBy(id = "town")
	WebElement compDetails_town;
	
	@FindBy(id = "county")
	WebElement compDetails_county;
	
	@FindBy(id = "postcode")
	WebElement compDetails_postcode;
	
	@FindBy(xpath = "//select[@id='companyType']")
	WebElement compDetails_compType;
	
	@FindBy(xpath = "//input[@value='Continue']")
	WebElement compDetails_continueBtn;
	
	@FindBy(xpath = "//li[@class='form-progress__step form-progress__step--2 form-progress__step--active']/span[@class='form-progress__step-no']")
	WebElement compDetails_progressBarStepNo;
	
	@FindBy(xpath = "//li[@class='form-progress__step form-progress__step--2 form-progress__step--active']/span[@class='form-progress__step-title']")
	WebElement compDetails_progressBarStepTitle;
	
	@FindBy(xpath="//button[text()='Back to step 2']")
	WebElement servDetails_backToStep2;
	
	@FindBy(xpath = "//select[@id='serviceType']")
	WebElement servDetails_servType;
	
	@FindBy(xpath = "//select[@id='service']")
	WebElement servDetails_service;
	
	@FindBy(id = "serviceIdentifier")
	WebElement servDetails_servIdentifier;
	
	@FindBy(xpath = "//button[text()='Add another service']")
	WebElement servDetails_addAnoServ;
	
	@FindBy(id = "agreePrivacy")
	WebElement servDetails_agreePrivacyChkBx;
	
	@FindBy(xpath = "//input[@id='agreeTerms']")
	WebElement servDetails_agreeTermsChkBx;
	
	@FindBy(xpath = "//input[@value='Submit for approval']")
	public static WebElement servDetails_submitForAppBtn;
	
	@FindBy(xpath="//li[@class='field--checkbox-list__item']/label/input")
	List<WebElement> servDetails_listOfServChkBx;
	
	@FindBy(xpath = "//li[@class='form-progress__step form-progress__step--3 form-progress__step--active']/span[@class='form-progress__step-no']")
	WebElement servDetails_progressBarStepNo;
	
	@FindBy(xpath = "//li[@class='form-progress__step form-progress__step--3 form-progress__step--active']/span[@class='form-progress__step-title']")
	WebElement servDetails_progressBarStepTitle;
	
	@FindBy(xpath="//div[@class='registration-confirmation']/h3")
	WebElement confirmation_headerTxt;
	
	@FindBy(xpath="//a[text()='Return to home page']")
	WebElement confirmation_returnToHomePageBtn;
	
	@FindBy(xpath="//a[text()='Request validation email again']")
	WebElement confirmation_requestMailLink;
	
	@FindBy(xpath = "//li[@class='form-progress__step form-progress__step--4 form-progress__step--active']/span[@class='form-progress__step-no']")
	WebElement confirmation_progressBarStepNo;
	
	@FindBy(xpath = "//li[@class='form-progress__step form-progress__step--4 form-progress__step--active']/span[@class='form-progress__step-title']")
	WebElement confirmation_progressBarStepTitle;
	
	


	
	public RegisterNewUserForm() {
	PageFactory.initElements(driver ,this);
	}

	public void verifyClickRegisterBtn() throws InterruptedException {
		Thread.sleep(1000);
		register_Link.click();
		Thread.sleep(1000);
		String stepNo1 = userDetails_progressBarStepNo.getText();
		System.out.println("ttt" + stepNo1);
		Assert.assertTrue(stepNo1.equals("1"));
		String stepTtle1 = userDetails_progressBarStepTitle.getText();
		System.out.println("eeeee" + stepTtle1);
		Assert.assertTrue(stepTtle1.equals("USER DETAILS"));
	}
	
	public void verify_EnterUserDetails() {
		fname = fake.name().firstName();
		lname = fake.name().lastName();
		userDetails_fn.sendKeys(fname);
		userDetails_ln.sendKeys(lname);
		userDetails_phn.sendKeys("019081234567");
		userDetails_mob.sendKeys("07459611111");
		userDetails_email.sendKeys(fname +"@automation.com");
		userDetails_conEmail.sendKeys(fname +"@automation.com");
		userDetails_pwd.sendKeys("Login@123");
		userDetails_conPwd.sendKeys("Login@123");
	//	userDetails_marketOpn1.click();
	//	userDetails_marketOpn2.click();
		userDetails_continueBtn.click();		
	}
	
	public void verify_EnterNewCompanyDetails() throws InterruptedException {
		String stepNo2 = compDetails_progressBarStepNo.getText();
		Assert.assertTrue(stepNo2.equals("2"));
		String stepTtle2 = compDetails_progressBarStepTitle.getText();
		System.out.println("yyyy" + stepTtle2);
		Assert.assertTrue(stepTtle2.equals("COMPANY DETAILS"));
		//Thread.sleep(3000);
	//	compDetails_backToStep1.click();
	//	Thread.sleep(3000);
	//	userDetails_continueBtn.click();
		Thread.sleep(3000);
	//	Actions actions = new Actions(driver);
		Actions actions = new Actions(driver);
		actions.moveToElement(driver.findElement(By.xpath("/html/body/div/div/main/section/div/div/div/form/div[1]/div/div/div[1]")));
		actions.click();
		actions.sendKeys("SOME DATA");
		Thread.sleep(2000);
	
		
		actions.sendKeys(Keys.TAB);
		actions.build().perform();
	//	driver.findElement(By.xpath("/html/body/div/div/main/section/div/div/div/form/div[1]/div/div/div[1]")).sendKeys(Keys.ENTER);
		
	//	driver.findElement(By.xpath("/html/body/div/div/main/section/div/div/div/form/div[1]/div/div/div[1]")).click();
	//	driver.findElement(By.xpath("/html/body/div/div/main/section/div/div/div/form/div[1]/div/div/div[1]")).sendKeys(fname+"Comp");
		//div[@class='companyName__placeholder css-b99yo3' and text()='Company Name']
//	actions.moveToElement(driver.findElement(By.cssSelector(".companyName__value-container"))).click();
	//	actions.moveToElement(driver.findElement(By.xpath("div[@class='companyName__placeholder css-b99yo3' and text()='Company Name']"))).click();
		Thread.sleep(2000);
	//	actions.moveToElement(driver.findElement(By.xpath("div[@class='companyName__placeholder css-b99yo3' and text()='Company Name']"))).sendKeys(fname+"Comp");
	//	actions.moveToElement(driver.findElement(By.cssSelector(".companyName__value-container"))).sendKeys(fname+"Comp");
	//	Thread.sleep(5000);
	//	actions.moveToElement(driver.findElement(By.cssSelector(".companyName__value-container"))).sendKeys(Keys.TAB);
	//	Thread.sleep(4000);
	//	actions.moveToElement(driver.findElement(By.cssSelector(".companyName__value-container"))).sendKeys(Keys.TAB);
	//	Thread.sleep(3000);
	//	actions.build().perform();
	//	Thread.sleep(3000);
		compDetails_addLine1.sendKeys("01");
	//	compDetails_addLine2.sendKeys("A steet");
	//	compDetails_town.sendKeys("Northampton");
	//	compDetails_county.sendKeys("Northamptonshire");
	//	compDetails_postcode.sendKeys("NN4 0FG");
	//	Select slct1 = new Select(compDetails_compType);
	//	slct1.selectByVisibleText("Dental");
	//	compDetails_continueBtn.click();
		
		
	}
	
	public void verify_EnterExitingCompanyDetails() throws InterruptedException {
		String stepNo2 = compDetails_progressBarStepNo.getText();
		Assert.assertTrue(stepNo2.equals("2"));
		String stepTtle2 = compDetails_progressBarStepTitle.getText();
		Assert.assertTrue(stepTtle2.equals("COMPANY DETAILS"));
		Actions actions = new Actions(driver);
		actions.moveToElement(driver.findElement(By.cssSelector(".companyName__value-container"))).click();
		Thread.sleep(3000);
	//	try {
		actions.moveToElement(driver.findElement(By.cssSelector(".companyName__value-container"))).sendKeys("liz's client");
	//	}catch(Exception e) {
	//		actions.moveToElement(driver.findElement(By.cssSelector(".companyName__value-container"))).sendKeys("KAJIMA TEST CLIENT");
	//	}
		Thread.sleep(3000);
		actions.moveToElement(driver.findElement(By.cssSelector(".companyName__value-container"))).sendKeys(Keys.TAB);
		Thread.sleep(2000);
		actions.moveToElement(driver.findElement(By.cssSelector(".companyName__value-container"))).sendKeys(Keys.ENTER);
		Thread.sleep(5000);
		actions.build().perform();
		Thread.sleep(3000);

		
		compDetails_continueBtn.click();	
	}
	
	public void verify_addServices() throws InterruptedException {
		String stepNo3 = servDetails_progressBarStepNo.getText();
		Assert.assertTrue(stepNo3.equals("3"));
		String stepTtle3 = servDetails_progressBarStepTitle.getText();
		Assert.assertTrue(stepTtle3.equals("SERVICE DETAILS"));
		Thread.sleep(2000);
		servDetails_backToStep2.click();
		Thread.sleep(2000);
		compDetails_continueBtn.click();
		Thread.sleep(2000);
		
		Select slct1 = new Select(servDetails_servType);
		slct1.selectByVisibleText("Clinical");
		
		Select slct2 = new Select(servDetails_service);
		slct2.selectByVisibleText("Angiography");
		
		servDetails_servIdentifier.sendKeys(fname+ " iden");
		servDetails_addAnoServ.click();
		
		slct1.selectByVisibleText("Non-Clinical");
		slct2.selectByVisibleText("Activity");
		
		servDetails_servIdentifier.sendKeys(lname+ " iden ");
		servDetails_agreePrivacyChkBx.click();
		servDetails_agreeTermsChkBx.click();
		servDetails_submitForAppBtn.click();
		
	}
	
	public void verify_addLargeVolOfServices() {
		String stepNo3 = servDetails_progressBarStepNo.getText();
		Assert.assertTrue(stepNo3.equals("3"));
		String stepTtle3 = servDetails_progressBarStepTitle.getText();
		Assert.assertTrue(stepTtle3.equals("SERVICE DETAILS"));
		
		
		for(int i = 1; i<=80; i++) {
		
		Faker fake = new Faker();
		String iden = fake.funnyName().name();
		
		Select slct1 = new Select(servDetails_servType);
		slct1.selectByVisibleText("Clinical");
		
		Select slct2 = new Select(servDetails_service);
		slct2.selectByVisibleText("Angiography");
		
		servDetails_servIdentifier.sendKeys(iden+ " Cliiden"+i);
		servDetails_addAnoServ.click();
		
		slct1.selectByVisibleText("Non-Clinical");
		slct2.selectByVisibleText("Activity");
		
		servDetails_servIdentifier.sendKeys(iden+ " NonCliiden"+i);
		servDetails_addAnoServ.click();
		}
		servDetails_agreePrivacyChkBx.click();
		servDetails_agreeTermsChkBx.click();
		servDetails_submitForAppBtn.click();
		
	}
	
	public void verify_selectServices() {
		String stepNo3 = servDetails_progressBarStepNo.getText();
		Assert.assertTrue(stepNo3.equals("3"));
		String stepTtle3 = servDetails_progressBarStepTitle.getText();
		Assert.assertTrue(stepTtle3.equals("SERVICE DETAILS"));
		
		int noOfServ = servDetails_listOfServChkBx.size();
		if(noOfServ>0) {
			for(int i=1;i<=(noOfServ-(noOfServ-1));i++){
				driver.findElement(By.xpath("//li["+i+"][@class='field--checkbox-list__item']/label/input")).click();
				servDetails_submitForAppBtn.click();
			}
		}else {
			servDetails_submitForAppBtn.click();
		}
	}
	
	public void verify_confirmationScrn() {
		String stepNo4 = confirmation_progressBarStepNo.getText();
		Assert.assertTrue(stepNo4.equals("4"));
		String stepTtle4 = confirmation_progressBarStepTitle.getText();
		Assert.assertTrue(stepTtle4.equals("FOR REVIEW"));
		System.out.println("HHHH");
		
		String txt = confirmation_headerTxt.getText();
		Assert.assertTrue(txt.contains("Thanks for registering"));
	//	if(confirmation_requestMailLink.isDisplayed()) {
		try {
			confirmation_requestMailLink.click();	
			String str = driver.findElement(By.xpath("//p[@class='registration-confirmation__actions']/p")).getText();
			System.out.println("The message displays is " + str);
			confirmation_returnToHomePageBtn.click();
			String str2 =  driver.getTitle();
			Assert.assertTrue(str2.contains("Home page"));
			System.out.println("if - you are on " + str2);
			}	
			catch(Exception e){
				confirmation_returnToHomePageBtn.click();
				String str2 =  driver.getTitle();
				Assert.assertTrue(str2.contains("Home page"));
				System.out.println("else - you are on " + str2);
			}
		}
	}

