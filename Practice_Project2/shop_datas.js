
class HomePage{
    getURL=browser.get("https://rahulshettyacademy.com/angularpractice/");
    win_maximize=browser.manage().window().maximize();
    go_to_shop=element(by.linkText("Shop"));
    verify_products=$$("h4.card-title");
    checkoutBtn=$("a[class*='nav-link btn']");
    count=0;

    async GoToShop(){
        await this.getURL;
        await this.win_maximize;
        await this.go_to_shop.click();
    }
    async addToCart(product){
        await this.verify_products.each(async (items) => {
            let output=await items.getText();
            if(output===product) {
                console.log(output);
                items.element(by.xpath(`//a[.='${product}']/parent::h4/parent::div/following-sibling::div/button`)).click();
                this.count++;
            }
        })
    }
    async checkOutBtn(){
        let text=await this.checkoutBtn.getText();
        let value=text.split('(')[1].split(')')[0].trim();
        expect(value).toBe(this.count.toString());
        console.log(value);
        await this.checkoutBtn.click();
    }
}

class CartPage{
    verify_products_in_checkout=$$("h4.media-heading");
    totalAmount=$("td.text-right");
    click_checkout=element(by.buttonText("Checkout"));
    Quantity=0;
    totalAmt=null;
    grand_total=null;

    async Individual_product_amount(product, quantity){
        let quantityColumn=element(by.xpath(`//h4/a[.='${product}']/ancestor::td/following-sibling::td/input`));
        quantityColumn.clear();
        quantityColumn.sendKeys(quantity);
        this.Quantity=quantity;
        if(quantity>0) {
            let product_price = await element(by.xpath(`//h4/a[.='${product}']/ancestor::td/following-sibling::td[contains(@class,'text-center')][2]`));
            await browser.wait(ExpectedConditions.textToBePresentInElement(product_price, ''), 1000);
            let price = await product_price.getText();
            this.totalAmt = price.split('.')[1].trimStart();
            return this.totalAmt.Quantity;
        }
    }
    async product_amount(product){
        let product_price=await element(by.xpath(`//h4/a[.='${product}']/ancestor::td/following-sibling::td[contains(@class,'text-center')][1]`));
        let price = await product_price.getText();
        return price.split('.')[1].trimStart();
    }
    async remove_product(product){
        await this.verify_products_in_checkout.each(async (items)=>{
            let output=await items.getText();
            if(output===product){
                items.element(by.xpath(`//h4/a[.='${product}']/ancestor::td/following-sibling::td/button`)).click();
            }
        })
    }
    async TotalAmount(){
        await browser.wait(ExpectedConditions.textToBePresentInElement(this.totalAmount, ''), 3000);
        let text=await this.totalAmount.getText();
        // console.log(value);
        this.grand_total=text.split('.')[1].trimStart();
        return this.grand_total;
    }

    async SelectCheckout(){
        await this.click_checkout.click();
    }
}

class PurchasePage{
    enter_country=$("#country");
    auto_suggestion=$("div.suggestions");
    suggestion_list=$$(".suggestions li");
    checkBoxBtn=$("div label[for='checkbox2']");
    purchase_btn=element(by.buttonText("Purchase"));

    async countryName(name) {
        await this.enter_country.click();
        await this.enter_country.sendKeys(name);
        let country = await this.enter_country.getText();
        await console.log(country);
    }

    async selectFromList(country){
        await browser.wait(ExpectedConditions.presenceOf(this.auto_suggestion),8000);
        await this.suggestion_list.each(async (items)=>{
            let countryName= await items.getText();
            if(countryName===country){
                await items.click();
            }
        })
    }

    async CheckBox(){
        await this.checkBoxBtn.click();
    }
    async purchase(){
        await this.purchase_btn.click();
    }
}

exports.HomePage=HomePage;
exports.CartPage=CartPage;
exports.PurchasePage=PurchasePage;