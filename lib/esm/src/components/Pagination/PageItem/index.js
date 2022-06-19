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
import { jsx as _jsx, Fragment as _Fragment } from "@emotion/react/jsx-runtime";
import * as Style from "../style";
var PageItem = function (_a) {
    var children = _a.children, activate = _a.activate, targetPage = _a.targetPage, handleClick = _a.handleClick;
    return (_jsx(_Fragment, { children: activate ? (_jsx(Style.PageItem, __assign({ activate: activate, onClick: function () { return handleClick(targetPage); } }, { children: children }))) : (_jsx(Style.PageItem, __assign({ activate: activate }, { children: children }))) }));
};
export default PageItem;
