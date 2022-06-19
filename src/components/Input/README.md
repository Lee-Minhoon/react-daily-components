## Input

![Input](https://firebasestorage.googleapis.com/v0/b/react-daily-components.appspot.com/o/Input.png?alt=media&token=b1436dd4-790c-4c2b-8033-85b4d11b8a84)

### Usage

```javascript
import React, { useState } from "react";
import { Input } from "react-daily-components";

function App() {
  const [inputValue, setInputValue] = useState < string > "";

  return (
    <div>
      <Input value={inputValue} handleChange={setInputValue} />
    </div>
  );
}

export default App;
```

### Props

| props           | type                                  | desc         | default   |
| --------------- | ------------------------------------- | ------------ | --------- |
| value           | string                                | preparing... | required  |
| handleChange    | (value: string) => void               | preparing... | required  |
| regex?          | Array\<RegularExpressions\> \| RegExp | preparing... | -         |
| label?          | string                                | preparing... | -         |
| labelLocation?  | LabelLocations                        | preparing... | "topLeft" |
| gap?            | number                                | preparing... | 5         |
| handleClick?    | () => void                            | preparing... | -         |
| debounce?       | number                                | preparing... | 0         |
| throttle?       | number                                | preparing... | 0         |
| width?          | number                                | preparing... | 200       |
| height?         | number                                | preparing... | 30        |
| fontSize?       | number                                | preparing... | 16        |
| textColor?      | string                                | preparing... | "gray"    |
| borderRadius?   | number                                | preparing... | 5         |
| outlineWidth?   | number                                | preparing... | 1         |
| outlineColor?   | string                                | preparing... | "gray"    |
| containerStyle? | React.CSSProperties                   | preparing... | -         |
| labelStyle?     | React.CSSProperties                   | preparing... | -         |
| inputStyle?     | React.CSSProperties                   | preparing... | -         |
