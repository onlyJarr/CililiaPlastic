Cypress.on('window:before:load', (win) => {
  Object.defineProperty(win.navigator, 'webdriver', {
    get: () => undefined,
  })
})

describe('Footer', () => {
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('Social Media Button', () => {
    const socialMedia = [
      { selector: '#brxe-gjxidt', url: 'https://www.facebook.com/ciliaprismautamamakmur' },
      { selector: '#brxe-qzirqe', url: 'https://www.instagram.com/cilia.plastik/' },
      { selector: '#brxe-lbelsd', url: 'https://www.linkedin.com/company/pt-cilia-prisma-utama-makmur/' },
      { selector: '#brxe-xftiah', url: 'https://www.tiktok.com/@cilia.plastik?_r=1&_t=ZS-92Mna3wLZxd' }
    ]
    
    socialMedia.forEach((item) => {
      cy.get('#brxe-lfxmzq').scrollIntoView()
      cy.get(item.selector)
        .invoke('removeAttr', 'target') // agar tetap di tab aktif
        .click()

      cy.url().should('include', new URL(item.url).hostname)
      cy.visit('/')
    })
  })

  it('Admin Sales', () => {
    const adminNumber = [
      { selector: '#brxe-ufblnc > li:nth-child(1) > div > a', url: 'https://wa.me/6287782206555' },
      { selector: '#brxe-ylizee > li:nth-child(1) > div > a', url: 'https://wa.me/6287879966768' },
      { selector: '#brxe-ufblnc > li:nth-child(2) > div > a', url: 'https://wa.me/6287841954166' },
      { selector: '#brxe-ylizee > li:nth-child(2) > div > a', url: 'https://wa.me/6287776979679' }
    ]

    adminNumber.forEach((item) => {
      cy.get('#brxe-lfxmzq').scrollIntoView()
      cy.get(item.selector)
        .invoke('removeAttr', 'target') // agar tetap di tab aktif
        .click()

      cy.url().should('include', new URL(item.url).hostname)
      cy.visit('/')
    })
  })

  it('Menu', () => {
    const menuOptions = [
      { selector: '#brxe-ivitbw > ul > li:nth-child(1) > a', url: '/' },
      { selector: '#brxe-ivitbw > ul > li:nth-child(2) > a', url: '/tentang-kami' },
      { selector: '#brxe-ivitbw > ul > li:nth-child(3) > a', url: '/kontak' },
      { selector: '#brxe-ivitbw > ul > li:nth-child(4) > a', url: '/blog' }
    ]

    menuOptions.forEach((item) => {
      cy.get('#brxe-lfxmzq').scrollIntoView()
      cy.get(item.selector).click()
      cy.url().should('include', item.url)
    })
  })

  it('Produk', () => {
    const productOptions = [
      { selector: '#brxe-bzfpvw > ul > li:nth-child(1) > a', url: 'pe' },
      { selector: '#brxe-bzfpvw > ul > li:nth-child(2) > a', url: 'pp' },
      { selector: '#brxe-bzfpvw > ul > li:nth-child(3) > a', url: 'hdpe' },
      { selector: '#brxe-bzfpvw > ul > li:nth-child(4) > a', url: 'sampah' },
      { selector: '#brxe-bzfpvw > ul > li:nth-child(5) > a', url: 'custom' }
    ]

    productOptions.forEach((item) => {
      cy.get('#brxe-lfxmzq').scrollIntoView()
      cy.get(item.selector).click()
      cy.url().should('include', item.url)
    })
  })

  it('Koleksi', () => {
    const collectionOptions = [
      { selector: '#brxe-shffjt > ul > li:nth-child(1) > a', url: 'pp' },
      { selector: '#brxe-shffjt > ul > li:nth-child(2) > a', url: 'bening' },
      { selector: '#brxe-shffjt > ul > li:nth-child(3) > a', url: 'merah' },
      { selector: '#brxe-shffjt > ul > li:nth-child(4) > a', url: 'pink' },
      { selector: '#brxe-shffjt > ul > li:nth-child(5) > a', url: 'putih' },
      { selector: '#brxe-shffjt > ul > li:nth-child(6) > a', url: 'sampah' },
      { selector: '#brxe-shffjt > ul > li:nth-child(7) > a', url: 'merah' },
      { selector: '#brxe-shffjt > ul > li:nth-child(8) > a', url: 'bening' },
      { selector: '#brxe-shffjt > ul > li:nth-child(9) > a', url: 'bening' }
    ]

    collectionOptions.forEach((item) => {
      cy.get('#brxe-lfxmzq').scrollIntoView()
      cy.get(item.selector).click()
      cy.url().should('include', item.url)
    })
  })
})