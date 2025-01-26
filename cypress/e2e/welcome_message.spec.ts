/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the home page', () => {
  cy.visit('/');
});

When(
  'I enter {string} in the input field labeled "Enter your name"',
  (name: string) => {
    cy.get('input[placeholder="Enter your name"]').type(name);
  }
);

When('I click the submit button', () => {
  cy.get('button').contains('Submit').click();
});

Then('I should see a welcome message saying {string}', (message: string) => {
  cy.get('p').should('contain.text', message);
});
