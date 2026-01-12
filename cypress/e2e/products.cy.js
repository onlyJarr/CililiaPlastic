Cypress.on('window:before:load', (win) => {
  Object.defineProperty(win.navigator, 'webdriver', {
    get: () => undefined,
  })
})

describe('Product', () => {
  
  beforeEach(() => {
    cy.visit('/shop/')
  })



  it('Sorting By Kategori', () => {
    // cy.wait(2000)
    //assert logo 
    
    //Sort Kategori
    //HDPE
    cy.get('#brxe-ujjqzo a[href="/shop/?b_product_cat=49"]').click();
    
    cy.get('#brxe-uuzmgm > div:nth-child(2)')
      .find('#brxe-tigycb > div:nth-child(1)')
      .should('contain.text','HDPE')
    
    //PS
    cy.get('#brxe-ujjqzo a[href="/shop/?b_product_cat=50"]').click();
    
    cy.get('#brxe-uuzmgm > div:nth-child(2)')
      .find('#brxe-tigycb > div:nth-child(1)')
      .should('contain.text','Plastik Sampah')
    
    //PE
    cy.get('#brxe-ujjqzo a[href="/shop/?b_product_cat=47"]').click();
    cy.get('#brxe-uuzmgm > div:nth-child(2)')
      .find('#brxe-tigycb > div:nth-child(1)')
      .should('contain.text','PE')
    
    //PP
    cy.get('#brxe-ujjqzo a[href="/shop/?b_product_cat=48"]').click();
    cy.get('#brxe-uuzmgm > div:nth-child(2)')
      .find('#brxe-tigycb > div:nth-child(1)')
      .should('contain.text', 'PP')
  })

  it('Sorting By Product', () => {
    // cy.wait(2000)
    //assert logo 
    
    //Default
    cy.get('#brxe-tigycb div:nth-child(1) > div.brxe-jtwtyt > h3.brxe-udirma').should('have.text', 'Plastik PP');
    cy.get('#brxe-tigycb div:nth-child(7) h3.brxe-udirma').should('have.text', 'Kantong Kresek Plastik Bening – New Segitiga');
    
    //Popularity
    cy.get('#brxe-evibfn [name="orderby"]').select('popularity');
    cy.wait(3000)
    cy.get('#brxe-tigycb div:nth-child(1) > div.brxe-jtwtyt > h3.brxe-udirma').should('have.text', 'Plastik PP');
    cy.get('#brxe-tigycb div:nth-child(7) h3.brxe-udirma').should('have.text', 'Kantong Kresek Plastik Bening – New Segitiga');
    
    //Rating
    cy.get('#brxe-evibfn [name="orderby"]').select('rating');
    cy.wait(3000)
    cy.get('#brxe-tigycb div:nth-child(1) > div.brxe-jtwtyt > h3.brxe-udirma').should('have.text', 'Plastik PP');
    cy.get('#brxe-tigycb div:nth-child(7) h3.brxe-udirma').should('have.text', 'Kantong Kresek Plastik Bening – New Segitiga');
    //Date
    cy.get('#brxe-evibfn [name="orderby"]').select('date');
    cy.wait(3000)
    cy.get('#brxe-tigycb div:nth-child(1) > div.brxe-jtwtyt > h3.brxe-udirma').should('have.text', 'Plastik PP');
    cy.get('#brxe-tigycb div:nth-child(7) h3.brxe-udirma').should('have.text', 'Kantong Kresek Plastik Bening – New Segitiga');
    
    //Low-High
    cy.get('#brxe-evibfn [name="orderby"]').select('price');
    cy.wait(3000)
    cy.get('#brxe-tigycb div:nth-child(1) > div.brxe-jtwtyt > h3.brxe-udirma').should('have.text', 'Kantong Kresek Plastik Bening – New Segitiga');
    cy.get('#brxe-tigycb div:nth-child(7) h3.brxe-udirma').should('have.text', 'Plastik PP');
    
    //HIgh-Low
    cy.get('#brxe-evibfn [name="orderby"]').select('price-desc');
    cy.wait(3000)
    cy.get('#brxe-tigycb div:nth-child(1) > div.brxe-jtwtyt > h3.brxe-udirma').should('have.text', 'Plastik PP');
    cy.get('#brxe-tigycb div:nth-child(7) h3.brxe-udirma').should('have.text', 'Kantong Kresek Plastik Bening – New Segitiga');
  })

  it.only('About Cilia', () => {
    // cy.wait(2000)
    //assert logo 
    cy.get('#brxe-rpsztw h3')
      .scrollIntoView()
      .should('be.visible');
    cy.get('#brxe-cbuwqd').click();
    cy.get('#brxe-ydwgoy').should('be.visible');
  })

  



})