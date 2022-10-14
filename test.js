"use strict";

var assert = require('assert');
var moviesDirectory = require('./index.js')

assert.deepStrictEqual(moviesDirectory.lookup('The Amazing Spider-Man'), [{
  movieName: 'The Amazing Spider-Man',
  rating: '6.6/10',
  releasedDate: 2014,
  fileSize: '1.8 GB',
  link: ''
}]);
