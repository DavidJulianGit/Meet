# Meet - events app

This app allows users to search for a city and get a list of events hosted in that city.

## Features

### Feature 1: Filter Events By City

#### User Strory

-  As a user,
   I should be able to filter events by city
   So that I can see a list of events taking place in that city.

#### Gherkin's

-  **Scenario**: When the user hasn't searched for a city, show upcoming events from all cities

   -  Given I am on the main page and have not searched for any city
   -  When I look at the list of events
   -  Then I should see events from all cities

-  **Scenario**: User should see a list of suggestions when they search for a city

   -  Given I am on the main page
   -  When I start typing in the search box to search for a city
   -  Then I should see a list of city names that match my input as suggestions

-  **Scenario**: User can select a city from the suggested list
   -  Given the list of suggested cities is displayed
   -  When I click on a city name from the suggestions
   -  Then I should see events only from that selected city

### Feature 2: Show/Hide Event Details

#### User Strory

-  As a user,
   I should be able to expand an event to see more details and collapse it to hide those details,
   So that I can easily access the information about the event when I need it and keep the interface clean when I don't.

#### Gherkin's

-  **Scenario**: An event element is collapsed by default

   -  Given I am on the main page
   -  When I look at the list of events
   -  Then each event should be collapsed showing only the summary

-  **Scenario**: User can expand an event to see details

   -  Given an event is collapsed
   -  When I click on the event's "show details" button
   -  Then the event should expand to show detailed information

-  **Scenario**: User can collapse an event to hide details
   -  Given an event is expanded
   -  When I click on the event's "hide details" button
   -  Then the event should collapse hiding the detailed information

### Feature 3: Specify Number of Events

#### User Strory

-  As a user,
   I should be able to specify the number of events I want to view,
   So that I can control the amount of information displayed on the screen, making it easier to browse through events of interest.

#### Gherkin's

-  **Scenario**: When user hasn’t specified a number 32 events are shown by default

   -  Given I am on the main page
   -  When I have not specified a number of events to view
   -  Then 32 events should be displayed by default

-  **Scenario**: User can change the number of events displayed
   -  Given I am on the main page
   -  When I specify a number of events to be displayed
   -  Then that number of events should be displayed on the page

### Feature 4: Use the App When Offline

#### User Strory

-  As a user,
   I should be able to view events and use the app even when I'm offline,
   So that I can access event information without an internet connection, ensuring I have the information I need at any time.

#### Gherkin's

-  **Scenario**: Show cached data when there’s no internet connection

   -  Given I have previously visited the page and loaded event data
   -  When I access the app without an internet connection
   -  Then I should see the previously loaded event data

-  **Scenario**: Show error when user changes search settings (city, number of events)
   -  Given I am accessing the app without an internet connection
   -  When I try to change the search settings like city or number of events
   -  Then I should see an error message indicating the action cannot be completed offline

### Feature 5: Add an App Shortcut to the Home Screen

#### User Strory

-  As a user,
   I should be able to add a shortcut of the app to my device's home screen,
   So that I can quickly access the app without having to navigate through my browser, making it feel more like a native app.

#### Gherkin's

-  **Scenario**: User can install the meet app as a shortcut on their device home screen
   -  Given I am using a compatible browser on my device
   -  When I choose to add the app to my home screen
   -  Then the app should be added as a shortcut on my home screen for easier access

### Feature 6: Display Charts Visualizing Event Details

#### User Strory

-  As a user,
   I should be able to see charts visualizing details about the events, such as the number of upcoming events in each city,
   So that I can easily understand the distribution of events across different locations and make informed decisions on which events to attend.

#### Gherkin's

-  **Scenario**: Show a chart with the number of upcoming events in each city
   -  Given I am on the main page
   -  When I navigate to the chart section
   -  Then I should see a chart displaying the number of upcoming events in each city

## Technology - Serverless Functions

This app is useing serverless functions (AWS Lambda) for obtaining the access token from the authorization server via mulitple steps.

1. User opens apps ans visits events page.
2. Serverless functions on AWS Lambda requests OAuth consent screen from Google OAuth provider.
3. Consent screen link is returned to the serverless function.
4. User is redirected to the Google login page and asked for consent.
5. User logs in and grants consent.
6. Authorization code is granted by Google OAuth and sent to the serverless function.
7. Serverless function requests access token, authorization code included in request.
8. Access token is granted and received by serverless function.

Also, serverless functions are used for reading events from the Google Calendar API:

1. Serverless function carries out users request to get events (access token included in request).
2. Google Calendar API grants access and returns events to the serverless function.
3. Serverless function returns events to React app / the user.
