/**
 * Sorting and Reshaping Arrays
 */
 module.exports = function($u) {
/**
 * @method flatten
 * @summary Flatten a matrix
 * @description Flatten a matrix and returns an array. The concatenation is made by columns (default)
 * 
 * @param  {matrix} x matrix of elements
 * @param  {number} dim dimension selected, 1: column 0: row (def: 0)
 * @return {array}  
 *
 * @example
 * ubique.flatten([[5,6],[7,8]]);
 * // [ 5, 7, 6, 8 ]
 *
 * // flatten by rows
 * ubique.flatten([[1,1,-1],[1,-2,3],[2,3,1]]);
 * // [ 1, 1, -1, 1, -2, 3, 2, 3, 1 ]
 *
 * // flatten by columns
 * ubique.flatten([[1,1,-1],[1,-2,3],[2,3,1]],1);
 * // [ 1, 1, 2, 1, -2, 3, -1, 3, 1 ]
 * 
 */
 $u.flatten = function(x,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	dim = dim == null ? 0 : dim;
 	if ($u.isnumber(x) || $u.isarray(x)) {
 		return x;
 	}
 	if ($u.ismatrix(x)) {
 		if (dim === 1) {
 			x = $u.transpose(x);
 		}
 		x = Array.prototype.concat.apply([], x);
 		if (x.some(Array.isArray)) {
 			return this.flatten(x);
 		} else {
 			return x;
 		}
 	} else {
 		throw new Error('unknown input arguments');
 	}
 }
}