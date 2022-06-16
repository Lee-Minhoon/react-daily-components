"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var Style = require("../style");
var Seconds = function (_a) {
    var secondsRef = _a.secondsRef, seconds = _a.seconds, setSeconds = _a.setSeconds, height = _a.height, listStyle = _a.listStyle, itemStyle = _a.itemStyle;
    return ((0, jsx_runtime_1.jsx)(Style.List, __assign({ ref: secondsRef, style: listStyle }, { children: Array.from(new Array(60)).map(function (item, index) { return ((0, jsx_runtime_1.jsx)(Style.Item, __assign({ isSelected: seconds === index, height: height, onClick: function () { return setSeconds(index); }, style: itemStyle }, { children: index }), index)); }) })));
};
exports.default = Seconds;
