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
var Style = require("./style");
var Word = function (_a) {
    var children = _a.children, _b = _a.fontSize, fontSize = _b === void 0 ? 16 : _b, _c = _a.textColor, textColor = _c === void 0 ? "gray" : _c, textStyle = _a.textStyle;
    return ((0, jsx_runtime_1.jsx)(Style.Word, __assign({ fontSize: fontSize, textColor: textColor, style: textStyle }, { children: children })));
};
exports.default = Word;