import { useCallback, useState } from "react";
var useModal = function () {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var handleOpenClick = useCallback(function () {
        setIsOpen(function (prev) { return !prev; });
    }, []);
    return { isOpen: isOpen, setIsOpen: setIsOpen, handleOpenClick: handleOpenClick };
};
export default useModal;
