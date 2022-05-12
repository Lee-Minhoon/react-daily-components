import { useState } from "react";

import "./App.css";
import { SelectList } from "./components";

function App() {
  const [value, setValue] = useState<string>("");

  return (
    <div style={{ padding: "20px" }}>
      <SelectList
        itemList={[
          "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
        ]}
        value={value}
        placeholder={"Do Select!!!"}
        outlineWidth={1}
        outlineColor={"gray"}
        maxItemCount={8}
        handler={setValue}
      />
      <div>testetsetset</div>
    </div>
  );
}

export default App;
