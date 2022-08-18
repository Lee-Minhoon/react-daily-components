import { ThemeProvider } from "@emotion/react";
import { useCallback, useRef, useState } from "react";
import { DatePicker, Pagination, SelectList, TimePicker } from "./components";
import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";

function App() {
  const [value, setValue] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);

  const handler = (page: number) => {
    console.log(page);
  };

  const handle = (item: any) => {
    console.log("hrere", item);
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  console.log(ref);

  return (
    <ThemeProvider theme={{ outlineColor: "green" }}>
      <div style={{ padding: "20px" }}>
        <SelectList
          itemList={[
            "Appleddddddddddddddddddddddd🍎",
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
        <DatePicker
          handleSelect={handle}
          isWeekendColor
          isMondayFirst={false}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Input
          value={inputValue}
          onChange={handleChange}
          handleClick={(e) => console.log(e)}
          buttonText={"제출"}
          throttle={3000}
          label={"Password"}
          labelLocation={"botLeft"}
          regex={["number", "korean", "blank"]}
        />
        <br />
        <br />
        <br />
        <Button
          ref={ref}
          onClick={() => setIsOpen(true)}
          debounce={2000}
          throttle={1000}
        >
          {"Button"}
        </Button>
        {isOpen && (
          <Modal
            title={"Auguries of Innocence"}
            handleCancelClick={() => setIsOpen(false)}
            handleConfirmClick={() => setIsOpen(false)}
          >
            {`To see a World in a Grain of Sand
          And a Heaven in a Wild Flower,
          Hold Infinity in the palm of your hand
          And Eternity in an hour...`}
          </Modal>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
