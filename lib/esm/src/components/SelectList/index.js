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
var SelectList = function (_a) {
    var itemList = _a.itemList, value = _a.value, handler = _a.handler, placeholder = _a.placeholder, _b = _a.maxItemCount, maxItemCount = _b === void 0 ? 8 : _b, _c = _a.width, width = _c === void 0 ? 200 : _c, _d = _a.height, height = _d === void 0 ? 30 : _d, _e = _a.fontSize, fontSize = _e === void 0 ? 16 : _e, _f = _a.textColor, textColor = _f === void 0 ? "gray" : _f, _g = _a.borderRadius, borderRadius = _g === void 0 ? 5 : _g, _h = _a.outlineWidth, outlineWidth = _h === void 0 ? 1 : _h, _j = _a.activeColor, activeColor = _j === void 0 ? "gray" : _j, _k = _a.inactiveColor, inactiveColor = _k === void 0 ? "silver" : _k, selectListActiveStyle = _a.selectListActiveStyle, selectListInactiveStyle = _a.selectListInactiveStyle, selectWrapperActiveStyle = _a.selectWrapperActiveStyle, selectWrapperInactiveStyle = _a.selectWrapperInactiveStyle, listActiveStyle = _a.listActiveStyle, listInactiveStyle = _a.listInactiveStyle, itemActiveStyle = _a.itemActiveStyle, itemInactiveStyle = _a.itemInactiveStyle;
    var _l = useState(false), isOpen = _l[0], setIsOpen = _l[1];
    var ref = useRef(null);
    useEffect(function () {
        var checkIfClickedOutside = function (e) {
            var _a;
            if (isOpen && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return function () {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [isOpen]);
    var handleOpenClick = useCallback(function () {
        setIsOpen(function (prev) { return !prev; });
    }, []);
    var handleSelectClick = useCallback(function (item) {
        setIsOpen(false);
        handler(item);
    }, []);
    return (_jsxs(Style.SelectList, __assign({ ref: ref, isOpen: isOpen, maxItemCount: maxItemCount, width: width, height: height, borderRadius: borderRadius, outlineWidth: outlineWidth, activeColor: activeColor, inactiveColor: inactiveColor, style: isOpen ? selectListActiveStyle : selectListInactiveStyle }, { children: [_jsxs(Style.SelectWrapper, __assign({ isOpen: isOpen, height: height, borderRadius: borderRadius, outlineWidth: outlineWidth, activeColor: activeColor, inactiveColor: inactiveColor, style: isOpen ? selectWrapperActiveStyle : selectWrapperInactiveStyle }, { children: [_jsx(Style.Input, { value: value, placeholder: placeholder, readOnly: true, fontSize: fontSize, textColor: textColor }), _jsx(Style.Button, __assign({ onClick: handleOpenClick }, { children: _jsx("svg", __assign({ style: { display: "block" }, viewBox: "0 0 20 20" }, { children: _jsx("polyline", { stroke: isOpen ? activeColor : inactiveColor, strokeWidth: 1, points: "2 6 10 14 18 6 10 14" }) })) }))] })), isOpen && (_jsx(Style.List, __assign({ maxItemCount: maxItemCount, height: height, fontSize: fontSize, textColor: textColor, borderRadius: borderRadius, activeColor: activeColor, inactiveColor: inactiveColor, style: isOpen ? listActiveStyle : listInactiveStyle }, { children: itemList.map(function (item, index) { return (_jsx(Style.Item, __assign({ onClick: function () { return handleSelectClick(item); }, height: height, style: isOpen ? itemActiveStyle : itemInactiveStyle }, { children: item }), index)); }) })))] })));
};
export default SelectList;
