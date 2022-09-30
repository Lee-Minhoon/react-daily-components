import { Theme, useTheme } from "@emotion/react";
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
import { getPrimaryColor } from "../../../utilities/css";

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
        rippleEffect(event, theme, variant);
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

/**
 * Generate Ripple Effect at Button Click
 * @param event
 * @param theme
 * @param variant
 */
const rippleEffect = (
  event: MouseEvent<HTMLButtonElement>,
  theme: Theme,
  variant: Variants
) => {
  const button = event.currentTarget;

  // create container for circle
  const container = document.createElement("div");
  container.style.width = `${button.offsetWidth}px`;
  container.style.height = `${button.offsetHeight}px`;
  container.style.borderRadius = "inherit";
  container.classList.add("container");

  // create circle
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.top = `${event.nativeEvent.offsetY - radius}px`;
  circle.style.left = `${event.nativeEvent.offsetX - radius}px`;
  circle.style.backgroundColor =
    variant === "contained" ? "#fff" : getPrimaryColor(theme);
  circle.style.opacity = variant === "contained" ? "1" : "0.3";
  circle.classList.add("ripple");

  // remove container, if already exist ripple
  const ripple = button.getElementsByClassName("container")[0];
  if (ripple) {
    ripple.remove();
  }

  // append ripple to button inside
  container.appendChild(circle);
  button.appendChild(container);
};
