
describe('Interact with Inputs', ()=> {

    beforeAll(()=>{
        browser.manage().window().maximize()
        browser.get("https://letcode.in/edit")
    })

    it("Enter your full Name", ()=> {
        element(by.id("fullName")).sendKeys("Manikandan");
    })

    it("Append a text and press keyboard tab", async ()=>{
        element(by.id("join")).sendKeys(" Person", protractor.Key.TAB);
        console.log(await element(by.id("join")).getAttribute("value"));
    })

    it("What is inside the text box", async ()=>{
        let value=await element(by.id("getMe")).getAttribute("value");
        console.log(value);
    })

    it("Clear the text", ()=> {
        element(by.id("clearMe")).clear();
    })

    it("Confirm edit field is disabled", ()=> {
        let isEnabled=element(by.id("noEdit")).isEnabled();
        expect(isEnabled===false);
    })

    it("Confirm the text", async ()=> {
        let text=await element(by.id("dontwrite")).getAttribute("value");
        console.log(text);
        expect(text=="This text is readonly");
    })


})