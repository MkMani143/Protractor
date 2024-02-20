describe('Protractor Basics', function() {
    it('open application', async function() {
        // browser.get('https://angularjs.org');
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.manage().window().maximize();
        expect(await browser.getTitle()).toEqual('Super Calculator');
        console.log("Protractor Basics");



    });
});

// console.log("Protractor Basics");