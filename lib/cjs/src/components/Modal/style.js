"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = exports.Content = exports.Header = exports.Container = void 0;
var styled_1 = require("@emotion/styled");
exports.Container = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background-color: white;\n  outline: ", ";\n  border-radius: ", ";\n  color: ", ";\n  font-size: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n  background-color: white;\n  outline: ", ";\n  border-radius: ", ";\n  color: ", ";\n  font-size: ", ";\n"])), function (_a) {
    var width = _a.width;
    return "".concat(width, "px");
}, function (_a) {
    var height = _a.height;
    return "".concat(height, "px");
}, function (_a) {
    var outlineWidth = _a.outlineWidth, outlineColor = _a.outlineColor;
    return "".concat(outlineWidth, "px solid ").concat(outlineColor);
}, function (_a) {
    var borderRadius = _a.borderRadius;
    return "".concat(borderRadius, "px");
}, function (_a) {
    var textColor = _a.textColor;
    return textColor;
}, function (_a) {
    var fontSize = _a.fontSize;
    return "".concat(fontSize, "px");
});
exports.Header = styled_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 60px;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.5);\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  font-size: ", ";\n"], ["\n  height: 60px;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.5);\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  font-size: ", ";\n"])), function (_a) {
    var _b = _a.fontSize, fontSize = _b === void 0 ? 16 : _b;
    return "".concat(fontSize * 1.2, "px");
});
exports.Content = styled_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 20px;\n  white-space: pre-line;\n"], ["\n  padding: 20px;\n  white-space: pre-line;\n"])));
exports.Footer = styled_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 0 20px;\n"], ["\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 0 20px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
// export const Input = styled.input<InputStyleProps>`
//   flex: 1;
//   min-width: 0;
//   z-index: 1;
//   background-color: rgba(0, 0, 0, 0);
//   border: none;
//   outline: none;
//   color: ${({ textColor }) => textColor};
//   font-size: ${({ fontSize }) => `${fontSize}px`};
//   overflow-x: hidden;
//   text-overflow: ellipsis;
// `;
