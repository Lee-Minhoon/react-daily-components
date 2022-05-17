"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useInput = function (initialValue) {
    var _a = (0, react_1.useState)(initialValue), value = _a[0], setValue = _a[1];
    var onChange = function (event) {
        setValue(event.target.value);
    };
    return { value: value, onChange: onChange, setValue: setValue };
};
exports.default = useInput;
