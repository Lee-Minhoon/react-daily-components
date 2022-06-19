"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var Style = require("../style");
var PageItem = function (_a) {
    var children = _a.children, activate = _a.activate, targetPage = _a.targetPage, handleClick = _a.handleClick;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: activate ? ((0, jsx_runtime_1.jsx)(Style.PageItem, __assign({ activate: activate, onClick: function () { return handleClick(targetPage); } }, { children: children }))) : ((0, jsx_runtime_1.jsx)(Style.PageItem, __assign({ activate: activate }, { children: children }))) }));
};
exports.default = PageItem;
