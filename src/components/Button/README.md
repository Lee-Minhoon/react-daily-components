## Button

![Button](https://firebasestorage.googleapis.com/v0/b/react-daily-components.appspot.com/o/Button.png?alt=media&token=81cca214-0405-4282-b219-8a7e750241c9)

### Usage

```
import React from "react";
import { Button } from "react-daily-components";

function App() {
  return (
    <div>
      <Button handleClick={() => console.log("Hi")}>{"Button"}</Button>
    </div>
  );
}

export default App;
```

### Props

| prop          | type                   | desc         | default  |
| ------------- | ---------------------- | ------------ | -------- |
| children      | JSX.Element \| string; | preparing... | required |
| handleClick   | () => void;            | preparing... | required |
| debounce?     | number                 | preparing... | 0        |
| throttle?     | number                 | preparing... | 0        |
| width?        | number                 | preparing... | auto     |
| height?       | number                 | preparing... | 30       |
| fontSize?     | number                 | preparing... | 16       |
| textColor?    | string                 | preparing... | "gray"   |
| borderRadius? | number                 | preparing... | 5        |
| outlineWidth? | number                 | preparing... | 1        |
| outlineColor? | string                 | preparing... | "gray"   |
| buttonStyle?  | React.CSSProperties    | preparing... | -        |
