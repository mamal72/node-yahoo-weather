'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWeather;

require('isomorphic-fetch');

function getWeather(query) {
  var unit = arguments.length <= 1 || arguments[1] === undefined ? 'c' : arguments[1];

  var queryUri = 'http://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where u=\'' + unit + '\' AND woeid in (select woeid from geo.places(1) where text="' + query + '")&format=json';
  return fetch(queryUri).then(function (response) {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return response.json();
  }).then(function (json) {
    return json.query.results.channel;
  });
}
module.exports = exports['default'];
