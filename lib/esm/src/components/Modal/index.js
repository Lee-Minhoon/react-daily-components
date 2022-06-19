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
import Background from "./../common/Background/index";
import Button from "../Button";
import { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
var Modal = function (_a) {
    var title = _a.title, children = _a.children, handleConfirmClick = _a.handleConfirmClick, handleCancelClick = _a.handleCancelClick, _b = _a.isFullScreen, isFullScreen = _b === void 0 ? true : _b, _c = _a.isBlockedBackground, isBlockedBackground = _c === void 0 ? true : _c, _d = _a.width, width = _d === void 0 ? 400 : _d, height = _a.height, _e = _a.fontSize, fontSize = _e === void 0 ? 16 : _e, _f = _a.textColor, textColor = _f === void 0 ? "gray" : _f, _g = _a.borderRadius, borderRadius = _g === void 0 ? 5 : _g, _h = _a.outlineWidth, outlineWidth = _h === void 0 ? 0 : _h, _j = _a.outlineColor, outlineColor = _j === void 0 ? "gray" : _j, _k = _a.backgroundColor, backgroundColor = _k === void 0 ? "rgba(0, 0, 0, 0.2)" : _k;
    var containerRef = useRef(null);
    useClickOutside(containerRef, handleCancelClick);
    return (_jsx(Background, __assign({ backgroundColor: backgroundColor, isBlockedBackground: isBlockedBackground, isFullScreen: isFullScreen }, { children: _jsxs(Style.Container, __assign({ ref: containerRef, width: width, height: height, fontSize: fontSize, textColor: textColor, borderRadius: borderRadius, outlineWidth: outlineWidth, outlineColor: outlineColor }, { children: [_jsx(Style.Header, __assign({ fontSize: fontSize, outlineColor: outlineColor }, { children: title })), _jsx(Style.Content, { children: children }), _jsxs(Style.Footer, { children: [_jsx(Button, __assign({ handleClick: handleCancelClick }, { children: "Cancel" })), _jsx(Button, __assign({ handleClick: handleConfirmClick }, { children: "Confirm" }))] })] })) })));
};
export default Modal;
