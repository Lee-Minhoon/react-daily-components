## TimePicker

![TimePicker](https://firebasestorage.googleapis.com/v0/b/react-daily-components.appspot.com/o/TimePicker.png?alt=media&token=5623765b-2344-412f-81f6-8a0308666e54)

### Usage

```javascript
import React from "react";
import { TimePicker } from "react-daily-components";

function App() {
  return (
    <div>
      <TimePicker
        handleSelect={(time) => {
          console.log(time);
        }}
      />
    </div>
  );
}

export default App;
```

### Props

| props                       | type                 | desc         | default  |
| --------------------------- | -------------------- | ------------ | -------- |
| handleSelect                | (value: any) => void | preparing... | required |
| is24Hour?                   | boolean              | preparing... | false    |
| isSelectHour?               | boolean              | preparing... | true     |
| isSelectMin?                | boolean              | preparing... | true     |
| isSelectSeconds?            | boolean              | preparing... | false    |
| maxItemCount?               | number               | preparing... | 6        |
| width?                      | number               | preparing... | 200      |
| height?                     | number               | preparing... | 30       |
| fontSize?                   | number               | preparing... | 16       |
| textColor?                  | string               | preparing... | "gray"   |
| borderRadius?               | number               | preparing... | 5        |
| outlineWidth?               | number               | preparing... | 1        |
| outlineColor?               | string               | preparing... | "gray"   |
| selectListActiveStyle?      | React.CSSProperties  | preparing... | -        |
| selectListInactiveStyle?    | React.CSSProperties  | preparing... | -        |
| selectWrapperActiveStyle?   | React.CSSProperties  | preparing... | -        |
| selectWrapperInactiveStyle? | React.CSSProperties  | preparing... | -        |
| listContainerStyle?         | React.CSSProperties  | preparing... | -        |
| listStyle?                  | React.CSSProperties  | preparing... | -        |
| itemStyle?                  | React.CSSProperties  | preparing... | -        |
