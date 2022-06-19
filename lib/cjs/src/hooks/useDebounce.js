"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var uesDebounce = function (callback, timeout) {
    var timerRef = (0, react_1.useRef)(null);
    return function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        if (timerRef.current)
            clearTimeout(timerRef.current);
        timerRef.current = setTimeout(function () {
            callback.apply(void 0, params);
            timerRef.current = null;
        }, timeout);
    };
};
exports.default = uesDebounce;
