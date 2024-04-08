Feature: Specify Number of Events

  Scenario: When user hasn’t specified a number 32 events are shown by default
    Given I am on the main page
    When I have not specified a number of events to view
    Then 32 events should be displayed by default

  Scenario: User can change the number of events displayed
    Given I am on the main page
    When I specify a number of events to be displayed
    Then that number of events should be displayed on the page
