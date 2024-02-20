

function calc(){

        this.getURL=browser.get("http://juliemr.github.io/protractor-demo/");
        this.win_maximize=browser.manage().window().maximize();

        this.firstInput=element(by.model('first'));
        this.secondInput=element(by.model('second'));
        this.operator_type=element.all(by.tagName("option"));
        this.gobtn=element(by.id("gobutton"));

        this.get_result=element(by.css("h2[class='ng-binding']"));
        this.get_count=element.all(by.repeater("result in memory"));
}


module.exports = new calc();