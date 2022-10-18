import { MouseEvent } from "react";
import { Theme } from "@emotion/react";

export const getColorByStatus = (active: boolean, theme: Theme) => {
  return active ? getPrimaryColor(theme) : getDefaultColor(theme);
};

export const getPrimaryColor = (theme: Theme) => {
  return theme?.primaryColor ?? "gray";
};

export const getDefaultColor = (theme: Theme) => {
  return theme?.defaultColor ?? "gray";
};

/**
 * Generate Ripple Effect at Button Click
 * @param event
 * @param theme
 * @param primary
 */
export const rippleEffect = (
  event: MouseEvent<HTMLElement>,
  theme: Theme,
  primary: boolean
) => {
  const button = event.currentTarget;

  // create container for circle
  const container = document.createElement("div");
  container.style.width = `${button.offsetWidth}px`;
  container.style.height = `${button.offsetHeight}px`;
  container.style.borderRadius = "inherit";
  container.classList.add("container");

  console.log(event.nativeEvent.offsetY);
  console.log(event.nativeEvent.offsetX);
  console.log(event);

  // create circle
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.top = `${event.nativeEvent.offsetY - radius}px`;
  circle.style.left = `${event.nativeEvent.offsetX - radius}px`;
  circle.style.backgroundColor = primary
    ? getPrimaryColor(theme)
    : "rgba(255, 255, 255, 0.5)";
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
