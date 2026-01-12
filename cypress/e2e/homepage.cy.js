Cypress.on('window:before:load', (win) => {
  Object.defineProperty(win.navigator, 'webdriver', {
    get: () => undefined,
  })
})

describe('Homepage Tests', () => {
  
  beforeEach(() => {
    cy.visit('/')
  })



  it('Download Katalog', () => {
    // cy.wait(2000)
    //assert logo 
    cy.get('#brx-header img.bricks-site-logo').should('be.visible');
    //Download Catalog
    cy.get('#brxe-yvsjws > a.brxe-button.btn.bricks-button.bricks-background-primary').click();
    cy.get('#brxe-008565').should('be.visible'); //assert udah di download page
    cy.get('#name-1 [name="name-1"]').click();
    cy.get('#name-1 [name="name-1"]').type('Azhar');
    cy.get('#email-1 [name="email-1"]').click();
    cy.get('#email-1 [name="email-1"]').type('azharmaulana52@gmail.com');
    cy.get('#phone-1 [name="phone-1"]').click();
    cy.get('#phone-1 [name="phone-1"]').type('0878-8568-2790');
    cy.get('#forminator-module-4047 button.forminator-button').click();
    cy.get('#brxe-bd590b', { timeout: 10000 })
      .should('be.visible')
    cy.get('#brxe-a07daa a.btn').click();
    cy.url().should('include', 'https://drive.google.com/')
    cy.visit("/")
    //Cek download yg dibawah
    cy.get('#brxe-hwrcvg')
      .scrollIntoView()
      .should('be.visible')
    cy.get('#brxe-cjowmw a.bricks-background-primary').click();
    cy.url().should("include","https://cilia.co.id/form-download/")

  })


  it('Konsultasi Produk', () => {
    // cy.wait(2000)
    cy.get('#brxe-yvsjws a.slight').click();
    cy.url().should('include',"https://wa.me/6287782206555")
    cy.visit("/")
    cy.get('#brxe-cjowmw > a.brxe-button.btn.slight.bricks-button.bricks-background-light')
      .scrollIntoView()
      .should('be.visible')
    cy.get('#brxe-cjowmw > a.brxe-button.btn.slight.bricks-button.bricks-background-light').click();
    cy.url().should('include',"https://wa.me/6287782206555")
  })

  it('kategori Produk', () => {
    // cy.wait(2000)
    //assert logo 
    cy.get('#brx-header img.bricks-site-logo').should('be.visible');
    cy.get('#brxe-ffqtgt > h2')
      .scrollIntoView()
      .should('be.visible')
    
    //PE
    cy.get('#brxe-joyxyp').click();
    cy.get('#brxe-lbfawx h3.brxe-heading').should('have.text', 'Polyethylene (PE)');
    cy.get('#brxe-gbmkys a.button span').click();
    cy.get('#brxe-noxhxh h1.brxe-product-title').should('have.text', 'Plastik PE');
    cy.visit('/')
    
    //PP
    cy.get('#brxe-pjbnzz').click();
    cy.get('#brxe-lbfawx h3.brxe-heading').should('have.text', 'Polypropylene (PP)');
    cy.get('#brxe-gbmkys a.button span').click();
    cy.get('#brxe-noxhxh h1.brxe-product-title').should('have.text', 'Plastik PP');
    cy.visit("/")
    
    //HDPE
    cy.get('#brxe-dbbjup').click();
    cy.get('#brxe-lbfawx h3.brxe-heading').should('have.text', 'High-Density PE (HDPE)');
    cy.get('#brxe-gbmkys div:nth-child(1) div.brxe-zfwkyy div.brxe-pnacyl div.brxe-tlhxth').should('have.text', 'Kantong Kresek Plastik Bening – New Segitiga');
    cy.get('#brxe-ayootx select[name="orderby"]', { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled');
    cy.get('#brxe-ayootx select[name="orderby"]').select('popularity');
    cy.wait(5000)
    
    cy.get('#brxe-gbmkys div:nth-child(1) div.brxe-zfwkyy div.brxe-pnacyl div.brxe-tlhxth').should('have.text', 'Kantong Kresek Plastik Putih Susu – New Segitiga');
    cy.get('#brxe-gbmkys div:nth-child(2) > div.brxe-zfwkyy > div.brxe-pnacyl > div.brxe-tlhxth').should('have.text', 'Kantong Kresek Plastik Pink – Tiga Beruang');
    cy.get('#brxe-gbmkys div:nth-child(3) div.brxe-tlhxth').should('have.text', 'Kantong Kresek Plastik Merah – Tiga Beruang');
    cy.get('#brxe-gbmkys div:nth-child(4) div.brxe-tlhxth').should('have.text', 'Kantong Kresek Plastik Bening – New Segitiga');
    cy.get('#brxe-ayootx select[name="orderby"]', { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled');
    cy.get('#brxe-ayootx select[name="orderby"]').select('rating');
    cy.wait(5000)
    
    cy.get('#brxe-gbmkys div:nth-child(1) div.brxe-zfwkyy div.brxe-pnacyl div.brxe-tlhxth').should('have.text', 'Kantong Kresek Plastik Putih Susu – New Segitiga');
    cy.get('#brxe-gbmkys div:nth-child(2) > div.brxe-zfwkyy > div.brxe-pnacyl > div.brxe-tlhxth').should('have.text', 'Kantong Kresek Plastik Pink – Tiga Beruang');
    cy.get('#brxe-gbmkys div:nth-child(3) div.brxe-tlhxth').should('have.text', 'Kantong Kresek Plastik Merah – Tiga Beruang');
    cy.get('#brxe-gbmkys div:nth-child(4) div.brxe-tlhxth').should('have.text', 'Kantong Kresek Plastik Bening – New Segitiga');
    cy.get('#brxe-ayootx select[name="orderby"]', { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled');
    cy.get('#brxe-ayootx select[name="orderby"]').select('date');
    cy.wait(5000)
    
    cy.get('#brxe-gbmkys div:nth-child(1) div.brxe-zfwkyy div.brxe-pnacyl div.brxe-tlhxth').should('have.text', 'Kantong Kresek Plastik Putih Susu – New Segitiga');
    cy.get('#brxe-gbmkys div:nth-child(2) > div.brxe-zfwkyy > div.brxe-pnacyl > div.brxe-tlhxth').should('have.text', 'Kantong Kresek Plastik Pink – Tiga Beruang');
    cy.get('#brxe-gbmkys div:nth-child(3) div.brxe-tlhxth').should('have.text', 'Kantong Kresek Plastik Merah – Tiga Beruang');
    cy.get('#brxe-gbmkys div:nth-child(4) div.brxe-tlhxth').should('have.text', 'Kantong Kresek Plastik Bening – New Segitiga');
    cy.get('#brxe-ayootx [name="orderby"]', { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .select('price');
    cy.get('#brxe-gbmkys div:nth-child(1) div.brxe-zfwkyy div.brxe-pnacyl div.brxe-tlhxth').should('have.text', 'Kantong Kresek Plastik Bening – New Segitiga');
    cy.get('#brxe-gbmkys div:nth-child(2) > div.brxe-zfwkyy > div.brxe-pnacyl > div.brxe-tlhxth').should('have.text', 'Kantong Kresek Plastik Merah – Tiga Beruang');
    cy.get('#brxe-gbmkys div:nth-child(3) div.brxe-tlhxth').should('have.text', 'Kantong Kresek Plastik Pink – Tiga Beruang');
    cy.get('#brxe-gbmkys div:nth-child(4) div.brxe-tlhxth').should('have.text', 'Kantong Kresek Plastik Putih Susu – New Segitiga');
    cy.get('#brxe-ayootx [name="orderby"]', { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .select('price-desc');
    cy.get('#brxe-gbmkys div:nth-child(1) div.brxe-zfwkyy div.brxe-pnacyl div.brxe-tlhxth').should('have.text', 'Kantong Kresek Plastik Putih Susu – New Segitiga');
    cy.get('#brxe-gbmkys div:nth-child(2) > div.brxe-zfwkyy > div.brxe-pnacyl > div.brxe-tlhxth').should('have.text', 'Kantong Kresek Plastik Pink – Tiga Beruang');
    cy.get('#brxe-gbmkys div:nth-child(3) div.brxe-tlhxth').should('have.text', 'Kantong Kresek Plastik Merah – Tiga Beruang');
    cy.get('#brxe-gbmkys div:nth-child(4) div.brxe-tlhxth').should('have.text', 'Kantong Kresek Plastik Bening – New Segitiga');

        //Clickable Item
    cy.get('#brxe-gbmkys a[href="https://cilia.co.id/product/kantong-kresek-plastik-putih-susu-new-segitiga/"] span').click();
    cy.get('#brxe-noxhxh h1.brxe-product-title').should('have.text', 'Kantong Kresek Plastik Putih Susu – New Segitiga');
    cy.go('back')
    cy.get('#brxe-gbmkys a[href="https://cilia.co.id/product/kantong-kresek-plastik-pink-tiga-beruang/"] span').click();
    cy.get('#brxe-noxhxh h1.brxe-product-title').should('have.text', 'Kantong Kresek Plastik Pink – Tiga Beruang');
    cy.go('back')
    cy.get('#brxe-gbmkys a[href="https://cilia.co.id/product/kantong-kresek-plastik-merah-tiga-beruang/"] span').click();
    cy.get('#brxe-noxhxh h1.brxe-product-title').should('have.text', 'Kantong Kresek Plastik Merah – Tiga Beruang');
    cy.go('back')
    cy.get('#brxe-gbmkys a[href="https://cilia.co.id/product/kantong-kresek-plastik-bening-new-segitiga/"] span').click();
    cy.get('#brxe-noxhxh h1.brxe-product-title').should('have.text', 'Kantong Kresek Plastik Bening – New Segitiga');
    cy.visit('/')
    
    //Plastik Sampah
    
    cy.get('#brxe-dosxav').click();
    cy.get('#brxe-lbfawx h3.brxe-heading').should('have.text', 'Plastik Sampah');
    cy.get('#brxe-gbmkys a.button span').click();
    cy.get('#brxe-noxhxh h1.brxe-product-title').should('have.text', 'Plastik Sampah');
    cy.visit('/')
    
    //Plastik Custom
    cy.get('#brxe-dzisqh').click();
    cy.url().should('include','https://cilia.co.id/plastik-custom/')
  })

  it('Testimoni', () => {
    // cy.wait(2000)
    cy.get('#brxe-xvooml')
      .scrollIntoView()
      .should('be.visible')
    cy.get('#brxe-fdcgpv #brxe-qonbha').should('be.visible');
    cy.get('div:nth-of-type(7) #brxe-bexwwr div.brxe-text-basic').should('be.visible');
    cy.get('#brxe-nnnwuw i.ion-ios-arrow-round-forward').click();
    cy.get('#brxe-dgpnnk #brxe-wqmllw').should('be.visible');
    cy.get('div:nth-of-type(10) #brxe-wvsnvf div.brxe-text-basic').should('be.visible');
    cy.get('#brxe-fdcgpv #brxe-qonbha').should('not.be.visible');
    cy.get('div:nth-of-type(7) #brxe-bexwwr div.brxe-text-basic').should('not.be.visible')
  })

  it('About Cilia', () => {
    // cy.wait(2000)  
    cy.get('#brxe-kqqicp')
      .scrollIntoView()
      .should('be.visible');
    
    cy.get('#brxe-gppsmg').click();
    cy.get('#brxe-yiygvy h4:nth-child(1) b').should('be.visible');
    cy.get('#brxe-yiygvy h3 b').should('be.visible');
  })



})