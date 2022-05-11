import { useState } from "react";

import "./App.css";
import { SelectList } from "./components";

function App() {
  const [value, setValue] = useState<string>("");

  return (
    <div style={{ padding: "20px" }}>
      <SelectList
        itemList={["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]}
        value={value}
        placeholder={"Do Select!!!"}
        activeColor={"gray"}
        inactiveColor={"silver"}
        maxItemCount={8}
        handler={setValue}
      />
      <div>testetsetset</div>
    </div>
  );
}

export default App;
