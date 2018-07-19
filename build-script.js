const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    
    const files = [
        './dist/ng-elements-demo/runtime.js',
        './dist/ng-elements-demo/polyfills.js',
        './dist/ng-elements-demo/main.js'
    ]

    await fs.ensureDir('elements');

    await concat(files, 'elements/ng-elements.js');
})();