"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Background = void 0;
var styled_1 = require("@emotion/styled");
exports.Background = styled_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  position: ", ";\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  justify-content: center;\n  align-items: center;\n  z-index: ", ";\n  background-color: ", ";\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  position: ", ";\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  justify-content: center;\n  align-items: center;\n  z-index: ", ";\n  background-color: ", ";\n"])), function (_a) {
    var isFullScreen = _a.isFullScreen;
    return (isFullScreen ? "fixed" : "initial");
}, function (_a) {
    var isBlockedBackground = _a.isBlockedBackground;
    return (isBlockedBackground ? 9999 : -1);
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor;
});
var templateObject_1;
