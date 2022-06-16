import { useEffect } from "react";
var useClickOutside = function (ref, handler) {
    useEffect(function () {
        var checkIfClickedOutside = function (e) {
            var _a;
            if (!ref.current || !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
                handler(false);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return function () {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [ref, handler]);
};
export default useClickOutside;
