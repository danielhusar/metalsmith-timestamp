'use strict';

var assert = require('assert');
var Metalsmith = require('metalsmith');
var timestamp = require('../');

it('should add timestamp to html file', function (cb) {
	function test () {
	  return function (files, metalsmith, done) {
	  	var file = files['index.html'].contents.toString();
	  	assert(!!file.match(/<!-- Genarated on:/));
	  	done();
	  }
	}

  Metalsmith('test/fixtures/html')
    .use(timestamp())
    .use(test())
    .build(function (err) {
    	if (err) {
    		throw err;
    	}
    	cb();
    });
});

