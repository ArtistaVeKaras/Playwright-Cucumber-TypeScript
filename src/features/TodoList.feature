Feature: Add a new TODO item to the TODO page

    # This background is problematic because of the stiwch tab function
    # Background: Navigate to the WebdriverUniversity
    #     Given I navigate to webdriver university homepage
    #     When I click on the TO DO LIST button
    #     And I switch to the browser Tab

    Background: Navigate to To Do List Page
        Given I navigate to the TODOLIST homepage

    @todos
    Scenario: Add a new TODO item
        And I type a new TODO item into the input field
        And I press the Enter key
        Then I should see the new TODO item added to the list of items