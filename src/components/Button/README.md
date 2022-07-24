## Button

![Button](https://firebasestorage.googleapis.com/v0/b/react-daily-components.appspot.com/o/Button.png?alt=media&token=81cca214-0405-4282-b219-8a7e750241c9)

### Usage

```javascript
import React from "react";
import { Button } from "react-daily-components";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("Hi")}>{"Button"}</Button>
    </div>
  );
}

export default App;
```

### Props

This component extends the html button tag.
So, you can use all the properties of the html button tag.
For example onClick, style, etc...

| prop          | type   | desc                                   | default |
| ------------- | ------ | -------------------------------------- | ------- |
| debounce?     | number | Add debounce to your onClick function. | 0       |
| throttle?     | number | Add throttle to your onClick function. | 0       |
| width?        | number | Can be injected as ThemeProvider...    | auto    |
| height?       | number | Can be injected as ThemeProvider...    | 30      |
| fontSize?     | number | Can be injected as ThemeProvider...    | 16      |
| textColor?    | string | Can be injected as ThemeProvider...    | "gray"  |
| borderRadius? | number | Can be injected as ThemeProvider...    | 5       |
| outlineWidth? | number | Can be injected as ThemeProvider...    | 1       |
| outlineColor? | string | Can be injected as ThemeProvider...    | "gray"  |
