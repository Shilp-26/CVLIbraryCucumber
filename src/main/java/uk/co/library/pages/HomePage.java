package uk.co.library.pages;

import com.aventstack.extentreports.Status;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;
import uk.co.library.utility.Utility;

import javax.xml.ws.wsaddressing.W3CEndpointReferenceBuilder;

public class HomePage extends Utility {

//    public HomePage() {
//        PageFactory.initElements(driver, this);
//    }

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());


    @CacheLookup
    @FindBy(id = "keywords")
    WebElement jobTitle;

    @CacheLookup
    @FindBy(id = "location")
    WebElement location;

    @CacheLookup
    @FindBy(id = "distance")
    WebElement distanceDropDown;

    @CacheLookup
    @FindBy(id = "toggle-hp-search")
    WebElement moreSearchOptionsLink;

   // @CacheLookup
    @FindBy(id = "salarymin")
    WebElement salaryMin;

    @CacheLookup
    @FindBy(id = "salarymax")
    WebElement salaryMax;

    @CacheLookup
    @FindBy(id = "salarytype")
    WebElement salaryTypeDropDown;

    @CacheLookup
    @FindBy(id = "tempperm")
    WebElement jobTypeDropDown;

    @CacheLookup
    @FindBy(id = "hp-search-btn")
    WebElement findJobsBtn;

    @CacheLookup
    @FindBy(xpath = "//button[@id='save']")
    WebElement acceptAllBtn;


    public void acceptIFrameAlert() throws InterruptedException {
        Thread.sleep(2000);
        driver.switchTo().frame("gdpr-consent-notice");
        clickOnElement(acceptAllBtn);
        log.info("Accepting all cookies : " + acceptAllBtn.toString());

    }

    public void enterJobTitle(String title) {
        sendTextToElement(jobTitle, title);
        log.info("Entering job title : " + title);

    }

    public void enterLocation(String loc) {
        sendTextToElement(location, loc);
        log.info("Entering location : " + loc);

    }

    public void selectDistance(String distance) {
        selectByVisibleTextFromDropDown(distanceDropDown, distance);
        log.info("Selecting distance : " + distance);
    }

    public void clickOnMoreSearchOptionsLink() {
        clickOnElement(moreSearchOptionsLink);
        log.info("Clicking on more search options link : " + moreSearchOptionsLink.toString());

    }

    public void enterMinSalary(String minSalary) {
        sendTextToElement(salaryMin, minSalary);
        log.info("Entering min salary : " + minSalary);
    }

    public void enterMaxSalary(String maxSalary) {
        sendTextToElement(salaryMax, maxSalary);
        log.info("Entering max salary : " + maxSalary);

    }

    public void selectJobType(String jobType) {
        selectByVisibleTextFromDropDown(jobTypeDropDown, jobType);
        log.info("Selecting job type : " + jobType);

    }

    public void selectSalaryType(String salaryType) {
        selectByVisibleTextFromDropDown(salaryTypeDropDown, salaryType);
        log.info("Selecting salary type : " + salaryType);
    }

    public void clickOnFindJobsBtn() {
        clickOnElement(findJobsBtn);
        log.info("Clicking on find jobs button : " + findJobsBtn.toString());

    }
}
