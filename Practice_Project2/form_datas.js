
class Inputs{
    getURL=browser.get("https://rahulshettyacademy.com/angularpractice/");
    win_maximize=browser.manage().window().maximize();
    enter_name=$("div input[minlength='2']");
    enter_email=element(by.name("email"));
    enter_password=$("#exampleInputPassword1");
    enter_DOB=element(by.name("bday"));
    async URL(){
        await this.getURL;
        await this.win_maximize;
    }
    async name(name){
        await this.enter_name.sendKeys(name);
    }
    async email(email){
        await this.enter_email.sendKeys(email);
    }
    async password(pass){
        await this.enter_password.sendKeys(pass);
    }
    async DOB(dob){
        await this.enter_DOB.sendKeys(dob)
    }

}
class clickActions{
    click_checkBox=$("input[type='checkbox']");
    select_Gender = element.all(by.tagName("option"));
    submit_btn=element(by.buttonText("Submit"));
    async checkBoxClick(){
        this.click_checkBox.click();
    }
    async SelectGender(gender_types) {
        this.select_Gender.each(async (items)=>{
            let values=await items.getText();
            if(values===gender_types){
                items.click();
            }
        })
    }
    async submitButton(){
        await this.submit_btn.click();
    }
}

class error_validation{
    name_field_error_msg=element(by.xpath("(//div[contains(@class,'alert')])[1]"));
    email_field_error_msg=element(by.xpath("(//div[contains(@class,'alert')])[2]"));
    async name_field_error_message(){
        let text=await this.name_field_error_msg.getText();
            if (text === "Name should be at least 2 characters") {
                return true;
            } else if (text === "Name is required") {
                return true;
            }
        }
    async email_field_error_message(){
        let text=await this.email_field_error_msg.getText();
            expect(text).toBe("Email is required");
        }
    }

class Assertions{
    verify_checkbox=$("label[for='exampleCheck1']");
    verify_radioBtn_names=$$("div[class*='form-check-inline'] label");
    verify_radioBtn=$("input[disabled]");
    success_msg=$("div strong");

    async checkBoxText(){
        let text=await this.verify_checkbox.getText();
        expect(text).toBe("Check me out if you Love IceCreams!");
    }
    async radioBtn_names(status_of_employment){
        await this.verify_radioBtn_names.each(async (status)=>{
            let text=await status.getText();
            if(text===status_of_employment){
                console.log(text);
                status.click();
            }
        })
    }
    async verify_disabled_radioBtn(){
        let isEnable=await this.verify_radioBtn.isEnabled();
        expect(isEnable).toBe(false);
    }

    async verify_success_message(){
        let successMessage=await this.success_msg.getText();
        expect(successMessage).toBe("Success!");
    }
}

exports.Inputs=Inputs;
exports.clickActions=clickActions;
exports.error_validation=error_validation;
exports.Assertions=Assertions;