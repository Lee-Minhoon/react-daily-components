import { useTheme } from "@emotion/react";
import { forwardRef, MouseEvent, useCallback } from "react";
import uesDebounce from "../../../hooks/useDebounce";
import useThrottle from "../../../hooks/useThrottle";
import {
  AllAbbrProps,
  AllProperties,
  ButtonDefaultProps,
  ButtonForwardedRef,
} from "../../../types/props";
import * as Styled from "./style";
import { rippleEffect } from "../../../utilities/css";
import { getStyleProps } from "../../../utilities/props";

const VARIANTS = {
  text: Styled.TextButton,
  contained: Styled.ContainedButton,
  outlined: Styled.OutlinedButton,
} as const;
type Variants = keyof typeof VARIANTS;

export interface ButtonProps extends ButtonDefaultProps, AllAbbrProps {
  variant?: Variants;
  debounce?: number;
  throttle?: number;
}

/**
 * Button Component
 */
const Button = forwardRef(
  (props: ButtonProps & AllProperties, forwardedRef: ButtonForwardedRef) => {
    const theme = useTheme();
    const {
      onClick = () => {},
      variant = "contained",
      debounce = 0,
      throttle = 0,
    } = props;

    const throttledFunction = useThrottle(onClick, throttle);
    const debouncedFunction = uesDebounce(throttledFunction, debounce);

    const handleClick = useCallback(
      (event: MouseEvent<HTMLButtonElement>) => {
        rippleEffect(event, theme, variant !== "contained");
        debouncedFunction(event);
      },
      [onClick]
    );

    const Button = VARIANTS[variant];

    return (
      <Button
        {...props}
        ref={forwardedRef}
        onClick={handleClick}
        style={getStyleProps(props)}
      />
    );
  }
);

export default Button;
