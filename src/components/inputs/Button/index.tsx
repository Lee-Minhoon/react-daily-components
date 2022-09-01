import { useTheme } from "@emotion/react";
import { forwardRef, MouseEvent, useCallback } from "react";
import uesDebounce from "../../../hooks/useDebounce";
import useThrottle from "../../../hooks/useThrottle";
import {
  ButtonDefaultProps,
  SizePropsT,
  WhiteSpaceProps,
} from "../../../types/props";
import * as Style from "./style";

export const BUTTON_TYPES = {
  text: "text",
  contained: "contained",
  outlined: "outlined",
} as const;
export type ButtonTypes = keyof typeof BUTTON_TYPES;

export interface ButtonProps
  extends ButtonDefaultProps,
    SizePropsT,
    WhiteSpaceProps {
  variant?: ButtonTypes;
  debounce?: number;
  throttle?: number;
}

const Button = forwardRef((props: ButtonProps, forwardedRef: any) => {
  const theme = useTheme();
  const {
    onClick = () => {},
    variant = BUTTON_TYPES.contained,
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
        variant === BUTTON_TYPES.contained
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
    [rippleEffect, props.onClick]
  );

  const style: React.CSSProperties = {
    width: props.width ?? props.w,
    maxWidth: props.maxWidth ?? props.mw,
    height: props.height ?? props.h,
    maxHeight: props.maxHeight ?? props.mh,
    margin: props.margin ?? props.m,
    padding: props.padding ?? props.p,

    ...props.style,
  };

  const Button = GetButtonByType(variant);

  return (
    <Button {...props} ref={forwardedRef} onClick={handleClick} style={style} />
  );
});

export default Button;

const GetButtonByType = (type: ButtonTypes) => {
  let Button;
  switch (type) {
    case BUTTON_TYPES.text:
      Button = Style.TextButton;
      break;
    case BUTTON_TYPES.contained:
      Button = Style.ContainedButton;
      break;
    case BUTTON_TYPES.outlined:
      Button = Style.OutlinedButton;
  }
  return Button;
};
