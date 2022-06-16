"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Svg = exports.Button = void 0;
var styled_1 = require("@emotion/styled");
exports.Button = styled_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  z-index: 1;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  border: none;\n  :hover {\n    cursor: pointer;\n  }\n  background-color: initial;\n"], ["\n  z-index: 1;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  border: none;\n  :hover {\n    cursor: pointer;\n  }\n  background-color: initial;\n"])));
exports.Svg = styled_1.default.svg(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  stroke: ", ";\n  opacity: ", ";\n  stroke-width: ", ";\n"], ["\n  display: block;\n  stroke: ", ";\n  opacity: ", ";\n  stroke-width: ", ";\n"])), function (_a) {
    var outlineColor = _a.outlineColor;
    return outlineColor;
}, function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? "initial" : 0.5);
}, function (_a) {
    var outlineWidth = _a.outlineWidth;
    return outlineWidth;
});
var templateObject_1, templateObject_2;
// export const ArrowButton = styled.button<SelectListStyleProps>`
//   font-size: ${({ fontSize }) => `${fontSize}px`};
//   width: 1em;
//   height: 1em;
//   padding: 0;
//   border: none;
//   :hover {
//     cursor: pointer;
//   }
//   background-color: initial;
//   z-index: 1;
// `;
