
window.infrastructure = window.infrastructure || {};

window.infrastructure.storage = (function (Promise, localStorage) {
    'use strict';

    var exports = {};

    exports.get = function (key, defaultValue) {

        var value = localStorage[key];

        if (value == null) {
            return Promise.resolve(defaultValue);
        }

        return Promise.resolve(JSON.parse(value));
    };

    exports.set = function (key, value) {

        localStorage[key] = JSON.stringify(value);

        return Promise.resolve(true);

    };

    return exports;

}(window.Promise, window.localStorage));
