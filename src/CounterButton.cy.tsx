import CounterButton from '../src/CounterButton';

describe('CounterButton.cy.tsx', () => {
  it('mounts CounterButton and clicks 3 times', () => {
    cy.mount(<CounterButton value={0} />);
    cy.get('input').click();
    cy.get('input').click();
    cy.get('input').click();
    cy.get('input').should('have.value', 'the count is 3');
  });
});
