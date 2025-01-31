/**
 * vSphere Schema - schema definitions for vSphere objects in JSON format
 * 
 * @author Branden Horiuchi <bhoriuchi@gmail.com>
 * @license MIT
 * 
 */

var _ = require('lodash');
var promise = require('bluebird');


// create the environment hash
var env = {
	lodash   : _,
	versions : {}
};

// require all versions
env.versions = require('./versions')(env);

//require the utils
env.utils    = require('./utils')(env);

// build a module
var schema   = {
	env         : env,
	utils       : env.utils,
	hasProperty : env.utils.hasProperty,
	getProperty : env.utils.getProperty,
	versions    : env.versions,
	'2.5'       : env.versions['2.5'],
	'4.0'       : env.versions['4.0'],
	'4.1'       : env.versions['4.1'],
	'5.0'       : env.versions['5.0'],
	'5.1'       : env.versions['5.1'],
	'5.5'       : env.versions['5.5'],
	'6.0'       : env.versions['6.0']
};


// export the module
module.exports = schema;
