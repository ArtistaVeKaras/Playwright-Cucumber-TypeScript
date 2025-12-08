Feature: Login to Webdriver University Page

    Background: Navigate to the WebdriverUniversity
        Given I navigate to webdriveruniversity login page

    # Harcoded valid login
    Scenario: Valid Login Form submission
        And I type a valid username
        And I type a valid password
        And I click on the login button
        Then I should be presented with a successful login message

    # Parameterized login
    @smoke
    Scenario Outline: Valid and Invalid login
        And I type a username '<username>'
        And I type a password '<password>'
        And I wait for 2 seconds
        And I click on the login button
        Then I should be presented with a login message '<message>'

        Examples:
            | username     | password     | message              |
            | webdriver    | webdriver123 | validation succeeded |
            | invalid_user | valid_pass   | validation failed    |