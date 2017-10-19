"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtils = (function () {
    function StringUtils() {
    }
    StringUtils.cleanUp = function (str) {
        return str.replace(/[^a-zA-Z0-9]+/g, "");
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;
