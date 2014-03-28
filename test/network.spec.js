/*!
 * Network unit tests
 */

/**
 * Module Dependencies
 */

var test = require('tape'),
    sinon = require('sinon'),
    Network = require('../index'),
    sandbox,
    network;

/**
 * Setup
 */

var setup = function (t) {
  sandbox = sinon.sandbox.create();
};

/**
 * Teardown
 */

var teardown = function (t) {
  sandbox.restore();
};

/**
 * Network Class
 */

test('Network', function (t) {
  t.plan(1);
  t.ok(Network, 'class should exist');
});