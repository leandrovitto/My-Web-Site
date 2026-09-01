describe('career portfolio shell', () => {
  it('exposes the primary Italian CV action and the Work/Profile navigation', () => {
    cy.visit('/');
    cy.get('[data-cy="cv-download"]').should('have.attr', 'href').and('include', 'drive.google.com');
    cy.get('[data-cy="main-nav"]').contains('Progetti').should('have.attr', 'href', '/portfolio');
    cy.get('[data-cy="main-nav"]').contains('Profilo').should('have.attr', 'href', '/about');
  });
});
