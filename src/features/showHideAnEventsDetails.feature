Feature: Show/Hide Event Details

   Scenario: An event element is collapsed by default
      Given I am on the main page
      When I look at the list of events
      Then each event should be collapsed showing only the summary

   Scenario: User can expand an event to see details
      Given an event is collapsed
      When I click on the event's "show details" button
      Then the event should expand to show detailed information

   Scenario: User can collapse an event to hide details
      Given an event is expanded
      When I click on the event's "hide details" button
      Then the event should collapse hiding the detailed information
