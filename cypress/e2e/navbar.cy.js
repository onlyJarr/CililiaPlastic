Cypress.on('window:before:load', (win) => {
  Object.defineProperty(win.navigator, 'webdriver', {
    get: () => undefined,
  })
})

describe('Navbar', () => {
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('Navbar Button', () => {
    const headerIcon = [
      { selector: '#brx-header > div.brxe-section.header-4 > div > a', url: '/' },
      { selector: '#brxe-phdzej > li:nth-child(1) > a', url: '/' },
      { selector: '#brxe-ahrhfb > div > a', url: '/' },
      { selector: '#brxe-phdzej > li:nth-child(3) > a', url: '/' },
      { selector: '#brxe-phdzej > li:nth-child(4) > a', url: '/' },
      { selector: '#brxe-phdzej > li:nth-child(5) > a', url: '/' }
    ]
    
    headerIcon.forEach((item) => {
      cy.get(item.selector).click()
      cy.url().should('include', item.url)
    })
  })

  it('Navbar Search Success', () => {
    cy.get('#search-input-dtussa').type('hdpe')
    cy.get('#brxe-dtussa > form > button').click()
    cy.wait(3000)
    cy.url().should('include', 'hdpe')
    cy.get('.bricks-layout-wrapper .bricks-layout-item')
      .should('have.length.greaterThan', 1)
  })

  it('Navbar Search Not Found', () => {
    cy.get('#search-input-dtussa').type('kuda lumping')
    cy.get('#brxe-dtussa > form > button').click()
    cy.wait(3000)
    cy.url().should('include', 'kuda+lumping')
    cy.get('#brx-content > div > div > h3').should('be.visible')
  })
})