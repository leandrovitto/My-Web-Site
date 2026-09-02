describe('career portfolio shell', () => {
  it('exposes the primary Italian CV action and the Work/Profile navigation', () => {
    cy.visit('/');
    cy.get('[data-cy="cv-download"]').should('have.attr', 'href').and('include', 'drive.google.com');
    cy.get('[data-cy="main-nav"]').contains('Progetti').should('have.attr', 'href', '/portfolio');
    cy.get('[data-cy="main-nav"]').contains('Profilo').should('have.attr', 'href', '/about');
  });

  it('moves keyboard focus to the main landmark from the skip link', () => {
    cy.visit('/');
    cy.get('a[href="#main-content"]').focus().type('{enter}', { force: true });
    cy.get('#main-content').should('be.focused');
  });

  it('renders featured work and supports a category filter', () => {
    cy.visit('/portfolio');
    cy.get('[data-cy="case-study"]').should('have.length.at.least', 3);
    cy.get('[data-cy="product-projects"]').should('exist');
    cy.get('[data-cy="code-projects"]').should('exist');
    cy.get('[data-cy="project-filter"]').contains('SaaS').click();
    cy.get('[data-cy="case-study"]').each(($card) => cy.wrap($card).should('contain.text', 'SaaS'));
  });

  it('leads with professional positioning and three featured case studies', () => {
    cy.visit('/');
    cy.get('h1').should('contain.text', 'Senior Software Engineer');
    cy.get('[data-cy="featured-work"] [data-cy="case-study"]').should('have.length', 3);
    cy.get('[data-cy="cv-download"]').should('be.visible');
  });

  it('shows evidence-led Work and a semantic career timeline', () => {
    cy.visit('/portfolio');
    cy.get('h1').should('contain.text', 'Progetti');
    cy.get('embed').should('not.exist');
    cy.visit('/about');
    cy.get('[data-cy="career-timeline"] ol').should('exist');
    cy.get('[data-cy="capability-group"]').should('have.length.at.least', 3);
  });

  it('preserves the current route when switching locale', () => {
    cy.visit('/about');
    cy.get('[data-cy="language-menu"]').click();
    cy.contains('English').click();
    cy.location('pathname').should('match', /\/about$/);
  });

  it('cycles the deliberate theme controls', () => {
    cy.visit('/');
    cy.get('#btn_theme_toggler').click();
    cy.get('html').should('have.class', 'dark');
  });
});
