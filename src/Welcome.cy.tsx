/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress/react';
import Welcome from './Welcome'; // Adjusted to import from the same folder

describe('Welcome Component', () => {
  beforeEach(() => {
    // Mount the component before each test
    mount(<Welcome />);
  });

  it('should display the input field and submit button', () => {
    cy.get("input[placeholder='Enter your name']").should('exist');
    cy.get('button').contains('Submit').should('exist');
  });

  it('should display a welcome message after submitting a name', () => {
    // Type a name into the input field
    cy.get("input[placeholder='Enter your name']").type('Ryan');

    // Click the submit button
    cy.get('button').contains('Submit').click();

    // Check that the welcome message is displayed
    cy.get('p').should('contain.text', 'Welcome Ryan');
  });

  it('should not display a welcome message before submitting', () => {
    cy.get('p').should('not.exist');
  });
});
