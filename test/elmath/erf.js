var assert = require('assert');
var ubique = require('../../index.js');

suite('elmath',function () {
console.log('Testing elmath/erf ...');
test('erf', function (done) {



assert.deepEqual(ubique.erf(0.5),0.5204999077232426);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->