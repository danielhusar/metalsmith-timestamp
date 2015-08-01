'use strict';

var minimatch = require('minimatch');

function timestamp (opts) {
	var opts = opts || {};

	return function (files, metalsmith, done) {
		var data;
		Object.keys(files).filter(minimatch.filter('*.html', { matchBase: true })).forEach(function (file, index, arr) {
			data = files[file];
			data.contents = new Buffer(data.contents.toString() + '\r\n<!-- Genarated on: '+ new Date() +' -->');
		});
		done();
	}
}

module.exports = timestamp;
