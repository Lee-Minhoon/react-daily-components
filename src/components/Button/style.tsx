import styled from "@emotion/styled";
import { ContainerProps } from "../../types/props";
import {
  getOutline,
  getFontSize,
  getTextColor,
  getBorderRadius,
  getFullVirtualElement,
  getWidth,
  getHeight,
} from "./../../utilities/css";

export interface ButtonStyleProps extends ContainerProps {}

export const Button = styled.button<ButtonStyleProps>`
  position: relative;
  padding: 0 10px;

  width: ${(props) => getWidth(props)};
  height: ${(props) => getHeight(props)};
  font-size: ${(props) => getFontSize(props)};
  color: ${(props) => getTextColor(props)};

  &::after {
    ${getFullVirtualElement()}
    border-radius: ${(props) => getBorderRadius(props)};
    outline: ${(props) => getOutline(props)};
    opacity: 0.5;
  }
  &:hover {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
    &::after {
      opacity: 1;
    }
  }

  border: none;
  background-color: initial;
  cursor: pointer;
`;
