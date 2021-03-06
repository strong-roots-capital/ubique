/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
/**
 * @method dot
 * @summary Arrays dot product X * Y
 * @description Arrays dot product X * Y. X and Y must be arrays of the same length
 * 
 * @param  {array} x number or array of values
 * @param  {array} y number or array of values
 * @return {array}   
 *
 * @example
 * ubique.dot([5,6,3],[0.5,-3,2.3]);
 * // -8.6
 */
 $u.dot = function(x,y) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
    if ($u.size(x)[0] !== $u.size(y)[0] || $u.size(x)[1] !== $u.size(y)[1]) {
    	throw new Error('input size mismatch');
    }
    return $u.sum($u.times(x,y));
 }
}
