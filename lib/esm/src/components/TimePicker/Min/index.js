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
import * as Style from "../style";
var Min = function (_a) {
    var minRef = _a.minRef, min = _a.min, setMin = _a.setMin, height = _a.height, listStyle = _a.listStyle, itemStyle = _a.itemStyle;
    return (_jsx(Style.List, __assign({ ref: minRef, style: listStyle }, { children: Array.from(new Array(60)).map(function (item, index) { return (_jsx(Style.Item, __assign({ isSelected: min === index, height: height, onClick: function () { return setMin(index); }, style: itemStyle }, { children: index }), index)); }) })));
};
export default Min;
