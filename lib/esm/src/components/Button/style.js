var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "@emotion/styled";
export var Button = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  width: ", ";\n  height: ", ";\n  padding: 0 10px;\n  border: none;\n  background-color: initial;\n  cursor: pointer;\n  position: relative;\n  &::after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    outline: ", ";\n    border-radius: ", ";\n    opacity: 0.5;\n  }\n  &:hover {\n    box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);\n    &::after {\n      opacity: 1;\n    }\n  }\n"], ["\n  color: ", ";\n  font-size: ", ";\n  width: ", ";\n  height: ", ";\n  padding: 0 10px;\n  border: none;\n  background-color: initial;\n  cursor: pointer;\n  position: relative;\n  &::after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    outline: ", ";\n    border-radius: ", ";\n    opacity: 0.5;\n  }\n  &:hover {\n    box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);\n    &::after {\n      opacity: 1;\n    }\n  }\n"])), function (_a) {
    var textColor = _a.textColor;
    return textColor;
}, function (_a) {
    var fontSize = _a.fontSize;
    return "".concat(fontSize, "px");
}, function (_a) {
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
});
var templateObject_1;
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
