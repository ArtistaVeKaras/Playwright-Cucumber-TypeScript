Feature: Login to Webdriver University Page

    Background: Navigate to the WebdriverUniversity
        Given I navigate to webdriveruniversity hompepage
        When I click on the Login Portal button
        And I switch to the broswer Tab

    Scenario: Valid Login Form submission
        And I type a valid username
        And I type a valid password
        And I click on the login button
        Then I should be presented with a successful login message

    Scenario Outline: Valid and Invalid login
        And I type a username '<username>'
        And I type a password '<password>'
        And I click on the login button
        Then I should be presented with a login message '<message>'

        Examples:
            | username     | password     | message              |
            | webdriver    | webdriver123 | validation succeeded |
            | invalid_user | valid_pass   | validation failed    |