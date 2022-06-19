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
var Background = function (_a) {
    var children = _a.children, _b = _a.isFullScreen, isFullScreen = _b === void 0 ? true : _b, _c = _a.isBlockedBackground, isBlockedBackground = _c === void 0 ? true : _c, _d = _a.backgroundColor, backgroundColor = _d === void 0 ? "rgba(0, 0, 0, 0.2)" : _d;
    return ((0, jsx_runtime_1.jsx)(Style.Background, __assign({ backgroundColor: backgroundColor, isBlockedBackground: isBlockedBackground, isFullScreen: isFullScreen }, { children: children })));
};
exports.default = Background;
