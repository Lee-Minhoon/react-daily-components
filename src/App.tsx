import { ThemeProvider } from "@emotion/react";
import { useCallback, useRef, useState } from "react";
import {
  DatePicker,
  Flex,
  Grid,
  Pagination,
  Select,
  TimePicker,
} from "./components";
import Button from "./components/inputs/Button";
import TextField from "./components/inputs/TextField";
import Modal from "./components/feedback/Modal";
import View from "./components/display/View";
import Text from "./components/display/Text";
import Divider from "./components/layout/Divider";
import Heading from "./components/display/Heading";
import Option from "./components/inputs/Select/Option";

function App() {
  const [value, setValue] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);

  const [page, setPage] = useState<number>(1);

  const handler = (page: number) => {
    console.log(page);
  };

  const handle = (item: any) => {};

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  console.log(ref.current);

  return (
    <ThemeProvider theme={{ primaryColor: "blue", outlineColor: "green" }}>
      <Flex d="column" width={"500px"} style={{ padding: "20px" }}>
        <Select
          value={value}
          onChange={(e) => console.log(e.target.value)}
          showItemCount={5}
          isSearchable
        >
          <Option value="10">10</Option>
          <Option value="20">20</Option>
          <Option value="30">30</Option>
          <Option value="40">40</Option>
          <Option value="50">50</Option>
          <Option value="60">60</Option>
        </Select>
        <br />
        <br />
        <br />
        <br />
        <Heading level={1} color="red">
          hi
        </Heading>
        <Pagination
          totalPages={1000}
          currentPage={page}
          block={5}
          width={500}
          handleClick={(page) => setPage(page)}
        />
        <br />
        <br />
        <br />
        <TimePicker onChange={handle} is24Hour={false} />
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
        <Flex flex={""}></Flex>
        <br />
        <TextField
          width={"200px"}
          value={inputValue}
          regex={/[0-9]/g}
          onChange={handleChange}
          label={"password"}
          placeholder={"put the password"}
        />
        <br />
        <br />
        <br />
        <Text tag="p">df</Text>
        <Text tag="span">df</Text>
        <Divider direction="horizontal" borderWidth="1px" label="?" />

        <View w="20px" h="20px" bs="1px 1px 1px 1px black" margin="20px" />
        <Button variant="outlined" onClick={() => {}}>
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
      </Flex>
    </ThemeProvider>
  );
}

export default App;
