'use strict';

var app = require('../src/app.js').app;

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports['app'] = {
    setUp: function (done) {
        // setup here
        done();
    },
    'test1': function (test) {
        test.expect(2);
        // tests here
        test.notEqual(app, null);
        test.ok(app.toots);
        test.done();
    }
};

