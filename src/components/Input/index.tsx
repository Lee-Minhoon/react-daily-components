import { ContainerProps } from "../../types/props";
import * as Style from "./style";
import { useEffect, useRef, useState } from "react";

const labelLocations = {
  TopLeft: "TopLeft",
  TopCenter: "TopCenter",
  TopRight: "TopRight",
  BotLeft: "BotLeft",
  BotCenter: "BotCenter",
  BotRight: "BotRight",
  Left: "Left",
  Right: "Right",
} as const;
type LABEL_LOCATIONS = typeof labelLocations[keyof typeof labelLocations];

interface InputProps extends ContainerProps {
  value: string;
  handleChange: (value: string) => void;
  label?: string;
  labelLocation?: LABEL_LOCATIONS;
  gap?: number;
}

const Input = ({
  value,
  handleChange,
  label,
  labelLocation = "Left",
  gap = 5,
  width = 200,
  height = 30,
  fontSize = 16,
  textColor = "gray",
  borderRadius = 5,
  outlineWidth = 1,
  outlineColor = "gray",
}: InputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const labelFirstCondition =
    labelLocation === "Left" ||
    labelLocation === "TopLeft" ||
    labelLocation === "TopCenter" ||
    labelLocation === "TopRight";

  return (
    <Style.Container
      gap={gap}
      width={width}
      height={height}
      labelLocation={labelLocation}
    >
      {label && labelFirstCondition && (
        <Style.Label
          htmlFor="input"
          isFocus={isFocus}
          width={width}
          height={height}
          fontSize={fontSize}
          textColor={textColor}
        >
          {label}
        </Style.Label>
      )}
      <Style.InputContainer
        isFocus={isFocus}
        width={width}
        height={height}
        borderRadius={borderRadius}
        outlineWidth={outlineWidth}
        outlineColor={outlineColor}
      >
        <Style.Input
          id="input"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          fontSize={fontSize}
          textColor={textColor}
        />
      </Style.InputContainer>
      {label && !labelFirstCondition && (
        <Style.Label
          htmlFor="input"
          isFocus={isFocus}
          width={width}
          height={height}
          fontSize={fontSize}
          textColor={textColor}
        >
          {label}
        </Style.Label>
      )}
    </Style.Container>
  );
};

export default Input;
