import styled from "@emotion/styled";
import { ContainerProps } from "../../types/props";
import {
  getOutline,
  getOulineWidth,
  getFontSize,
  getTextColor,
  getBorderRadius,
  getFullVirtualElement,
  getWidth,
  getHeight,
  ellipsis,
} from "./../../utilities/css";

export interface TimePickerStyleProps extends ContainerProps {
  isOpen?: boolean;
  isSelected?: boolean;
  maxItemCount?: number;
}

export const Container = styled.div<TimePickerStyleProps>`
  width: ${(props) => getWidth(props)};
  position: relative;
  &::after {
    ${getFullVirtualElement()};
    height: ${({ isOpen, height = 30, maxItemCount = 8, outlineWidth = 1 }) =>
      isOpen ? `${(maxItemCount + 1) * height + outlineWidth}px` : "100%"};
    outline: ${(props) => (props.isOpen ? getOutline(props) : "initial")};
    border-radius: ${(props) => getBorderRadius(props)};
    opacity: 0.5;
    box-shadow: ${({ isOpen }) =>
      isOpen ? "0 0 6px rgba(0, 0, 0, 0.4)" : "initial"};
  }
`;

export const SelectWrapper = styled.div<TimePickerStyleProps>`
  display: flex;
  position: relative;
  align-items: center;
  height: ${(props) => getHeight(props)};
  &::after {
    ${getFullVirtualElement()}
    opacity: ${({ isOpen }) => (isOpen ? "initial" : 0.5)};
    outline: ${(props) => getOutline(props)};
    border-radius: ${(props) => getBorderRadius(props)};
    border-bottom-left-radius: ${({ isOpen, borderRadius }) =>
      isOpen ? "initial" : `${borderRadius}px`};
    border-bottom-right-radius: ${({ isOpen, borderRadius }) =>
      isOpen ? "initial" : `${borderRadius}px`};
  }
  padding: 0 10px;
`;

export const Input = styled.input<TimePickerStyleProps>`
  z-index: 1;
  flex: 1;
  min-width: 0;

  font-size: ${(props) => getFontSize(props)};
  color: ${(props) => getTextColor(props)};

  border: none;
  outline: none;
`;

export const ListContainer = styled.div<TimePickerStyleProps>`
  color: ${(props) => getTextColor(props)};
  max-height: ${({ height = 30, maxItemCount = 8 }) =>
    `${height * maxItemCount}px`};
  position: absolute;
  overflow: hidden;
  display: flex;
  background-color: white;
  width: 100%;
  margin-top: ${(props) => getOulineWidth(props)};
  font-size: ${(props) => getFontSize(props)};
  z-index: 2;
  border-bottom-left-radius: ${(props) => getBorderRadius(props)};
  border-bottom-right-radius: ${(props) => getBorderRadius(props)};
`;

export const List = styled.ul<TimePickerStyleProps>`
  padding: 0;
  margin: 0;
  flex: 1;
  overflow-y: auto;
  list-style-type: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.li<TimePickerStyleProps>`
  height: ${(props) => getHeight(props)};
  padding: 0 10px;
  line-height: ${(props) => getHeight(props)};
  overflow: hidden;
  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.1);
  }
  background-color: ${({ isSelected }) =>
    isSelected ? "rgba(0, 0, 0, 0.1)" : "initial"};
  box-shadow: ${({ isSelected }) =>
    isSelected ? "inset 0 0 4px rgba(0, 0, 0, 0.1)" : "initial"};
`;
