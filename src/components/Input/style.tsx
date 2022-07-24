import styled from "@emotion/styled";
import { LabelLocations, LABEL_LOCATIONS } from ".";
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

export interface InputStyleProps extends ContainerProps {
  isFocus?: boolean;
  labelLocation?: LabelLocations;
  gap?: number;
}

const getFlexDirection = (input: LabelLocations) => {
  return input === LABEL_LOCATIONS.left || input === LABEL_LOCATIONS.right
    ? "row"
    : "column";
};

const getAlignItems = (input: LabelLocations) => {
  const centerCondition =
    input === LABEL_LOCATIONS.left ||
    input === LABEL_LOCATIONS.right ||
    input === LABEL_LOCATIONS.topCenter ||
    input === LABEL_LOCATIONS.botCenter;
  const rightCondition =
    input === LABEL_LOCATIONS.topRight || input === LABEL_LOCATIONS.botRight;
  if (centerCondition) return "center";
  else if (rightCondition) return "flex-end";
  else return "initial";
};

export const Container = styled.div<InputStyleProps>`
  display: flex;
  flex-direction: ${({ labelLocation = LABEL_LOCATIONS.left }) =>
    getFlexDirection(labelLocation)};
  align-items: ${({ labelLocation = LABEL_LOCATIONS.left }) =>
    getAlignItems(labelLocation)};
  width: ${(props) => getWidth(props)};
  gap: ${({ gap }) => `${gap}px`};
`;

export const Label = styled.label<InputStyleProps>`
  font-size: ${(props) => getFontSize(props)};
  color: ${(props) => getTextColor(props)};

  opacity: ${({ isFocus }) => (isFocus ? "initial" : 0.5)};
`;

export const InputContainer = styled.div<InputStyleProps>`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 0;
  padding-inline-start: 10px;

  width: ${(props) => getWidth(props)};
  height: ${(props) => getHeight(props)};

  &::after {
    z-index: -1;
    ${getFullVirtualElement()}

    border-radius: ${(props) => getBorderRadius(props)};
    outline: ${(props) => getOutline(props)};
    opacity: ${({ isFocus }) => (isFocus ? "initial" : 0.5)};
    box-shadow: ${({ isFocus }) =>
      isFocus ? "0 0 6px rgba(0, 0, 0, 0.4)" : "initial"};
  }
`;

export const Input = styled.input<InputStyleProps>`
  flex: 1;
  min-width: 0;

  font-size: ${(props) => getFontSize(props)};
  color: ${(props) => getTextColor(props)};

  border: none;
  outline: none;
`;

export const Button = styled.button<InputStyleProps>`
  position: relative;
  padding: 0 10px;

  height: 100%;
  font-size: ${(props) => getFontSize(props)};
  color: ${(props) => getTextColor(props)};

  &::after {
    ${getFullVirtualElement()}
    border-left: ${(props) => getOutline(props)};
    opacity: ${({ isFocus }) => (isFocus ? "initial" : 0.5)};
  }

  border: none;
  background-color: initial;
  cursor: pointer;
`;
