import { useState } from "react";

import "./App.css";
import { SelectList } from "./components";
import DatePicker from "./components/DatePicker";
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

  const handle = (item: any) => {
    console.log("hrere", item);
  };

  return (
    <div style={{ padding: "20px" }}>
      <SelectList
        itemList={[
          "Apple🍎",
          "Banana🍌",
          "Orange🍊",
          "Grape🍇",
          "Kiwi🥝",
          "Lemon🍋",
          "Strawberry🍓",
          "Watermelon🍉",
        ]}
        value={value}
        handleSelect={setValue}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Pagination
        totalPages={15}
        currentPage={1}
        block={10}
        width={500}
        handleClick={handler}
      />
      <br />
      <br />
      <br />
      <TimePicker handleSelect={handle} is24Hour={false} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <DatePicker handleSelect={handle} isWeekendColor isMondayFirst={true} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
