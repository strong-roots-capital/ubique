/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method  moment
 * @summary Central moments
 * @description Central moments. First moment is zero, second is variance.
 * 
 * @param  {array|matrix} x array or amatrix of elements
 * @param  {number} k k-th central sample moment
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array|matrix}
 *
 * @example
 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var z = ubique.cat(1,x,y);
 * 
 * ubique.moment(x,3); // 6.60941e-6
 * ubique.moment(x,1); // 0
 * ubique.moment(z,2); // [[4.8569e-4, 0.00251024]]
 */
 $u.moment = function(x,k,dim) {
 	if (arguments.length < 2) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 2) {
 		dim = 1;
 	}
 	var _moment = function(a,k) {
 		var mu = $u.mean(a);
 		return $u.mean(a.map(function(b) {return Math.pow(b - mu,k)}));
 	}
 	if ($u.isnumber(x)) {
 		return 0;
 	}
 	if ($u.isarray(x)) {
 		return _moment(x,k);
 	}
 	return $u.vectorfun(x,function(val){return _moment(val,k);},dim); 

 }

}