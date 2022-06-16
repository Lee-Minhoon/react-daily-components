"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useSetScrollPosition = function (ref, position, dependency) {
    (0, react_1.useEffect)(function () {
        if (ref.current)
            ref.current.scrollTop = position;
    }, [dependency]);
};
exports.default = useSetScrollPosition;
