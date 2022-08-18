import { ContainerProps, InputDefaultProps } from "../../types/props";
import * as Style from "./style";
import { useCallback, useState } from "react";
import { isArray, isRegExp } from "lodash";
import uesDebounce from "../../hooks/useDebounce";
import useThrottle from "../../hooks/useThrottle";

export const REGULAR_EXPRESSIONS = {
  korean: "ㄱ-ㅎ가-힣",
  number: "0-9",
  letter: "a-zA-Z",
  lowerCase: "a-z",
  upperCase: "A-Z",
  blank: " ",
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
  regex?: Array<RegularExpressions> | RegExp;
  label?: string;
  labelLocation?: LabelLocations;
  gap?: number;
  buttonText?: string;
  handleClick?: (value: string) => void;
  debounce?: number;
  throttle?: number;
  containerStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
}

const Input = (props: InputProps & InputDefaultProps) => {
  const {
    value,
    regex,
    label,
    labelLocation = LABEL_LOCATIONS.left,
    gap = 5,
    buttonText = "Submit",
    handleClick,
    debounce = 0,
    throttle = 0,
    width = 200,
    height = 30,
    fontSize,
    textColor,
    borderRadius,
    outlineWidth,
    outlineColor,
    containerStyle,
    labelStyle,
  } = props;
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const labelFirstCondition =
    labelLocation === "left" ||
    labelLocation === "topLeft" ||
    labelLocation === "topCenter" ||
    labelLocation === "topRight";

  let regexp: RegExp;
  if (isArray(regex)) {
    let regString = "[^";
    regex.map((item) => {
      regString += REGULAR_EXPRESSIONS[item];
    });
    regString += "]";
    regexp = new RegExp(regString);
  }
  if (isRegExp(regex)) {
    regexp = regex;
  }

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.currentTarget.value = e.currentTarget.value.replace(regexp, "");
    },
    [regex]
  );

  const throttledFunction = useThrottle(
    handleClick ? () => handleClick(value) : () => {},
    throttle
  );
  const debouncedFunction = uesDebounce(throttledFunction, debounce);

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
          style={labelStyle}
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
        style={containerStyle}
      >
        <Style.Input
          {...props}
          id="input"
          value={value}
          onInput={handleInput}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          fontSize={fontSize}
          textColor={textColor}
        />
        {handleClick && (
          <Style.Button
            isFocus={isFocus}
            fontSize={fontSize}
            textColor={textColor}
            onClick={debouncedFunction}
            outlineWidth={outlineWidth}
            outlineColor={outlineColor}
          >
            {buttonText}
          </Style.Button>
        )}
      </Style.InputContainer>
      {label && !labelFirstCondition && (
        <Style.Label
          htmlFor="input"
          isFocus={isFocus}
          width={width}
          height={height}
          fontSize={fontSize}
          textColor={textColor}
          style={labelStyle}
        >
          {label}
        </Style.Label>
      )}
    </Style.Container>
  );
};

export default Input;
