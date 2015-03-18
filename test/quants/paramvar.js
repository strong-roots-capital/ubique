var assert = require('assert');
var ubique = require('../../index.js');

suite('quants',function () {
console.log('Testing quants/paramvar ...');
test('paramvar', function (done) {

var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];

assert.deepEqual(ubique.paramvar(0,1),1.6448536127562643);
assert.deepEqual(ubique.paramvar([0,0,0],[1,2,3]),[1.6448536127562643,3.2897072255125286,4.934560838268792]);
assert.deepEqual(ubique.paramvar([[0,0]],[[1,2]]),[[1.6448536127562643,3.2897072255125286]]);
assert.deepEqual(ubique.paramvar([[0],[0]],[[1],[2]]),[[1.6448536127562643],[3.2897072255125286]]);
assert.deepEqual(ubique.paramvar(ubique.mean(x),ubique.std(x)),0.020310751505285517);
assert.deepEqual(ubique.paramvar(ubique.mean(y),ubique.std(y)),0.0742687597789849);
assert.deepEqual(ubique.paramvar(ubique.mean(ubique.cat(1,x,y)),ubique.std(ubique.cat(1,x,y))),[[0.020310751505285517,0.0742687597789849]]);
assert.deepEqual(ubique.paramvar(ubique.mean(ubique.cat(1,x,y)),ubique.std(ubique.cat(1,x,y)),0.99,100000,10),[[11429.165523489319,34867.31907185905]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->