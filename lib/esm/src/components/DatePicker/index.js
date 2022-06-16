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
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import * as Style from "./style";
import { useCallback, useRef, useState } from "react";
import { Date, DATE_FORMAT, getCalendarDate, WEEK_DAY_ABBR, } from "../../types/date";
import { DateTime } from "luxon";
import _ from "lodash-es";
import { replaceAt } from "../../utilities/string";
import { quotient } from "../../utilities/math";
import useClickOutside from "../../hooks/useClickOutside";
import useCursor from "../../hooks/useCursor";
import useModal from "../../hooks/useModal";
import ArrowButton from "../common/ArrowButton";
var DatePicker = function (_a) {
    var handleSelect = _a.handleSelect, _b = _a.isMondayFirst, isMondayFirst = _b === void 0 ? true : _b, _c = _a.isWeekendColor, isWeekendColor = _c === void 0 ? true : _c, _d = _a.width, width = _d === void 0 ? 200 : _d, _e = _a.height, height = _e === void 0 ? 30 : _e, _f = _a.itemWidth, itemWidth = _f === void 0 ? 40 : _f, _g = _a.itemHeight, itemHeight = _g === void 0 ? 30 : _g, _h = _a.fontSize, fontSize = _h === void 0 ? 16 : _h, _j = _a.textColor, textColor = _j === void 0 ? "gray" : _j, _k = _a.borderRadius, borderRadius = _k === void 0 ? 5 : _k, _l = _a.outlineWidth, outlineWidth = _l === void 0 ? 1 : _l, _m = _a.outlineColor, outlineColor = _m === void 0 ? "gray" : _m, containerActiveStyle = _a.containerActiveStyle, containerInactiveStyle = _a.containerInactiveStyle, selectWrapperActiveStyle = _a.selectWrapperActiveStyle, selectWrapperInactiveStyle = _a.selectWrapperInactiveStyle, listContainerStyle = _a.listContainerStyle, listStyle = _a.listStyle, itemStyle = _a.itemStyle;
    var _o = useModal(), isOpen = _o.isOpen, setIsOpen = _o.setIsOpen, handleOpenClick = _o.handleOpenClick;
    var _p = useState(new Date(DateTime.now())), date = _p[0], setDate = _p[1];
    var containerRef = useRef(null);
    var inputRef = useRef(null);
    var _q = useCursor(inputRef, date), cursor = _q.cursor, setCursor = _q.setCursor;
    useClickOutside(containerRef, setIsOpen);
    var handleSelectClick = useCallback(function (item) {
        setIsOpen(false);
        setDate(item);
        handleSelect(item);
    }, []);
    var handleChange = useCallback(function (e) {
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
                var newDate = _.cloneDeep(prev);
                var newYear = replaceAt(prevValue, cursor, data).slice(0, 4);
                newDate.set({ year: +newYear });
                return newDate;
            });
            setCursor(cursor === 3 ? 5 : cursor + 1);
        }
        var isCursorInsideMonth = cursor >= 5 && cursor <= 6;
        if (isCursorInsideMonth) {
            if (cursor === 5 && +data > 1) {
                setDate(function (prev) {
                    var newDate = _.cloneDeep(prev);
                    var newMonth = replaceAt(prevValue, cursor + 1, data).slice(5, 7);
                    newDate.set({ month: +newMonth % 10 });
                    return newDate;
                });
                setCursor(8);
            }
            else {
                setDate(function (prev) {
                    var newDate = _.cloneDeep(prev);
                    var newMonth = replaceAt(prevValue, cursor, data).slice(5, 7);
                    newDate.set({ month: +newMonth > 12 ? 12 : +newMonth });
                    return newDate;
                });
                setCursor(cursor === 6 ? 8 : cursor + 1);
            }
        }
        var isCursorInsideDay = cursor >= 8 && cursor <= 9;
        if (isCursorInsideDay) {
            if (cursor === 8 && +data > quotient(date.getLastDay(), 10)) {
                setDate(function (prev) {
                    var newDate = _.cloneDeep(prev);
                    var newMonth = replaceAt(prevValue, cursor + 1, data).slice(8);
                    newDate.set({ day: +newMonth % 10 });
                    return newDate;
                });
                setCursor(0);
            }
            else {
                setDate(function (prev) {
                    var newDate = _.cloneDeep(prev);
                    var newDay = replaceAt(prevValue, cursor, data).slice(8);
                    newDate.set({
                        day: +newDay > newDate.getLastDay() ? newDate.getLastDay() : +newDay,
                    });
                    return newDate;
                });
                setCursor(cursor === 9 ? 0 : cursor + 1);
            }
        }
    }, [date]);
    var WEEK_DAYS = _.cloneDeep(WEEK_DAY_ABBR);
    if (!isMondayFirst) {
        var LAST = WEEK_DAYS.pop();
        LAST && WEEK_DAYS.unshift(LAST);
    }
    return (_jsxs(Style.Container, __assign({ ref: containerRef, isOpen: isOpen, width: width, height: height, borderRadius: borderRadius, outlineWidth: outlineWidth, outlineColor: outlineColor, style: isOpen ? containerActiveStyle : containerInactiveStyle }, { children: [_jsxs(Style.SelectWrapper, __assign({ isOpen: isOpen, height: height, borderRadius: borderRadius, outlineWidth: outlineWidth, outlineColor: outlineColor, style: isOpen ? selectWrapperActiveStyle : selectWrapperInactiveStyle }, { children: [_jsx(Style.Input, { ref: inputRef, value: date.getFullString({ DateFormat: DATE_FORMAT.DASH }), fontSize: fontSize, textColor: textColor, onChange: function (e) { return handleChange(e); } }), _jsx(ArrowButton, { handleOpenClick: handleOpenClick, isOpen: isOpen, outlineColor: outlineColor, outlineWidth: outlineWidth, direction: isOpen ? "Up" : "Down" })] })), isOpen && (_jsxs(Style.ListContainer, __assign({ isOpen: isOpen, fontSize: fontSize, textColor: textColor, borderRadius: borderRadius, outlineWidth: outlineWidth, outlineColor: outlineColor, style: listContainerStyle }, { children: [_jsxs(Style.YearMonth, __assign({ height: itemHeight, fontSize: fontSize }, { children: [_jsx(ArrowButton, { handleOpenClick: function () {
                                    return setDate(function (date) {
                                        var newDate = _.cloneDeep(date);
                                        newDate.plus({ month: -1 });
                                        return newDate;
                                    });
                                }, isOpen: isOpen, outlineColor: outlineColor, outlineWidth: outlineWidth, direction: "Left" }), date.getYearMonthString({ DateFormat: DATE_FORMAT.DASH }), _jsx(ArrowButton, { handleOpenClick: function () {
                                    return setDate(function (date) {
                                        var newDate = _.cloneDeep(date);
                                        newDate.plus({ month: 1 });
                                        return newDate;
                                    });
                                }, isOpen: isOpen, outlineColor: outlineColor, outlineWidth: outlineWidth, direction: "Right" })] })), _jsx(Style.WeekdayList, { children: WEEK_DAYS.map(function (item, index) {
                            var isSaturday = isMondayFirst ? index === 5 : index === 6;
                            var isSunday = isMondayFirst ? index === 6 : index === 0;
                            var weekendColor = textColor;
                            if (isSaturday)
                                weekendColor = "rgba(0, 0, 255, 0.5)";
                            if (isSunday)
                                weekendColor = "rgba(255, 0, 0, 0.5)";
                            return (_jsx(Style.WeekdayItem, __assign({ width: itemWidth, height: itemHeight, fontSize: fontSize, style: { color: isWeekendColor ? weekendColor : textColor } }, { children: item }), index));
                        }) }), _jsx(Style.List, __assign({ borderRadius: borderRadius, style: listStyle }, { children: getCalendarDate({
                            dateTime: date.getDateTime(),
                            isMondayFirst: isMondayFirst,
                        }).map(function (item, index) { return (_jsx(Style.Item, __assign({ isSelected: date.isEqualDate(item), onClick: function () { return handleSelectClick(item); }, width: itemWidth, height: itemHeight, fontSize: fontSize, borderRadius: borderRadius, style: itemStyle }, { children: item.getDay() }), index)); }) }))] })))] })));
};
export default DatePicker;
