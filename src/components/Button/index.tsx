import uesDebounce from "../../hooks/useDebounce";
import useThrottle from "../../hooks/useThrottle";
import { ContainerProps } from "../../types/props";
import * as Style from "./style";

interface ButtonProps extends ContainerProps {
  children: JSX.Element | string;
  handleClick: () => void;
  debounce?: number;
  throttle?: number;
  buttonStyle?: React.CSSProperties;
}

const Button = ({
  children,
  handleClick,
  debounce = 0,
  throttle = 0,
  width,
  height = 30,
  fontSize = 16,
  textColor = "gray",
  borderRadius = 5,
  outlineWidth = 1,
  outlineColor = "gray",
  buttonStyle,
}: ButtonProps) => {
  const debouncedFunction = uesDebounce(handleClick, debounce);
  const throttledFunction = useThrottle(debouncedFunction, throttle);

  return (
    <Style.Button
      width={width}
      height={height}
      fontSize={fontSize}
      textColor={textColor}
      borderRadius={borderRadius}
      outlineWidth={outlineWidth}
      outlineColor={outlineColor}
      onClick={throttledFunction}
      style={buttonStyle}
    >
      {children}
    </Style.Button>
  );
};

export default Button;
