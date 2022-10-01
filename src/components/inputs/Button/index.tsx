import { useTheme } from "@emotion/react";
import { forwardRef, MouseEvent, useCallback } from "react";
import uesDebounce from "../../../hooks/useDebounce";
import useThrottle from "../../../hooks/useThrottle";
import {
  ButtonDefaultProps,
  ButtonForwardedRef,
  ElementProps,
} from "../../../types/props";
import { getElementProps } from "../../../utilities/props";
import * as Styled from "./style";
import { rippleEffect } from "../../../utilities/css";

const VARIANTS = {
  text: Styled.TextButton,
  contained: Styled.ContainedButton,
  outlined: Styled.OutlinedButton,
} as const;
type Variants = keyof typeof VARIANTS;

export interface ButtonProps extends ButtonDefaultProps, ElementProps {
  variant?: Variants;
  debounce?: number;
  throttle?: number;
}

/**
 * Button Component
 */
const Button = forwardRef(
  (props: ButtonProps, forwardedRef: ButtonForwardedRef) => {
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

    const style: React.CSSProperties = {
      ...getElementProps(props),
      ...props.style,
    };

    const Button = VARIANTS[variant];

    return (
      <Button
        {...props}
        ref={forwardedRef}
        onClick={handleClick}
        style={style}
      />
    );
  }
);

export default Button;
