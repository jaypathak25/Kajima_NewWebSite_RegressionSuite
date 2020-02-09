package kajima.newnhswebsite.utils;

import java.io.File;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import kajima.newnhswebsite.base.TestBase;

public class TestUtils extends TestBase {
	
public static long Page_Load_Time = 30;
	
	public static long Implicit_Time_Out = 5;
	
	
	 public static void failedTestScrnShots(String testMethodName){
		 
	 //Convert web driver object to TakeScreenshot(interface) that means we are
	 //type casting driver to interface TakesScreenshot //Call getScreenshotAsmethod to create image file 
		 
	 File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE); 
	 String currentDir = System.getProperty("user.dir"); 
	 try {
		FileUtils.copyFile(scrFile, new File(currentDir + "/Failed_Test_Screenshots/" + testMethodName + ".png"));
	} catch (IOException e) {
		e.printStackTrace();
	}
}

	 public static void verifyHomePagelinksnImages() throws MalformedURLException,IOException {
		 
		List<WebElement> linklist = driver.findElements(By.tagName("a"));
		List<WebElement> imglist = driver.findElements(By.tagName("img"));
        List<WebElement> activeLinks;
		 
	 //Get all the list of links and images using above webelements captured
	 linklist.addAll(imglist); 
	 activeLinks = new ArrayList<WebElement>();
	  
	  //Iterate linklist : exclude all the links/Images which does'nt have any href attributes 
	 for(int i=0;i<linklist.size();i++) {
	 if(linklist.get(i).getAttribute("href")!=null && (!linklist.get(i).getAttribute("href").contains("javascript"))) 
	 {
	 activeLinks.add(linklist.get(i));
	 } 
	 // get the size of active link lists 
	 }
	  
	  //check the href URL, with http connection api //200-OK,404-Not,Found,500-internal error,400-bad request
	  
	  for (int j= 0;j<activeLinks.size();j++) {
	 
	  HttpURLConnection connection = (HttpURLConnection)new
	  URL(activeLinks.get(j).getAttribute("href")).openConnection();
	  connection.connect(); String response = connection.getResponseMessage();
	  connection.disconnect();
	  System.out.println(activeLinks.get(j).getAttribute("href") + "---->" + response ); 
	  } 
	  }
	 
	public static void clickLinksnImagesnBack() 
		{
			List<WebElement> linksize = driver.findElements(By.tagName("a")); 
			int linksCount = linksize.size();
			System.out.println("Total no of links Available: "+linksCount);
			
			String[] links= new String[linksCount];
		    
			// print all the links from webpage 
			for(int i=0;i<linksCount;i++)
			{
				
			links[i] = linksize.get(i).getAttribute("href");
			System.out.println("{}{}{}{}{}{}" + links[i]);
			} 
			// navigate to each Link on the webpage
			for(int i=0;i<linksCount;i++)
			{
			driver.navigate().to(links[i]);;
			driver.navigate().back();
			}

		}
}
