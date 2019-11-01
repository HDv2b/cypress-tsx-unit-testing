/// <reference types="cypress" />

import React from 'react';

import TsGreeting from '../../../client/components/TsGreeting';

describe('cypress-react-unit-test', () => {
  it('shows greeting', () => {
    cy.mount(<TsGreeting />);
    cy.contains('Hello World');
  });

  it('changes greeting on click', () => {
    cy.mount(<TsGreeting />);
    cy.get('button').click();
    cy.contains('Bonjour World');
  });
});
