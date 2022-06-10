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
import useInput from "../../hooks/useInput";
var SelectList = function (_a) {
    var itemList = _a.itemList, value = _a.value, handleSelect = _a.handleSelect, _b = _a.isSearchable, isSearchable = _b === void 0 ? false : _b, placeholder = _a.placeholder, _c = _a.maxItemCount, maxItemCount = _c === void 0 ? 8 : _c, _d = _a.width, width = _d === void 0 ? 200 : _d, _e = _a.height, height = _e === void 0 ? 30 : _e, _f = _a.fontSize, fontSize = _f === void 0 ? 16 : _f, _g = _a.textColor, textColor = _g === void 0 ? "gray" : _g, _h = _a.borderRadius, borderRadius = _h === void 0 ? 5 : _h, _j = _a.outlineWidth, outlineWidth = _j === void 0 ? 1 : _j, _k = _a.outlineColor, outlineColor = _k === void 0 ? "gray" : _k, selectListActiveStyle = _a.selectListActiveStyle, selectListInactiveStyle = _a.selectListInactiveStyle, selectWrapperActiveStyle = _a.selectWrapperActiveStyle, selectWrapperInactiveStyle = _a.selectWrapperInactiveStyle, listStyle = _a.listStyle, itemStyle = _a.itemStyle;
    var _l = useState(false), isOpen = _l[0], setIsOpen = _l[1];
    var _m = useState(itemList), resultList = _m[0], setResultList = _m[1];
    var searchInput = useInput("");
    var ref = useRef(null);
    var listRef = useRef(null);
    useEffect(function () {
        if (listRef.current)
            listRef.current.scrollTop =
                resultList.findIndex(function (item) { return item === value; }) * height;
    }, [isOpen]);
    var handleOpenClick = useCallback(function () {
        setIsOpen(function (prev) { return !prev; });
    }, []);
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
    var handleSelectClick = useCallback(function (item) {
        setIsOpen(false);
        handleSelect(item);
        searchInput.setValue(item);
    }, []);
    var handleKeyDown = useCallback(function (e) {
        if (e.nativeEvent.key === "Enter") {
            itemList.map(function (item) {
                if (item.content === searchInput.value)
                    handleSelect(item);
            });
            setIsOpen(false);
        }
        else if (e.nativeEvent.key === "Escape") {
            setIsOpen(false);
        }
        else {
            setResultList(itemList.filter(function (item) {
                if (item.indexOf(searchInput.value) !== -1)
                    return item;
            }));
            setIsOpen(true);
        }
    }, [searchInput.value]);
    return (_jsxs(Style.SelectList, __assign({ ref: ref, isOpen: isOpen, maxItemCount: resultList.length > maxItemCount ? maxItemCount : resultList.length, width: width, height: height, borderRadius: borderRadius, outlineWidth: outlineWidth, outlineColor: outlineColor, style: isOpen ? selectListActiveStyle : selectListInactiveStyle }, { children: [_jsxs(Style.SelectWrapper, __assign({ isOpen: isOpen, height: height, borderRadius: borderRadius, outlineWidth: outlineWidth, outlineColor: outlineColor, style: isOpen ? selectWrapperActiveStyle : selectWrapperInactiveStyle }, { children: [isSearchable ? (_jsx(Style.Input, __assign({}, searchInput, { placeholder: placeholder, fontSize: fontSize, textColor: textColor, onKeyUp: function (e) { return handleKeyDown(e); } }))) : (_jsx(Style.Input, { value: value, placeholder: placeholder, readOnly: true, fontSize: fontSize, textColor: textColor })), _jsx(Style.Button, __assign({ onClick: handleOpenClick }, { children: _jsx(Style.Svg, __assign({ viewBox: "0 0 20 20", isOpen: isOpen, outlineWidth: outlineWidth, outlineColor: outlineColor }, { children: _jsx("polyline", { points: "2 6 10 14 18 6 10 14" }) })) }))] })), isOpen && (_jsx(Style.List, __assign({ ref: listRef, maxItemCount: resultList.length > maxItemCount ? maxItemCount : resultList.length, height: height, fontSize: fontSize, textColor: textColor, borderRadius: borderRadius, outlineWidth: outlineWidth, outlineColor: outlineColor, style: listStyle }, { children: resultList.map(function (item, index) { return (_jsx(Style.Item, __assign({ isSelected: value === item, onClick: function () { return handleSelectClick(item); }, height: height, borderRadius: borderRadius, style: itemStyle }, { children: item }), index)); }) })))] })));
};
export default SelectList;
