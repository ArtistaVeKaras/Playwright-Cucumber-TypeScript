Feature: WebdriverUniversity.com - Contact us Page

    Background: Navigate to the WebdriverUniversity
        Given I navigate to webdriveruniversity hompepage
        When I click on the Contact Us button
        And I switch to the broswer Tab

    # Scenario: Valid Contact Us Form submission
    #     And I type a valid first name
    #     And I type a valid last name
    #     And I type a valid email address
    #     And I type a comment into the comment text area
    #     And I click on the submit button
    #     Then I should be presented with a successful contact us submission message

    # Scenario: Invalid Contact Us Form submission
    #     And I type a valid first name
    #     And I type a valid last name
    #     # And I type a valid email address
    #     And I type a comment into the comment text area
    #     And I click on the submit button
    #     Then I should be presented with a unsuccessful contact us submission message


    # Scenario: Valid Contact Us Form submisson - Using Specific Data
    #     And I type a Specific first name "John"
    #     And I type a Specific last name "Doe"
    #     And I type a Specific email address "jonh.doe@hotmail.com"
    #     And I type a Specific text "Hello world" and a number 2 within the comment input field
    #     And I click on the submit button
    #     Then I should be presented with a successful contact us submission message

        Scenario: Valid Contact Us Form submission - With faker data
        And I type a random first name
        And I type a randow last name
        And I type a random email address
        And I type a random comment into the comment text area
        And I click on the submit button
        Then I should be presented with a successful contact us submission message