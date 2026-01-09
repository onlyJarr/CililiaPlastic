Cypress.on('window:before:load', (win) => {
  Object.defineProperty(win.navigator, 'webdriver', {
    get: () => undefined,
  })
})

describe('template spec', () => {
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('passes', () => {
    cy.get('#brx-header img.bricks-site-logo').should('be.visible');
  })
})