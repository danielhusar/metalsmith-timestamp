'use strict';

var strftime = require('strftime');
var minimatch = require('minimatch');
var objectAssign = require('object-assign');

var defaults = {
	format: '%d %B %Y %H:%M:%S'
};

function timestamp (opts) {
	var opts = objectAssign(defaults, opts);

	return function (files, metalsmith, done) {
		var data;
		Object.keys(files).filter(minimatch.filter('*.html', { matchBase: true })).forEach(function (file, index, arr) {
			data = files[file];
			data.contents = new Buffer(data.contents.toString() + '\r\n<!-- Genarated on: '+ strftime(opts.format) +' -->');
		});
		done();
	}
}

module.exports = timestamp;
