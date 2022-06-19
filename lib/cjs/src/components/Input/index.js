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
exports.LABEL_LOCATIONS = exports.REGULAR_EXPRESSIONS = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var Style = require("./style");
var react_1 = require("react");
var lodash_es_1 = require("lodash-es");
var useDebounce_1 = require("../../hooks/useDebounce");
var useThrottle_1 = require("../../hooks/useThrottle");
exports.REGULAR_EXPRESSIONS = {
    korean: "ㄱ-ㅎ가-힣",
    number: "0-9",
    letter: "a-zA-Z",
    lowerCase: "a-z",
    upperCase: "A-Z",
    blank: " ",
};
exports.LABEL_LOCATIONS = {
    topLeft: "topLeft",
    topCenter: "topCenter",
    topRight: "topRight",
    totLeft: "botLeft",
    botCenter: "botCenter",
    botRight: "botRight",
    left: "left",
    right: "right",
};
var Input = function (_a) {
    var value = _a.value, handleChange = _a.handleChange, regex = _a.regex, label = _a.label, _b = _a.labelLocation, labelLocation = _b === void 0 ? exports.LABEL_LOCATIONS.left : _b, _c = _a.gap, gap = _c === void 0 ? 5 : _c, handleClick = _a.handleClick, _d = _a.debounce, debounce = _d === void 0 ? 0 : _d, _e = _a.throttle, throttle = _e === void 0 ? 0 : _e, _f = _a.width, width = _f === void 0 ? 200 : _f, _g = _a.height, height = _g === void 0 ? 30 : _g, _h = _a.fontSize, fontSize = _h === void 0 ? 16 : _h, _j = _a.textColor, textColor = _j === void 0 ? "gray" : _j, _k = _a.borderRadius, borderRadius = _k === void 0 ? 5 : _k, _l = _a.outlineWidth, outlineWidth = _l === void 0 ? 1 : _l, _m = _a.outlineColor, outlineColor = _m === void 0 ? "gray" : _m, containerStyle = _a.containerStyle, labelStyle = _a.labelStyle, inputStyle = _a.inputStyle;
    var _o = (0, react_1.useState)(false), isFocus = _o[0], setIsFocus = _o[1];
    var labelFirstCondition = labelLocation === "left" ||
        labelLocation === "topLeft" ||
        labelLocation === "topCenter" ||
        labelLocation === "topRight";
    var regexp;
    if ((0, lodash_es_1.isArray)(regex)) {
        var regString_1 = "[^";
        regex.map(function (item) {
            regString_1 += exports.REGULAR_EXPRESSIONS[item];
        });
        regString_1 += "]";
        regexp = new RegExp(regString_1);
    }
    if ((0, lodash_es_1.isRegExp)(regex)) {
        regexp = regex;
    }
    var handleInput = (0, react_1.useCallback)(function (e) {
        e.currentTarget.value = e.currentTarget.value.replace(regexp, "");
    }, [regex]);
    var debouncedFunction = (0, useDebounce_1.default)(handleClick ? function () { return handleClick(value); } : function () { }, debounce);
    var throttledFunction = (0, useThrottle_1.default)(debouncedFunction, throttle);
    return ((0, jsx_runtime_1.jsxs)(Style.Container, __assign({ gap: gap, width: width, height: height, labelLocation: labelLocation }, { children: [label && labelFirstCondition && ((0, jsx_runtime_1.jsx)(Style.Label, __assign({ htmlFor: "input", isFocus: isFocus, width: width, height: height, fontSize: fontSize, textColor: textColor, style: labelStyle }, { children: label }))), (0, jsx_runtime_1.jsxs)(Style.InputContainer, __assign({ isFocus: isFocus, width: width, height: height, borderRadius: borderRadius, outlineWidth: outlineWidth, outlineColor: outlineColor, style: containerStyle }, { children: [(0, jsx_runtime_1.jsx)(Style.Input, { id: "input", value: value, onChange: function (e) { return handleChange(e.target.value); }, onInput: handleInput, onFocus: function () { return setIsFocus(true); }, onBlur: function () { return setIsFocus(false); }, fontSize: fontSize, textColor: textColor, style: inputStyle }), handleClick && ((0, jsx_runtime_1.jsx)(Style.Button, __assign({ isFocus: isFocus, fontSize: fontSize, textColor: textColor, onClick: throttledFunction, outlineWidth: outlineWidth, outlineColor: outlineColor }, { children: "Submit" })))] })), label && !labelFirstCondition && ((0, jsx_runtime_1.jsx)(Style.Label, __assign({ htmlFor: "input", isFocus: isFocus, width: width, height: height, fontSize: fontSize, textColor: textColor, style: labelStyle }, { children: label })))] })));
};
exports.default = Input;
