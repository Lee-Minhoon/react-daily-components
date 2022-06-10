import { useState } from "react";

import "./App.css";
import { SelectList } from "./components";
import DatePicker from "./components/DatePicker";
import Pagination from "./components/Pagination";
import TimePicker from "./components/TimePicker";
import Word from "./components/Word";
import { Time } from "./types/time";

function App() {
  const [value, setValue] = useState<string>("");

  const handler = (page: number) => {
    console.log(page);
  };

  const handle = (item: any) => {
    console.log("hrere", item);
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
      <TimePicker handleSelect={handle} is24Hour={false} isSelectSeconds />
      <br />
      <br />
      <Word>{`Hello World!!!`}</Word>
      <Word>{`Hello World!!!`}</Word>
      <Word>{`Hello World!!!`}</Word>
      <DatePicker handleSelect={handle} isWeekendColor isMondayFirst={true} />
    </div>
  );
}

export default App;
