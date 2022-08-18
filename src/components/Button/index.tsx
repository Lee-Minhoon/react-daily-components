import { forwardRef } from "react";
import uesDebounce from "../../hooks/useDebounce";
import useThrottle from "../../hooks/useThrottle";
import { ButtonDefaultProps, ContainerProps } from "../../types/props";
import * as Style from "./style";

export interface ButtonProps extends ContainerProps, ButtonDefaultProps {
  debounce?: number;
  throttle?: number;
}

const Button = forwardRef((props: ButtonProps, forwardedRef: any) => {
  const { debounce = 0, throttle = 0 } = props;
  const throttledFunction = useThrottle(props.onClick ?? (() => {}), throttle);
  const debouncedFunction = uesDebounce(throttledFunction, debounce);

  return (
    <Style.Button ref={forwardedRef} onClick={debouncedFunction} {...props} />
  );
});

export default Button;
