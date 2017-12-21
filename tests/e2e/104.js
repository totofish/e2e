function padLeft(count) { // theregister.co.uk/2016/03/23/npm_left_pad_chaos/
  return count < 10 ? '0' + count : count.toString();
}
var FILECOUNT = 0;

function imgpath(browser) {
  let a = browser.options.desiredCapabilities;
  let meta = [a.platform];
  meta.push(a.browserName ? a.browserName : 'any');
  meta.push(a.version ? a.version : 'any');
  meta.push(a.name);
  let metadata = meta.join('-').toLowerCase().replace(/ /g, '');
  return './tests/e2e/screenshots/' + metadata + '_' + padLeft(FILECOUNT++) + '.png';
};

module.exports = {
  'Test 014' : function (browser) {
    browser
      .url('https://www.104.com.tw')
      .waitForElementVisible('body', 1000)
      .saveScreenshot(imgpath(browser) + '.png')
      .end();
  }
};