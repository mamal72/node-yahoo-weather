import http from 'http';

function promisedGet(uri) {
  return new Promise((res, rej) => {
    http.get(uri, response => {
      let body = '';
      response.on('data', data => {
        body += data;
      });
      response.on('end', () => {
        res(JSON.parse(body).query.results.channel);
      });
    }).on('error', e => {
      rej(e);
    });
  });
}

function getQueryUri(q) {
  const queryUri = `http://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where u='c' AND woeid in (select woeid from geo.places(1) where text="${q}")&format=json`;
  return queryUri;
}

export default function getWeather({ q }) {
  const queryUri = getQueryUri(q);
  return promisedGet(queryUri);
}
