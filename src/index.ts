export { Button } from "./components";
export { TextInput } from "./components";
export { Select } from "./components";
export { TimePicker } from "./components";
export { DatePicker } from "./components";
export { Pagination } from "./components";
export { LoadingBar } from "./components";
export { Modal } from "./components";

declare module "@emotion/react" {
  export interface Theme {
    primaryColor: string;
    defaultColor: string;
  }
}
