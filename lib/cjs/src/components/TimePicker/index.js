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
var react_1 = require("react");
var time_1 = require("../../types/time");
var TimePicker = function (_a) {
    var handleSelect = _a.handleSelect, _b = _a.is24Hour, is24Hour = _b === void 0 ? false : _b, _c = _a.isSelectHour, isSelectHour = _c === void 0 ? true : _c, _d = _a.isSelectMin, isSelectMin = _d === void 0 ? true : _d, _e = _a.isSelectSeconds, isSelectSeconds = _e === void 0 ? false : _e, _f = _a.maxItemCount, maxItemCount = _f === void 0 ? 6 : _f, _g = _a.width, width = _g === void 0 ? 200 : _g, _h = _a.height, height = _h === void 0 ? 30 : _h, _j = _a.fontSize, fontSize = _j === void 0 ? 16 : _j, _k = _a.textColor, textColor = _k === void 0 ? "gray" : _k, _l = _a.borderRadius, borderRadius = _l === void 0 ? 5 : _l, _m = _a.outlineWidth, outlineWidth = _m === void 0 ? 1 : _m, _o = _a.outlineColor, outlineColor = _o === void 0 ? "gray" : _o, selectListActiveStyle = _a.selectListActiveStyle, selectListInactiveStyle = _a.selectListInactiveStyle, selectWrapperActiveStyle = _a.selectWrapperActiveStyle, selectWrapperInactiveStyle = _a.selectWrapperInactiveStyle, listContainerStyle = _a.listContainerStyle, listStyle = _a.listStyle, itemStyle = _a.itemStyle;
    var _p = (0, react_1.useState)(false), isOpen = _p[0], setIsOpen = _p[1];
    var _q = (0, react_1.useState)(new time_1.Time({ hour: 0, min: 0, seconds: 0 })), time = _q[0], setTime = _q[1];
    var _r = (0, react_1.useState)(time_1.TIME_TYPE.AM), timeType = _r[0], setTimeType = _r[1];
    var _s = (0, react_1.useState)(0), hour = _s[0], setHour = _s[1];
    var _t = (0, react_1.useState)(0), min = _t[0], setMin = _t[1];
    var _u = (0, react_1.useState)(0), seconds = _u[0], setSeconds = _u[1];
    var _v = (0, react_1.useState)(0), cursor = _v[0], setCursor = _v[1];
    var containerRef = (0, react_1.useRef)(null);
    var inputRef = (0, react_1.useRef)(null);
    var handleOpenClick = (0, react_1.useCallback)(function () {
        setIsOpen(function (prev) { return !prev; });
    }, []);
    (0, react_1.useEffect)(function () {
        var checkIfClickedOutside = function (e) {
            var _a;
            if (isOpen && !((_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return function () {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [isOpen]);
    (0, react_1.useEffect)(function () {
        if (!inputRef.current)
            return;
        inputRef.current.selectionStart = cursor;
        inputRef.current.selectionEnd = cursor;
        // inputRef.current.value = time.getString();
    }, [time, cursor]);
    (0, react_1.useEffect)(function () {
        var newTime = new time_1.Time({
            hour: !is24Hour
                ? timeType === time_1.TIME_TYPE.PM
                    ? hour + 12 === 24
                        ? 12
                        : hour + 12
                    : hour === 12
                        ? 0
                        : hour
                : hour,
            min: min,
            seconds: seconds,
        });
        setTime(newTime);
        handleSelect(newTime);
    }, [timeType, hour, min, seconds]);
    var handleChange = (0, react_1.useCallback)(function (e) {
        var _a, _b;
        var event = e.nativeEvent;
        if (!((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.selectionStart) || !event.data)
            return;
        var data = +event.data;
        var cursor = ((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.selectionStart) - 1;
        var standardPoint = 0;
        if (!is24Hour) {
            var isCursorInsideTimeType = cursor >= standardPoint && cursor <= standardPoint + 1;
            if (isCursorInsideTimeType) {
                setTimeType(data === 1 ? time_1.TIME_TYPE.AM : time_1.TIME_TYPE.PM);
                setCursor(standardPoint + 2);
            }
            standardPoint += 2;
        }
        else {
            standardPoint -= 1;
        }
        if (isSelectHour) {
            var isCursorInsideHourFirstDigit = cursor >= standardPoint && cursor <= standardPoint + 1;
            if (isCursorInsideHourFirstDigit) {
                if (data >= 0 && data <= 1) {
                    setHour(data * 10);
                    setCursor(standardPoint + 2);
                }
                else {
                    setHour(data);
                    setCursor(standardPoint + 4);
                }
            }
            var isCursorInsideHourSecondDigit = cursor === standardPoint + 2;
            if (isCursorInsideHourSecondDigit) {
                if (data >= 0 && data <= 2) {
                    setHour(function (prev) { return Math.floor(prev / 10) * 10 + data; });
                }
                else {
                    setHour(data);
                }
                setCursor(standardPoint + 4);
            }
            standardPoint += 3;
        }
        if (isSelectMin) {
            var isCursorInsideMinFirstDigit = cursor >= standardPoint && cursor <= standardPoint + 1;
            if (isCursorInsideMinFirstDigit) {
                if (data >= 0 && data <= 5) {
                    setMin(data * 10);
                    setCursor(standardPoint + 2);
                }
                else {
                    setMin(data);
                    setCursor(standardPoint + 4);
                }
            }
            var isCursorInsideMinSecondDigit = cursor === standardPoint + 2;
            if (isCursorInsideMinSecondDigit) {
                setMin(function (prev) { return Math.floor(prev / 10) * 10 + data; });
                setCursor(standardPoint + 4);
            }
            standardPoint += 3;
        }
        if (isSelectSeconds) {
            var isCursorInsideSecondsFirstDigit = cursor >= standardPoint && cursor <= standardPoint + 1;
            if (isCursorInsideSecondsFirstDigit) {
                if (data >= 0 && data <= 5) {
                    setSeconds(data * 10);
                    setCursor(standardPoint + 2);
                }
                else {
                    setSeconds(data);
                    setCursor(standardPoint + 4);
                }
            }
            var isCursorInsideSecondsSecondDigit = cursor === standardPoint + 2;
            if (isCursorInsideSecondsSecondDigit) {
                setSeconds(function (prev) { return Math.floor(prev / 10) * 10 + data; });
                setCursor(standardPoint + 4);
            }
            standardPoint += 3;
        }
        if (cursor === standardPoint) {
            setCursor(0);
        }
    }, [is24Hour, isSelectHour, isSelectMin, isSelectSeconds]);
    return ((0, jsx_runtime_1.jsxs)(Style.SelectList, __assign({ ref: containerRef, isOpen: isOpen, maxItemCount: maxItemCount, width: width, height: height, borderRadius: borderRadius, outlineWidth: outlineWidth, outlineColor: outlineColor, style: isOpen ? selectListActiveStyle : selectListInactiveStyle }, { children: [(0, jsx_runtime_1.jsxs)(Style.SelectWrapper, __assign({ isOpen: isOpen, height: height, borderRadius: borderRadius, outlineWidth: outlineWidth, outlineColor: outlineColor, style: isOpen ? selectWrapperActiveStyle : selectWrapperInactiveStyle }, { children: [(0, jsx_runtime_1.jsx)(Style.Input, { ref: inputRef, value: !is24Hour
                            ? time.getString({
                                isPrintTimeType: true,
                                isPrintHour: isSelectHour,
                                isPrintMin: isSelectMin,
                                isPrintSeconds: isSelectSeconds,
                            })
                            : time.getString24Hour({
                                isPrintHour: isSelectHour,
                                isPrintMin: isSelectMin,
                                isPrintSeconds: isSelectSeconds,
                            }), fontSize: fontSize, textColor: textColor, onChange: function (e) { return handleChange(e); } }), (0, jsx_runtime_1.jsx)(Style.Button, __assign({ onClick: handleOpenClick }, { children: (0, jsx_runtime_1.jsx)(Style.Svg, __assign({ viewBox: "0 0 20 20", isOpen: isOpen, outlineColor: outlineColor, outlineWidth: outlineWidth }, { children: (0, jsx_runtime_1.jsx)("polyline", { points: "2 6 10 14 18 6 10 14" }) })) }))] })), isOpen && ((0, jsx_runtime_1.jsxs)(Style.ListContainer, __assign({ maxItemCount: maxItemCount, height: height, fontSize: fontSize, textColor: textColor, borderRadius: borderRadius, outlineColor: outlineColor, style: listContainerStyle }, { children: [!is24Hour && ((0, jsx_runtime_1.jsx)(Style.List, __assign({ style: listStyle }, { children: Object.values(time_1.TIME_TYPE).map(function (item, index) { return ((0, jsx_runtime_1.jsx)(Style.Item, __assign({ isSelected: timeType === item, height: height, onClick: function () { return setTimeType(item); }, style: itemStyle }, { children: item }), index)); }) }))), isSelectHour && ((0, jsx_runtime_1.jsx)(Style.List, __assign({ style: listStyle }, { children: (is24Hour ? Array.from(new Array(24)) : time_1.HOURS).map(function (item, index) { return ((0, jsx_runtime_1.jsx)(Style.Item, __assign({ isSelected: hour === item, height: height, onClick: function () { return setHour(is24Hour ? index : item); }, style: itemStyle }, { children: is24Hour ? index : item }), index)); }) }))), isSelectMin && ((0, jsx_runtime_1.jsx)(Style.List, __assign({ style: listStyle }, { children: Array.from(new Array(60)).map(function (item, index) { return ((0, jsx_runtime_1.jsx)(Style.Item, __assign({ isSelected: min === index, height: height, onClick: function () { return setMin(index); }, style: itemStyle }, { children: index }), index)); }) }))), isSelectSeconds && ((0, jsx_runtime_1.jsx)(Style.List, __assign({ style: listStyle }, { children: Array.from(new Array(60)).map(function (item, index) { return ((0, jsx_runtime_1.jsx)(Style.Item, __assign({ isSelected: seconds === index, height: height, onClick: function () { return setSeconds(index); }, style: itemStyle }, { children: index }), index)); }) })))] })))] })));
};
exports.default = TimePicker;
