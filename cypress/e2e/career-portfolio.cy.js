describe('career portfolio shell', () => {
  it('exposes the primary Italian CV action and the Work/Profile navigation', () => {
    cy.visit('/');
    cy.get('[data-cy="cv-download"]').should('have.attr', 'href').and('include', 'drive.google.com');
    cy.get('[data-cy="main-nav"]').contains('Progetti').should('have.attr', 'href', '/portfolio');
    cy.get('[data-cy="main-nav"]').contains('Profilo').should('have.attr', 'href', '/about');
  });

  it('moves keyboard focus to the main landmark from the skip link', () => {
    cy.visit('/');
    cy.get('a[href="#main-content"]').click();
    cy.get('#main-content').should('be.focused');
  });

  it('renders featured work and supports a category filter', () => {
    cy.visit('/portfolio');
    cy.get('[data-cy="case-study"]').should('have.length.at.least', 3);
    cy.get('[data-cy="project-filter"]').contains('SaaS').click();
    cy.get('[data-cy="case-study"]').each(($card) => cy.wrap($card).should('contain.text', 'SaaS'));
  });
});
