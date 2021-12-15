$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("JobSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search Test",
  "description": "As a user I want to verify the job search functionality is working successfully",
  "id": "job-search-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify the job search results",
  "description": "",
  "id": "job-search-test;verify-the-job-search-results",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on accept all cookies",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters job title \"\u003cjobTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters min salary \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters max salary \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User selects salary type \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User selects job type \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User can see the results \"\u003cresultMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "job-search-test;verify-the-job-search-results;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "resultMsg"
      ],
      "line": 19,
      "id": "job-search-test;verify-the-job-search-results;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 20,
      "id": "job-search-test;verify-the-job-search-results;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13555059500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify the job search results",
  "description": "",
  "id": "job-search-test;verify-the-job-search-results;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on accept all cookies",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters min salary \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters max salary \"500000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User selects salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User selects job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User can see the results \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 270407400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.userClicksOnAcceptAllCookies()"
});
formatter.result({
  "duration": 23494530500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 23
    }
  ],
  "location": "JobSearchSteps.userEntersJobTitle(String)"
});
formatter.result({
  "duration": 1262139500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.userEntersLocation(String)"
});
formatter.result({
  "duration": 444298200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.userEntersDistance(String)"
});
formatter.result({
  "duration": 576571500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.userClicksOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 292571600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.userEntersMinSalary(String)"
});
formatter.result({
  "duration": 373617800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.userEntersMaxSalary(String)"
});
formatter.result({
  "duration": 175743100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 26
    }
  ],
  "location": "JobSearchSteps.userSelectsSalaryType(String)"
});
formatter.result({
  "duration": 123576600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 23
    }
  ],
  "location": "JobSearchSteps.userSelectsJobType(String)"
});
formatter.result({
  "duration": 194425800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.userClicksOnFindJobsButton()"
});
formatter.result({
  "duration": 390481100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 26
    }
  ],
  "location": "JobSearchSteps.userCanSeeTheResults(String)"
});
formatter.result({
  "duration": 27697557800,
  "status": "passed"
});
formatter.after({
  "duration": 2202739400,
  "status": "passed"
});
});