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
var time_1 = require("../../../types/time");
var Hour = function (_a) {
    var hourRef = _a.hourRef, hour = _a.hour, setHour = _a.setHour, is24Hour = _a.is24Hour, height = _a.height, listStyle = _a.listStyle, itemStyle = _a.itemStyle;
    return ((0, jsx_runtime_1.jsx)(Style.List, __assign({ ref: hourRef, style: listStyle }, { children: (is24Hour ? Array.from(new Array(24)) : time_1.HOURS).map(function (item, index) { return ((0, jsx_runtime_1.jsx)(Style.Item, __assign({ isSelected: is24Hour ? hour === index : hour === item, height: height, onClick: function () { return setHour(is24Hour ? index : item); }, style: itemStyle }, { children: is24Hour ? index : item }), index)); }) })));
};
exports.default = Hour;
