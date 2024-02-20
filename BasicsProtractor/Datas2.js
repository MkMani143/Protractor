
class calculator{

    headerText=element(by.tagName("h3"));
    firstInput=element(by.model('first'));
    secondInput=element(by.model('second'));
    operatorType=element.all(by.tagName("option"));
    gobtn=element(by.id("gobutton"));
    get_result=element(by.css("h2[class='ng-binding']"));
    get_count=element.all(by.repeater("result in memory"));
    async header(){
        await this.headerText.getText();
    }
    async FirstInput(num1){
        await this.firstInput.sendKeys(num1);
    }
    async SecondInput(num2){
        await this.secondInput.sendKeys(num2);
    }
    async Sel_operatorType(operator_type){
        await this.operatorType.each(async (item)=>{
            let values = await item.getAttribute("value");
            if(values === operator_type){
                item.click();
            }
        })
    }
    async goBtn(){
        await this.gobtn.click();
    }
    async Get_result(){
        await this.get_result.getText().then(function (text) {
            // expect(text).toBe("5");
            // expect(text).toEqual("5");
            console.log(text);
            console.log(typeof (text));

            //Jasmine takes care of promise resolve
            // expect(element(by.binding("latest")).getText()).toEqual("5");
        })
    }
    async Get_count(){
        await this.get_count.count().then((count)=>{
            console.log(count);
        })
    }
    async Get_Result_from_list(){
        this.get_count.each(async (items)=>{
            await items.element(by.css("td:nth-child(3)")).getText()
                .then((text) => {
                    console.log(text);

                })
        })
    }
    async URL(){
        this.getURL=browser.get("http://juliemr.github.io/protractor-demo/");
        this.win_maximize=browser.manage().window().maximize();
    }


}

exports.calculator=calculator;
