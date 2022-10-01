import { useTheme } from "@emotion/react";
import { MouseEvent } from "react";
import { getPrimaryColor } from "../utilities/css";

/**
 * Generate Ripple Effect at Button Click
 * @param event
 * @param primary
 */
export const useRippleEffect = (
  event: MouseEvent<HTMLElement>,
  primary: boolean
) => {
  const theme = useTheme();
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
  circle.style.backgroundColor = primary ? getPrimaryColor(theme) : "#fff";
  circle.style.opacity = primary ? "0.3" : "1";
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
