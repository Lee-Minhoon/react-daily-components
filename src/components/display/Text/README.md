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

This component extends the html p tag.
So, you can use all the properties of the html p tag.
For example onClick, style, etc...

| props                  | type                                  | desc         | default |
| ---------------------- | ------------------------------------- | ------------ | ------- |
| width? \| w?           | StandardProperties["width"]           | preparing... | -       |
| height? \| h?          | StandardProperties["height"];         | preparing... | -       |
| maxWidth? \| mw?       | StandardProperties["maxWidth"]        | preparing... | -       |
| maxHeight? \| mh?      | StandardProperties["maxHeight"];      | preparing... | -       |
| margin? \|m?           | StandardProperties["margin"];         | preparing... | -       |
| padding? \| p?         | StandardProperties["padding"];        | preparing... | -       |
| font?                  | StandardProperties["font"];           | preparing... | -       |
| fontStyle? \| fst?     | StandardProperties["fontStyle"];      | preparing... | -       |
| fontWeight? \| fw?     | StandardProperties["fontWeight"];     | preparing... | -       |
| fontSize? \| fsz?      | StandardProperties["fontSize"];       | preparing... | -       |
| fontFamily? \| ff?     | StandardProperties["fontFamily"];     | preparing... | -       |
| fontVariant? \| fv?    | StandardProperties["fontVariant"];    | preparing... | -       |
| lineHeight? \| lh?     | StandardProperties["lineHeight"];     | preparing... | -       |
| textDecoration? \| td? | StandardProperties["textDecoration"]; | preparing... | -       |
