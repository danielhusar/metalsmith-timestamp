'use strict';

var assert = require('assert');
var Metalsmith = require('metalsmith');
var strftime = require('strftime');
var timestamp = require('./');
var test;

function run (opts, cb) {
	Metalsmith('fixtures/html')
	.use(timestamp(opts || {}))
	.use(test())
	.build(function (err) {
		if (err) {
			throw err;
		}
		cb();
	});
}

it('should add timestamp to html file', function (cb) {
	test = function () {
		return function (files, metalsmith, done) {
			var file = files['index.html'].contents.toString();
			assert(!!file.match(/<!-- Generated on:/));
			done();
		}
	};

	run({}, cb);
});

it('should add timestamp to html file with custom time format', function (cb) {
	test = function () {
		return function (files, metalsmith, done) {
			var file = files['index.html'].contents.toString();
			var regexp = new RegExp('<!-- Generated on: '+ strftime('%Y') +' -->');
			assert(!!file.match(regexp));
			done();
		}
	};

	run({
		format: '%Y'
	}, cb);
});

