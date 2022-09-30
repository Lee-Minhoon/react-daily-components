import styled from "@emotion/styled";
import { getColorByStatus, getPrimaryColor } from "../../../utilities/css";
import { INSET_SHADOW } from "../../../constants/css";
import { forwardRef, useCallback } from "react";
import { useTheme } from "@emotion/react";

export interface ItemBaseStyleProps {
  active: boolean;
}

export const ItemBase = styled.li<ItemBaseStyleProps>`
  position: relative;
  cursor: pointer;
  &:hover {
  }
  color: ${(props) => getColorByStatus(props)};
  height: 35px;
  line-height: 35px;
  padding: 0 10px;
`;

export const ItemClickBase = forwardRef(
  (props: ItemBaseStyleProps, forwardedRef: any) => {
    const theme = useTheme();
    const handleClick = useCallback((event: any) => {
      rippleEffect(event, theme, "a");
      // props.onClick();
    }, []);

    return <ItemBase {...props} ref={forwardedRef} onClick={handleClick} />;
  }
);

export default ItemClickBase;

/**
 * Generate Ripple Effect at Button Click
 * @param event
 * @param theme
 * @param variant
 */
const rippleEffect = (
  event: React.MouseEvent<HTMLLIElement>,
  theme: any,
  variant: any
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
