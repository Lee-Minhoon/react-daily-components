import { useState } from "react";

const useInput = (initialValue: any) => {
  const [value, setValue] = useState<any>(initialValue);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return { value, onChange, setValue };
};

export default useInput;
