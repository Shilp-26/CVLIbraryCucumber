Feature: Job Search Test
  As a user I want to verify the job search functionality is working successfully


  Scenario Outline: Verify the job search results
    Given User is on Homepage
    And User clicks on accept all cookies
    When User enters job title "<jobTitle>"
    And User enters location "<location>"
    And User enters distance "<distance>"
    And User clicks on more search options link
    And User enters min salary "<salaryMin>"
    And User enters max salary "<salaryMax>"
    And User selects salary type "<salaryType>"
    And User selects job type "<jobType>"
    And User clicks on find jobs button
    Then User can see the results "<resultMsg>"

    Examples:
      | jobTitle           | location               | distance       | salaryMin | salaryMax | salaryType | jobType   | resultMsg                                               |
      | Tester             | Harrow                 | up to 5 miles  | 30000     | 500000    | Per annum  | Permanent | Permanent Tester jobs in Harrow on the Hill             |
      | Scientist          | Harrow                 | up to 15 miles | 30000     | 500000    | Per annum  | Contract  | Contract Scientist jobs in Harrow on the Hill           |
      | Pharmaceutical     | Cambridgeshire         | up to 7 miles  | 30000     | 600000    | Per annum  | Any       | Pharmaceutical jobs in Cambridgeshire                   |
      | Retail Manager     | West London            | up to 25 miles | 30000     | 500000    | Per annum  | Permanent | Permanent Retail Manager jobs in West London            |
      | Automation Tester  | HA1 1AB                | up to 10 miles | 300       | 400       | Per day    | Contract  | Contract Automation Tester jobs in HA1 1AB              |
      | Research Scientist | Newcastle upon Tyne    | up to 10 miles | 400       | 500       | Per day    | Contract  | Contract Research Scientist jobs in Newcastle upon Tyne |
      | Tester             | Watford, Hertfordshire | up to 5 miles  | 40000     | 60000     | Per annum  | Contract  | Contract Tester jobs in Watford                         |