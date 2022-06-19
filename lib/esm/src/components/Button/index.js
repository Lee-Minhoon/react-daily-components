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
import uesDebounce from "../../hooks/useDebounce";
import useThrottle from "../../hooks/useThrottle";
import * as Style from "./style";
var Button = function (_a) {
    var children = _a.children, handleClick = _a.handleClick, _b = _a.debounce, debounce = _b === void 0 ? 0 : _b, _c = _a.throttle, throttle = _c === void 0 ? 0 : _c, width = _a.width, _d = _a.height, height = _d === void 0 ? 30 : _d, _e = _a.fontSize, fontSize = _e === void 0 ? 16 : _e, _f = _a.textColor, textColor = _f === void 0 ? "gray" : _f, _g = _a.borderRadius, borderRadius = _g === void 0 ? 5 : _g, _h = _a.outlineWidth, outlineWidth = _h === void 0 ? 1 : _h, _j = _a.outlineColor, outlineColor = _j === void 0 ? "gray" : _j, buttonStyle = _a.buttonStyle;
    var debouncedFunction = uesDebounce(handleClick, debounce);
    var throttledFunction = useThrottle(debouncedFunction, throttle);
    return (_jsx(Style.Button, __assign({ width: width, height: height, fontSize: fontSize, textColor: textColor, borderRadius: borderRadius, outlineWidth: outlineWidth, outlineColor: outlineColor, onClick: throttledFunction, style: buttonStyle }, { children: children })));
};
export default Button;
