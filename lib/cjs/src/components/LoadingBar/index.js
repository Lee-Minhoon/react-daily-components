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
var index_1 = require("./../common/Background/index");
var LoadingBar = function (_a) {
    var _b = _a.isFullScreen, isFullScreen = _b === void 0 ? true : _b, _c = _a.isBlockedBackground, isBlockedBackground = _c === void 0 ? true : _c, _d = _a.spinnerSize, spinnerSize = _d === void 0 ? 50 : _d, _e = _a.spinnerBorderWidth, spinnerBorderWidth = _e === void 0 ? 5 : _e, _f = _a.spinnerBodyColor, spinnerBodyColor = _f === void 0 ? "white" : _f, _g = _a.spinnerBarColor, spinnerBarColor = _g === void 0 ? "gray" : _g, _h = _a.backgroundColor, backgroundColor = _h === void 0 ? "rgba(0, 0, 0, 0.2)" : _h;
    return ((0, jsx_runtime_1.jsx)(index_1.default, __assign({ backgroundColor: backgroundColor, isBlockedBackground: isBlockedBackground, isFullScreen: isFullScreen }, { children: (0, jsx_runtime_1.jsx)(Style.Spinner, { spinnerSize: spinnerSize, spinnerBorderWidth: spinnerBorderWidth, spinnerBodyColor: spinnerBodyColor, spinnerBarColor: spinnerBarColor }) })));
};
exports.default = LoadingBar;
