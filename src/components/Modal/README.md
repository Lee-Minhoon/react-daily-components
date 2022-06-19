## Modal

![Modal](https://firebasestorage.googleapis.com/v0/b/react-daily-components.appspot.com/o/Modal.png?alt=media&token=9cfb1ca0-0119-4c07-9211-52a7db639a8c)

### Usage

```
import React, { useState } from "react";
import { Button, Modal } from "react-daily-components";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Button handleClick={() => setIsOpen(true)}>{"Button"}</Button>
      {isOpen && (
        <Modal
          title={"Auguries of Innocence"}
          handleCancelClick={() => setIsOpen(false)}
          handleConfirmClick={() => setIsOpen(false)}
        >
          {`To see a World in a Grain of Sand
          And a Heaven in a Wild Flower,
          Hold Infinity in the palm of your hand
          And Eternity in an hour...`}
        </Modal>
      )}
    </div>
  );
}

export default App;
```

### Props

| props                | type                  | desc         | default              |
| -------------------- | --------------------- | ------------ | -------------------- |
| title                | string                | preparing... | required             |
| children             | JSX.Element \| string | preparing... | required             |
| handleConfirmClick   | () => void            | preparing... | required             |
| handleCancelClick    | () => void            | preparing... | required             |
| isFullScreen?        | boolean               | preparing... | true                 |
| isBlockedBackground? | boolean               | preparing... | true                 |
| width?               | number                | preparing... | 400                  |
| height?              | number                | preparing... | auto                 |
| fontSize?            | number                | preparing... | 16                   |
| textColor?           | string                | preparing... | "gray"               |
| borderRadius?        | number                | preparing... | 5                    |
| outlineWidth?        | number                | preparing... | 0                    |
| outlineColor?        | string                | preparing... | "gray"               |
| backgroundColor      | string                | preparing... | "rgba(0, 0, 0, 0.2)" |
