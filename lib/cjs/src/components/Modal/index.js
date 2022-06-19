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
var Button_1 = require("../Button");
var react_1 = require("react");
var useClickOutside_1 = require("../../hooks/useClickOutside");
var Modal = function (_a) {
    var title = _a.title, children = _a.children, handleConfirmClick = _a.handleConfirmClick, handleCancelClick = _a.handleCancelClick, _b = _a.isFullScreen, isFullScreen = _b === void 0 ? true : _b, _c = _a.isBlockedBackground, isBlockedBackground = _c === void 0 ? true : _c, _d = _a.width, width = _d === void 0 ? 400 : _d, height = _a.height, _e = _a.fontSize, fontSize = _e === void 0 ? 16 : _e, _f = _a.textColor, textColor = _f === void 0 ? "gray" : _f, _g = _a.borderRadius, borderRadius = _g === void 0 ? 5 : _g, _h = _a.outlineWidth, outlineWidth = _h === void 0 ? 0 : _h, _j = _a.outlineColor, outlineColor = _j === void 0 ? "gray" : _j, _k = _a.backgroundColor, backgroundColor = _k === void 0 ? "rgba(0, 0, 0, 0.2)" : _k;
    var containerRef = (0, react_1.useRef)(null);
    (0, useClickOutside_1.default)(containerRef, handleCancelClick);
    return ((0, jsx_runtime_1.jsx)(index_1.default, __assign({ backgroundColor: backgroundColor, isBlockedBackground: isBlockedBackground, isFullScreen: isFullScreen }, { children: (0, jsx_runtime_1.jsxs)(Style.Container, __assign({ ref: containerRef, width: width, height: height, fontSize: fontSize, textColor: textColor, borderRadius: borderRadius, outlineWidth: outlineWidth, outlineColor: outlineColor }, { children: [(0, jsx_runtime_1.jsx)(Style.Header, __assign({ fontSize: fontSize, outlineColor: outlineColor }, { children: title })), (0, jsx_runtime_1.jsx)(Style.Content, { children: children }), (0, jsx_runtime_1.jsxs)(Style.Footer, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, __assign({ handleClick: handleCancelClick }, { children: "Cancel" })), (0, jsx_runtime_1.jsx)(Button_1.default, __assign({ handleClick: handleConfirmClick }, { children: "Confirm" }))] })] })) })));
};
exports.default = Modal;
