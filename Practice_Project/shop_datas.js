const {element} = require("protractor");

function shopping(){
    this.getURL=browser.get("https://rahulshettyacademy.com/angularpractice/");
    this.win_maximize=browser.manage().window().maximize();
    this.go_to_shop=element(by.linkText("Shop"));
    this.verify_products=$$("h4.card-title");
    this.checkoutBtn=$("a[class*='nav-link btn']");
    this.verify_products_in_checkout=$$("h4.media-heading");
    this.totalAmount=$("td.text-right");
    this.click_checkout=element(by.buttonText("Checkout"));
    this.enter_country=$("#country");
    this.auto_suggestion=$("div.suggestions");
    this.suggestion_list=$$(".suggestions li");
    this.checkBoxBtn=$("div #checkbox2");
    this.purchase_btn=element(by.buttonText("Purchase"));
}

module.exports = new shopping();