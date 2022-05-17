import { useState } from "react";
var useInput = function (initialValue) {
    var _a = useState(initialValue), value = _a[0], setValue = _a[1];
    var onChange = function (event) {
        setValue(event.target.value);
    };
    return { value: value, onChange: onChange, setValue: setValue };
};
export default useInput;
