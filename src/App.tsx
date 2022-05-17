import { useState } from "react";

import "./App.css";
import { SelectList } from "./components";
import LoadingBar from "./components/LoadingBar";
import Pagination from "./components/Pagination";
import Word from "./components/Word";

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
        isSearchable={true}
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
      <br />
      <br />
      <br />
      <Word>{`Hello World!!!`}</Word>
      <Word>{`Hello World!!!`}</Word>
      <Word>{`Hello World!!!`}</Word>
      <LoadingBar
        backgroundColor="pink"
        spinnerBodyColor="gray"
        spinnerBarColor="blue"
        spinnerSize={60}
        spinnerBorderWidth={10}
        isBlockedBackground={false}
      />
    </div>
  );
}

export default App;
