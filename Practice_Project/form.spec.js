
describe('Sample Project', ()=>{
    var obj=require("./form_datas");

    beforeAll(()=>{
        obj.getURL;
        obj.win_maximize;
    })

    async function inputs_for_validation(name, email, password){
        await obj.enter_name.sendKeys(name);
        await obj.enter_email.sendKeys(email);
        if(name.length<2) {
            await obj.name_field_error_msg();
        }
        await obj.enter_name.clear();
        await obj.enter_email.clear();
        await obj.enter_password.sendKeys(password);
        if(email.length==null) {
            await obj.email_field_error_msg();
        }
    }
    async function correctInputs(name, email, password, gender_types, status_of_employment){
        await obj.enter_name.sendKeys(name);
        await obj.enter_email.sendKeys(email);
        await obj.enter_password.sendKeys(password);
        let text=await obj.verify_checkbox.getText();
        expect(text).toBe("Check me out if you Love IceCreams!");
        await obj.click_checkBox.click();
        await obj.selectGender.each(async (items)=>{
            let values=await items.getText();
            if(values===gender_types){
                items.click();
            }
        })
        await obj.verify_radioBtn_names.each(async (status)=>{
            var text=await status.getText();
            if(text===status_of_employment){
                console.log(text);
                status.click();
            }
        })
        let isEnable=await obj.click_radioBtn.isEnabled();
        expect(isEnable).toBe(false);
        await obj.enter_DOB.sendKeys("09232001")
        await obj.submit_btn.click();
    }

    it('Form validation', async () =>{

        await inputs_for_validation("M", "m", "12345");
        await inputs_for_validation("", "mk@gmail.com", "12345");
        await correctInputs("MK", "mk@gmail.com", "12345", "Male", "Employed");
        let successMessage=await obj.success_msg.getText();
        expect(successMessage).toBe("Success!");
        browser.sleep(2000);

    })
})