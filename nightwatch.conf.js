const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");
const geckodriver = require("geckodriver");
const phantomjs = require('phantomjs-prebuilt')
const electron = require('electron-prebuilt');


module.exports = {
  "src_folders": ["tests/e2e"],
  "output_folder": "tests/e2e/reports",
  "test_runner": {
    "type": "mocha",
    "options": {
      "ui": "bdd",
      "reporter": "list"
    }
  },
  "selenium": {
    "start_process": true,
    "server_path": seleniumServer.path,
    "log_path": "tests/e2e/logs",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.gecko.driver" : geckodriver.path, 
      // "webdriver.firefox.profile" : geckodriver.path,
      "webdriver.chrome.driver" : chromedriver.path,
      "webdriver.ie.driver" : ""
    }
  },
  "test_settings": {
    "default": {
      "screenshots": {
        "enabled": true,
        "path": "./tests/e2e/screenshots/"
      },
      "desiredCapabilities": {
              
      },
      "exclude" : "./node_modules/*"
    },
    "phantomjs": {
      "desiredCapabilities" : {
        "browserName" : "phantomjs",
        "javascriptEnabled" : true,
        "acceptSslCerts" : true,
        "phantomjs.binary.path" : "node_modules/phantomjs-prebuilt/bin/phantomjs",
        // "phantomjs.binary.path" : phantomjs.path,
        "phantomjs.cli.args" : ["--ignore-ssl-errors=true", "--web-security-false"],
        "phantomjs.page.settings.userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/52.0.2743.116 Chrome/52.0.2743.116 Safari/537.36"
      }
    },
    "firefox" : {
      "desiredCapabilities": {
        "browserName": "firefox",
        "javascriptEnabled": true,
        "acceptSslCerts": true,
        "marionette": true
      }
    },
    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true,
        "chromeOptions": {
          "args" : ["--headless", "--disable-web-security"]
        }
      }
    },
    "electron" : {
      "desiredCapabilities": {
        "browserName": "electron",
        "javascriptEnabled": true,
        "acceptSslCerts": true,
        "chromeOptions": {
          "binary": electron
        }
      }
    },
    "safari" : {
      "desiredCapabilities" : {
        "browserName" : "safari",
        "javascriptEnabled" : true,
        "acceptSslCerts" : true
      }
    }
  }
}
