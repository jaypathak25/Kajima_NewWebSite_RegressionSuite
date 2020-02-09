package kajima.newnhswebsite.runner;



import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		
		
		features = "C:\\Users\\User\\Desktop\\Automation\\"
				+ "Workspace\\Kajima_NewNHSWebSite_BDD_Regression\\"
				+ "src\\test\\java\\kajima\\newnhswebsite\\features", //the path of the feature files
		
		
		glue = {"kajima.newnhswebsite.stepDefinition"},
		
		format = {"pretty","html:kajima_Regression_Report.html"}, //to generate different types of reporting
		
		monochrome = true, //display the console output in a proper readable format
		
		strict = true, //it will check if any step is not defined in step definition file
		
		dryRun = false //to check the mapping is proper between feature file and step def file
		
	//   tags = {"@Regression}
)

public class TestRunner extends AbstractTestNGCucumberTests {
		

}
