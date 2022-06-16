var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "@emotion/styled";
export var Container = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  position: ", ";\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  justify-content: center;\n  align-items: center;\n  z-index: ", ";\n  background-color: ", ";\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  position: ", ";\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  justify-content: center;\n  align-items: center;\n  z-index: ", ";\n  background-color: ", ";\n"])), function (_a) {
    var isFullScreen = _a.isFullScreen;
    return (isFullScreen ? "fixed" : "initial");
}, function (_a) {
    var isBlockedBackground = _a.isBlockedBackground;
    return (isBlockedBackground ? 9999 : -1);
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor;
});
export var Spinner = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  border: ", ";\n  border-radius: 50%;\n  border-top: ", ";\n  width: ", ";\n  height: ", ";\n  animation: spin 1s infinite linear;\n"], ["\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  border: ", ";\n  border-radius: 50%;\n  border-top: ", ";\n  width: ", ";\n  height: ", ";\n  animation: spin 1s infinite linear;\n"])), function (_a) {
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
var templateObject_1, templateObject_2;
