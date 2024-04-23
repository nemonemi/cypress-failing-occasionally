describe('Cypress failing occasionally', () => {
  beforeEach(() => cy.visit('/', Cypress.env('compressionHeaders')));

  it('should work', () => {
    cy.findByText('Test').should('exist');
  });
});
