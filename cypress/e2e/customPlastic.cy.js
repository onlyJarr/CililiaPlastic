Cypress.on('window:before:load', (win) => {
  Object.defineProperty(win.navigator, 'webdriver', {
    get: () => undefined,
  })
})

describe('custom plastic', () => {
  
  beforeEach(() => {
    cy.visit('/plastik-custom/')
  })

  it('Hero Section', () => {
    const heroSection = [
      {selector: '#brxe-7e1deb > a.brxe-button.btn.bricks-button.bricks-background-primary', url: '/form-download' },
      {selector: '#brxe-7e1deb > a.brxe-button.btn.slight.bricks-button.bricks-background-light', url: '/6287782206555' }
    ]

    heroSection.forEach(({selector, url}) => {
      cy.get(selector).click()
      cy.url().should('include', url)
      cy.visit('/plastik-custom/')
    })
  })

  it('Section 2-4', () => {
    const whyUsSection = [
      {section: '#brxe-ejfwyj' },
      {section: '#brx-content > section:nth-child(3)' },
      {section: '#brx-content > section:nth-child(4)' },
      {section: '#brxe-f5537c' }
    ]

    whyUsSection.forEach(({section}) => {
      cy.get(section).scrollIntoView().should('be.visible')
    })
  })

  it('Testimoni', () => {
    cy.get('#brxe-55b2fa').scrollIntoView()
    const testimonials = [
      {button: '#brxe-ikoecu > ul > li:nth-child(1) > button', card: '#brxe-kqkzih' },
      {button: '#brxe-ikoecu > ul > li:nth-child(2) > button', card: '#brxe-wkptzd' }
    ]

    testimonials.forEach(({button, card}) => {
      cy.get(button).click()
      cy.get(card).should('be.visible')
    })
  })

  it('2nd Contact Section', () => {
    cy.get('#brxe-215a22').scrollIntoView()
    const secondSection = [
      {selector: '#brxe-7a94c7 > a.brxe-button.btn.bricks-button.bricks-background-primary', url: '/form-download' },
      {selector: '#brxe-7a94c7 > a.brxe-button.btn.slight.bricks-button.bricks-background-light', url: '/6287782206555' }
    ]

    secondSection.forEach(({selector, url}) => {
      cy.get(selector).click()
      cy.url().should('include', url)
      cy.visit('/plastik-custom/')
    })
  })
  
  it('F.A.Q. Section', () => {
    cy.get('#brxe-b29dbb').scrollIntoView()
    cy.get('#brxe-48846d').click()
    cy.get('#brxe-4415b1').should('be.visible')
    cy.get('#brxe-25038d').scrollIntoView().click()
  })
})