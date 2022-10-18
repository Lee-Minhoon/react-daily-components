import { css, ThemeProvider } from "@emotion/react";
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
import Text from "./components/display/Text";
import Heading from "./components/display/Heading";
import Option from "./components/inputs/Select/Option";

function App() {
  const [value, setValue] = useState<string>("");
  const [time, setTime] = useState<string>("16:00:00");
  const [date, setDate] = useState<string>("1-05-06");
  const [inputValue, setInputValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);

  const [page, setPage] = useState<number>(1);

  const handler = (page: number) => {
    console.log(page);
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  return (
    <ThemeProvider theme={{ primaryColor: "blue", outlineColor: "green" }}>
      <Flex
        width={"500px"}
        style={{ padding: "20px", background: "blue" }}
        fd={"column"}
        css={css`
          width: 600px;
        `}
      >
        <Select
          ref={ref}
          value={value}
          onChange={(e) => {
            console.log(e.target.value);
            setValue(e.target.value);
          }}
          showItemCount={5}
          searchable
        >
          <Option value="10">열</Option>
          <Option value="20">스무</Option>
          <Option value="30">서른</Option>
          <Option value="40">마흔</Option>
          <Option value="50">쉰</Option>
          <Option value="60">열</Option>
          <Option value="70">스무</Option>
          <Option value="80">서른</Option>
          <Option value="90">마흔</Option>
          <Option value="100">쉰</Option>
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
        <TimePicker
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
          showSeconds
        />
        <br />
        <br />
        <br />
        <DatePicker
          w={"300px"}
          value={date}
          onChange={(e) => {
            console.log(e.target.value);
            setDate(e.target.value);
          }}
        />
        <br />
        <br />
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
        <Flex>Hello World</Flex>
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

        <Button variant="contained" onClick={() => {}}>
          {"Button"}
        </Button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
