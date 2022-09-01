## Flex

### Usage

```javascript
import { Flex } from "react-daily-components";

function App() {
  return (
    <Flex direction="row" w={"200px"} h={"200px"} gap={"10px"} wrap={"wrap"}>
      <span>item 1</span>
      <span>item 2</span>
      <span>item 3</span>
      <span>item 4</span>
      <span>item 5</span>
      <span>item 6</span>
      <span>item 7</span>
      <span>item 8</span>
    </Flex>
  );
}

export default App;
```

### Props

This component extends the html div tag.
So, you can use all the properties of the html div tag.
For example onClick, style, etc...

| props                 | type                                | desc         | default |
| --------------------- | ----------------------------------- | ------------ | ------- |
| width? \| w?          | StandardProperties["width"]         | preparing... | -       |
| height? \| h?         | StandardProperties["height"];       | preparing... | -       |
| maxWidth? \| mw?      | StandardProperties["maxWidth"]      | preparing... | -       |
| maxHeight? \| mh?     | StandardProperties["maxHeight"];    | preparing... | -       |
| margin? \|m?          | StandardProperties["margin"];       | preparing... | -       |
| padding? \| p?        | StandardProperties["padding"];      | preparing... | -       |
| border? \| bd?        | StandardProperties["border"];       | preparing... | -       |
| borderRadius? \| bdr? | StandardProperties["borderRadius"]; | preparing... | -       |
| boxShadow? \| bs?     | StandardProperties["boxShadow"];    | preparing... | -       |
