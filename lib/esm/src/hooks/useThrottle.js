import { useCallback, useEffect, useRef, useState } from "react";
var useThrottle = function (callback, timeout) {
    var _a = useState(true), ready = _a[0], setReady = _a[1];
    var timerRef = useRef();
    var throttledFunction = useCallback(function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        if (!ready)
            return;
        setReady(false);
        callback.apply(void 0, params);
    }, [ready, callback]);
    useEffect(function () {
        timerRef.current = setTimeout(function () {
            setReady(true);
        }, timeout);
        return function () {
            clearTimeout(timerRef.current);
        };
    }, [ready, timeout]);
    return throttledFunction;
};
export default useThrottle;
