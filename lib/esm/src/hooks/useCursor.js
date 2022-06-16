import { useEffect, useState } from "react";
var useCursor = function (ref, dependency) {
    var _a = useState(0), cursor = _a[0], setCursor = _a[1];
    useEffect(function () {
        if (!ref.current)
            return;
        ref.current.selectionStart = cursor;
        ref.current.selectionEnd = cursor;
    }, [cursor, dependency]);
    return { cursor: cursor, setCursor: setCursor };
};
export default useCursor;
