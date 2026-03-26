TODO: Add a new test for adding multiple TODO items and verifying the list updates correctly.
The scenario should use a table to define multiple TODO items and their expected positions in the list.
Feature: TODO List Management

  Scenario: Adding multiple TODO items and verifying the list updates correctly
    Given I am on the TODO list page
    When I add the following TODO items:
      | Item            |
      | Buy groceries   |
      | Call mom        |
      | Finish report   |
    Then I should see the new TODO items added to the list of items in the correct order

TODO: Fix the issue with switchTab() function