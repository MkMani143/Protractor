exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    // specs: ['spec.js'],
    specs: ['ElementsBasics.js', 'ElementsBasics2.js']
};