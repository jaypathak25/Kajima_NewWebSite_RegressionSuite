package kajima.newnhswebsite.base;


import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.FindBy;

import kajima.newnhswebsite.pom_pages.Basket;
import kajima.newnhswebsite.pom_pages.BookingWidget;
import kajima.newnhswebsite.pom_pages.HomePage;
import kajima.newnhswebsite.pom_pages.LoginPage;
import kajima.newnhswebsite.pom_pages.SearchResultPage;
import kajima.newnhswebsite.utils.TestUtils;


public class TestBase {
	
	
	public static WebDriver driver;
	public static Properties prop;


	//Created a constructor of TestBase class to initiate the variable of property file
	
	 public TestBase() {
		 	  
	  try { 
		  prop = new Properties (); 
		  FileInputStream ip = new FileInputStream("C:\\Users\\User\\Desktop\\Automation\\Workspace\\Kajima_NewNHSWebSite_BDD_Regression\\"
		  		+ "src\\main\\java\\kajima\\newnhswebsite\\config\\config.properties");//Prop file path
		  prop.load(ip);
		  } 
	  catch (FileNotFoundException e) 
	  { e.printStackTrace(); }
	  catch (IOException e) 
	  { e.printStackTrace(); } 
	  }
	 
	//Created method to write all common steps
   public static void intialisation (){
	   TestUtils testutils = new TestUtils();
	String browserName = prop.getProperty("browser");
	System.out.print("you are using "+browserName+" browser");
    if (browserName.equals("chrome")) {
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\User\\Desktop\\Automation\\Jarfiles\\chromedriver.exe");
		driver = new ChromeDriver();
		
		 }else if (browserName.equals("firefox")) {
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\User\\Desktop\\Automation\\Jarfiles\\geckodriver.exe"); 
		  driver = new FirefoxDriver();
		  }
  
	driver.manage().window().maximize();
	driver.manage().deleteAllCookies();
	driver.manage().timeouts().pageLoadTimeout(TestUtils.Page_Load_Time, TimeUnit.SECONDS); 
	//Page_Load_Time and Implicit wait times are defined in .properties file
	driver.manage().timeouts().implicitlyWait(TestUtils.Implicit_Time_Out, TimeUnit.SECONDS);
	driver.get(prop.getProperty("url"));
	}
   

   

   
   
  }

