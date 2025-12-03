Feature: WebdriverUniversity.com - Contact us Page

    Scenario: Valid Contact Us Form submis
        Given I navigate to webdriveruniversity hompepage
        When I click on the Contact Us button
        And I switch to the broswer Tab
        And I type a valid first name
        And I type a valid last name
        And I type a valid email address
        And I type a comment into the comment text area
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Invalid Contact Us Form submis
        Given I navigate to webdriveruniversity hompepage
        When I click on the Contact Us button
        And I switch to the broswer Tab
        And I type a valid first name
        And I type a valid last name
        # And I type a valid email address
        And I type a comment into the comment text area
        And I click on the submit button
        Then I should be presented with a unsuccessful contact us submission message