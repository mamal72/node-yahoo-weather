'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWeather;

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function promisedGet(uri) {
  return new Promise(function (res, rej) {
    _http2.default.get(uri, function (response) {
      var body = '';
      response.on('data', function (data) {
        body += data;
      });
      response.on('end', function () {
        res(JSON.parse(body).query.results.channel);
      });
    }).on('error', function (e) {
      rej(e);
    });
  });
}

function getQueryUri(q) {
  var queryUri = 'http://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where u=\'c\' AND woeid in (select woeid from geo.places(1) where text="' + q + '")&format=json';
  return queryUri;
}

function getWeather(_ref) {
  var q = _ref.q;

  var queryUri = getQueryUri(q);
  return promisedGet(queryUri);
}
module.exports = exports['default'];