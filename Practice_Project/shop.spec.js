
describe('Sample E-commerce project', ()=>{
    var obj=require("./shop_datas");

    beforeAll(()=>{
        obj.getURL;
        obj.win_maximize;
        obj.go_to_shop.click();
    })

    function addToCart(product) {
        obj.verify_products.each(async (items) => {
            let output=await items.getText();
            if(output===product) {
                console.log(output);
                items.element(by.xpath(`//a[.='${product}']/parent::h4/parent::div/following-sibling::div/button`)).click();
                count++;
            }
        })
    }
    function remove_product(product){
        obj.verify_products_in_checkout.each(async (items)=>{
            let output=await items.getText();
            if(output===product){
                items.element(by.xpath(`//h4/a[.='${product}']/ancestor::td/following-sibling::td/button`)).click();
            }
        })
    }

    async function product_amount(product){
        let product_price=await element(by.xpath(`//h4/a[.='${product}']/ancestor::td/following-sibling::td[contains(@class,'text-center')][1]`));
        let price = await product_price.getText();
        let amount = price.split('.')[1].trimStart();
        // console.log(amount);
        return amount;
    }

    async function Individual_product_amount(product, quantity){
        let ele=element(by.xpath(`//h4/a[.='${product}']/ancestor::td/following-sibling::td/input`));
        ele.clear();
        ele.sendKeys(quantity);
        Quantity=quantity;
        if(quantity>0) {
            let product_price = await element(by.xpath(`//h4/a[.='${product}']/ancestor::td/following-sibling::td[contains(@class,'text-center')][2]`));
            await browser.wait(ExpectedConditions.textToBePresentInElement(product_price, ''), 1000);
            let price = await product_price.getText();
            let amount = price.split('.')[1].trimStart();
            // console.log(amount);
            totalAmt=amount;
        }
    }

    async function totalAmount(){
        await browser.wait(ExpectedConditions.textToBePresentInElement(obj.totalAmount, ''), 1000);
        let text=await obj.totalAmount.getText();
        let value=text.split('.')[1].trimStart();
        // console.log(value);
        grand_total=value;
    }

    it('Add to cart', async ()=>{
        count=0;
        addToCart("Blackberry");
        addToCart("Samsung Note 8");
        addToCart("Nokia Edge");
        let text=await obj.checkoutBtn.getText();
        let value=text.split('(')[1].split(')')[0].trim();
        expect(value).toBe(count.toString());
        console.log(value);
        await obj.checkoutBtn.click();
    })

    it('Checkout Page', async ()=>{
        totalAmt=null;
        grand_total=null;
        Quantity=0;
        await Individual_product_amount("Blackberry", 2);
        let product1=await product_amount("Blackberry")*(Quantity);
        expect(totalAmt===product1);
        await Individual_product_amount("Samsung Note 8", 1);
        let product2=await product_amount("Samsung Note 8")*(Quantity);
        expect(totalAmt===product2);
        await totalAmount();
        expect(grand_total===product1+product2);
        console.log(grand_total);
        remove_product("Blackberry");
        await totalAmount();
        expect(grand_total===product1+product2);
        console.log(grand_total);
        await obj.click_checkout.click();
    })

    it('Purchase Page', async ()=>{
        obj.enter_country.click()
        obj.enter_country.sendKeys("India");
        let country=await obj.enter_country.getText();
        await browser.wait(ExpectedConditions.presenceOf(obj.auto_suggestion),8000);
        // let suggestion = await element(by.css('.suggestions li:first-child'));
        obj.suggestion_list.each(async (items)=>{
            let countryName= await items.getText();
            if(countryName===country){
                await items.click();
            }
        })
        await obj.checkoutBtn.click();
        await obj.purchase_btn.click();
        await browser.sleep(3000);
    })

})