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
import { useCallback, useEffect, useRef, useState } from "react";
import { Time, TIME_TYPE } from "../../types/time";
import useClickOutside from "../../hooks/useClickOutside";
import useSetScrollPosition from "../../hooks/useSetScrollPosition";
import useModal from "../../hooks/useModal";
import useCursor from "../../hooks/useCursor";
import TimeType from "./TimeType";
import Hour from "./Hour";
import Min from "./Min";
import Seconds from "./Seconds";
import ArrowButton from "../common/ArrowButton";
var TimePicker = function (_a) {
    var handleSelect = _a.handleSelect, _b = _a.is24Hour, is24Hour = _b === void 0 ? false : _b, _c = _a.isSelectHour, isSelectHour = _c === void 0 ? true : _c, _d = _a.isSelectMin, isSelectMin = _d === void 0 ? true : _d, _e = _a.isSelectSeconds, isSelectSeconds = _e === void 0 ? false : _e, _f = _a.maxItemCount, maxItemCount = _f === void 0 ? 6 : _f, _g = _a.width, width = _g === void 0 ? 200 : _g, _h = _a.height, height = _h === void 0 ? 30 : _h, _j = _a.fontSize, fontSize = _j === void 0 ? 16 : _j, _k = _a.textColor, textColor = _k === void 0 ? "gray" : _k, _l = _a.borderRadius, borderRadius = _l === void 0 ? 5 : _l, _m = _a.outlineWidth, outlineWidth = _m === void 0 ? 1 : _m, _o = _a.outlineColor, outlineColor = _o === void 0 ? "gray" : _o, containerActiveStyle = _a.containerActiveStyle, containerInactiveStyle = _a.containerInactiveStyle, selectWrapperActiveStyle = _a.selectWrapperActiveStyle, selectWrapperInactiveStyle = _a.selectWrapperInactiveStyle, listContainerStyle = _a.listContainerStyle, listStyle = _a.listStyle, itemStyle = _a.itemStyle;
    var _p = useModal(), isOpen = _p.isOpen, setIsOpen = _p.setIsOpen, handleOpenClick = _p.handleOpenClick;
    var _q = useState(new Time({ hour: 0, min: 0, seconds: 0 })), time = _q[0], setTime = _q[1];
    var _r = useState(TIME_TYPE.AM), timeType = _r[0], setTimeType = _r[1];
    var _s = useState(12), hour = _s[0], setHour = _s[1];
    var _t = useState(0), min = _t[0], setMin = _t[1];
    var _u = useState(0), seconds = _u[0], setSeconds = _u[1];
    var containerRef = useRef(null);
    var inputRef = useRef(null);
    var timeTypeRef = useRef(null);
    var hourRef = useRef(null);
    var minRef = useRef(null);
    var secondsRef = useRef(null);
    var _v = useCursor(inputRef, time), cursor = _v.cursor, setCursor = _v.setCursor;
    useClickOutside(containerRef, setIsOpen);
    useSetScrollPosition(hourRef, is24Hour ? hour * height : (hour % 12) * height, isOpen);
    useSetScrollPosition(minRef, min * height, isOpen);
    useSetScrollPosition(secondsRef, seconds * height, isOpen);
    useEffect(function () {
        var newTime = new Time({
            hour: !is24Hour
                ? timeType === TIME_TYPE.PM
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
    var handleChange = useCallback(function (e) {
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
                setTimeType(data === 1 ? TIME_TYPE.AM : TIME_TYPE.PM);
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
                    setCursor(standardPoint + 3);
                }
            }
            var isCursorInsideSecondsSecondDigit = cursor === standardPoint + 2;
            if (isCursorInsideSecondsSecondDigit) {
                setSeconds(function (prev) { return Math.floor(prev / 10) * 10 + data; });
                setCursor(standardPoint + 3);
            }
            standardPoint += 2;
        }
        if (cursor === standardPoint) {
            setCursor(0);
        }
    }, [is24Hour, isSelectHour, isSelectMin, isSelectSeconds]);
    return (_jsxs(Style.Container, __assign({ ref: containerRef, isOpen: isOpen, maxItemCount: maxItemCount, width: width, height: height, borderRadius: borderRadius, outlineWidth: outlineWidth, outlineColor: outlineColor, style: isOpen ? containerActiveStyle : containerInactiveStyle }, { children: [_jsxs(Style.SelectWrapper, __assign({ isOpen: isOpen, height: height, borderRadius: borderRadius, outlineWidth: outlineWidth, outlineColor: outlineColor, style: isOpen ? selectWrapperActiveStyle : selectWrapperInactiveStyle }, { children: [_jsx(Style.Input, { ref: inputRef, value: !is24Hour
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
                            }), fontSize: fontSize, textColor: textColor, onChange: function (e) { return handleChange(e); } }), _jsx(ArrowButton, { handleOpenClick: handleOpenClick, isOpen: isOpen, outlineColor: outlineColor, outlineWidth: outlineWidth, direction: isOpen ? "Up" : "Down" })] })), isOpen && (_jsxs(Style.ListContainer, __assign({ maxItemCount: maxItemCount, height: height, fontSize: fontSize, textColor: textColor, borderRadius: borderRadius, outlineWidth: outlineWidth, style: listContainerStyle }, { children: [!is24Hour && (_jsx(TimeType, { timeTypeRef: timeTypeRef, timeType: timeType, setTimeType: setTimeType, height: height, listStyle: listStyle, itemStyle: itemStyle })), isSelectHour && (_jsx(Hour, { hourRef: hourRef, hour: hour, setHour: setHour, is24Hour: is24Hour, height: height, listStyle: listStyle, itemStyle: itemStyle })), isSelectMin && (_jsx(Min, { minRef: minRef, min: min, setMin: setMin, height: height, listStyle: listStyle, itemStyle: itemStyle })), isSelectSeconds && (_jsx(Seconds, { secondsRef: secondsRef, seconds: seconds, setSeconds: setSeconds, height: height, listStyle: listStyle, itemStyle: itemStyle }))] })))] })));
};
export default TimePicker;
