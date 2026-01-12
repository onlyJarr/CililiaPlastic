Cypress.on('window:before:load', (win) => {
  Object.defineProperty(win.navigator, 'webdriver', {
    get: () => undefined,
  })
})

describe('detail Item', () => {
  
  beforeEach(() => {
    cy.visit('/shop/')
  })

  it('Sorting By Kategori', () => {
    cy.get('#brxe-tigycb a[aria-describedby="woocommerce_loop_add_to_cart_link_describedby_6078"]').click();
    cy.get('#brxe-noxhxh h1.brxe-product-title').should('have.text', 'Plastik PP');
    //ganti gambar
    cy.get('#brxe-zxsdwd img.flex-active').should('have.class', 'flex-active');
    cy.get('#brxe-zxsdwd img[sizes="(max-width: 100px) 100vw, 100px"][alt="Plastik PP - Image 2"]').click();
    cy.get('#brxe-zxsdwd img.flex-active').should('have.class', 'flex-active');
    cy.get('#brxe-uipozt a.btn').click();
    cy.url().should('include','https://wa.me/6287782206555')
    cy.go('back');
    cy.get('#brxe-ovhxsu-slide01 a.button span').click();
    cy.get('#brxe-noxhxh h1.brxe-product-title').should('be.visible');
    cy.get('#brxe-ovhxsu button[aria-controls="brxe-ovhxsu-slide04 brxe-ovhxsu-slide05 brxe-ovhxsu-slide06"]').click();
    cy.get('#brxe-ovhxsu-slide04 a.button').click();
    cy.get('#brxe-noxhxh h1.brxe-product-title').should('be.visible');
    
  })




})