/* eslint-env mocha */

import chai from 'chai';
import yahooWeather from '../';

chai.should();

describe('Node Yahoo Weather Tests', () => {
  let response;
  before(done => {
    yahooWeather({q: 'mashhad'}).then(res => {
      response = res;
      done();
    }).catch(err => {
      throw err;
    });
  });

  it('Should return a json object for weather requests', () => {
    response.should.be.an('object');
  });
});
