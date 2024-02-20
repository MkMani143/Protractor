const {Inputs, clickActions, error_validation, Assertions} = require("./form_datas");

const inputs=new Inputs();
const Actions=new clickActions();
const err_validation=new error_validation();
const assertions=new Assertions();

describe('Sample Project', ()=>{

    beforeAll(async ()=>{
        await inputs.URL();
    })

    it('Form validation', async () =>{
        let nameValue="M"
        let emailValue="m"
        await inputs.name(nameValue);
        await inputs.email(emailValue);
        if(nameValue.length<2) {
            await err_validation.name_field_error_message();
        }
        await inputs.enter_name.clear();
        await inputs.enter_email.clear();
        await inputs.password("12345");
        if(emailValue.length==null) {
            await err_validation.email_field_error_message();
        }
        nameValue="";
        emailValue="mk@gmail.com";
        await inputs.name(nameValue);
        await inputs.email(emailValue);
        if(nameValue.length<2) {
            await err_validation.name_field_error_message();
        }
        await inputs.password("12345");
        if(emailValue.length==null) {
            await err_validation.email_field_error_message();
        }
        nameValue="MK";
        await inputs.name(nameValue);
        await inputs.email(emailValue);
        if(nameValue.length<2) {
            await err_validation.name_field_error_message();
        }
        await inputs.password("12345");
        if(emailValue.length==null) {
            await err_validation.email_field_error_message();
        }
        await assertions.checkBoxText();
        await Actions.checkBoxClick();
        await Actions.SelectGender("Male");
        await assertions.radioBtn_names("Employed");
        await assertions.verify_disabled_radioBtn();
        await inputs.DOB("09232001");
        await Actions.submitButton();
        await assertions.verify_success_message();
        await browser.sleep(5000);

    })
})