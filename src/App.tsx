import { useState } from "react";

import "./App.css";
import { SelectList } from "./components";
import Pagination from "./components/Pagination";

function App() {
  const [value, setValue] = useState<string>("");

  const handler = (page: number) => {
    console.log(page);
  };

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
        outlineWidth={1}
        searchable={true}
        outlineColor={"gray"}
        maxItemCount={10}
        handleSelect={setValue}
      />
      <br />
      <br />
      <br />
      <Pagination
        totalPages={15}
        currentPage={5}
        block={10}
        width={500}
        handleClick={handler}
        color={"gray"}
      />
    </div>
  );
}

export default App;
