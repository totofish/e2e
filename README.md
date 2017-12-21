# Travis CI + nightwatch &middot; [![Build Status](https://travis-ci.org/totofish/e2e.svg?branch=master)](https://travis-ci.org/totofish/e2e)

Travis CI 尚無法直接運行 GUI 軟體，所以測試 e2e 時需使用 `headless` 瀏覽器，或是使用 `xvfb` (X Virtual Framebuffer) 來跑。

[官方說明](https://docs.travis-ci.com/user/gui-and-headless-browsers/#Using-PhantomJS)
