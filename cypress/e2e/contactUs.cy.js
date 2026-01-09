Cypress.on('window:before:load', (win) => {
  Object.defineProperty(win.navigator, 'webdriver', {
    get: () => undefined,
  })
})

describe('Page Contact Us', () => {
  
  beforeEach(() => {
    cy.visit('/kontak/')
  })

  it('Section 1-3', () => {
    const sections = [
      { section: '#brxe-hpmagj'},
      { section: '#brxe-mcjoez'},
      { section: '#brxe-d40feb'}
    ]
    sections.forEach(({ section }) => {
      cy.get(section).scrollIntoView().should('be.visible');
    })
  })
})