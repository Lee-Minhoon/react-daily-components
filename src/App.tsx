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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <LoadingBar />
    </div>
  );
}

export default App;
