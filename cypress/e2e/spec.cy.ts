describe('My Vite project', function () {
  it('visits my site and clicks on counter button multiple times', function () {
    cy.visit('http://localhost:5173/');
    cy.get('button').click();
    cy.get('button').contains('1');
    cy.get('button').click();
    cy.get('button').contains('2');
  });
});
