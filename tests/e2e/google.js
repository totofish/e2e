const { imgSavePath } = require('./utility');

const imgPath = (client) => {
  this.fileCount = typeof this.fileCount === 'number' ? this.fileCount + 1 : 0;
  const filename = __filename.replace(/.js$/i, '').split('/')
  return imgSavePath(client, filename.pop(), this.fileCount)
};


describe('Google test for Mocha', () => {

  describe('with Nightwatch', () => {

    // before(function(client, done) {
    //   done();
    // });

    // after(function(client, done) {
    //   client.end(function() {
    //     done();
    //   });
    // });

    // afterEach(function(client, done) {
    //   done();
    // });

    // beforeEach(function(client, done) {
    //   done();
    // });

    it('uses BDD to run the Google simple test', (client) => {
      client
        .url('http://google.com')
        .expect.element('body').to.be.present.before(1000);

      client.setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
        .saveScreenshot(imgPath(client))
        .pause(1000)
        .saveScreenshot(imgPath(client))
        .assert.containsText('#main', 'Night Watch')
        .end();
    });
  });
});


/*
module.exports = {
  'Test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .saveScreenshot(imgPath(browser))
      // .pause(1000)
      // .waitForElementVisible('input[name=btnK]', 1000)
      // .click('input[name=btnK]')
      // .pause(1000)
      // .assert.containsText('#main', 'Night Watch')
      // .saveScreenshot(imgPath(browser))
      .end();
  }
};
*/