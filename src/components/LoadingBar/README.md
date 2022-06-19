## LoadingBar

![LoadingBar](https://firebasestorage.googleapis.com/v0/b/react-daily-components.appspot.com/o/LoadingBar.png?alt=media&token=2f8812f8-c496-404f-8921-f3a00c76e37a)

### Usage

```
import React, { useEffect, useState } from "react";
import { LoadingBar } from "react-daily-components";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <div>
      {isLoading && <LoadingBar />}
      {!isLoading && <span>Content</span>}
    </div>
  );
}

export default App;
```

### Props

| props                | type    | desc         | default              |
| -------------------- | ------- | ------------ | -------------------- |
| isFullScreen?        | boolean | preparing... | true                 |
| isBlockedBackground? | boolean | preparing... | true                 |
| spinnerSize?         | number  | preparing... | 50                   |
| spinnerBorderWidth?  | number  | preparing... | 5                    |
| spinnerBodyColor?    | string  | preparing... | "white"              |
| spinnerBarColor?     | string  | preparing... | "gray"               |
| backgroundColor?     | string  | preparing... | "rgba(0, 0, 0, 0.2)" |
