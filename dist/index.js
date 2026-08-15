/** @license Apache-2.0 */

'use strict';

/**
* Return the index of the first element in a one-dimensional ndarray equal to a corresponding element in another one-dimensional ndarray.
*
* @module @stdlib/blas-ext-base-ndarray-gfirst-index-equal
*
* @example
* var vector = require( '@stdlib/ndarray-vector-ctor' );
* var gfirstIndexEqual = require( '@stdlib/blas-ext-base-ndarray-gfirst-index-equal' );
*
* var x = vector( [ 1.0, 2.0, 3.0, 4.0 ], 'generic' );
* var y = vector( [ 0.0, 0.0, 3.0, 0.0 ], 'generic' );
*
* var idx = gfirstIndexEqual( [ x, y ] );
* // returns 2
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
