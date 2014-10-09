
window.infrastructure = window.infrastructure || {};

window.infrastructure.externalService = (function (straw) {
    'use strict';

    var APP_URL = 'https://www.apple.com/';

    var exports = {};

    exports.openMarketLink = function () {

        straw.service.browser.openURL(APP_URL);

    };

    return exports;

}(window.straw));
