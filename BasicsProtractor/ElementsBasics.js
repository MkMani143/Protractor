


describe('Elements Basics', ()=> {
    var obj=require("./Datas");

    beforeAll(()=>{
        obj.getURL;
        obj.win_maximize;
    })
    function calculations(first, operator_type, second){
        obj.firstInput.sendKeys(first);
        obj.secondInput.sendKeys(second);
        // element(by.model("operator")).click()
        obj.operator_type.each(async (item)=>{
            let values = await item.getAttribute("value");
            if(values === operator_type){
                item.click();
            }
        })
        obj.gobtn.click();
    }

    // function sample(first, operator_type_or_num, second) {
    // element(by.model('first')).sendKeys(first);
    // element(by.model('second')).sendKeys(second);
    // element(by.model("operator")).click()
    // if (typeof operator_type_or_num === "number"){
    //     element(by.css("option:nth-child("+operator_type_or_num+")")).click();
    // }
    // else{
    //     element(by.css("option[value="+operator_type_or_num.toUpperCase()+"]")).click();
    // }
    // .element(by.css("option[value='MULTIPLICATION']")).click();
    // .element(by.css("option:nth-child("+operator_type_or_num+")")).click();
    // element(by.id("gobutton")).click();
    // }

    it('Protractor Demo App', () => {

        calculations(2, "ADDITION", 3);

        obj.get_result.getText().then(function (text) {
            expect(text).toBe("5");
            expect(text).toEqual("5");
            console.log(text);
            console.log(typeof (text));

            //Jasmine takes care of promise resolve
            // expect(element(by.binding("latest")).getText()).toEqual("5");
        })

        // var options = element.all(by.options('value for (key, value) in operators'));
        // options.click();
        // expect(options.count()).toBe(5);
        // options.first().click();

        calculations(2, "MULTIPLICATION", 3);

        // expect(element(by.binding("latest")).getText()).toEqual('6');
        obj.get_result.getText().then(function (text) {
            expect(text).toBe("6");
            console.log(text);
        })

        obj.get_count.count().then((count)=>{
            console.log(count);
        })

        obj.get_count.each((items)=>{
            items.element(by.css("td:nth-child(3)")).getText()
                .then((text) => {
                    console.log(text);

                })
        })

    })
})