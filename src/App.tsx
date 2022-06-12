import { useState } from "react";

import { SelectList } from "./components";
import DatePicker from "./components/DatePicker";
import Input from "./components/Input";
import Pagination from "./components/Pagination";
import TimePicker from "./components/TimePicker";

function App() {
  const [value, setValue] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  const handler = (page: number) => {
    console.log(page);
  };

  const handle = (item: any) => {
    console.log("hrere", item);
  };

  const inputHandle = (item: string) => {
    setInputValue(item);
    console.log(item);
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
      <DatePicker handleSelect={handle} isWeekendColor isMondayFirst={true} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Input
        value={inputValue}
        handleChange={inputHandle}
        label={"Password"}
        labelLocation={"Left"}
      />
    </div>
  );
}

export default App;
