"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useModal = function () {
    var _a = (0, react_1.useState)(false), isOpen = _a[0], setIsOpen = _a[1];
    var handleOpenClick = (0, react_1.useCallback)(function () {
        setIsOpen(function (prev) { return !prev; });
    }, []);
    return { isOpen: isOpen, setIsOpen: setIsOpen, handleOpenClick: handleOpenClick };
};
exports.default = useModal;
