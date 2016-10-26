'use strict'


var assert = require('assert');
var request = require('supertest');
var app = require('../server');


describe('App', function() {
  it('should return OK status for "/" path', function(done) {
      request(app).get('/')
        .expect(200)
        .end(done);
  });
  it('should return 404 status for "/no-exist-path" path', function(done) {
      request(app).get('/no-exist-path')
        .expect(404)
        .end(done);
  });

});
