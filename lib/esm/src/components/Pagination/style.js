var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "@emotion/styled";
export var Pagination = styled.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  display: flex;\n  justify-content: center;\n  font-size: ", ";\n"], ["\n  width: ", ";\n  display: flex;\n  justify-content: center;\n  font-size: ", ";\n"])), function (_a) {
    var width = _a.width;
    return (width ? "".concat(width, "px") : "100%");
}, function (_a) {
    var fontSize = _a.fontSize;
    return "".concat(fontSize, "px");
});
export var List = styled.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  list-style-type: none;\n  gap: ", ";\n  align-items: center;\n  margin: 0px;\n  padding: 0px;\n"], ["\n  display: flex;\n  list-style-type: none;\n  gap: ", ";\n  align-items: center;\n  margin: 0px;\n  padding: 0px;\n"])), function (_a) {
    var gap = _a.gap;
    return "".concat(gap, "px");
});
export var SvgWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 1em;\n  height: 1em;\n"], ["\n  width: 1em;\n  height: 1em;\n"])));
export var Svg = styled.svg(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n  stroke: ", ";\n  stroke-width: 1px;\n  opacity: 0.5;\n  &:hover {\n    opacity: ", ";\n  }\n"], ["\n  display: block;\n  stroke: ", ";\n  stroke-width: 1px;\n  opacity: 0.5;\n  &:hover {\n    opacity: ", ";\n  }\n"])), function (_a) {
    var color = _a.color;
    return color;
}, function (_a) {
    var activate = _a.activate;
    return (activate ? "initial" : 0.5);
});
export var Item = styled.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: block;\n  width: 1em;\n  color: ", ";\n  font-weight: ", ";\n  opacity: ", ";\n  &:hover {\n    opacity: initial;\n  }\n"], ["\n  display: block;\n  width: 1em;\n  color: ", ";\n  font-weight: ", ";\n  opacity: ", ";\n  &:hover {\n    opacity: initial;\n  }\n"])), function (_a) {
    var color = _a.color;
    return color;
}, function (_a) {
    var activate = _a.activate;
    return (!activate ? "bold" : "initial");
}, function (_a) {
    var activate = _a.activate;
    return (!activate ? "initial" : 0.5);
});
export var PageItem = styled.li(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  &:hover {\n    cursor: ", ";\n  }\n"], ["\n  &:hover {\n    cursor: ", ";\n  }\n"])), function (_a) {
    var activate = _a.activate;
    return (activate ? "pointer" : "initial");
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
