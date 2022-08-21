## Pagination

### Usage

```javascript
import { Grid } from "react-daily-components";

function App() {
  return (
    <Grid
      w={"200px"}
      h={"200px"}
      gap={"10px"}
      gar={"1fr"}
      gtc={"repeat(3, 1fr)"}
    >
      <span>item 1</span>
      <span>item 2</span>
      <span>item 3</span>
      <span>item 4</span>
      <span>item 5</span>
      <span>item 6</span>
      <span>item 7</span>
      <span>item 8</span>
    </Grid>
  );
}

export default App;
```

### Props

This component extends the html div tag.
So, you can use all the properties of the html div tag.
For example onClick, style, etc...

| props                    | type                                       | desc         | default |
| ------------------------ | ------------------------------------------ | ------------ | ------- |
| width? \| w?             | StandardProperties["width"]                | preparing... | -       |
| height? \| h?            | StandardProperties["height"];              | preparing... | -       |
| margin? \|m?             | StandardProperties["margin"];              | preparing... | -       |
| padding? \| p?           | StandardProperties["padding"];             | preparing... | -       |
| autoColumns? \| gac?     | StandardProperties["gridAutoColumns"];     | preparing... | -       |
| autoRows? \| gar?        | StandardProperties["gridAutoRows"];        | preparing... | -       |
| autoFlow? \| gaf?        | StandardProperties["gridAutoFlow"];        | preparing... | -       |
| templateColumns? \| gtc? | StandardProperties["gridTemplateColumns"]; | preparing... | -       |
| templateRows? \| gtr?    | StandardProperties["gridTemplateRows"];    | preparing... | -       |
| templateArea? \| gta?    | StandardProperties["gridTemplateAreas"];   | preparing... | -       |
| alignContent? \| ac?     | StandardProperties["alignContent"];        | preparing... | -       |
| alignItems? \| ai?       | StandardProperties["alignItems"];          | preparing... | -       |
| justifyContent? \| jc?   | StandardProperties["justifyContent"];      | preparing... | -       |
| gap?                     | StandardProperties["gap"];                 | preparing... | -       |
| columnGap? \| cg?        | StandardProperties["columnGap"];           | preparing... | -       |
| rowGap? \| rg?           | StandardProperties["rowGap"];              | preparing... | -       |
