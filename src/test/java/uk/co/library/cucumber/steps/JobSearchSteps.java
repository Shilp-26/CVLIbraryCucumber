package uk.co.library.cucumber.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.co.library.pages.HomePage;
import uk.co.library.pages.ResultsPage;

public class JobSearchSteps {
    @Given("^User is on Homepage$")
    public void userIsOnHomepage() {
    }

    @When("^User enters job title \"([^\"]*)\"$")
    public void userEntersJobTitle(String jobTitle) {
        new HomePage().enterJobTitle(jobTitle);

    }

    @And("^User enters location \"([^\"]*)\"$")
    public void userEntersLocation(String location) {
        new HomePage().enterLocation(location);

    }

    @And("^User enters distance \"([^\"]*)\"$")
    public void userEntersDistance(String distance) {
        new HomePage().selectDistance(distance);

    }

    @And("^User clicks on more search options link$")
    public void userClicksOnMoreSearchOptionsLink() {
        new HomePage().clickOnMoreSearchOptionsLink();
    }

    @And("^User enters min salary \"([^\"]*)\"$")
    public void userEntersMinSalary(String salaryMin) {
        new HomePage().enterMinSalary(salaryMin);
    }

    @And("^User enters max salary \"([^\"]*)\"$")
    public void userEntersMaxSalary(String salaryMax) {
        new HomePage().enterMaxSalary(salaryMax);
    }

    @And("^User selects salary type \"([^\"]*)\"$")
    public void userSelectsSalaryType(String salaryType) {
        new HomePage().selectSalaryType(salaryType);
    }

    @And("^User selects job type \"([^\"]*)\"$")
    public void userSelectsJobType(String jobType) {
        new HomePage().selectJobType(jobType);
    }

    @And("^User clicks on find jobs button$")
    public void userClicksOnFindJobsButton() {
        new HomePage().clickOnFindJobsBtn();
    }

    @Then("^User can see the results \"([^\"]*)\"$")
    public void userCanSeeTheResults(String message) {
      new ResultsPage().verifyTheResults(message);

    }

    @And("^User clicks on accept all cookies$")
    public void userClicksOnAcceptAllCookies() {
        try {
            new HomePage().acceptIFrameAlert();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
