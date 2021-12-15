package uk.co.library.pages;

import com.aventstack.extentreports.Status;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

import uk.co.library.utility.Utility;



public class ResultsPage extends Utility {

//    public ResultsPage() {
//        PageFactory.initElements(driver, this);
//    }

    private static final Logger log = LogManager.getLogger(ResultsPage.class.getName());

    @CacheLookup
    @FindBy(xpath = "//div[@class='search-header__title']")
    WebElement resultsTxt;

    public void verifyTheResults(String expMsg){
        verifyThatTextIsDisplayed(resultsTxt,expMsg);
        log.info("Verifying results : " + resultsTxt.toString());
    }
}
