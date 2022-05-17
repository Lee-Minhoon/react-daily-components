"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Word = void 0;
var styled_1 = require("@emotion/styled");
exports.Word = styled_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", ";\n  color: ", ";\n"], ["\n  font-size: ", ";\n  color: ", ";\n"])), function (_a) {
    var fontSize = _a.fontSize;
    return "".concat(fontSize, "px");
}, function (_a) {
    var textColor = _a.textColor;
    return textColor;
});
var templateObject_1;
