Feature: Welcome Message

  Scenario: Display welcome message after submitting a name
    Given I am on the home page
    When I enter "John" in the input field labeled "Enter your name"
    And I click the submit button
    Then I should see a welcome message saying "Welcome John"
