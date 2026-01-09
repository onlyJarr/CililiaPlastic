Cypress.on('window:before:load', (win) => {
  Object.defineProperty(win.navigator, 'webdriver', {
    get: () => undefined,
  })
})

describe('About Us', () => {
  
  beforeEach(() => {
    cy.visit('/tentang-kami/')
  })

  it('Hero Section', () => {
    cy.get('#brxe-75411d').should('be.visible');
  })

  it('Visi Misi', () => {
    cy.get('#brx-content > section:nth-child(2)').scrollIntoView();

    const visiMisi = [
      { button: '#brx-tab-title-wuwtab-0', content: '#brx-tab-pane-wuwtab-0' },
      { button: '#brx-tab-title-wuwtab-1', content: '#brx-tab-pane-wuwtab-1' }
    ];

    visiMisi.forEach(({ button, content }) => {
      cy.get(button).click({ force: true });
      cy.get(content).should('be.visible');
    });
  });

  it('Section 3-6', () => {
    cy.get('#brx-content > section:nth-child(2)').scrollIntoView();

    const sections = [
      { section: '#brx-content > section:nth-child(3)' },
      { section: '#brxe-pibnpl' },
      { section: '#brxe-461272' },
      { section: '#brxe-jyaqpl' }
    ];

    sections.forEach(({ section }) => {
      cy.get(section).scrollIntoView().should('be.visible');
    });
  });

  it('Testimonial', () => {
    cy.get('#brxe-fbb812').scrollIntoView();

    const sections = [
      { button: '#brxe-ce52e2 > ul > li:nth-child(1) > button', card: '#brxe-2ee7c0' },
      { button: '#brxe-ce52e2 > ul > li:nth-child(2) > button', card: '#brxe-ce52e2-clone08' }
    ];

    sections.forEach(({ button, card }) => {
      cy.get(button).click({ force: true });
      cy.get(card).should('be.visible');
    });
  });

})