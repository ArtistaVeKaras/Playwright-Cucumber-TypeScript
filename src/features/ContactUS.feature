@regression
Feature: WebdriverUniversity.com - Contact us Page

    # Background: Navigate to the WebdriverUniversity
    #     Given I navigate to webdriveruniversity homepage
    #     When I click on the Contact Us button
    #     And I switch to the browser Tab

    Background: Navigate to the contact us page
        Given I navigate to the contactUs homepage

    Scenario: Valid Contact Us Form submission
        And I type a valid first name
        And I type a valid last name
        And I type a valid email address
        And I type a comment into the comment text area
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Valid Contact Us Form submission - Using Specific Data
        And I type a Specific first name "John"
        And I type a Specific last name "Doe"
        And I type a Specific email address "jonh.doe@hotmail.com"
        And I type a Specific text "Hello world" and a number 2 within the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    @contact-us
    Scenario: Valid Contact Us Form submission - With faker data
        And I type a random first name
        And I type a random last name
        And I type a random email address
        And I type a random comment into the comment text area
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    @smoke @ignore
    Scenario Outline:
        And I type a firstName <firstname> and a lastName <lastName>
        And I type a email address '<emailaddress>' and a comment '<comment>'
        And I click on the submit button
        Then I should be presented with a header text '<message>'

        Examples:
            | firstname | lastName | emailaddress         | comment      | message                      |
            | Alice     | Smith    | this_email@gmail.com | Hello there  | Thank You for your Message!  |
            | Charlie   | Brown    | invalid_email.com    | Test comment | Error: Invalid email address |
            | Bob       | Pully    | invalid_email.com    | Test comment | Error: Invalid email address |
