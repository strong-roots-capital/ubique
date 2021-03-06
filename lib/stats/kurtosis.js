/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method kurtosis
 * @summary Kurtosis
 * @description Kurtosis
 * 
 * @param  {array|matrix} x array or matrix of elements
 * @param  {number} flag 0: bias correction, 1: simple (def: 1)
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|array|matrix}
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * 
 * ubique.kurtosis(x);
 * // 3.037581
 * 
 * ubique.kurtosis(ubique.cat(0,x,y));
 * // [ [ 3.037581 ], [ 1.397642 ] ]
 */
 $u.kurtosis = function(x,flag,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
  flag = flag == null ? 1 : flag;
  dim  = dim == null ? 0 : dim;

  var _kurtosis = function(a,flag) {
    var n = a.length;
    var mom4 = $u.moment(a,4) / Math.pow($u.moment(a,2),2);
    return flag === 1 ? mom4: ((n + 1) * mom4 - 3 * (n - 1)) * (n - 1) / ((n - 2) *(n - 3)) + 3;
  }
  if ($u.isnumber(x)) {
   return NaN;
 }
 return $u.vectorfun(dim,x,_kurtosis,flag);
}

}