## Pagination

![Pagination](https://firebasestorage.googleapis.com/v0/b/react-daily-components.appspot.com/o/Pagination.png?alt=media&token=63e5a7b2-ec1f-4fe1-a041-ccfedf04d4c0)

### Usage

```javascript
import React, { useState } from "react";
import { Pagination } from "react-daily-components";

const totalPage = 15;

function App() {
  const [page, setPage] = useState < number > 1;

  return (
    <div>
      <Pagination
        totalPages={totalPage}
        currentPage={page}
        block={10}
        width={500}
        handleClick={setPage}
      />
    </div>
  );
}

export default App;
```

### Props

| props                 | type                         | desc         | default  |
| --------------------- | ---------------------------- | ------------ | -------- |
| currentPage           | number                       | preparing... | required |
| totalPages            | number                       | preparing... | required |
| block                 | number                       | preparing... | required |
| handleClick           | (targetPage: number) => void | preparing... | required |
| isShowFirstAndLast?   | boolean                      | preparing... | true     |
| isShowDeactiveButton? | boolean                      | preparing... | true     |
| width?                | number                       | preparing... | -        |
| gap?                  | number                       | preparing... | 10       |
| fontSize?             | number                       | preparing... | 16       |
| color?                | string                       | preparing... | "gray"   |
| containerStyle?       | React.CSSProperties          | preparing... | -        |
| firstPageRenderItem?  | JSX.Element                  | preparing... | -        |
| prevPageRenderItem?   | JSX.Element                  | preparing... | -        |
| nextPageRenderItem?   | JSX.Element                  | preparing... | -        |
| lastPageRenderItem?   | JSX.Element                  | preparing... | -        |
