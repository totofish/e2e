const { imgSavePath } = require('./utility');

const imgPath = (client) => {
  this.fileCount = typeof this.fileCount === 'number' ? this.fileCount + 1 : 0;
  const filename = __filename.replace(/.js$/i, '').split('/')
  return imgSavePath(client, filename.pop(), this.fileCount)
};


describe('104 test for Mocha', () => {
  describe('with Nightwatch', () => {
    it('uses BDD to run test', (client) => {
      client
        .url('https://www.104.com.tw')
        .expect.element('body').to.be.present.before(1000);

      client
        .saveScreenshot(imgPath(client))
        .end();
    });
  });
});


/*
module.exports = {
  'Test 014' : function (browser) {
    browser
      .url('https://www.104.com.tw')
      .waitForElementVisible('body', 1000)
      .saveScreenshot(imgpath(browser))
      .end();
  }
};
*/