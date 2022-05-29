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
var date_1 = require("../../types/date");
var luxon_1 = require("luxon");
var lodash_es_1 = require("lodash-es");
var string_1 = require("../../utilities/string");
var math_1 = require("../../utilities/math");
var DatePicker = function (_a) {
    var handleSelect = _a.handleSelect, _b = _a.width, width = _b === void 0 ? 200 : _b, _c = _a.height, height = _c === void 0 ? 30 : _c, _d = _a.fontSize, fontSize = _d === void 0 ? 16 : _d, _e = _a.textColor, textColor = _e === void 0 ? "gray" : _e, _f = _a.borderRadius, borderRadius = _f === void 0 ? 5 : _f, _g = _a.outlineWidth, outlineWidth = _g === void 0 ? 1 : _g, _h = _a.outlineColor, outlineColor = _h === void 0 ? "gray" : _h, selectListActiveStyle = _a.selectListActiveStyle, selectListInactiveStyle = _a.selectListInactiveStyle, selectWrapperActiveStyle = _a.selectWrapperActiveStyle, selectWrapperInactiveStyle = _a.selectWrapperInactiveStyle, listContainerStyle = _a.listContainerStyle, listStyle = _a.listStyle, itemStyle = _a.itemStyle;
    var _j = (0, react_1.useState)(false), isOpen = _j[0], setIsOpen = _j[1];
    var _k = (0, react_1.useState)(new date_1.Date(luxon_1.DateTime.now())), date = _k[0], setDate = _k[1];
    var _l = (0, react_1.useState)(0), cursor = _l[0], setCursor = _l[1];
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
    var handleSelectClick = (0, react_1.useCallback)(function (item) {
        setIsOpen(false);
        setDate(item);
        handleSelect(item);
    }, []);
    (0, react_1.useEffect)(function () {
        if (!inputRef.current)
            return;
        inputRef.current.selectionStart = cursor;
        inputRef.current.selectionEnd = cursor;
        // inputRef.current.value = time.getString();
    }, [date, cursor]);
    var handleChange = (0, react_1.useCallback)(function (e) {
        var _a, _b;
        var event = e.nativeEvent;
        if (!((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.selectionStart) || !event.data)
            return;
        var data = event.data;
        var cursor = ((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.selectionStart) - 1;
        var prevValue = e.target.defaultValue;
        var isCursorInsideYear = cursor >= 0 && cursor <= 3;
        if (isCursorInsideYear) {
            setDate(function (prev) {
                var newDate = lodash_es_1.default.cloneDeep(prev);
                var newYear = (0, string_1.replaceAt)(prevValue, cursor, data).slice(0, 4);
                newDate.set({ year: +newYear });
                return newDate;
            });
            setCursor(cursor === 3 ? 5 : cursor + 1);
        }
        var isCursorInsideMonth = cursor >= 5 && cursor <= 6;
        if (isCursorInsideMonth) {
            if (cursor === 5 && +data > 1) {
                setDate(function (prev) {
                    var newDate = lodash_es_1.default.cloneDeep(prev);
                    var newMonth = (0, string_1.replaceAt)(prevValue, cursor + 1, data).slice(5, 7);
                    newDate.set({ month: +newMonth % 10 });
                    return newDate;
                });
                setCursor(8);
            }
            else {
                setDate(function (prev) {
                    var newDate = lodash_es_1.default.cloneDeep(prev);
                    var newMonth = (0, string_1.replaceAt)(prevValue, cursor, data).slice(5, 7);
                    newDate.set({ month: +newMonth > 12 ? 12 : +newMonth });
                    return newDate;
                });
                setCursor(cursor === 6 ? 8 : cursor + 1);
            }
        }
        var isCursorInsideDay = cursor >= 8 && cursor <= 9;
        if (isCursorInsideDay) {
            if (cursor === 8 && +data > (0, math_1.quotient)(date.getLastDay(), 10)) {
                setDate(function (prev) {
                    var newDate = lodash_es_1.default.cloneDeep(prev);
                    var newMonth = (0, string_1.replaceAt)(prevValue, cursor + 1, data).slice(8);
                    newDate.set({ day: +newMonth % 10 });
                    return newDate;
                });
                setCursor(0);
            }
            else {
                setDate(function (prev) {
                    var newDate = lodash_es_1.default.cloneDeep(prev);
                    var newDay = (0, string_1.replaceAt)(prevValue, cursor, data).slice(8);
                    newDate.set({
                        day: +newDay > newDate.getLastDay() ? newDate.getLastDay() : +newDay,
                    });
                    return newDate;
                });
                setCursor(cursor === 9 ? 0 : cursor + 1);
            }
        }
    }, [date]);
    return ((0, jsx_runtime_1.jsxs)(Style.SelectList, __assign({ ref: containerRef, isOpen: isOpen, width: width, height: height, borderRadius: borderRadius, outlineWidth: outlineWidth, outlineColor: outlineColor, style: isOpen ? selectListActiveStyle : selectListInactiveStyle }, { children: [(0, jsx_runtime_1.jsxs)(Style.SelectWrapper, __assign({ isOpen: isOpen, height: height, borderRadius: borderRadius, outlineWidth: outlineWidth, outlineColor: outlineColor, style: isOpen ? selectWrapperActiveStyle : selectWrapperInactiveStyle }, { children: [(0, jsx_runtime_1.jsx)(Style.Input, { ref: inputRef, value: date.getFullString({ DateFormat: date_1.DATE_FORMAT.DASH }), fontSize: fontSize, textColor: textColor, onChange: function (e) { return handleChange(e); } }), (0, jsx_runtime_1.jsx)(Style.Button, __assign({ onClick: handleOpenClick }, { children: (0, jsx_runtime_1.jsx)(Style.Svg, __assign({ viewBox: "0 0 20 20", isOpen: isOpen, outlineColor: outlineColor, outlineWidth: outlineWidth }, { children: (0, jsx_runtime_1.jsx)("polyline", { points: "2 6 10 14 18 6 10 14" }) })) }))] })), isOpen && ((0, jsx_runtime_1.jsxs)(Style.ListContainer, __assign({ isOpen: isOpen, height: height, fontSize: fontSize, textColor: textColor, borderRadius: borderRadius, outlineWidth: outlineWidth, outlineColor: outlineColor, style: listContainerStyle }, { children: [(0, jsx_runtime_1.jsxs)(Style.YearMonth, __assign({ height: height, fontSize: fontSize }, { children: [(0, jsx_runtime_1.jsx)(Style.ArrowButton, __assign({ fontSize: fontSize, onClick: function () {
                                    return setDate(function (date) {
                                        var newDate = lodash_es_1.default.cloneDeep(date);
                                        newDate.plus({ month: -1 });
                                        return newDate;
                                    });
                                } }, { children: (0, jsx_runtime_1.jsx)(Style.Svg, __assign({ viewBox: "0 0 20 20", isOpen: isOpen, outlineColor: outlineColor, outlineWidth: outlineWidth }, { children: (0, jsx_runtime_1.jsx)("polyline", { points: "14 2 6 10 14 18 6 10" }) })) })), date.getYearMonthString({ DateFormat: date_1.DATE_FORMAT.DASH }), (0, jsx_runtime_1.jsx)(Style.ArrowButton, __assign({ fontSize: fontSize, onClick: function () {
                                    return setDate(function (date) {
                                        var newDate = lodash_es_1.default.cloneDeep(date);
                                        newDate.plus({ month: 1 });
                                        return newDate;
                                    });
                                } }, { children: (0, jsx_runtime_1.jsx)(Style.Svg, __assign({ viewBox: "0 0 20 20", isOpen: isOpen, outlineColor: outlineColor, outlineWidth: outlineWidth }, { children: (0, jsx_runtime_1.jsx)("polyline", { points: "6 2 14 10 6 18 14 10" }) })) }))] })), (0, jsx_runtime_1.jsx)(Style.List, __assign({ style: listStyle }, { children: (0, date_1.getCalendarDate)(date.getDateTime()).map(function (item, index) { return ((0, jsx_runtime_1.jsx)(Style.Item, __assign({ isSelected: date.isEqualDate(item), onClick: function () { return handleSelectClick(item); }, height: height, fontSize: fontSize, borderRadius: borderRadius, style: itemStyle }, { children: item.getDay() }), index)); }) }))] })))] })));
};
exports.default = DatePicker;
