import { useEffect } from "react";
var useSetScrollPosition = function (ref, position, dependency) {
    useEffect(function () {
        if (ref.current)
            ref.current.scrollTop = position;
    }, [dependency]);
};
export default useSetScrollPosition;
