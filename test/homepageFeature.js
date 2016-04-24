var chai = require('chai');
var expect = chai.expect;

describe('homepage', function() {
  it('says hello world', function(done) {
    browser.url('http://localhost:3000');
    browser.getText('body', function(err, text) {
        expect(text).to.equal('Hello world');
      });
    browser.call(done);
  });
});
