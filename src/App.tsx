import { useState } from "react";

import { DatePicker, Pagination, SelectList, TimePicker } from "./components";
import Input from "./components/Input";

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
        isSearchable
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
      <DatePicker handleSelect={handle} isWeekendColor isMondayFirst={false} />
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
        labelLocation={"TopRight"}
      />
    </div>
  );
}

export default App;
