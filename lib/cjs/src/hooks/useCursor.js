"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useCursor = function (ref, dependency) {
    var _a = (0, react_1.useState)(0), cursor = _a[0], setCursor = _a[1];
    (0, react_1.useEffect)(function () {
        if (!ref.current)
            return;
        ref.current.selectionStart = cursor;
        ref.current.selectionEnd = cursor;
    }, [cursor, dependency]);
    return { cursor: cursor, setCursor: setCursor };
};
exports.default = useCursor;
