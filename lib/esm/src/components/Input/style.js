var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "@emotion/styled";
import { LABEL_LOCATIONS } from ".";
var getFlexDirection = function (input) {
    return input === LABEL_LOCATIONS.left || input === LABEL_LOCATIONS.right
        ? "row"
        : "column";
};
var getAlignItems = function (input) {
    var centerCondition = input === LABEL_LOCATIONS.left ||
        input === LABEL_LOCATIONS.right ||
        input === LABEL_LOCATIONS.topCenter ||
        input === LABEL_LOCATIONS.botCenter;
    var rightCondition = input === LABEL_LOCATIONS.topRight || input === LABEL_LOCATIONS.botRight;
    if (centerCondition)
        return "center";
    else if (rightCondition)
        return "flex-end";
    else
        return "initial";
};
export var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: ", ";\n  align-items: ", ";\n  width: ", ";\n  gap: ", ";\n"], ["\n  display: flex;\n  flex-direction: ", ";\n  align-items: ", ";\n  width: ", ";\n  gap: ", ";\n"])), function (_a) {
    var _b = _a.labelLocation, labelLocation = _b === void 0 ? LABEL_LOCATIONS.left : _b;
    return getFlexDirection(labelLocation);
}, function (_a) {
    var _b = _a.labelLocation, labelLocation = _b === void 0 ? LABEL_LOCATIONS.left : _b;
    return getAlignItems(labelLocation);
}, function (_a) {
    var width = _a.width;
    return "".concat(width, "px");
}, function (_a) {
    var gap = _a.gap;
    return "".concat(gap, "px");
});
export var Label = styled.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: ", ";\n  color: ", ";\n  opacity: ", ";\n"], ["\n  font-size: ", ";\n  color: ", ";\n  opacity: ", ";\n"])), function (_a) {
    var fontSize = _a.fontSize;
    return "".concat(fontSize, "px");
}, function (_a) {
    var textColor = _a.textColor;
    return "".concat(textColor);
}, function (_a) {
    var isFocus = _a.isFocus;
    return (isFocus ? "initial" : 0.5);
});
export var InputContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  min-width: 0;\n  width: ", ";\n  height: ", ";\n  position: relative;\n  padding: 0 10px;\n  display: flex;\n  align-items: center;\n  &::after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    outline: ", ";\n    border-radius: ", ";\n    opacity: ", ";\n  }\n"], ["\n  min-width: 0;\n  width: ", ";\n  height: ", ";\n  position: relative;\n  padding: 0 10px;\n  display: flex;\n  align-items: center;\n  &::after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    outline: ", ";\n    border-radius: ", ";\n    opacity: ", ";\n  }\n"])), function (_a) {
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
    var isFocus = _a.isFocus;
    return (isFocus ? "initial" : 0.5);
});
export var Input = styled.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex: 1;\n  min-width: 0;\n  z-index: 1;\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n  outline: none;\n  color: ", ";\n  font-size: ", ";\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n"], ["\n  flex: 1;\n  min-width: 0;\n  z-index: 1;\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n  outline: none;\n  color: ", ";\n  font-size: ", ";\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n"])), function (_a) {
    var textColor = _a.textColor;
    return textColor;
}, function (_a) {
    var fontSize = _a.fontSize;
    return "".concat(fontSize, "px");
});
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
