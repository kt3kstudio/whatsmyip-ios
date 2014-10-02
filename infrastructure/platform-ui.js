
window.infrastructure = window.infrastructure || {};

window.infrastructure.platformUI = (function (straw) {
    'use strict';

    var exports = {};

    exports.toast = function (text) {

        straw.service.toast.toast(text);

    };

    return exports;

}(window.straw));
