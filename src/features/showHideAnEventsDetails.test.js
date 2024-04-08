import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
   test('An event element is collapsed by default', ({ given, when, then }) => {
      given('I am on the main page', () => {

      });

      when('I look at the list of events', () => {

      });

      then('each event should be collapsed showing only the summary', () => {

      });
   });

   test('User can expand an event to see details', ({ given, when, then }) => {
      given('an event is collapsed', () => {

      });

      when(/^I click on the event's "(.*)" button$/, (arg0) => {

      });

      then('the event should expand to show detailed information', () => {

      });
   });

   test('User can collapse an event to hide details', ({ given, when, then }) => {
      given('an event is expanded', () => {

      });

      when(/^I click on the event's "(.*)" button$/, (arg0) => {

      });

      then('the event should collapse hiding the detailed information', () => {

      });
   });
});
