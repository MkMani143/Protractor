const {HomePage, CartPage, PurchasePage} = require("./shop_datas");

const home=new HomePage();
const cartPage=new CartPage();
const purchasePage=new PurchasePage();


describe('Sample E-commerce project', ()=>{

    beforeAll(async ()=>{
        await home.GoToShop();
    })

    it('AddToCart', async ()=>{
        await home.addToCart("Blackberry");
        await home.addToCart("Samsung Note 8");
        await home.checkOutBtn();
    })

    it('CheckoutPage', async ()=>{
        await cartPage.Individual_product_amount("Blackberry", 2);
        let product=await cartPage.product_amount("Blackberry")*(cartPage.Quantity);
        expect(this.totalAmt===product);
        await cartPage.Individual_product_amount("Samsung Note 8", 1);
        let product1=await cartPage.product_amount("Blackberry")*(cartPage.Quantity);
        expect(cartPage.totalAmt===product1);
        await cartPage.TotalAmount();
        expect(cartPage.grand_total===product+product1);
        console.log(cartPage.grand_total);
        await cartPage.remove_product("Blackberry");
        await cartPage.TotalAmount();
        expect(cartPage.grand_total===product+product1);
        console.log(cartPage.grand_total);
        await cartPage.SelectCheckout();
    })

    it('PurchasePage', async ()=>{
        await purchasePage.countryName("India");
        await purchasePage.selectFromList("India");
        await purchasePage.CheckBox();
        await purchasePage.purchase();
        await browser.sleep(3000);
    })

})