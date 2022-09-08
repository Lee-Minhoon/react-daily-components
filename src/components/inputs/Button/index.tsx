import { useTheme } from "@emotion/react";
import { forwardRef, MouseEvent, useCallback } from "react";
import uesDebounce from "../../../hooks/useDebounce";
import useThrottle from "../../../hooks/useThrottle";
import {
  ButtonDefaultProps,
  ButtonForwardedRef,
  ElementProps,
} from "../../../types/props";
import { getSizeProps, getWhiteSpaceProps } from "../../../utilities/props";
import { TextButton, ContainedButton, OutlinedButton } from "./style";

const VARIANTS = {
  text: TextButton,
  contained: ContainedButton,
  outlined: OutlinedButton,
} as const;
type Variants = keyof typeof VARIANTS;

export interface ButtonProps extends ButtonDefaultProps, ElementProps {
  variant?: Variants;
  debounce?: number;
  throttle?: number;
}

const Button = forwardRef(
  (props: ButtonProps, forwardedRef: ButtonForwardedRef) => {
    const theme = useTheme();
    const {
      onClick = () => {},
      variant = VARIANTS.contained,
      debounce = 0,
      throttle = 0,
    } = props;

    const rippleEffect = useCallback(
      (event: MouseEvent<HTMLButtonElement>) => {
        const button = event.currentTarget;
        const container = document.createElement("div");
        container.style.width = `${button.offsetWidth}px`;
        container.style.height = `${button.offsetHeight}px`;
        container.style.borderRadius = "inherit";
        container.classList.add("container");
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.top = `${event.pageY - button.offsetTop - radius}px`;
        circle.style.left = `${event.pageX - button.offsetLeft - radius}px`;
        circle.style.backgroundColor =
          variant === VARIANTS.contained
            ? "#fff"
            : theme.primaryColor ?? "gray";
        circle.style.opacity = "1";
        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("container")[0];
        if (ripple) {
          ripple.remove();
        }

        container.appendChild(circle);
        button.appendChild(container);
      },
      [variant]
    );

    const throttledFunction = useThrottle(onClick, throttle);
    const debouncedFunction = uesDebounce(throttledFunction, debounce);

    const handleClick = useCallback(
      (event: MouseEvent<HTMLButtonElement>) => {
        rippleEffect(event);
        debouncedFunction(event);
      },
      [rippleEffect, onClick]
    );

    const style: React.CSSProperties = {
      ...getSizeProps(props),
      ...getWhiteSpaceProps(props),
      ...props.style,
    };

    const Button = VARIANTS[props.variant ?? "contained"];

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
