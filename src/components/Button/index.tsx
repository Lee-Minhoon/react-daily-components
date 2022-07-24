import uesDebounce from "../../hooks/useDebounce";
import useThrottle from "../../hooks/useThrottle";
import { ButtonDefaultProps, ContainerProps } from "../../types/props";
import * as Style from "./style";

export interface ButtonProps extends ContainerProps, ButtonDefaultProps {
  debounce?: number;
  throttle?: number;
}

const Button = (props: ButtonProps) => {
  const {
    debounce = 0,
    throttle = 0,
    width,
    height = 30,
    fontSize,
    textColor,
    borderRadius,
    outlineWidth,
    outlineColor,
  } = props;
  const throttledFunction = useThrottle(props.onClick ?? (() => {}), throttle);
  const debouncedFunction = uesDebounce(throttledFunction, debounce);

  return (
    <Style.Button
      {...props}
      width={width}
      height={height}
      fontSize={fontSize}
      textColor={textColor}
      borderRadius={borderRadius}
      outlineWidth={outlineWidth}
      outlineColor={outlineColor}
      onClick={debouncedFunction}
    />
  );
};

export default Button;
