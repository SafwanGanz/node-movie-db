"use strict";

var movieData = require('./movies.json');

function isNumeric(num) {
    return !isNaN(num);
}

module.exports = {
    lookup: function lookup(movie) {
        if (isNumeric(movie)) {
            if (typeof movie === 'string') {
                return movieData.filter(function(e) {
                    return e.movie === +movie;
                });
            } else if (typeof movie === 'number') {
                return movieData.filter(function(e) {
                    return e.movie === movie;
                });
            }
        } else {
            var regex = RegExp(movie, 'i');
            return movieData.filter(function(e) {
                return e.movieName.match(regex);
            });
        }
    }
}
