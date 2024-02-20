
function form_validation(){

    this.getURL=browser.get("https://rahulshettyacademy.com/angularpractice/");
    this.win_maximize=browser.manage().window().maximize();
    this.enter_name=$("div input[minlength='2']");
    this.enter_email=element(by.name("email"));
    this.enter_password=$("#exampleInputPassword1");
    this.verify_checkbox=$("label[for='exampleCheck1']");
    this.click_checkBox=$("input[type='checkbox']");
    this.selectGender=element.all(by.tagName("option"));
    this.verify_radioBtn_names=$$("div[class*='form-check-inline'] label");
    this.click_radioBtn=$("input[disabled]");
    this.enter_DOB=element(by.name("bday"));
    this.submit_btn=element(by.buttonText("Submit"));

    this.name_field_error_msg=async ()=> {
        let text = await element(by.xpath("(//div[contains(@class,'alert')])[1]")).getText();
        if (text === "Name should be at least 2 characters") {
            return true;
        } else if (text === "Name is required") {
            return true;
        }
    }
    this.email_field_error_msg=async ()=>{
        let text=await element(by.xpath("(//div[contains(@class,'alert')])[2]")).getText();
        expect(text).toBe("Email is required");
    }
    this.success_msg=$("div strong");


}

module.exports = new form_validation();