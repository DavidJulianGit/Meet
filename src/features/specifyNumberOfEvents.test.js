import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

   test('When user hasn’t specified a number 32 events are shown by default', ({ given, when, then }) => {
      given('I am on the main page', () => {

      });

      when('I have not specified a number of events to view', () => {

      });

      then(/^(\d+) events should be displayed by default$/, (arg0) => {

      });
   });

   test('User can change the number of events displayed', ({ given, when, then }) => {
      given('I am on the main page', () => {

      });

      when('I specify a number of events to be displayed', () => {

      });

      then('that number of events should be displayed on the page', () => {

      });
   });
});