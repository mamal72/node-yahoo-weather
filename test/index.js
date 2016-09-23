/* eslint-env mocha */

import chai from 'chai';
import yahooWeather from '../';

chai.should();

describe('Node Yahoo Weather Tests', () => {
  describe('# valid query', () => {
    let response;
    before(done => {
      yahooWeather('mashhad').then(res => {
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

  describe('# invalid query', () => {
    let response;
    before(done => {
      yahooWeather(null).then(res => {
        response = res;
        done();
      }).catch(err => {
        throw err;
      });
    });

    it('Should return null', () => chai.expect(response).to.be.null);
  });
});
