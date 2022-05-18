import { useState } from "react";

import "./App.css";
import { SelectList } from "./components";
import LoadingBar from "./components/LoadingBar";
import Pagination from "./components/Pagination";
import TimePicker from "./components/TimePicker";
import Word from "./components/Word";
import { Time } from "./types/time";

function App() {
  const [value, setValue] = useState<string>("");

  const handler = (page: number) => {
    console.log(page);
  };

  console.log(Time.hourPassed(23));
  console.log(Time.minPassed(1379));
  console.log(Time.secondsPassed(86400));

  const handle = (item: any) => {
    console.log(item);
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
      <TimePicker
        value={value}
        outlineWidth={1}
        outlineColor={"gray"}
        handleSelect={handle}
        is24Hour={true}
      />
      <br />
      <br />
      <br />
      <Word>{`Hello World!!!`}</Word>
      <Word>{`Hello World!!!`}</Word>
      <Word>{`Hello World!!!`}</Word>
    </div>
  );
}

export default App;
