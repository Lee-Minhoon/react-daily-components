var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "@emotion/styled";
export var Spinner = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  border: ", ";\n  border-radius: 50%;\n  border-top: ", ";\n  width: ", ";\n  height: ", ";\n  animation: spin 1s infinite linear;\n"], ["\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  border: ", ";\n  border-radius: 50%;\n  border-top: ", ";\n  width: ", ";\n  height: ", ";\n  animation: spin 1s infinite linear;\n"])), function (_a) {
    var spinnerBorderWidth = _a.spinnerBorderWidth, spinnerBodyColor = _a.spinnerBodyColor;
    return "".concat(spinnerBorderWidth, "px solid ").concat(spinnerBodyColor);
}, function (_a) {
    var spinnerBorderWidth = _a.spinnerBorderWidth, spinnerBarColor = _a.spinnerBarColor;
    return "".concat(spinnerBorderWidth, "px solid ").concat(spinnerBarColor);
}, function (_a) {
    var spinnerSize = _a.spinnerSize;
    return "".concat(spinnerSize, "px");
}, function (_a) {
    var spinnerSize = _a.spinnerSize;
    return "".concat(spinnerSize, "px");
});
var templateObject_1;
