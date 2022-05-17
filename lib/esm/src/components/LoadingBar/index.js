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
var LoadingBar = function (_a) {
    var _b = _a.spinnerSize, spinnerSize = _b === void 0 ? 50 : _b, _c = _a.spinnerBorderWidth, spinnerBorderWidth = _c === void 0 ? 5 : _c, _d = _a.spinnerBodyColor, spinnerBodyColor = _d === void 0 ? "white" : _d, _e = _a.spinnerBarColor, spinnerBarColor = _e === void 0 ? "gray" : _e, _f = _a.backgroundColor, backgroundColor = _f === void 0 ? "rgba(0, 0, 0, 0.2)" : _f, _g = _a.isBlockedBackground, isBlockedBackground = _g === void 0 ? true : _g, _h = _a.isFullScreen, isFullScreen = _h === void 0 ? true : _h;
    return (_jsx(Style.LoadingBar, __assign({ backgroundColor: backgroundColor, isBlockedBackground: isBlockedBackground, isFullScreen: isFullScreen }, { children: _jsx(Style.Spinner, { spinnerSize: spinnerSize, spinnerBorderWidth: spinnerBorderWidth, spinnerBodyColor: spinnerBodyColor, spinnerBarColor: spinnerBarColor }) })));
};
export default LoadingBar;
