"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.List = exports.Svg = exports.Button = exports.Input = exports.SelectWrapper = exports.SelectList = void 0;
var styled_1 = require("@emotion/styled");
exports.SelectList = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  position: relative;\n  &::after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: ", ";\n    top: 0;\n    left: 0;\n    outline: ", ";\n    border-radius: ", ";\n    opacity: 0.5;\n    box-shadow: ", ";\n  }\n"], ["\n  width: ", ";\n  position: relative;\n  &::after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: ", ";\n    top: 0;\n    left: 0;\n    outline: ", ";\n    border-radius: ", ";\n    opacity: 0.5;\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var width = _a.width;
    return "".concat(width, "px");
}, function (_a) {
    var isOpen = _a.isOpen, _b = _a.height, height = _b === void 0 ? 30 : _b, _c = _a.maxItemCount, maxItemCount = _c === void 0 ? 8 : _c;
    return isOpen ? "".concat((maxItemCount + 1) * height, "px") : "100%";
}, function (_a) {
    var isOpen = _a.isOpen, outlineWidth = _a.outlineWidth, outlineColor = _a.outlineColor;
    return isOpen ? "".concat(outlineWidth, "px solid ").concat(outlineColor) : "initial";
}, function (_a) {
    var borderRadius = _a.borderRadius;
    return "".concat(borderRadius, "px");
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? "0 0 6px rgba(0, 0, 0, 0.1)" : "initial";
});
exports.SelectWrapper = styled_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  position: relative;\n  align-items: center;\n  height: ", ";\n  &::after {\n    opacity: ", ";\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    outline: ", ";\n    border-radius: ", ";\n    border-bottom-left-radius: ", ";\n    border-bottom-right-radius: ", ";\n    z-index: 3;\n  }\n  padding: 0 10px;\n"], ["\n  display: flex;\n  position: relative;\n  align-items: center;\n  height: ", ";\n  &::after {\n    opacity: ", ";\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    outline: ", ";\n    border-radius: ", ";\n    border-bottom-left-radius: ", ";\n    border-bottom-right-radius: ", ";\n    z-index: 3;\n  }\n  padding: 0 10px;\n"])), function (_a) {
    var height = _a.height;
    return "".concat(height, "px");
}, function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? "initial" : 0.5);
}, function (_a) {
    var outlineWidth = _a.outlineWidth, outlineColor = _a.outlineColor;
    return "".concat(outlineWidth, "px solid ").concat(outlineColor);
}, function (_a) {
    var borderRadius = _a.borderRadius;
    return "".concat(borderRadius, "px");
}, function (_a) {
    var isOpen = _a.isOpen, borderRadius = _a.borderRadius;
    return isOpen ? "initial" : "".concat(borderRadius, "px");
}, function (_a) {
    var isOpen = _a.isOpen, borderRadius = _a.borderRadius;
    return isOpen ? "initial" : "".concat(borderRadius, "px");
});
exports.Input = styled_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n  min-width: 0;\n  z-index: 4;\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n  outline: none;\n  color: ", ";\n  font-size: ", ";\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n"], ["\n  flex: 1;\n  min-width: 0;\n  z-index: 4;\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n  outline: none;\n  color: ", ";\n  font-size: ", ";\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n"])), function (_a) {
    var textColor = _a.textColor;
    return textColor;
}, function (_a) {
    var fontSize = _a.fontSize;
    return "".concat(fontSize, "px");
});
exports.Button = styled_1.default.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  z-index: 4;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  border: none;\n  :hover {\n    cursor: pointer;\n  }\n  background-color: initial;\n"], ["\n  z-index: 4;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  border: none;\n  :hover {\n    cursor: pointer;\n  }\n  background-color: initial;\n"])));
exports.Svg = styled_1.default.svg(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: block;\n  stroke: ", ";\n  opacity: ", ";\n  stroke-width: ", ";\n"], ["\n  display: block;\n  stroke: ", ";\n  opacity: ", ";\n  stroke-width: ", ";\n"])), function (_a) {
    var outlineColor = _a.outlineColor;
    return outlineColor;
}, function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? "initial" : 0.5);
}, function (_a) {
    var outlineWidth = _a.outlineWidth;
    return outlineWidth;
});
exports.List = styled_1.default.ul(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  list-style-type: none;\n  color: ", ";\n  padding: 0;\n  margin: 0;\n  max-height: ", ";\n  overflow-y: auto;\n  position: absolute;\n  background-color: white;\n  width: 100%;\n  font-size: ", ";\n  z-index: 2;\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  ::-webkit-scrollbar {\n    width: 12px;\n  }\n  ::-webkit-scrollbar-track {\n    background-color: whitesmoke;\n    border-radius: ", ";\n  }\n  ::-webkit-scrollbar-thumb {\n    background-color: rgba(0, 0, 0, 0.1);\n    border-radius: ", ";\n    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.1);\n  }\n"], ["\n  list-style-type: none;\n  color: ", ";\n  padding: 0;\n  margin: 0;\n  max-height: ", ";\n  overflow-y: auto;\n  position: absolute;\n  background-color: white;\n  width: 100%;\n  font-size: ", ";\n  z-index: 2;\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  ::-webkit-scrollbar {\n    width: 12px;\n  }\n  ::-webkit-scrollbar-track {\n    background-color: whitesmoke;\n    border-radius: ", ";\n  }\n  ::-webkit-scrollbar-thumb {\n    background-color: rgba(0, 0, 0, 0.1);\n    border-radius: ", ";\n    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.1);\n  }\n"])), function (_a) {
    var textColor = _a.textColor;
    return textColor;
}, function (_a) {
    var _b = _a.height, height = _b === void 0 ? 30 : _b, _c = _a.maxItemCount, maxItemCount = _c === void 0 ? 8 : _c;
    return "".concat(height * maxItemCount, "px");
}, function (_a) {
    var fontSize = _a.fontSize;
    return "".concat(fontSize, "px");
}, function (_a) {
    var borderRadius = _a.borderRadius;
    return "".concat(borderRadius, "px");
}, function (_a) {
    var borderRadius = _a.borderRadius;
    return "".concat(borderRadius, "px");
}, function (_a) {
    var borderRadius = _a.borderRadius;
    return "".concat(borderRadius, "px");
}, function (_a) {
    var borderRadius = _a.borderRadius;
    return "".concat(borderRadius, "px");
});
exports.Item = styled_1.default.li(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  height: ", ";\n  padding: 0 10px;\n  line-height: 30px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  :hover {\n    cursor: pointer;\n    background-color: rgba(0, 0, 0, 0.1);\n    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.1);\n  }\n"], ["\n  height: ", ";\n  padding: 0 10px;\n  line-height: 30px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  :hover {\n    cursor: pointer;\n    background-color: rgba(0, 0, 0, 0.1);\n    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.1);\n  }\n"])), function (_a) {
    var height = _a.height;
    return "".concat(height, "px");
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
