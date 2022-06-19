"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useThrottle = function (callback, timeout) {
    var _a = (0, react_1.useState)(true), ready = _a[0], setReady = _a[1];
    var timerRef = (0, react_1.useRef)();
    var throttledFunction = (0, react_1.useCallback)(function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        if (!ready)
            return;
        setReady(false);
        callback.apply(void 0, params);
    }, [ready, callback]);
    (0, react_1.useEffect)(function () {
        timerRef.current = setTimeout(function () {
            setReady(true);
        }, timeout);
        return function () {
            clearTimeout(timerRef.current);
        };
    }, [ready, timeout]);
    return throttledFunction;
};
exports.default = useThrottle;
