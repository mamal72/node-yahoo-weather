import fetch from 'isomorphic-fetch';

export default function getWeather(location, unit = 'c') {
  const queryUri = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where u='${unit}' AND woeid in (select woeid from geo.places(1) where text="${location}")&format=json`;
  return fetch(queryUri).then((response) => {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return response.json();
  }).then(json => json.query.results === null ? null : json.query.results.channel);
}
