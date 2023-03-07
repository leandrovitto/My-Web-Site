describe('HomePage Test', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('displays the resources text', () => {
      cy.get('#menu_item_0').contains('Home');
      cy.get('#menu_item_1').contains('About');
    })

    it('renders the Portfolio logo image', () => {
      cy.get('img')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      })
    })

    it('displays dark button e click', () => {
        cy.get('#btn_theme_toggler').click(); //dark
        cy.get('html').should('have.class', 'dark');

        cy.wait(1000);
        
        cy.get('#btn_theme_toggler').click(); //auto
        cy.get('#btn_theme_toggler').click(); //light

        cy.get('html').should('not.have.class', 'dark');
    })
  })