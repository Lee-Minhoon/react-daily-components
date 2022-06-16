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
var time_1 = require("../../../types/time");
var Style = require("../style");
var TimeType = function (_a) {
    var timeTypeRef = _a.timeTypeRef, timeType = _a.timeType, setTimeType = _a.setTimeType, height = _a.height, listStyle = _a.listStyle, itemStyle = _a.itemStyle;
    return ((0, jsx_runtime_1.jsx)(Style.List, __assign({ ref: timeTypeRef, style: listStyle }, { children: Object.values(time_1.TIME_TYPE).map(function (item, index) { return ((0, jsx_runtime_1.jsx)(Style.Item, __assign({ isSelected: timeType === item, height: height, onClick: function () { return setTimeType(item); }, style: itemStyle }, { children: item }), index)); }) })));
};
exports.default = TimeType;
