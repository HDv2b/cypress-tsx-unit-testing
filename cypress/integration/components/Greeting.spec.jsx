/// <reference types="cypress" />

import React from 'react';

import Greeting from '../../../client/components/Greeting';

describe('cypress-react-unit-test', () => {
  it('shows greeting', () => {
    cy.mount(<Greeting />);
    cy.contains('Hello World');
  });

  it('changes greeting on click', () => {
    cy.mount(<Greeting />);
    cy.get('button').click();
    cy.contains('Bonjour World');
  });
});
