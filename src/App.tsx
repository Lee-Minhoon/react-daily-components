import { ThemeProvider } from "@emotion/react";
import { useCallback, useRef, useState } from "react";
import { DatePicker, Grid, Pagination, Select, TimePicker } from "./components";
import Button from "./components/inputs/Button";
import TextInput from "./components/inputs/TextInput";
import Modal from "./components/feedback/Modal";
import Flex from "./components/layout/Flex";
import View from "./components/display/View";
import Text from "./components/display/Text";
import Word from "./components/display/Word";

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
    <ThemeProvider theme={{ primaryColor: "blue", outlineColor: "green" }}>
      <div style={{ padding: "20px" }}>
        <Select
          itemList={[
            "Appledddddddddddddddddddddddd🍎",
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
          maxItemCount={5}
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
        <Grid
          w={"200px"}
          h={"200px"}
          gap={"10px"}
          gar={"1fr"}
          gtc={"repeat(3, 1fr)"}
        >
          <span>item 1</span>
          <span>item 2</span>
          <span>item 3</span>
          <span>item 4</span>
          <span>item 5</span>
          <span>item 6</span>
          <span>item 7</span>
          <span>item 8</span>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <TextInput
          value={inputValue}
          onChange={handleChange}
          regex={/[^0-9]/g}
          width={"7rem"}
          height={"50px"}
          label={"password"}
        />
        <br />
        <br />
        <br />
        <Text>df</Text>
        <Text>df</Text>
        <Word>df</Word>
        <Word>df</Word>
        <View w="20px" h="20px" bs="1px 1px 1px 1px black" margin="20px" />
        <Button onClick={() => {}}>{"Button"}</Button>
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </ThemeProvider>
  );
}

export default App;
