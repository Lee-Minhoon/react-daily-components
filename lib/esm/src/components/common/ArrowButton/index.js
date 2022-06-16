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
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import * as Style from "./style";
var arrowDirection = {
    Up: "Up",
    Down: "Down",
    Left: "Left",
    Right: "Right",
};
var points = {
    Up: "2 14 10 6 18 14 10 6",
    Down: "2 6 10 14 18 6 10 14",
    Left: "14 2 6 10 14 18 6 10",
    Right: "6 2 14 10 6 18 14 10",
};
var ArrowButton = function (_a) {
    var handleOpenClick = _a.handleOpenClick, isOpen = _a.isOpen, outlineColor = _a.outlineColor, outlineWidth = _a.outlineWidth, direction = _a.direction;
    return (_jsx(Style.Button, __assign({ onClick: handleOpenClick }, { children: _jsx(Style.Svg, __assign({ viewBox: "0 0 20 20", isOpen: isOpen, outlineColor: outlineColor, outlineWidth: outlineWidth }, { children: _jsx("polyline", { points: points[direction] }) })) })));
};
export default ArrowButton;
