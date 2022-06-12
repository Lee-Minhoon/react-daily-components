import { ContainerProps } from "../../types/props";
import * as Style from "./style";
import { useState } from "react";

interface InputProps extends ContainerProps {
  value: string;
  handleChange: (value: string) => void;
}

const Input = ({
  value,
  handleChange,
  width = 200,
  height = 30,
  fontSize = 16,
  textColor = "gray",
  borderRadius = 5,
  outlineWidth = 1,
  outlineColor = "gray",
}: InputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <Style.Container
      isFocus={isFocus}
      width={width}
      height={height}
      borderRadius={borderRadius}
      outlineWidth={outlineWidth}
      outlineColor={outlineColor}
    >
      <Style.Input
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </Style.Container>
  );
};

export default Input;
