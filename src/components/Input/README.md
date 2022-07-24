## Input

![Input](https://firebasestorage.googleapis.com/v0/b/react-daily-components.appspot.com/o/Input.png?alt=media&token=b1436dd4-790c-4c2b-8033-85b4d11b8a84)

### Usage

```javascript
import React, { useState } from "react";
import { Input } from "react-daily-components";

function App() {
  const [inputValue, setInputValue] = useState < string > "";

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  return (
    <div>
      <Input value={inputValue} handleChange={setInputValue} />
    </div>
  );
}

export default App;
```

### Props

This component extends the html input tag.
So, you can use all the properties of the html input tag.
For example onChange, style, etc...

| props           | type                                  | desc                                               | default   |
| --------------- | ------------------------------------- | -------------------------------------------------- | --------- |
| value           | string                                | Input tag value                                    | required  |
| regex?          | Array\<RegularExpressions\> \| RegExp | Regular Expressions to allow or Regular Expression | -         |
| label?          | string                                | Label tag string                                   | -         |
| labelLocation?  | LabelLocations                        | Relative position of the Label                     | "topLeft" |
| gap?            | number                                | Input tag and Label tag spacing                    | 5         |
| buttonText?     | string                                | Submit button text                                 | "Submit"  |
| handleClick?    | () => void                            | Submit button onClick handler                      | -         |
| debounce?       | number                                | Add debounce to your button onClick function       | 0         |
| throttle?       | number                                | Add throttle to your button onClick function       | 0         |
| width?          | number                                | Can be injected as ThemeProvider...                | 200       |
| height?         | number                                | Can be injected as ThemeProvider...                | 30        |
| fontSize?       | number                                | Can be injected as ThemeProvider...                | 16        |
| textColor?      | string                                | Can be injected as ThemeProvider...                | "gray"    |
| borderRadius?   | number                                | Can be injected as ThemeProvider...                | 5         |
| outlineWidth?   | number                                | Can be injected as ThemeProvider...                | 1         |
| outlineColor?   | string                                | Can be injected as ThemeProvider...                | "gray"    |
| containerStyle? | React.CSSProperties                   | Container inline style                             | -         |
| labelStyle?     | React.CSSProperties                   | Container inline style                             | -         |

RegularExpressions = "korean" | "number" | "letter" | "lowerCase" | "upperCase" | "blank"
LabelLocations = "topLeft" | "topCenter" | "topRight" | "botLeft" | "botCenter" | "botRight" | "left" | "right
