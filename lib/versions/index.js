/**
 * vSphere Schema - schema definitions for vSphere objects in JSON format
 * 
 * @author Branden Horiuchi <bhoriuchi@gmail.com>
 * @license MIT
 * 
 */


module.exports = function(env) {
	
	env.versions['2.5'] = require('./2.5')();
	env.versions['4.0'] = require('./4.0')();
	env.versions['4.1'] = require('./4.1')();
	env.versions['5.0'] = require('./5.0')();
	env.versions['5.1'] = require('./5.1')();
	env.versions['5.5'] = require('./5.5')();
	env.versions['6.0'] = require('./6.0')();
	
	// return the version hash
	return env.versions;
};