function padLeft(count) {
  return count < 10 ? '0' + count : count.toString();
}

module.exports.imgSavePath = function imgSavePath(browser, filename, fileCount) {
  let a = browser.options.desiredCapabilities;
  let meta = [];
  if (a.platform) meta.push(a.platform);
  if (a.browserName) meta.push(a.browserName);
  if (a.version) meta.push(a.version);
  if (a.name) meta.push(a.name);
  let metadata = meta.join('-').toLowerCase().replace(/ /g, '');
  return `${browser.options.screenshotsPath}${metadata}_${filename}_${padLeft(fileCount)}.png`;
};