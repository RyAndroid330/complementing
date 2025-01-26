describe('My Vite project', function () {
  it('visits my site and clicks on counter button multiple times', function () {
    cy.visit('http://localhost:5173/');
    cy.get('button').eq(1).click();
    cy.get('button').eq(1).contains('1');
    cy.get('button').eq(1).click();
    cy.get('button').eq(1).contains('2');
  });
});
