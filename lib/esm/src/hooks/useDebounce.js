import { useRef } from "react";
var uesDebounce = function (callback, timeout) {
    var timerRef = useRef(null);
    return function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        if (timerRef.current)
            clearTimeout(timerRef.current);
        timerRef.current = setTimeout(function () {
            callback.apply(void 0, params);
            timerRef.current = null;
        }, timeout);
    };
};
export default uesDebounce;
