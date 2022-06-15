import { ContainerProps } from "../../types/props";
import * as Style from "./style";
import { useCallback, useState } from "react";

export const REGULAR_EXPRESSIONS = {
  number: /0-9/,
  alphabet: /a-zA-Z/,
  lowerCase: /a-z/,
  upperCase: /A-Z/,
} as const;
export type RegularExpressions = keyof typeof REGULAR_EXPRESSIONS;

export const LABEL_LOCATIONS = {
  topLeft: "topLeft",
  topCenter: "topCenter",
  topRight: "topRight",
  totLeft: "botLeft",
  botCenter: "botCenter",
  botRight: "botRight",
  left: "left",
  right: "right",
} as const;
export type LabelLocations =
  typeof LABEL_LOCATIONS[keyof typeof LABEL_LOCATIONS];

interface InputProps extends ContainerProps {
  value: string;
  handleChange: (value: string) => void;
  regularExpression?: Array<RegularExpressions>;
  label?: string;
  labelLocation?: LabelLocations;
  gap?: number;
}

const Input = ({
  value,
  handleChange,
  regularExpression,
  label,
  labelLocation = LABEL_LOCATIONS.left,
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
    labelLocation === "left" ||
    labelLocation === "topLeft" ||
    labelLocation === "topCenter" ||
    labelLocation === "topRight";

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let reg = "";
      if (regularExpression) {
        let arrayValues = regularExpression.map((item) => {
          return REGULAR_EXPRESSIONS[item].source.replace(
            /(?<=^[\s"']*)(\w+)/,
            "$1"
          );
        });

        console.log(arrayValues);

        e.currentTarget.value = e.currentTarget.value.replace(
          // REGULAR_EXPRESSIONS[regularExpression],
          arrayValues,
          ""
        );
      }
    },
    [regularExpression]
  );

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
          onInput={handleInput}
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
